<script setup lang="ts">
/** general */
import { onMounted, ref } from "vue";

/** graphics */
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/** grahics mechanisms */
import { Button } from "@/components/ui/button";
import { useColorMode } from "@vueuse/core";
const mode = useColorMode({
  disableTransition: false,
});

/** auth */
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
const router = useRouter();
const isLoggedIn = ref(false);
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      const photoURL = user.photoURL;
      const displayName = user.displayName
      const uid = user.uid;
      const email = user.email;
    } else {
      isLoggedIn.value = false;
    }
  });
});
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};

const displayName = ref(onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const displayName = user.displayName
    }
  });
}));

/** refs for button, etc. */
const items = ref([
  {
    title: "Home",
    url: "/",
    icon: "icon-[solar--home-bold-duotone]",
    isActive: true,
  },
]);
const privatelinks = ref([
  {
    title: "Private Page",
    url: "/private/",
    icon: "icon-[solar--lock-bold-duotone]",
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
    title: "Sign",
    url: "/sign",
    icon: "icon-[solar--login-2-bold-duotone]",
  },
]);
const btnprofiles = ref([
  {
    title: "Profile",
    url: "/profile",
    icon: "icon-[solar--user-bold-duotone]",
  },
]);
const btnsignouts = ref([
  {
    title: "Log Out",
    icon: "icon-[solar--logout-bold-duotone]",
  },
]);
</script>

<template>
  <Sidebar collapsible="offcanvas" variant="inset">
    <SidebarHeader><img src="/images/channelsport.png" class="h-[3.5rem] w-[6.5rem]" /></SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild :is-active="item.isActive">
                <RouterLink :to="item.url" class="flex items-center space-x-2">
                  <span :class="item.icon"></span>
                  <span>{{ item.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem v-for="privatelink in privatelinks" :key="privatelink.title">
              <SidebarMenuButton asChild>
                <RouterLink :to="privatelink.url" class="flex items-center space-x-2">
                  <span :class="privatelink.icon"></span>
                  <span>{{ privatelink.title }}</span>
                </RouterLink>
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
                    <SidebarMenuButton class="w-full font-normal">
                      <span class="icon-[solar--sun-2-line-duotone]" />
                      Light
                    </SidebarMenuButton>
                  </DropdownMenuItem>

                  <DropdownMenuItem @click="mode = 'dark'">
                    <SidebarMenuButton class="w-full font-normal">
                      <span class="icon-[solar--moon-bold-duotone]" />
                      Dark
                    </SidebarMenuButton>
                  </DropdownMenuItem>

                  <DropdownMenuItem @click="mode = 'auto'">
                    <SidebarMenuButton class="w-full font-normal">System</SidebarMenuButton>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <!-- Sign Button -->
        <Button class="w-full" asChild v-for="btnlogin in btnlogins">
          <RouterLink :to="btnlogin.url"
            class="flex items-center justify-start bg-[#ffffff] hover:bg-[#1ac4e1] transition-all font-normal">
            <span :class="btnlogin.icon"></span>
            <span class="space-x-2">{{ btnlogin.title }}</span>
          </RouterLink>
        </Button>
        <!-- Profile Button (will be removed in the future) -->
        <Button class="w-full" asChild v-for="btnprofile in btnprofiles" v-if="isLoggedIn">
          <RouterLink :to="btnprofile.url"
            class="flex items-center justify-start bg-[#ffffff] hover:bg-[#1ac4e1] transition-all font-normal">
            <span :class="btnprofile.icon"></span>
            <span class="space-x-2">{{ btnprofile.title }}</span>
          </RouterLink>
        </Button>
        <!-- SignOut Button -->
        <Button class="w-full" asChild v-for="btnsignout in btnsignouts" v-if="isLoggedIn" @click="handleSignOut">
          <RouterLink class="flex items-center justify-start bg-[#ffffff] hover:bg-[#1ac4e1] transition-all font-normal">
            <span :class="btnsignout.icon" @click="handleSignOut"></span>
            <span class="space-x-2" @click="handleSignOut">{{ btnsignout.title }}</span>
          </RouterLink>
        </Button>
        <DropdownMenu v-if="isLoggedIn">
          <DropdownMenuTrigger as-child>
            <SidebarMenuButton size="lg"
              class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <Avatar class="h-8 w-8 rounded-lg">
                <!-- <AvatarImage :src="photoURL" /> -->
                <AvatarFallback class="rounded-lg">
                  {{ displayName }}
                </AvatarFallback>
              </Avatar>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">{{ }}</span>
                <span class="truncate text-xs">{{ }}</span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
</template>
