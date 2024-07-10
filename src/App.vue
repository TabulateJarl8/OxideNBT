<script setup lang="ts">
    import {ref} from 'vue';
    import FileChooser from './components/FileChooser.vue';
    const chosenFile = ref < string | null > (null)
</script>

<template>
    <FileChooser @fileSelected="(file: string) => chosenFile = file" />
    <br>{{ chosenFile }}
</template>

<style scoped>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
</style>
