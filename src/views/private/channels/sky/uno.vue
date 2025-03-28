<script setup lang="ts">
import VideoPlayer from "@/components/VideoPlayer.vue";
</script>

<template>
  <VideoPlayer
    manifestUrl="https://linear301-it-dash1-prd.selector.skycdn.it/016a/31023/FHD/skysportuno/master_stereo.mpd"
    :clearkeys="{ '0036aaa1d68c6b487e29a5cb080a8a28': 'a3e8db3ff3c876f7b43a961b64a63474' }" />
</template>
