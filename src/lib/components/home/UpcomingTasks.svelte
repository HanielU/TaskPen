<script lang="ts">
  import MenuDotsIcon from "$lib/components/icons/MenuDotsIcon.svelte";
  import UpcomingTaskItem from "./UpcomingTaskItem.svelte";
</script>

<!-- Upcoming section -->
<section class="px-5 py-7">
  <!-- header -->
  <div class="mb-5 flex items-center justify-between">
    <div class="flex items-center text-sm">
      <span class="mr-2 block font-bold uppercase tracking-widest text-gray-500">Upcoming</span>
      <span
        class="flex h-8 w-8 items-center justify-center rounded-full bg-yellow p-2 font-bold text-white"
        >3</span
      >
    </div>

    <!-- Icon Wrapper -->
    <div class="flex rounded-lg border border-solid border-gray-200 bg-white p-2.5">
      <MenuDotsIcon />
    </div>
  </div>

  <UpcomingTaskItem />
  <UpcomingTaskItem />
  <UpcomingTaskItem />
</section>
