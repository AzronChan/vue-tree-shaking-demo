<template>
  <div class="about">
    <h1>This is an about page2</h1>
  </div>
</template>

<script>
import { PLATFORM_OPTIONS } from "../enum/about";
export default {
  data() {
    return {
      options: PLATFORM_OPTIONS,
    };
  },
};
</script>
