<template>
    <nav class="navbar">
        <ul class="navbar__list navbar-list">
            <li
                v-for="(link, linkIndex) in navbarItems"
                :key="`navbar-list-item--${linkIndex}`"
                class="navbar-list__item navbar-list-item"
            >
                <NuxtLink :to="link.url">
                    {{ link.name }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
const navbarItems = [
    {
        name: 'Каталог',
        url: '/products',
    },
    {
        name: 'Отзывы',
        url: '/comments',
    },
    {
        name: 'О компании',
        url: '/about',
    },
    {
        name: 'Контакты',
        url: '/contacts',
    },
];
</script>
