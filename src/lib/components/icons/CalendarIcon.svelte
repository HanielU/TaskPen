<script lang="ts">
  import classNames from "classnames";
  let solid = false;
  let className = "";
  export { className as class, solid };
</script>

{#if solid}
  <svg
    class={classNames(className)}
    xmlns="http://www.w3.org/2000/svg"
    id="Filled"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ><path
      d="M0,19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V10H0Zm17-4.5A1.5,1.5,0,1,1,15.5,16,1.5,1.5,0,0,1,17,14.5Zm-5,0A1.5,1.5,0,1,1,10.5,16,1.5,1.5,0,0,1,12,14.5Zm-5,0A1.5,1.5,0,1,1,5.5,16,1.5,1.5,0,0,1,7,14.5Z"
    /><path
      d="M19,2H18V1a1,1,0,0,0-2,0V2H8V1A1,1,0,0,0,6,1V2H5A5.006,5.006,0,0,0,0,7V8H24V7A5.006,5.006,0,0,0,19,2Z"
    /></svg
  >
{:else}
  <svg
    class={classNames(className)}
    id="Outline"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ><title>130 calendar</title><path
      d="M19,2H18V1a1,1,0,0,0-2,0V2H8V1A1,1,0,0,0,6,1V2H5A5.006,5.006,0,0,0,0,7V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V7A5.006,5.006,0,0,0,19,2ZM2,7A3,3,0,0,1,5,4H19a3,3,0,0,1,3,3V8H2ZM19,22H5a3,3,0,0,1-3-3V10H22v9A3,3,0,0,1,19,22Z"
    /><circle cx="12" cy="15" r="1.5" /><circle cx="7" cy="15" r="1.5" /><circle
      cx="17"
      cy="15"
      r="1.5"
    /></svg
  >
{/if}
