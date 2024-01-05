<template lang="">
  <v-dialog :v-model="true" activator="parent" width="auto">
    <v-card>
      <v-card-text>
        <v-form>
          <v-container>
            <v-row>
              <v-col>
                <v-radio-group>
                  <v-row>
                    <v-radio label="Radio One" value="one"></v-radio>
                  </v-row>
                  <v-row>
                    <v-radio label="Radio Two" value="two"></v-radio>
                  </v-row>
                  <v-row>
                    <v-radio label="Radio Three" value="three"></v-radio>
                  </v-row>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="First Name" required></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Last Name" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="E-mail" required></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="E-mail" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="E-mail" required></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-radio-group>
                  <v-radio label="Radio One" value="one"></v-radio>
                  <v-radio label="Radio Two" value="two"></v-radio>
                  <v-radio label="Radio Three" value="three"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary">Submit</v-btn>
        <v-btn color="primary">Reset</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { useModalStore } from "@/stores/modal";

const { isOpen } = useModalStore();
</script>
<style lang=""></style>
