<script lang="ts">
  import UpcomingTasks from "$lib/components/home/UpcomingTasks.svelte";
  import Workspace from "$lib/components/home/Workspace.svelte";
  import SearchIcon from "$lib/components/icons/SearchIcon.svelte";
</script>

<!-- header -->
<section class="flex w-full items-center justify-between bg-white px-5 py-7">
  <div class="w-full basis-5/6">
    <h4 class="text-2xl text-fill-base">Hi, Haniel</h4>
    <p class="text-sm font-light text-fill-muted">Are you ready to get back to work?</p>
  </div>

  <!-- Icon Wrapper -->
  <div
    class="border-muted flex h-14 w-14 items-center justify-center rounded-full border border-solid border-gray-200 text-xl"
  >
    <SearchIcon class="fill-muted" />
  </div>
</section>

<Workspace />

<UpcomingTasks />
