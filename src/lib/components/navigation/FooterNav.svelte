<script lang="ts">
  import { page } from "$app/stores";
  import classNames from "classnames";
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import BellIcon from "../icons/BellIcon.svelte";
  import CalendarIcon from "../icons/CalendarIcon.svelte";
  import CheckboxIcon from "../icons/CheckboxIcon.svelte";
  import HomeIcon from "../icons/HomeIcon.svelte";
  import UserIcon from "../icons/UserIcon.svelte";
  import Link from "./Link.svelte";

  const footerHeight = getContext<Writable<number>>("footer-height");

  const links = [
    { path: "/", icon: HomeIcon },
    { path: "/calendar", icon: CalendarIcon },
    { path: "/todo", icon: CheckboxIcon },
    { path: "/notifications", icon: BellIcon },
    { path: "/profile", icon: UserIcon }
  ];

  // set to true to show borders on link and footer
  const showBorders = false;
</script>

<footer
  class={classNames("fixed z-50 bg-white shadow-2xl bottom-0 left-0 w-full", {
    "border border-solid": showBorders
  })}
  bind:clientHeight={$footerHeight}
>
  <nav class="h-full w-full">
    <ul class="flex w-full items-center justify-evenly gap-3">
      {#each links as { path, icon }}
        {@const current =
          path !== "/" ? $page.url.pathname.startsWith(path) : path === $page.url.pathname}
        <li>
          <Link
            to={path}
            class={classNames("px-2 flex py-8", { "border border-solid": showBorders })}
          >
            <svelte:component
              this={icon}
              solid={current}
              class={classNames("text-2xl", {
                "fill-blue-darkest": current,
                "fill-muted": !current
              })}
            />
          </Link>
        </li>
      {/each}
    </ul>
  </nav>
</footer>
