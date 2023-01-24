<template>
    <div>One product</div>
    {{ product }}
</template>

<script lang="ts" setup>
const { id } : {id?: string | number} = useRouter().currentRoute.value.params;
const {data: product} = await useProductApi(id || 0);
</script>
