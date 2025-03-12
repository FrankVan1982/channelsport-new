<script setup lang="ts">
import RegisterForm from "@/components/RegisterForm.vue";
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center gap-6 bg-sky-150 p-6 md:p-10"
  >
    <div class="flex w-full max-w-sm flex-col gap-6">
      <a href="#" class="flex items-center gap-2 self-center font-medium">
        <div
          class="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground"
        >
          <span class="icon-[solar--posts-carousel-vertical-bold-duotone] size-4" />
        </div>
        CHANNELSport
      </a>
      <RegisterForm />
    </div>
  </div>
</template>
