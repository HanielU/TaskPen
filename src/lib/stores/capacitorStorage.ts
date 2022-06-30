import type { Updater } from "svelte/store";
import type { WritableCapacitorStorage } from "../types";
import { Storage } from "@capacitor/storage";
import { browser } from "$app/env";
import { writable } from "svelte/store";

const client = browser;

export function capacitorStorageStore<T>(key: string, initial: T): WritableCapacitorStorage<T> {
  const {
    set: setStore,
    update: updateStore,
    subscribe
  } = writable(initial, () => {
    if (!client) return;
    getAndSetFromCapacitorStorage();
    return () => 0;
  });

  /** Set both the LocalStorage and this Svelte store */
  const setSync = (value: T) => {
    setStore(value);
    Storage.set({ key, value: JSON.stringify(value) });
  };

  /** update both the capacitor storage and the svelte store */
  const updateSync = (value: Updater<T>) => {
    updateStore(value);
    subscribe(async current => {
      client && (await Storage.set({ key, value: JSON.stringify(current) }));
    })();
  };

  const getAndSetFromCapacitorStorage = async () => {
    const { value: localValue } = await Storage.get({ key });

    if (localValue === null) setSync(initial);
    else {
      try {
        setStore(JSON.parse(localValue));
      } catch {
        setSync(initial);
      }
    }
  };

  return { subscribe, set: setSync, update: updateSync };
}
