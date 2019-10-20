import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class CardBoxComponent extends Vue {
  @Prop() item: any[];
  @Prop() loading: boolean;
  public isOpen: boolean = false;
  public styleObject: any = {
    transform: "translate(0px, 0px)"
  };

  private Open(e: any) {
    this.isOpen = !this.isOpen;
    let viewportOffset = e.target.getBoundingClientRect();

    if (this.isOpen == true) {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
      this.styleObject.transform = `translate(${viewportOffset.left * -1}px, ${viewportOffset.top * -1}px)`;
      console.log(viewportOffset.left);
    } else {
      document.body.style.top = "";
      document.body.style.position = "";
      this.styleObject = {
        transform: "translate(0px, 0px)"
      };
    }
  }

  mounted() {}
}
