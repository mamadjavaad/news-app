<script setup>
import { ref } from 'vue'
// Defines SelctedCategory  
const categoryValue = ref(0)

</script>

<template>
  <v-main class="d-flex align-center justify-center flex-column h-100">
    <!-- for desktops and tvs -->
    <div class="w-100 d-none justify-center d-sm-flex d-lg-flex d-md-flex d-xl-flex d-xxl-flex">
      <v-btn class="px-6 py-3 rounded-0 " variant="text">World</v-btn>
      <v-btn class="px-6 py-3 rounded-0 " variant="text">Tech</v-btn>
      <v-btn class="px-6 py-3 rounded-0 " variant="text">science</v-btn>
      <v-btn class="px-6 py-3 rounded-0 " variant="text">Sports</v-btn>
      <v-btn class="px-6 py-3 rounded-0 " variant="text">Health</v-btn>
    </div>
    <!--  -->
    <!-- for mobile and tablets -->
    <v-bottom-navigation class="d-flex d-sm-none d-lg-none d-md-none d-xl-none d-xxl-none" v-model="categoryValue"
      color="red-accent-1" grow>
      <v-btn>
        <v-icon icon="mdi-earth"></v-icon>
        World
      </v-btn>
      <v-btn>
        <v-icon icon="mdi-text-recognition"></v-icon>
        Tech
      </v-btn>
      <v-btn>
        <v-icon icon="mdi-dots-horizontal"></v-icon>
        More
        <v-overlay activator="parent" location-strategy="static" class="more-category-xs">
          <v-list>
            <v-list-subheader>Other catagories</v-list-subheader>
            <v-list-item prepend-icon="mdi-microscope" title="Science"></v-list-item>
            <v-list-item prepend-icon="mdi-basketball" title="Sports"></v-list-item>
            <v-list-item prepend-icon="mdi-hospital-box" title="Health"></v-list-item>
          </v-list>
        </v-overlay>
      </v-btn>
    </v-bottom-navigation>
    <!--  -->
  </v-main>
</template>
<style lang="scss" >
.more-category-xs {
  .v-overlay__content {
    width: 100% !important;
    bottom: 0;
  }
}
</style>