import { Remarkable } from "remarkable";
import hljs from "highlight.js";
import { renderInterface } from "../@types/remarkable";

function remarkable(): Remarkable {
	return new Remarkable({
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return hljs.highlight(lang, str).value;
				} catch (err) {}
			}

			try {
				return hljs.highlightAuto(str).value;
			} catch (err) {}

			return "";
		},
		html: true,
		typographer: true,
		breaks: true,
		xhtmlOut: true,
	});
}

export const render: renderInterface = (markdown) => {
	return remarkable().render(markdown);
};
