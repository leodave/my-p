<template>
  <v-container class="py-12">
    <h2 class="display-1 primary--text font-weight-bold mb-8 text-center">Beyond Engineering</h2>

    <v-row>
      <v-col cols="12" md="6">
        <v-card color="secondary" dark class="pa-4 mb-6">
          <v-card-title class="headline primary--text">Football</v-card-title>
          <v-card-text class="white--text">
            <p>Football has always been my passion from a young age. I love playing the game with friends and teammates in amateur leagues. It keeps me active
              and teaches me about teamwork and strategy.</p>
            <v-sheet color="black" class="pa-2 rounded-lg">
              <video
                  width="100%"
                  controls
                  :src="require('@/assets/david-video (1).mp4')"
                  class="rounded"
              ></video>
            </v-sheet>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card color="secondary" dark class="pa-4 mb-6">
          <v-card-title class="headline primary--text">Paddling</v-card-title>
          <v-card-text class="white--text">
            <p>Paddling is a more recent hobby. There is nothing like the experience of being on the water early in the morning, watching the sunrise and
              listening to the ocean.</p>
            <v-carousel hide-delimiters height="400">
              <v-carousel-item
                  src="https://raw.githubusercontent.com/leodave/Profile-Pics/main/paddle1.jpg"
              ></v-carousel-item>
              <v-carousel-item
                  src="https://raw.githubusercontent.com/leodave/Profile-Pics/main/paddle2.jpg"
              ></v-carousel-item>
            </v-carousel>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HobbiesView',
};
</script>
