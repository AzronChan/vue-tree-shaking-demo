<template>
  <div class="about">
    <h1>This is an about page1</h1>
  </div>
</template>

<script>
import { SUGGEST_TYPE_OPTIONS } from "../enum/about";
export default {
  data() {
    return {
      options: SUGGEST_TYPE_OPTIONS,
    };
  },
};
</script>
