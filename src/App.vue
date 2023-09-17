<script setup>
//importing components
import Navbar from './components/Navbar.vue'
//setting theme to user's default theme
import {onMounted} from 'vue'
import { useTheme } from 'vuetify'
const theme = useTheme()
onMounted(() => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.global.name.value = 'dark'
  }
})
</script>

<template>
  <v-layout class="d-flex flex-column flex-wrap">
    <Navbar />

    <routerView />

  </v-layout>
</template>

