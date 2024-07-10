<script setup lang="ts">
    import {open} from '@tauri-apps/api/dialog'

    interface Emits {
        (e: 'selectedFile', value: string): void
    }

    const emit = defineEmits < Emits > ()
    async function pickFile() {
        const selected = await open({multiple: false})
        if (Array.isArray(selected)) {
            emit("selectedFile", selected[0])
        } else if (selected !== null) {
            emit("selectedFile", selected)
        }
    }
</script>
<template>
    <button class="btn btn-accent" @click=pickFile>Choose a File.</button>
</template>
<style scoped></style>
