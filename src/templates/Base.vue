<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
const props = defineProps<{
  pageName: string;
}>();
</script>

<template>
  <SidebarProvider>
    <Sidebar />
    <SidebarInset>
      <header
        class="flex h-[3.5rem] shrink-0 items-center gap-2 border-b px-4 font-light text-[15px]"
      >
        <SidebarTrigger class="-ml-1" />
        <Separator orientation="vertical" class="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem class="hidden md:block">
              <BreadcrumbLink>{{ pageName }}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <slot />
    </SidebarInset>
  </SidebarProvider>
</template>
