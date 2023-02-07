<template>
    <v-btn
        v-bind="$attrs"
        class="button-login"
    >
        <span class="button-login__text">
            <slot />
        </span>
    </v-btn>
</template>
