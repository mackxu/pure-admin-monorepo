<template>
  <div>
    <div>foo view: {{ $route.fullPath }}</div>
    <div>good work</div>
    <foo2 />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'foo'
});

import Foo2 from '@repo/components/index.vue';
</script>
