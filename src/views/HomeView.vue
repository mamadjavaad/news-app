<script setup>
import { ref } from 'vue'
// Defines SelctedCategory  
const categoryValue = ref(0)

</script>

<template>
  <v-main class="d-flex align-center flex-column h-100">
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
    <div class="w-100 pa-4 mx-auto">

      <v-card class="mx-auto main-headline pa-5" variant="outlined">

        <v-card-title class="headline font-weight-bold text-center">
          Fact check: Trump falsely claims Raffensperger said former president ‘didn't do anything wrong' on their
          2021 phone call
        </v-card-title>
        <v-card-actions>
          <v-btn text>BBC</v-btn>
          <v-spacer></v-spacer>
          <span class="caption grey--text">5 min ago</span>
        </v-card-actions>

        <v-img
          src="https://i.abcnewsfe.com/a/32fd20d9-0750-495d-af6a-81203537e23e/wirestory_839920116a244df3e55bdedf33820a80_16x9.jpg?w=992"
          height="300px" cover></v-img>

        <v-card-subtitle class="grey--text">
          Washington CNN — Georgia Secretary of State Brad Raffensperger has long been a pointed critic of former
          President Donald Trump's conduct on a January 2, 2021, phone call in which Trump told numerous lies about
          supposed election fraud and pressured Raffensperger to somehow 'find' enough votes to overturn his defeat in
          Georgia in the 2020 election. In an interview that aired Sunday on NBC's 'Meet the Press,' though, Trump
          claimed Raffensperger had recently declared Trump's conduct on the call perfectly acceptable.
        </v-card-subtitle>
        <v-card-actions>
          <v-btn class="mx-auto">Article Link</v-btn>

        </v-card-actions>

      </v-card>

    </div>

    <div class="news-container d-flex flex-wrap justify-center ">
      <div class="news-item mx-6 my-4">
        <v-card class="pa-5" min-width="200px" variant="outlined">
          <v-card-title class="headline font-weight-bold">
            Example News Headline
          </v-card-title>
          <v-card-actions>
            <v-btn text>cnn</v-btn>
            <v-spacer></v-spacer>
            <span class="caption grey--text">5 min ago</span>
          </v-card-actions>

          <v-img
            src="https://i.abcnewsfe.com/a/32fd20d9-0750-495d-af6a-81203537e23e/wirestory_839920116a244df3e55bdedf33820a80_16x9.jpg?w=992"
            height="300px" cover></v-img>

          <v-card-subtitle class="grey--text">
            This is where the news summary could go. This is where the news summary could go.
          </v-card-subtitle>

          <v-card-actions>
            <v-btn class="mx-auto">Article Link</v-btn>

          </v-card-actions>
        </v-card>
      </div>
      <div class="news-item mx-6  my-4">
        <v-card class="pa-5" min-width="200px" variant="outlined">
          <v-card-title class="headline font-weight-bold">
            Example News Headline
          </v-card-title>
          <v-card-actions>
            <v-btn text>cnn</v-btn>
            <v-spacer></v-spacer>
            <span class="caption grey--text">5 min ago</span>
          </v-card-actions>

          <v-img
            src="https://i.abcnewsfe.com/a/32fd20d9-0750-495d-af6a-81203537e23e/wirestory_839920116a244df3e55bdedf33820a80_16x9.jpg?w=992"
            height="300px" cover></v-img>

          <v-card-subtitle class="grey--text">
            This is where the news summary could go. This is where the news summary could go.
          </v-card-subtitle>

          <v-card-actions>
            <v-btn class="mx-auto">Article Link</v-btn>

          </v-card-actions>
        </v-card>
      </div>
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
    width: 93%;
    max-width: none !important;
    min-width: 570px !important;

    .news-item {
      min-width: 512px !important;
      max-width: 630px;
      width: 46% !important;
    }
  }

}

.v-card-title,
.v-card-subtitle {
  white-space: pre-wrap !important;
  padding: 10px;
}

.news-item {
  width: 94%;
}
</style>