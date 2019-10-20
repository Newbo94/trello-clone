import Vue from "vue";
import { Component } from "vue-property-decorator";
import globalService from "./Services/GlobalService";

@Component({})
export default class OvelayComponent extends Vue {
  public isActive: boolean = false;

  mounted() {}

  created() {
    globalService.$on("changeState", (data: boolean) => {
      console.log(data);
    });
  }
}

const el = document.querySelector("[data-overlay-component]");

if (el !== null) {
  new OvelayComponent({
    el: el
  });
}
