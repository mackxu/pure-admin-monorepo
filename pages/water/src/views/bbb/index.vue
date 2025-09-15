<template>
  <div>
    <div>后端配置的视图：</div>
    <div>water BBB view: {{ $route.fullPath }}</div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'water-bbb',
});
</script>
