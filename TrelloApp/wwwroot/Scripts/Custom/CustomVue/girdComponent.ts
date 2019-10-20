import Vue from "vue";
import { Component } from "vue-property-decorator";
// @ts-ignore
import AccordionComponent from "./Components/Accordion/accordion.vue";
// @ts-ignore
import ModalBox from "./Components/Modal/ModalBox.vue";
// @ts-ignore
import CardBox from "./Components/Card/CardBox.vue";

import weatherService from "./Services/WeatherSerivce";

@Component({
  components: {
    accordion: AccordionComponent,
    modal: ModalBox,
    card: CardBox
  }
})
export default class GridComponents extends Vue {
  public isActive: boolean = false;
  public loading: boolean = true;

  mounted() {
    this.isLoading();
  }

  public isLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
  public listItems: any = [
    {
      title: "title somethin something",
      description:
        "somelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas",
      img:
        "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      content:
        "somelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas"
    },
    {
      title: "title somethin something",
      description:
        "somelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas",
      img:
        "https://images.pexels.com/photos/1622419/pexels-photo-1622419.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      content:
        "somelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas"
    },
    {
      title: "title somethin something",
      description:
        "somelkdsjfldjks fl flksdj flksf sdlf cacadsa dadaasdjajsdhjkasASD GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas",
      img:
        "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      content:
        "somelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas"
    }
  ];

  public closeModal() {
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

const el = document.querySelector("[data-grid-component]");

if (el !== null) {
  new GridComponents({
    el: el
  });
}
