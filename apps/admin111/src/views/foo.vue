<script setup lang="ts">
defineOptions({
  name: 'foo'
});
</script>

<template>
  <div>foo: {{ $route.fullPath }}</div>
</template>
