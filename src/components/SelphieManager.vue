<template>
    <v-container fluid>
        <v-row>
            <v-col cols="9">
                <v-row>
                    <v-col cols="4" v-for="selphie in selphies" :key="selphie.id">
                        <v-card>
                            <v-card-title>
                                {{selphie.question}}
                            </v-card-title>
                            <v-card-text>
                                <audio controls>
                                    <source :src="audioSource(selphie)" type="audio/mpeg">
                                </audio>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="error" @click="removeSelphie(selphie)">
                                    Delete
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="3">
                <v-row>
                    <v-col cols="12">
                        <v-card>
                            <v-card-title>
                                Teach YourSelph
                            </v-card-title>
                            <v-divider />
                            <v-card-text>
                                <v-form>
                                    <v-text-field 
                                     v-model="askedQuestion"
                                     label="Enter your question"
                                     counter="60"
                                    />
                                    <v-divider class="mt-5 mb-5"/>
                                    <audio v-if="hideResponse()" controls>
                                        <source :src="audioSource(currentResponse)" type="audio/mpeg">
                                    </audio>
                                </v-form>
                            </v-card-text>
                            <v-divider />
                            <v-card-actions>
                                <v-btn @click="ask" :loading="asking" color="success" block>
                                    Ask Selph
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    <v-dialog
      v-model="showCreate"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" class="mb-12" v-bind="attrs"
          v-on="on" fab x-large bottom right absolute>
            <v-icon>
                mdi-plus
            </v-icon>
        </v-btn>
      </template>
      <v-card>
          <v-card-title>
              Create Selphie
          </v-card-title>
          <v-card-text>
              <v-form>
                  <v-text-field 
                   v-model="question"
                   label="Enter the question"
                  />
                  <v-file-input
                   v-model="response"
                   prepend-icon=""
                   prepend-inner-icon="mdi-music-note-eighth" 
                   accept=".mp3"
                    chips
                    show-size
                  />
              </v-form>
              <v-card-actions class="pa-0">
                  <v-btn @click="createSelphie" color="primary">
                      Create
                  </v-btn>
              </v-card-actions>
          </v-card-text>
      </v-card>
    </v-dialog>
    </v-container>
</template>

<script lang="ts">
import { SelphieControllerApi, SelphieGet} from '@/apis/selph';
import { BASE_PATH } from '@/apis/selph/base';
import axios from 'axios';
import Vue from 'vue'
import Component from "vue-class-component";

@Component
export default class SelphieManager extends Vue {
    selphieApi = new SelphieControllerApi()

    selphies: SelphieGet[] = []

    question = "";
    response: File | null = null

    showCreate = false

    askedQuestion = ""
    currentResponse: SelphieGet | null = null

    asking = false

    async mounted() {
        this.refresh()
    }

    async refresh() {
        const response = await this.selphieApi.findAllSelphies()
        this.selphies = response.data
    }

    async removeSelphie(selph: SelphieGet) {
        const response = await this.selphieApi.deleteSelphie(Number(selph.id))
        this.refresh()
    }

    async createSelphie() {
        if(!this.response) return
        const data = new FormData()
        data.append("question", this.question)
        data.append("response",this.response);
        const response = await await axios({
          method: "post",
          url: `${BASE_PATH}/api/v1/selphies`,
          data: data,
          headers: { "Content-Type": "multipart/form-data" },
        });
        this.refresh()
    }

    audioSource(selph: SelphieGet) {
        return "http://localhost:8000/files/"+selph.response
    }

    async ask() {
        this.asking = true
        try{
            const response = await this.selphieApi.askSelph(this.askedQuestion);
            this.currentResponse = response.data
        } catch(e) {
            console.log(e)
        } finally {
            this.asking = false
        }
    }

    hideResponse() {
        const result = this.currentResponse && this.askedQuestion.length > 0
        if(result == false)
        this.currentResponse = null
       return result
    }
    

}
</script>