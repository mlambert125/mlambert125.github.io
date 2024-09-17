<script setup>
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

async function login() {
    const result = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    });

    if (result.error) {
        console.error('Error:', result.error.message);
    } else {
        router.push('/');
    }
}
</script>

<template>
    <form @submit.prevent="login">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input type="email" id="email" required v-model="email" />

        <label for="password">Password</label>
        <input type="password" id="password" required v-model="password" />

        <button type="submit">Login</button>
    </form>
</template>
