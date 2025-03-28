<template>
  <Base>
  <br>
  <div class="flex justify-center items-center">
    <Avatar v-for="avatar in avatars">
      <AvatarImage :src="avatar.src" :alt="avatar.alt" />
      <AvatarFallback>{{avatar.alt}}</AvatarFallback>
    </Avatar>
  </div>
  </Base>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import Base from "@/templates/Base.vue";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAuth } from 'firebase/auth';

const auth = getAuth();
const avatars = ref([
  {
    src: auth.currentUser?.photoURL,
    alt: auth.currentUser?.displayName,
  },
])
</script>
