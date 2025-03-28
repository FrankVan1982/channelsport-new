<script setup lang="ts">
import Base from "@/templates/Base.vue";
import { Button } from '@/components/ui/button'
</script>

<template>
  <Base>
  <br>
  <div class="flex justify-center items-center">
    <div class="text-center">
      <h1 class="text-9xl font-bold">404</h1>
      <br>
      <p class="text-4xl">Page not found</p>
      <br>
      <Button as-child class="btn-margin group">
        <RouterLink to="/">
          <span class="icon-[solar--home-bold-duotone]"></span>
          <span class="text-lg font-normal">Go back to home</span>
        </RouterLink>
      </Button>
    </div>
  </div>
  </Base>
</template>
