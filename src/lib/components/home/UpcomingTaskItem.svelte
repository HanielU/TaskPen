<script lang="ts">
  import CommentIcon from "$lib/components/icons/CommentIcon.svelte";
  import LinkIcon from "$lib/components/icons/LinkIcon.svelte";
</script>

<!-- Upcoming Item -->
<div class="rounded-xl border border-solid border-gray-300 bg-white p-7 not-last:mb-5">
  <!-- header -->
  <div class="mb-4 inline-block rounded-3xl bg-purple/10 px-4 py-2 text-sm font-bold text-purple">
    User Interface
  </div>

  <h1 class="mb-4 text-fill-muted">Service Page Website</h1>

  <p class="text-gray-500">
    Make a page display about services for websites company with blue and red colors
  </p>

  <div class="my-4">0/20</div>

  <!-- bottom -->
  <div
    class="flex items-center justify-between rounded-3xl border border-solid border-gray-300 p-5 text-sm font-medium text-gray-600"
  >
    <div class="flex flex-1 items-center">
      <!-- Icon Wrapper -->
      <div class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs">
        <LinkIcon class="fill-white" />
      </div>
      <p>4 Attachment</p>
    </div>

    <div class="flex flex-1 items-center">
      <!-- Icon wrapper -->
      <div class="mr-2 flex h-6 w-6 items-center justify-center">
        <CommentIcon class="fill-gray-600 text-2xl" />
      </div>
      <p>10 Comment</p>
    </div>
  </div>
</div>
