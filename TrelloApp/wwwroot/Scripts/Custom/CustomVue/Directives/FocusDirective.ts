import { DirectiveOptions } from "vue";

export const AutoFocus: DirectiveOptions = {
	inserted(el: HTMLInputElement) {
		el.focus();
	}
};
