<template>
    <div>
<!--        <v-row>
            <v-btn
                color="primary"
                dark
                @click.stop="dialog = true"
            >
                Регистрация
            </v-btn>
            <v-dialog
                v-model="dialog"
                max-width="600px"
            >
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Регистрация на сайте</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field
                                        label="Email*"
                                        required
                                        v-model="email"
                                    />
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        label="Пароль*"
                                        type="password"
                                        required
                                        v-model="password"
                                    />
                                </v-col>
                            </v-row>
                            <p>{{ errorText }}</p>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                        >
                            Close
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="createRegistration"
                        >
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>-->
    </div>
</template>

<script lang="ts" setup>
import {createUser} from "~/composables/useFirebase";

const dialog = ref(false);
const email = ref('');
const password = ref('');
const errorText = ref('');

const createRegistration = async () => {
    const {response, error} = await createUser(unref(email), unref(password));

    if (!response) {
        errorText.value = error.value;
    } else {
        dialog.value = false;
    }
}
</script>
