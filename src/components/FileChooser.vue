<script setup lang="ts">
    import {open} from '@tauri-apps/api/dialog'

    interface Emits {
        (e: 'fileSelected', value: string): void
    }

    const emit = defineEmits < Emits > ()
    async function pickFile() {
        const selected = await open({multiple: false})
        if (Array.isArray(selected)) {
            emit("fileSelected", selected[0])
        } else if (selected !== null) {
            emit("fileSelected", selected)
        }
    }
</script>
<template>
    <button class="btn btn-accent" @click=pickFile>Choose a File.</button>
</template>
