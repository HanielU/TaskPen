<script lang="ts">
  import { goto, prefetch } from "$app/navigation";
  import { navigationStack } from "$lib/utils";

  let className = "";
  let to = "";
  export { className as class, to };

  function handleClick() {
    goto(to);
    $navigationStack = [...$navigationStack, to];
  }
</script>

<div class={className} on:touchstart={() => prefetch(to)} on:click={handleClick}>
  <slot />
</div>
