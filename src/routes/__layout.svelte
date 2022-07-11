<script lang="ts">
  import "../app.css";
  import FooterNav from "$lib/components/navigation/FooterNav.svelte";
  import { App } from "@capacitor/app";
  import { Device } from "@capacitor/device";
  import { Style } from "@capacitor/status-bar";
  import { navigationStack } from "$lib/utils";
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";

  const footerHeight = writable(undefined);

  setContext("footer-height", footerHeight);

  onMount(async () => {
    const { platform } = await Device.getInfo();

    if (platform == "android") {
      const StatusBar = (await import("@capacitor/status-bar")).StatusBar; // this thing only works on android | ios
      StatusBar.setBackgroundColor({ color: "#ffffff" });
      StatusBar.setStyle({ style: Style.Light });

      App.addListener("backButton", () => {
        if ($navigationStack.length > 0) {
          $navigationStack.length--; // removes the last item from the stack
          window.history.back();
          return;
        }

        App.exitApp();
      });
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
