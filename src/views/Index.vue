<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
</script>

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
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <br />
      <div class="flex justify-center items-center">
        <Button as-child variant="outline" class="svg-button">
          <a href="https://sky.com" class="h-[5.2rem]">
            <img src="/images/sky/sky-color.svg" alt="Sky.com" class="svg h-[4rem]" />
          </a>
        </Button>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
