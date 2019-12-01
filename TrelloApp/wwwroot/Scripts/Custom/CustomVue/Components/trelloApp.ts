import Vue from "vue";
import { Component } from "vue-property-decorator";
import { AutoFocus } from "../Directives/FocusDirective";
import { ToolTip } from "../Directives/ToolTip";

@Component({
	directives: {
		AutoFocus,
		ToolTip,
	},
})
export default class TrelloApp extends Vue {
	/* To Do
	Creating new objects (boards, lists, cards).  
	 Drag and drop.
	 Handling inputs and validation.
	Client-side path: how to use local storage, save data to the local storage, and read data from the local storage.
	Routing.
	Server-side path: how to use databases, save data to the database, and read data from the database.
*/

	mounted() {}

	created() {
		console.log("trello app working");
	}
}

const el = document.querySelector("[data-trello-app]");

if (el !== null) {
	new TrelloApp({
		el: el,
	});
}

Vue;
