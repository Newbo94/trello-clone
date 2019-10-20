import Vue from "vue";
import { Component } from "vue-property-decorator";
// @ts-ignore
import AccordionComponent from "./Components/Accordion/accordion.vue";
// @ts-ignore
import CardBox from "./Components/Card/CardBox.vue";

@Component({
  components: {
    accordion: AccordionComponent,
    card: CardBox
  }
})
export default class LaitComponents extends Vue {
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
      title: "Edesign Interactive",
      description: "",
      img: null,
      video: "/Content/img/ededesign.mp4",
      content:
        "somelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas"
    },
    {
      title: "title somethin something",
      description:
        "somelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas",
      img:
        "https://images.pexels.com/photos/1622419/pexels-photo-1622419.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      video: null,
      content:
        "somelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas"
    },
    {
      title: "title somethin something",
      description:
        "somelkdsjfldjks fl flksdj flksf sdlf cacadsa dadaasdjajsdhjkasASD GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas",
      img:
        "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      video: null,
      content:
        "somelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas"
    }
  ];
}

const el = document.querySelector("[data-lait-component]");

if (el !== null) {
  new LaitComponents({
    el: el
  });
}
