<script setup lang="ts">
import Base from "@/templates/Base.vue";
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
  <Base>
    <br />
    <div class="flex justify-center items-center">
      <Button as-child variant="outline" class="btn-margin group">
        <a href="https://dazn.com" class="h-[5.2rem]">
          <img src="/images/dazn/dazn.svg" alt="dazn.com" class="svg h-[64px]" />
        </a>
      </Button>
      <Button as-child variant="outline" class="group btn-margin">
        <a href="https://sky.com" class="h-[5.2rem]">
          <img src="/images/sky/sky-color.svg" alt="Sky.com" class="svg h-[64px]" />
        </a>
      </Button>
      <Button as-child variant="outline" class="group btn-margin">
        <a href="https://mediasetinfinity.mediaset.it" class="h-[5.2rem]">
          <img src="/images/mediaset/mediaset2.svg" alt="Mediaset" class="svg h-[88px]" />
        </a>
      </Button>
      <Button as-child variant="outline" class="group btn-margin">
        <a href="https://raiplay.it" class="h-[5.2rem]">
          <img src="/images/rai/rai.svg" alt="raiplay.it" class="svg h-[80px]" />
        </a>
      </Button>
    </div>
  </Base>
</template>
