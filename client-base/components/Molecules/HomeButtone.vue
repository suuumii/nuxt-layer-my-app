<template>
    <v-btn
        @click="handleClick"
    >
        ホームボタン
    </v-btn>
</template>

<script setup lang="ts">
const { data } = useFetchSample()

function handleClick() {
  window.alert(data + calcSample(1, 2))
}
</script>
