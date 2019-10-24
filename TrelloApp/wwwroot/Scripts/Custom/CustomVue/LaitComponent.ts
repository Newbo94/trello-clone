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
      description: "content slider/ Calender slider",
      img: null,
      video: "/Content/img/ededesign.mp4",
      content:
        "somelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas"
    },
    {
      title: "Customer steps",
      description: "Custom steps guide til lait processen",
      img: "/Content/img/Step-guide.png",
      video: null,
      content:
        "somelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas"
    },
    {
      title: "Teams page inspiration",
      description: "Teams page inspiration ",
      img: "/Content/img/Teamspage.png",
      video: null,
      content:
        "somelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas"
    },
    {
      title: "Play button styles",
      description: "Play knap inspiration",
      img: "/Content/img/Video-button.png",
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
