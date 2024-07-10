<script setup lang="ts">
    import {ref} from 'vue'
    import {open} from '@tauri-apps/api/dialog'

    const pickedFile = ref < string | null > (null)
    async function pickFile() {
        const selected = await open({multiple: false})
        if (Array.isArray(selected)) {
            pickedFile.value = selected[0]
        } else if (selected !== null) {
            pickedFile.value = selected
        }
    }
</script>

<template>
    <input type='file' @click.prevent="pickFile" class='file-input file-input-bordered w-full max-w-xs' />
    <br>
    <p>{{ pickedFile }}</p>
</template>

<style scoped>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }

    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }

    .logo.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
</style>
