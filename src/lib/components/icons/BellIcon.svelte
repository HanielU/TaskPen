<script lang="ts">
  import classNames from "classnames";
  let solid = false;
  let className = "";
  export { className as class, solid };
</script>

{#if solid}
  <svg
    class={classNames(className)}
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    id="Filled"
    viewBox="0 0 24 24"
    ><path d="M7.424,21a4.99,4.99,0,0,0,9.152,0Z" /><path
      d="M22.392,12.549,20.656,6.826A9.321,9.321,0,0,0,2.58,7.28L1.232,12.817A5,5,0,0,0,6.09,19H17.607a5,5,0,0,0,4.785-6.451Z"
    /></svg
  >
{:else}
  <svg
    class={classNames(className)}
    width="1em"
    height="1em"
    id="Outline"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    ><title>126 bell</title><path
      d="M22.555,13.662l-1.9-6.836A9.321,9.321,0,0,0,2.576,7.3L1.105,13.915A5,5,0,0,0,5.986,20H7.1a5,5,0,0,0,9.8,0h.838a5,5,0,0,0,4.818-6.338ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm8.126-5.185A2.977,2.977,0,0,1,17.737,18H5.986a3,3,0,0,1-2.928-3.651l1.47-6.616a7.321,7.321,0,0,1,14.2-.372l1.9,6.836A2.977,2.977,0,0,1,20.126,16.815Z"
    /></svg
  >
{/if}
