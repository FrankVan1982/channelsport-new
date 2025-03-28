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
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
const router = useRouter();
const errMsg = ref();

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      router.push("/private/");
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      switch (errorCode) {
        case "auth/popup-closed-by-user":
          errMsg.value = "Popup was closed by the user";
          break;
        case "auth/cancelled-popup-request":
          errMsg.value = "Popup was cancelled by the user";
          break;
        case "auth/popup-blocked":
          errMsg.value = "Popup was blocked by the browser";
          break;
        default:
          errMsg.value = "There's a generic error. Please try again!";
          break;
      }
    });
};
const signInWithGitHub = () => {
  const provider = new GithubAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      router.push("/private/");
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      switch (errorCode) {
        case "auth/popup-closed-by-user":
          errMsg.value = "Popup was closed by the user";
          break;
        case "auth/cancelled-popup-request":
          errMsg.value = "Popup was cancelled by the user";
          break;
        case "auth/popup-blocked":
          errMsg.value = "Popup was blocked by the browser";
          break;
        default:
          errMsg.value = "There's a generic error. Please try again!";
          break;
      }
    });
};
const signInWithTwitter = () => {
  const provider = new TwitterAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      router.push("/private/");
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      switch (errorCode) {
        case "auth/popup-closed-by-user":
          errMsg.value = "Popup was closed by the user";
          break;
        case "auth/cancelled-popup-request":
          errMsg.value = "Popup was cancelled by the user";
          break;
        case "auth/popup-blocked":
          errMsg.value = "Popup was blocked by the browser";
          break;
        default:
          errMsg.value = "There's a generic error. Please try again!";
          break;
      }
    });
};
</script>

<template>
  <Base>
  <div class="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
    <div class="flex w-full max-w-sm flex-col gap-6">
      <RouterLink to="/" class="flex items-center gap-2 self-center font-medium">
        <div class="flex h-6 w-6 items-center justify-center rounded-none bg-primary text-primary-foreground">
          <span class="icon-[solar--posts-carousel-vertical-bold-duotone] size-4" />
        </div>
        CHANNELSport
      </RouterLink>
      <div class="flex flex-col gap-6">
        <Card>
          <CardHeader class="text-center">
            <CardTitle class="text-xl"> Welcome </CardTitle>
            <CardDescription> Signup with OAuth </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div class="grid gap-6">
                <div class="flex flex-col gap-2">
                  <Button variant="outline" class="w-full" @click="signInWithGoogle">
                    <span class="icon-[simple-icons--google] h-[18px] w-[18px]" />
                    Signup with Google
                  </Button>
                  <Button variant="outline" class="w-full" @click="signInWithGitHub">
                    <span class="icon-[simple-icons--github] h-[20px] w-[20px]" />
                    Signup with GitHub
                  </Button>
                  <Button variant="outline" class="w-full" @click="signInWithTwitter">
                    <span class="icon-[simple-icons--x] w-[20px] h-[20px]" />
                    Signup with X (Twitter)
                  </Button>
                </div>
                <div class="hidden">
                  <div>
                    <Input required />
                  </div>
                </div>
                <div class="text-center text-sm">
                  <Alert variant="destructive" v-if="errMsg">
                    <span class="icon-[solar--shield-warning-bold-duotone]"></span>
                    <AlertTitle>There's an error! Check this out:</AlertTitle>
                    <AlertDescription>
                      {{ errMsg }}
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <div
          class="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
          By clicking continue, you agree to our
          <RouterLink to="/terms-of-service">Terms of Service</RouterLink> .
        </div>
      </div>
    </div>
  </div>
  </Base>
</template>
