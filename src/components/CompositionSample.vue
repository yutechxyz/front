<template>
  <div>
    <div data-test="full-name">{{ fullName }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "@vue/composition-api";
interface User {
  firstName: string;
  lastName: string;
}
export default defineComponent({
  props: {
    user: {
      type: Object as () => User,
      required: true
    }
  },
  setup({ user }) {
    const fullName = computed(() => `${user.firstName} ${user.lastName}`);
    return {
      fullName
    };
  }
});
</script>