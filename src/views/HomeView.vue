<script setup>
import { ref, onMounted, computed } from 'vue'
// Defines SelctedCategory  
const categoryValue = ref(0)
//getting datas from store.js
import useState from '../stores/data';
const {newsData,category,getData} =useState()

// filtering newsItems for showing everything except the first item
const newsItems = computed(() => {
  if (newsData) {
    return newsData.value.filter((_, index) => index !== 0)
  } else {
    return null
  }

});
//changing data based by category selection
const changeData = (selected) => {
  newsData.value = null;
  category.value = selected
  getData()
}
//running getData function from stor on Mounted
onMounted(() => {
  getData()
})
</script>

<template>
  <v-main class="d-flex align-center flex-column h-100">
    <!-- for desktops and tvs -->
    <div class="w-100 d-none justify-center d-sm-flex d-lg-flex d-md-flex d-xl-flex d-xxl-flex">
      <v-btn class="px-6 py-3 rounded-0 " variant="text" @click="changeData(null)">World</v-btn>
      <v-btn class="px-6 py-3 rounded-0 " variant="text" @click="changeData('technology')">Tech</v-btn>
      <v-btn class="px-6 py-3 rounded-0 " variant="text" @click="changeData('science')">science</v-btn>
      <v-btn class="px-6 py-3 rounded-0 " variant="text" @click="changeData('sports')">Sports</v-btn>
      <v-btn class="px-6 py-3 rounded-0 " variant="text" @click="changeData('politics')">Poltics</v-btn>

  
    </div>
    <!--  -->
    <!-- for mobile and tablets -->
    <v-bottom-navigation class="d-flex d-sm-none d-lg-none d-md-none d-xl-none d-xxl-none" v-model="categoryValue"
      color="red-accent-1" grow>
      <v-btn>
        <v-icon icon="mdi-earth" @click="changeData(null)"></v-icon>
        World
      </v-btn>
      <v-btn @click="changeData('technology')">
        <v-icon icon="mdi-text-recognition"></v-icon>
        Tech
      </v-btn>
      <v-btn>
        <v-icon icon="mdi-dots-horizontal"></v-icon>
        More
        <v-overlay activator="parent" location-strategy="static" class="more-category-xs">
          <v-list>
            <v-list-subheader>Other catagories</v-list-subheader>
            <v-list-item prepend-icon="mdi-microscope" title="Science" @click="changeData('science')"></v-list-item>
            <v-list-item prepend-icon="mdi-basketball" title="Sports" @click="changeData('sports')"></v-list-item>
            <v-list-item prepend-icon="mdi-bank-outline" title="Poltics" @click="changeData('politics')"></v-list-item>
          </v-list>
        </v-overlay>
      </v-btn>
    </v-bottom-navigation>
    <!--  -->
    <div class="w-100 pa-4 mx-auto" v-if="newsData">

      <v-card class="mx-auto main-headline pa-5" variant="outlined">

        <v-card-title class="headline font-weight-bold text-center">
          {{ newsData[0].title }}
        </v-card-title>
        <v-card-actions>
          <v-btn text>{{ newsData[0].source_id }}</v-btn>
          <v-spacer></v-spacer>
          <span class="caption grey--text">{{ newsData[0].pubDate }}</span>
        </v-card-actions>

        <v-img :src="newsData[0].image_url" height="300px" cover></v-img>

        <v-card-subtitle class="grey--text">
          {{ newsData[0].description }}

        </v-card-subtitle>
        <v-card-actions>
          <a :href="newsData[0].link" target="_blank" class="mx-auto">
            <v-btn>Article Link</v-btn>
          </a>
        </v-card-actions>

      </v-card>

    </div>

    <div class="news-container d-flex flex-wrap justify-center " v-if="newsData">
      <div class="news-item mx-6 my-4" v-for="news in newsItems" :key="news">
        <v-card class="pa-5" min-width="200px" variant="outlined">
          <v-card-title class="headline font-weight-bold">
            {{ news.title }}
          </v-card-title>
          <v-card-actions>
            <v-btn text>{{ news.source_id }}</v-btn>
            <v-spacer></v-spacer>
            <span class="caption grey--text">{{ news.pubDate }}</span>
          </v-card-actions>

          <v-img :src="news.image_url" height="300px" cover></v-img>

          <v-card-subtitle class="grey--text">
            {{ news.description }}
          </v-card-subtitle>

          <v-card-actions>
            <a :href="news.link" target="_blank">
              <v-btn class="mx-auto">Article Link</v-btn>
            </a>

          </v-card-actions>
        </v-card>
      </div>

    </div>
    <v-progress-linear indeterminate v-if="!newsData" class="d-flex d-sm-none d-lg-none d-md-none d-xl-none d-xxl-none"></v-progress-linear>

    <div v-if="!newsData" class="mt-8">
      <v-progress-circular indeterminate color="white" :size="50"></v-progress-circular>

    </div>

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
<style lang="scss" scoped>
@media screen and (min-width: 600px) {
  .main-headline {
    width: 93%;
    max-width: 1300px !important;
    min-width: 570px !important;
    height: inherit;

    .headline {
      font-size: 25px;
      padding: 0px 10%;

    }

    .v-img {
      min-height: 500px !important;
    }
  }

  .news-container {
    max-width: none !important;
    min-width: 570px !important;

    .news-item {
      min-width: 512px !important;
      max-width: 630px;
      width: 46% !important;
    }
  }

}

.v-card-title {
  white-space: pre-wrap !important;
  padding: 10px;
}

.v-card-subtitle {
  padding: 10px;
}

.news-container {
  width: 93%;

  .news-item {
    width: 100% ;
  }
}
</style>