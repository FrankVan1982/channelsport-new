<script setup lang="ts">
import Base from "@/templates/Base.vue";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GitHubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";
</script>

<template>
  <Base>
    <div
      class="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10"
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
        <div class="flex flex-col gap-6">
          <Card>
            <CardHeader class="text-center">
              <CardTitle class="text-xl"> Welcome back </CardTitle>
              <CardDescription> Login with OAuth </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div class="grid gap-6">
                  <div class="flex flex-col gap-2">
                    <Button variant="outline" class="w-full">
                      <span class="icon-[simple-icons--google] h-[18px] w-[18px]" />
                      Login with Google
                    </Button>
                    <Button variant="outline" class="w-full">
                      <span class="icon-[simple-icons--github] h-[20px] w-[20px]" />
                      Login with GitHub
                    </Button>
                    <Button variant="outline" class="w-full">
                      <span class="icon-[simple-icons--x] w-[20px] h-[20px]" />
                      Login with X (Twitter)
                    </Button>
                  </div>
                  <div
                    class="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border"
                  >
                    <span class="relative z-10 bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                  <div class="grid gap-6">
                    <div class="grid gap-2">
                      <Label html-for="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="elisa.g.beckett@google.com"
                        v-model="email"
                        required
                      />
                    </div>
                    <div class="grid gap-2">
                      <div class="flex items-center">
                        <Label html-for="password">Password</Label>
                      </div>
                      <Input id="password" type="password" v-model="password" required />
                    </div>
                    <Button type="submit" class="w-full"> Log In </Button>
                  </div>
                  <div class="text-center text-sm">
                    Don't you have an account yet?
                    <RouterLink to="/signup" class="underline underline-offset-4">
                      Sign Up
                    </RouterLink>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          <div
            class="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary"
          >
            By clicking continue, you agree to our <a href="#">Terms of Service</a> and
            <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  </Base>
</template>
