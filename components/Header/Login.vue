<template>
    <div>
        <v-row>
            <HeaderButtonLogin
                v-if="isUserAuth"
                @click="logout"
            >
                Выход
            </HeaderButtonLogin>
            <HeaderButtonLogin v-else @click.stop="dialog = true">
                Вход
            </HeaderButtonLogin>
            <v-dialog
                v-model="dialog"
                max-width="600px"
            >
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Вход в личный кабинет</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <p> {{ errorText }}  </p>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="email"
                                        label="Email*"
                                        required
                                    />
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        v-model="password"
                                        label="Пароль*"
                                        type="password"
                                        required
                                    />
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                        >
                            Закрыть
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="login"
                        >
                            Войти
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script lang="ts" setup>
import {useIsGlobalUserAuth} from "~/composables/useState";
import {sighnOutUser} from "~/composables/useFirebase";

const dialog = ref(false);
const email = ref('');
const password = ref('');
const errorText = ref('');
const isUserAuth = useIsGlobalUserAuth();

const login = async () => {
    const {response, error} = await signInUser(unref(email), unref(password));

    if (!response) {
        errorText.value = error.value;
    } else {
        dialog.value = false;
    }
}

const logout = async () => await sighnOutUser();
</script>

