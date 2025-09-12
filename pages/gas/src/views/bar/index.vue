<script setup lang="ts">
import { initRouterInstance } from '@core/router';
defineOptions({
  name: 'bar'
});

const router = initRouterInstance();
const routes = router.getRoutes();
</script>
<template>
  <div>
    <div>bar view: {{ $route.fullPath }}</div>
    <ul>
      <li v-for="nav of routes" :key="nav.name">
        <RouterLink :to="nav.path">{{ nav.meta.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
