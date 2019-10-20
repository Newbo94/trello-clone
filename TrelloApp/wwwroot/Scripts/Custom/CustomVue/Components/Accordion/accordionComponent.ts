import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class AccordionComponent extends Vue {
  mounted() {
    console.log("working");
  }
}
