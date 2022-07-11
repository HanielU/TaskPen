import { writable } from "svelte/store";

export const navigationStack = writable<string[]>([]);
