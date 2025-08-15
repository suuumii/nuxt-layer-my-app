<script setup lang="ts">

</script>

<template>
  <v-container>
    <h3>{{ $t("label.mainTitle") }}</h3>
    <MoleculesMenu />
    <v-row>
      <v-col cols="10">
        <v-text-field label="テキスト" />
      </v-col>
      <v-col cols="2">
        <MoleculesHomeButtone />
      </v-col>
    </v-row>
  </v-container>
</template>
