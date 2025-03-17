<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
</script>

<template>
  <SidebarProvider>
    <Sidebar />
    <SidebarInset class="bg-muted">
      <SidebarTrigger class="m-2" />
      <slot />
    </SidebarInset>
  </SidebarProvider>
</template>
