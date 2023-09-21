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
    <v-footer class="text-center justify-center d-none justify-center d-sm-flex d-lg-flex d-md-flex d-xl-flex d-xxl-flex border-t py-3" > &lt; github.com/mamadjavaad &gt; © 2023</v-footer>
  </v-layout>
</template>

