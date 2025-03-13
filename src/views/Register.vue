<template>
  <SidebarProvider>
    <Sidebar />
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger class="-ml-1" />
        <Separator orientation="vertical" class="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem class="hidden md:block">
              <BreadcrumbLink href="#">Register</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <RegisterForm />
    </SidebarInset>
  </SidebarProvider>
</template>

<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import RegisterForm from "@/components/RegisterForm.vue";
</script>
