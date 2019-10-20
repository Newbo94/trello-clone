import Vue from "vue";
import { Component } from "vue-property-decorator";
// @ts-ignore
import ModalBox from "./Components/Modal/ModalBox.vue";

@Component({
  components: {
    modalbox: ModalBox
  }
})
export default class PrivacyComponents extends Vue {
  public isActive: boolean = false;
  public message: Object = "";

  mounted() {}

  public modalClose() {
    this.isActive = false;
  } 

  public activeModal() {
    if (this.isActive) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
}

const el = document.querySelector("[data-privacy-component]");

if (el !== null) {
  new PrivacyComponents({
    el: el
  });
}
