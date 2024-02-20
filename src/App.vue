<script setup>
//importing components
import Navbar from './components/Navbar.vue'
//setting theme to user's default theme and checking its saved theme
import useThemeStore from './stores/theme.js'
const { setTheme } = useThemeStore();
import {onMounted} from 'vue'
import { useTheme } from 'vuetify'
const theme = useTheme()
onMounted(() => {
  setTheme(theme)
})
</script>

<template>
  <v-layout class="d-flex flex-column flex-wrap">
    <Navbar />

    <routerView />

    <v-footer class="w-100 position-fixed text-center justify-center d-none justify-center d-sm-flex d-lg-flex d-md-flex d-xl-flex d-xxl-flex border-t py-3" style="bottom: 0 !important;"> &lt; github.com/mamadjavaad &gt; © 2023</v-footer>
  </v-layout>
</template>

