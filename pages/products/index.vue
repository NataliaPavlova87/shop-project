<template>
    <div>Products</div>
    <div v-if="pending">
        Loading...
    </div>
    <template v-else>
        <div
            v-for="(product, productIndex) in products"
            :key="`product--${productIndex}`"
        >
            <NuxtLink :to="`/products/${product.id}`">
                {{ product.title }}
            </NuxtLink>
        </div>
    </template>
</template>

<script lang="ts" setup>
const { data: products, pending } = await useProductsApi() ;
</script>
