<template>
  <div>
    <h1 class="football white--text">
      Football has always been my sport from a young age. always loved and
      played the game with my friends and teammates in amateur leagues. i have
      put below some video of mine for you to enjoy a little!!!!!
      &nbsp;&nbsp;&nbsp;
      <h1>Press Video to Play!!!</h1>
    </h1>

    <div>
      <button @click="playvid">
        <video
          class="bg-videoplayer"
          :src="require('@/assets/david-video (1).mp4')"
          ref="videoPlayer"
          loop
        ></video>
      </button>
    </div>
    <h1 class="paddle white--text">
      Paddling is one of the intersting hobbies I discovered recently. It is an
      amazing experience to have, early in the morning with the beutiful rising
      sun and sound of the ocean. &nbsp;&nbsp;&nbsp;
    </h1>
    <div class="paddling">
      <v-carousel>
        <v-carousel-item cover>
          <img
            src="https://raw.githubusercontent.com/leodave/Profile-Pics/main/paddle1.jpg"
            style="max-width: 100%; height: 100%"
          />
        </v-carousel-item>

        <v-carousel-item cover>
          <img
            src="https://raw.githubusercontent.com/leodave/Profile-Pics/main/paddle2.jpg"
            style="max-width: 100%; height: 100%"
          />
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: "HobbiesView",
  data() {
    return {
      playing: true,
    };
  },
  onmounted() {
    this.$refs.videoPlayer.play();
  },

  methods: {
    playvid() {
      if (this.$refs.videoPlayer.paused) {
        this.$refs.videoPlayer.play();
        console.log("plaay");
      } else {
        this.$refs.videoPlayer.pause();
      }
    },
  },
};
</script>
<style>
.bg-videoplayer {
  position: absolute;
  top: 30%;
  left: 0;
  min-width: 100%;
  height: 80%;
  overflow: hidden;
}

.bg-videoplayer video {
  position: absolute;
  top: 80%;
  left: 100%;
  min-width: 100%;
  min-height: 300%;
  width: auto;
  height: 500px;
  z-index: -100;
  transform: translateX(-50%) translateY(-50%);
}
.football {
  font-style: inherit;
  font-weight: 25;
  font-size: x-large;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  position: absolute;
  left: 10%;
  top: 10%;
  width: 85%;
}
.paddle {
  font-style: inherit;
  font-weight: 25;
  font-size: x-large;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  position: absolute;
  left: 10%;
  top: 120%;
  width: 85%;
}
.paddling {
  position: absolute;
  left: 30%;
  top: 140%;
  width: 25%;
  height: 60%;
}
</style>
