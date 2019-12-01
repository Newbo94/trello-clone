import Vue from "vue";
import { Component } from "vue-property-decorator";
// @ts-ignore
import AccordionComponent from "./Components/Accordion/accordion.vue";
// @ts-ignore
import ModalBox from "./Components/Modal/ModalBox.vue";
// @ts-ignore
import CardBox from "./Components/Card/CardBox.vue";

import axios from "axios";

@Component({
	components: {
		accordion: AccordionComponent,
		modal: ModalBox,
		card: CardBox,
	},
})
export default class GridComponents extends Vue {
	public loading: boolean = true;
	public openedModal: any = null;
	public api = "https://api.giphy.com/v1/gifs";
	private apiKey = "Hjoa9Rpvl6nX75xjLUQT1eCm4K1EMyH8";
	public randomGifImg: string = "";
	public tags = "funny";
	mounted() {
		this.isLoading();
		this.getRandomGif("random", this.tags);
	}

	public getRandomGif(endpoint: string, tags: string) {
		axios
			.get(`${this.api}/${endpoint}?api_key=${this.apiKey}&tag=${tags}`)
			.then(res => {
				this.randomGifImg = res.data.data.image_original_url;
			})
			.catch(err => {
				console.log(err);
			});
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
				"somelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas",
		},
		{
			title: "title somethin something",
			description:
				"somelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas",
			img:
				"https://images.pexels.com/photos/1622419/pexels-photo-1622419.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			content:
				"somelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas",
		},
		{
			title: "title somethin something",
			description:
				"somelkdsjfldjks fl flksdj flksf sdlf cacadsa dadaasdjajsdhjkasASD GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas",
			img:
				"https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
			content:
				"somelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhassomelkdsjfldjks fl flksdj flksf sdlfsomelkdsjfldjks fl flksdj flksf sdlf GDSFJKSD FSADGFKHSDJHFSJHGFSDJGFSJD Sjhajdagsdasgjhdas dahjd ajd ajhdgjasashdjhas",
		},
	];
}

const el = document.querySelector("[data-grid-component]");

if (el !== null) {
	new GridComponents({
		el: el,
	});
}
