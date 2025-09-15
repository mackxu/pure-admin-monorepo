<template>
  <div>
    <div>water AAA view: {{ $route.fullPath }}</div>
    <div>公共视图：</div>
    <foo2 />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'water-aaa',
});

import Foo2 from '@repo/components/index.vue';
</script>
