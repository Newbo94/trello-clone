import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class FocusTrap extends Vue {
	@Prop()
	public isActive: boolean;

	@Prop()
	public updateTrap: boolean;

	public _handlingFocus: any;

	mounted() {
		if (this.isActive == true) {
			this.trapFocus();
		}
	}

	updated() {
		if (this.isActive == true) {
			this.trapFocus();
		}
	}

	@Watch("updateTrap", { deep: true })
	public updateTrapFocus() {
		this.$nextTick(() => {
			this.trapFocus();
		});
	}

	public trapFocus() {
		const focusWrapper = this.$refs.focus as HTMLElement;
		const focusableEls: NodeList = focusWrapper.querySelectorAll(
			'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])',
		);

		if (focusableEls != null) {
			const focusEl: HTMLElement = focusableEls[0] as HTMLElement;
			focusEl.focus();

			this.unwire(focusWrapper);
			this.wire(focusWrapper, focusableEls);
		}
	}

	public handlingFocus(e: KeyboardEvent, focusableEls: NodeList) {
		const firstFocusableEl = focusableEls[0] as HTMLElement;
		const lastFocusableEl = focusableEls[
			focusableEls.length - 1
		] as HTMLElement;

		const KEYCODE_TAB = 9;
		const isTabPressed = e.key === "Tab" || e.keyCode === KEYCODE_TAB;

		if (!isTabPressed) {
			return;
		}

		if (e.shiftKey) {
			if (document.activeElement === firstFocusableEl) {
				lastFocusableEl.focus();
				e.preventDefault();
			}
		} else {
			if (document.activeElement === lastFocusableEl) {
				firstFocusableEl.focus();
				e.preventDefault();
			}
		}
	}

	wire(element: HTMLElement, focusableEls: any) {
		element.addEventListener(
			"keydown",
			(this._handlingFocus = (e: KeyboardEvent) =>
				this.handlingFocus(e, focusableEls)),
			false,
		);
	}
	unwire(element: HTMLElement) {
		element.removeEventListener("keydown", this._handlingFocus);
		this._handlingFocus = null;
	}
}
