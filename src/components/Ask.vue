<template>
  <v-parallax :height="height" src="parallax.jpg" dark>
    <v-row justify="center" class="pa-0 ma-0">
      <v-col class="text-center" cols="4">
        <v-text-field
          v-model="question"
          v-on:keyup.enter="ask"
          label="Ask Selph"
          :disabled="showAudio"
          dark
          clearable
        />
      </v-col>
    </v-row>
    <v-row v-if="showAudio" justify="center" class="mb-15">
      <v-col class="text-center" cols="12">
        <canvas id="visualiser" :height="height - 150" :width="width"></canvas>
        <audio id="player" crossorigin="anonymous" controls>
          <source :src="audioSource" type="audio/mpeg" />
        </audio>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import Wave from "@foobar404/wave";
import { SelphieControllerApi } from "@/apis/selph";

export default {
  name: "Ask",
  mounted() {
    this.addVisualisation()
  },
  data: () => ({
    question: "",
    answer: "",
    showAudio: false
  }),
  computed: {
    height() {
      return window.innerHeight - 56;
    },
    width() {
      return window.innerWidth;
    },
    audioSource() {
      const result = "http://localhost:8000/files/" + this.answer;
      return result
    },
  },
  methods: {
    addVisualisation() {
      const wave = new Wave();
      const options = {
        type: "orbs",
        colors: ["white", "white", "white"],
      };
      wave.fromElement("player", "visualiser", options);
    },  
    async ask() {
      const response = await new SelphieControllerApi().askSelph(this.question);
      this.answer = response.data.response;
      this.showAudio = true
      setTimeout(() => {
        const player = document.getElementById("player")
        player.onended = (event) => {
          this.showAudio = false
        };
        player.play()
        this.addVisualisation()
      }, 2000)
    },
  },
};
</script>
