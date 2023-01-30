<template>
    <div>Категории</div>
    {{ data }}
</template>

<script lang="ts" setup>
const { data } = await useCategoriesApi();

</script>
