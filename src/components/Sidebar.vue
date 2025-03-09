<script setup lang="ts">
import { ref } from "vue";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import { useColorMode } from "@vueuse/core";

const mode = useColorMode({
  disableTransition: false,
});

const items = ref([
  {
    title: "Home",
    url: "/",
    icon: "icon-[solar--home-bold-duotone]",
  },
  {
    title: "About us",
    url: "#",
    icon: "icon-[solar--question-circle-bold-duotone]",
  },
]);

const toggleThemes = ref([
  {
    title: "Select theme",
    class:
      "dark:icon-[solar--sun-2-line-duotone] relative icon-[solar--moon-bold-duotone] transition-all",
  },
]);

const btnlogins = ref([
  {
    title: "Log In",
    url: "/Login",
    icon: "icon-[solar--login-2-bold-duotone]",
  },
]);
</script>

<template>
  <Sidebar collapsible="offcanvas" variant="inset">
    <SidebarHeader
      ><img src="/images/channelsport.png" class="h-[3.5rem] w-[6.5rem]"
    /></SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild>
                <a :href="item.url" class="flex items-center space-x-2">
                  <span :class="item.icon"></span>
                  <span>{{ item.title }}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger as-child v-for="toggleTheme in toggleThemes">
                  <SidebarMenuButton asChild>
                    <div class="flex items-center space-x-2 font-normal">
                      <span :class="toggleTheme.class" />
                      <span>{{ toggleTheme.title }}</span>
                    </div>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem @click="mode = 'light'">
                    <SidebarMenuButton class="w-full font-normal">Sun</SidebarMenuButton>
                  </DropdownMenuItem>

                  <DropdownMenuItem @click="mode = 'dark'"
                    ><SidebarMenuButton class="w-full font-normal"
                      >Moon</SidebarMenuButton
                    ></DropdownMenuItem
                  >

                  <DropdownMenuItem @click="mode = 'auto'"
                    ><SidebarMenuButton class="w-full font-normal"
                      >System</SidebarMenuButton
                    ></DropdownMenuItem
                  >
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <Button class="w-full" asChild v-for="btnlogin in btnlogins">
          <RouterLink
            :to="btnlogin.url"
            class="flex items-center justify-start bg-[#ffffff] hover:bg-[#1ac4e1] transition-all font-normal"
          >
            <span :class="btnlogin.icon"></span>
            <span class="space-x-2">{{ btnlogin.title }}</span>
          </RouterLink>
        </Button>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
</template>
