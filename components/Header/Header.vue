<template>
    <header class="header">
        <div class="header__info header-info">
            <div class="header-info__container">
                <div class="header-info__about">
                    <NuxtLink
                        class="header-info__link"
                        to="tel:+74951111111"
                    >
                        +7 (495) 123-11-22
                    </NuxtLink>
                    <span class="header-info__time">
                        c 10:00 до 19:00 по Москве
                    </span>
                    <NuxtLink
                        to="mailto:info@mail.ru"
                        class="header-info__mail"
                    >
                        info@mail.ru
                    </NuxtLink>
                </div>
                <div class="header-info__auth">
                    <HeaderLogin />
                    <HeaderRegistration />
                </div>
            </div>
        </div>
        <NavBar />
    </header>
</template>

<style scoped lang="scss">
.header-info {
    background-color: #F9F5F2;
    padding-top: 5px;
    padding-bottom: 5px;

    &__container {
        padding-left: 15px;
        padding-right: 15px;
        max-width: 1240px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-between;
    }

    &__about {
        display: flex;
    }

    &__auth {
        display: flex;
    }
}
</style>
