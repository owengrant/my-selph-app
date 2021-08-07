<template>
  <v-parallax :height="height" src="parallax.jpg" dark>
    <v-row  justify="center" class="pa-0 ma-0">
      <v-col class="text-center pa-0 ma-0" cols="12">
        <canvas id="visualiser" :height="height - 100" :width="width"></canvas>
        <audio v-if="hideResponse()" id="player" crossorigin="anonymous" controls>
          <source :src="audioSource()" type="audio/mpeg" />
        </audio>
      </v-col>
    </v-row>
    <v-row justify="center" class="pa-0 ma-0">
      <v-col class="text-center pa-0 ma-0" cols="12">
        <v-container fluid>
          <v-row justify="center">
            <v-col cols="8">
              <v-text-field
                v-model="question"
                v-on:keyup.enter="ask"
                label="Ask Selph"
                dark
                clearable
              />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import Wave from "@foobar404/wave";
import { SelphieControllerApi } from "@/apis/selph";

export default {
  name: "Ask",
//   mounted() {
//     this.addVisualisation()
//   },
  data: () => ({
    question: "",
    answer: "",
  }),
  computed: {
    height() {
      return window.innerHeight - 56;
    },
    width() {
      return window.innerWidth - 56;
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
    },
    audioSource() {
      if (this.answer.length < 1)
        return "http://localhost:8000/files/-677922917.mp3";
      return "http://localhost:8000/files/" + this.answer;
    },
    hideResponse() {
      const result = this.answer && this.question.length > 0;
      if (result == false) {
        this.answer = null;
        setTimeout(() => {
          this.addVisualisation()
        }, 5000)
      }
      return result;
  }
  },
};
</script>
