<template>
  <div>
    <composition-sample :user="user" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import CompositionSample from "@/components/CompositionSample.vue";
export default defineComponent({
  components: {
    CompositionSample
  },

  setup() {
    const user = { firstName: 'taro', lastName: 'suzuki' }
    return { user }
  }
})
</script>
