<script setup>
// toggle theme
import { useTheme } from 'vuetify'
const theme = useTheme()
import useThemeStore from '../stores/theme.js'
const { toggleTheme } = useThemeStore();

//search news
import useState from '../stores/data';
const {searchModel,getData,category} =useState()
const searchSubmit=()=>{
  getData().then(()=>{
    searchModel.value=null    
  })
}

</script>

<template>
<nav class="w-100 d-flex flex-column flex-wrap pa-5 border-b">

  <div class="w-100  bg-transparent d-flex justify-space-between align-center ">
    <a href="https://github.com/mamadjavaad" target="_blank">
      <v-btn icon="$mdiGithub" variant="text"></v-btn>
    </a>
    <a href="/" class="text-red-accent-2 text-h6">News App</a>
    <v-btn icon="$mdiThemeLightDark"  @click="toggleTheme(theme)"></v-btn>
  </div>
  <div class="w-100 d-flex justify-center align-center mt-5">
    <v-responsive max-width="550" class="rounded-xl rounded">
        <div>
          <v-text-field  density="compact" variant="solo-filled"  :label="category ? 'Search in ' + category:'Search In News'"
            append-inner-icon="$mdiMagnify" single-line hide-details v-model="searchModel" @keydown.enter="searchSubmit"
            @click:append-inner="searchSubmit"></v-text-field>
        </div>

      </v-responsive>
  </div>
</nav>
 
</template>

<style lang="scss"></style>