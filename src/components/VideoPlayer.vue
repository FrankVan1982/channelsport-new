<template>
  <div ref="videoContainer" class="mx-auto  max-w-screen amsterdam-acid-blue">
    <video id="video, amsterdam-acid-blue" ref="videoPlayer" width="640" height="480" autoplay="false"
      :poster="posterUrl"></video>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue';
import shaka from 'shaka-player/dist/shaka-player.ui.debug';
import 'shaka-player/dist/controls.css';
import '@/assets/amsterdam-acid-blue.js';
import '@/assets/amsterdam-acid-blue.css';

const props = defineProps<{
  manifestUrl: string,
  clearKeys?: Record<string, string>,
  posterUrl?: string
}>();

const videoPlayer = ref<HTMLVideoElement | null>(null);
const videoContainer = ref();

onMounted(() => {
  const player = new shaka.Player(videoPlayer.value);
  const ui = new shaka.ui.Overlay(player, videoContainer.value, videoPlayer.value);
  ui.getControls();

  console.log(Object.keys(shaka.ui));

  if (props.clearKeys && Object.keys(props.clearKeys).length > 0) {
    player.configure({
      drm: {
        clearKeys: props.clearKeys
      }
    });
  }

  player
    .load(props.manifestUrl)
    .then(() => {
      // This runs if the asynchronous load is successful.
      console.log('The video has now been loaded!');
    })
    .catch(onError); // onError is executed if the asynchronous load fails.

  onUnmounted(() => {
    player.unload();
    player.destroy();
  });
});


function onError(error) {
  console.error('Error code', error.code, 'object', error);
};
</script>
