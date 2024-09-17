<script setup>
  import { supabase } from '@/lib/supabaseClient';
  import { ref } from 'vue';

  const todos = ref([]);

  async function getTodos() {
    const result = await supabase.from('todos').select('*');
    if (result.error) {
      console.error('Error fetching todos:', result.error.message);
    } else {
      todos.value = result.data;
    }
  }

  getTodos();
</script>

<template>
  <h1>Home</h1>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.title }} - {{ todo.author }}
    </li>
  </ul>
</template>

