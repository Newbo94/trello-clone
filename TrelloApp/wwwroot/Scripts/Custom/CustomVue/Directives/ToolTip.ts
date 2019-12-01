import { DirectiveOptions } from "vue";

export const ToolTip: DirectiveOptions = {
	bind(el: HTMLInputElement, binding) {
		const item = el;
		const toolTip = document.createElement("span");

		toolTip.innerHTML = `<span class="card position-fixed"> ${binding.value}</span>`;
		item.addEventListener("mouseenter", function() {
			item.appendChild(toolTip);
		});
		item.addEventListener("mouseleave", function() {
			item.removeChild(toolTip);
		});
	},
};
