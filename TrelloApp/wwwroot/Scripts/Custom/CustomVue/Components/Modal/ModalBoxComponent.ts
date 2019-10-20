import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import globalService from "../../Services/GlobalService";

@Component
export default class ModalBox extends Vue {
  @Prop() isActive: boolean;
  @Prop() text: string;
  public shit: boolean = false;

  mounted() {}

  public closeModal() {
    this.$emit("close-modal", this.shit);
  }
}
