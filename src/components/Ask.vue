<template>
  <v-parallax :height="height" src="parallax.jpg" dark>
    <v-row class="pa-0 ma-0">
      <v-col class="text-center" cols="4">
        <v-container fluid>
          <v-row>
            <v-col>
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
          <v-row>
            <v-col v-for="ans in answers" :key="ans.id" cols="12">
              <v-toolbar dark>
                <v-toolbar-title>
                  {{ans}}
                  {{ans.response}}
                </v-toolbar-title>
              </v-toolbar>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
      <v-divider />
      <v-col v-if="showAudio" justify="center" class="text-center" cols="8">
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
    answers: [],
    showAudio: false
  }),
  computed: {
    height() {
      return window.innerHeight - 56;
    },
    width() {
      return (window.innerWidth/12)*8;
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
        type: "flower",
        colors: ["white", "white", "white"],
      };
      wave.fromElement("player", "visualiser", options);
    },  
    async ask() {
      const response = await new SelphieControllerApi().askSelph(this.question);
      this.answers = response.data;
      if(this.answers.length > 0)
        this.answer = this.answers[0].response;
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
