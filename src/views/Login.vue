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
              <BreadcrumbLink href="#">Log In</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <LoginForm />
    </SidebarInset>
  </SidebarProvider>
</template>

<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import LoginForm from "../components/LoginForm.vue";
</script>
