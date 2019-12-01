import Vue from "vue";
import { Component } from "vue-property-decorator";
// @ts-ignore
import FocusTrap from "./FocusTrap/FocusTrap.vue";
// @ts-ignore
import Modal from "./Modal/ModalBox.vue";
@Component({
	components: { focustrap: FocusTrap, modal: Modal },
})
export default class FormComponent extends Vue {
	public activePage1: boolean = true;
	public activePage2: boolean = false;
	public loadedData: boolean = false;

	public updateTrap: boolean = false;

	public timeFunction() {
		setTimeout(() => {
			this.loadedData = true;
			this.updateTrap = true;
		}, 3000);
	}

	public activePage() {
		this.activePage1 = !this.activePage1;
		this.activePage2 = !this.activePage2;
		this.updateTrap = true;
	}

	mounted() {
		this.timeFunction();
	}
}

const el = document.querySelector("[data-form-component]");

if (el !== null) {
	new FormComponent({
		el: el,
	});
}
