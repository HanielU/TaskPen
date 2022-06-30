<script lang="ts">
  import PlusIcon from "$lib/components/icons/PlusIcon.svelte";
</script>

<!-- Workspace Section -->
<section class="border-x-0 border-y-2 border-solid border-y-gray-100 bg-white px-5 py-7">
  <h2 class="mb-2.5 text-2xl font-normal text-gray-500">Workspace</h2>
  <h1 class="mb-2.5 text-4xl font-normal">Cricket App</h1>
  <div class="mb-6 text-sm text-gray-500">
    Created: <span class="font-semibold">20 May 2022</span>
  </div>

  <button
    class="flex w-full items-center justify-center rounded-3xl bg-blue-light p-4 text-base text-white"
  >
    <PlusIcon class="mr-3 fill-white" /> New Task
  </button>
</section>
