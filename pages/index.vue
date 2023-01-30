<template>
    <div>Home Page</div>
    {{ create }}
</template>

<script lang="ts" setup>
const email = 'q@mail.ru';
const password = '123456';

onMounted( async () => {
    const create = await createUser(email, password);
    console.log(create);
})

</script>
