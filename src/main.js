import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { md3 } from "vuetify/blueprints";
import VueApexCharts from "vue3-apexcharts";
// import "@fortawesome/fontawesome-free/css/all.css";
// import "@mdi/font/css/materialdesignicons.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { RiDeleteBinLine, RiEditBoxLine,IoCloseSharp } from "oh-vue-icons/icons";

import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

const app = createApp(App);

addIcons(RiDeleteBinLine, RiEditBoxLine,IoCloseSharp);
const vuetify = createVuetify({
  components,
  directives,
  blueprint: md3,
});

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(VueApexCharts);

app.component("EasyDataTable", Vue3EasyDataTable);
app.component("v-icon", OhVueIcon);

app.mount("#app");
