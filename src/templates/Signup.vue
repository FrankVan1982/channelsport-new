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
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const router = useRouter();

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      alert("User logged in successfully");
      router.push("/private/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorMessage);
    });
};
const signInWithGitHub = () => {
  const provider = new GithubAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      alert("User logged in successfully");
      router.push("/private/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorMessage);
    });
};
const signInWithTwitter = () => {
  const provider = new TwitterAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      alert("User logged in successfully");
      router.push("/private/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorMessage);
    });
};
</script>

<template>
  <Base>
    <div
      class="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10"
    >
      <div class="flex w-full max-w-sm flex-col gap-6">
        <a href="#" class="flex items-center gap-2 self-center font-medium">
          <div
            class="flex h-6 w-6 items-center justify-center rounded-none bg-primary text-primary-foreground"
          >
            <span class="icon-[solar--posts-carousel-vertical-bold-duotone] size-4" />
          </div>
          CHANNELSport
        </a>
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
                    Do you already have an account?
                    <RouterLink to="/login" class="underline underline-offset-4">
                      Log In
                    </RouterLink>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          <div
            class="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary"
          >
            By clicking continue, you agree to our
            <RouterLink to="/terms-of-service">Terms of Service</RouterLink> .
          </div>
        </div>
      </div>
    </div>
  </Base>
</template>
