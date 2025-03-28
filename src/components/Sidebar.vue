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
  useSidebar
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
const { isMobile } = useSidebar()
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
const isVisible = ref(true);
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      isVisible.value = false;
      photoURL.value = getAuth().currentUser?.photoURL;
      displayName.value = getAuth().currentUser?.displayName;
      alt.value = getAuth().currentUser?.displayName;
      email.value = getAuth().currentUser?.email;
    } else {
      isLoggedIn.value = false;
      isVisible.value = true;
    }
  });
});
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};

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
/**
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
*/
const photoURL = ref();
const displayName = ref();
const alt = ref();
const email = ref();
const avatars = ref([
  {
    src: photoURL,
    alt: alt,
  },
])
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
        <Button class="w-full" asChild v-for="btnlogin in btnlogins" v-if="isVisible">
          <RouterLink :to="btnlogin.url"
            class="flex items-center justify-start bg-[#ffffff] hover:bg-[#1ac4e1] transition-all font-normal">
            <span :class="btnlogin.icon"></span>
            <span class="space-x-2">{{ btnlogin.title }}</span>
          </RouterLink>
        </Button>
        <!-- Profile Button (will be removed in the future) -->
        <!-- <Button class="w-full" variant="secondary" asChild v-for="btnprofile in btnprofiles" v-if="isLoggedIn">
          <RouterLink :to="btnprofile.url"
            class="flex items-center justify-start bg-[#ffffff] hover:bg-[#1ac4e1] transition-all font-normal">
            <span :class="btnprofile.icon"></span>
            <span class="space-x-2">{{ btnprofile.title }}</span>
          </RouterLink>
        </Button> -->
        <DropdownMenu v-if="isLoggedIn">
          <DropdownMenuTrigger as-child>
            <SidebarMenuButton size="lg"
              class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <Avatar class="h-8 w-8 rounded-full" v-for="avatar in avatars">
                <AvatarImage :src="avatar.src" />
                <AvatarFallback class="rounded-lg truncate">
                  {{ avatar.alt }}
                </AvatarFallback>
              </Avatar>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">{{ displayName }}</span>
                <span class="truncate text-xs">{{ email }}</span>
              </div>
              <span class="icon-[solar--double-alt-arrow-up-line-duotone]"></span>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            :side="isMobile ? 'bottom' : 'right'" align="end" :side-offset="4">
            <DropdownMenuLabel class="p-0 font-normal">
              <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar class="h-8 w-8 rounded-full" v-for="avatar in avatars">
                  <AvatarImage :src="avatar.src" :alt="avatar.alt" />
                  <AvatarFallback class="rounded-lg truncate">
                    {{ displayName }}
                  </AvatarFallback>
                </Avatar>
                <div class="grid flex-1 text-left text-sm leading-tight">
                  <span class="truncate font-semibold">{{ displayName }}</span>
                  <span class="truncate text-xs">{{ email }}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <RouterLink to="/profile" class="space-x-2">
                  <span class="icon-[solar--user-bold-duotone]"></span>
                  Profile Settings
                </RouterLink>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="handleSignOut">
              <span class="icon-[solar--logout-bold-duotone]"></span>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
</template>
