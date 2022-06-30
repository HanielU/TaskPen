<script lang="ts">
  import "../app.css";
  import FooterNav from "$lib/components/navigation/FooterNav.svelte";
  import { Device } from "@capacitor/device";
  import { Style, type StatusBarPlugin } from "@capacitor/status-bar";
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";

  let StatusBar: StatusBarPlugin;
  const footerHeight = writable(undefined);

  setContext("footer-height", footerHeight);

  onMount(async () => {
    const { platform } = await Device.getInfo();

    if (platform == "android") {
      StatusBar = (await import("@capacitor/status-bar")).StatusBar; // this thing only works on android | ios
      StatusBar.setBackgroundColor({ color: "#ffffff" });
      StatusBar.setStyle({ style: Style.Light });
    }
  });
</script>

<div
  class="relative h-full w-full overflow-y-auto bg-fill-base font-primary"
  style:padding-bottom="{$footerHeight}px"
>
  <slot />

  <FooterNav />
</div>
