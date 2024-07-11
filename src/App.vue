<script setup lang="ts">
    import {ref, watch} from 'vue';
    import FileChooser from './components/FileChooser.vue';
    import {invoke} from '@tauri-apps/api/tauri'
    const chosenFile = ref < string | null > (null)

    watch(chosenFile, (file) => {
        invoke('read_file', {filePath: file}).then((message) => console.log(message)).catch((error) => console.error(error))
    })
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
