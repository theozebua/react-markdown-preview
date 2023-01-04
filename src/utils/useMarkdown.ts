import { Remarkable } from "remarkable";
import hljs from "highlight.js";

export default function useMarkdown(): Remarkable {
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
