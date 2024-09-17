<script setup>
import { ref } from 'vue';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

async function handleSubmit() {
    const result  = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
    });

    if (result.error) {
        console.error('Error:', result.error.message);
    } else {
        router.push('/login');
    }
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <h1>Register</h1>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
        <button type="submit">Register</button>
    </form>
</template>
