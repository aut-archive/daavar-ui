<template>
  <v-toolbar fixed clipped-left app color="primary">
    <v-toolbar-side-icon @click="$store.commit('DRAWER_TOGGLE')" />
    <v-toolbar-title>Daavar Judge</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>