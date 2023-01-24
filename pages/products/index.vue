<template>
    <div>Products</div>
    <div
        v-for="(product, productIndex) in products"
        :key="`product--${productIndex}`"
    >
        <NuxtLink :to="`/products/${product.id}`">
            {{ product.title }}
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
const { data: products } = await useProductsApi() ;
</script>
