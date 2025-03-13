<script setup lang="ts">
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
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();
const register = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("You have successfully signed in!");
      router.push("/signed-users/");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Email or password are incorrect. Please try again.";
          break;
        case "auth/user-disabled":
          errMsg.value = "User account is disabled.";
          break;
        case "auth/user-not-found":
          errMsg.value = "User and password not found.";
          break;
        case "auth/wrong-password":
          errMsg.value = "Email or password are incorrect. Please try again.";
          break;
        default:
          errMsg.value = "Email or password are incorrect. Please try again.";
          break;
      }
    });
};
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log("You have successfully signed in with Google!");
      router.push("/signed-users/");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>

<template>
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
            <CardDescription> Login with your Google account </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div class="grid gap-6">
                <div class="flex flex-col gap-4">
                  <Button variant="outline" class="w-full" @click="signInWithGoogle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        fill="currentColor"
                      />
                    </svg>
                    Login with Google
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
                      placeholder="elisa.g.beckett@example.com"
                      v-model="email"
                      required
                    />
                  </div>
                  <div class="grid gap-2">
                    <div class="flex items-center">
                      <Label html-for="password">Password</Label>
                      <a
                        href="#"
                        class="ml-auto text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input id="password" type="password" v-model="password" required />
                  </div>
                  <Alert v-if="errMsg" variant="destructive">
                    <span class="icon-[solar--shield-warning-bold-duotone]" />
                    <AlertTitle> Error </AlertTitle>
                    <AlertDescription> {{ errMsg }} </AlertDescription>
                  </Alert>
                  <Button type="submit" class="w-full" @click="register"> Login </Button>
                </div>
                <div class="text-center text-sm">
                  Don't have an account?
                  <RouterLink to="/register" class="underline underline-offset-4">
                    Sign up
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
</template>
