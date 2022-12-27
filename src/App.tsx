import {
	faBold,
	faCode,
	faItalic,
	faQuoteRight,
	faStrikethrough,
	faUnderline,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { Remarkable } from "remarkable";
import hljs from "highlight.js";
import Container from "./components/utils/Container";
import Section from "./components/utils/Section";

export default function App(): JSX.Element {
	const [markdownInput, setMarkdownInput] = useState("");
	const div = useRef<HTMLDivElement>(null);
	const textarea = useRef<HTMLTextAreaElement>(null);

	const remarkable = new Remarkable({
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

	const parse = (markdown: string) => {
		div.current!.innerHTML = remarkable.render(markdown);
	};

	const resizeTextArea = () => {
		textarea.current!.style.height = "auto";
		textarea.current!.style.height = `${textarea.current!.scrollHeight + 20}px`;
	};

	useEffect(() => {
		parse(markdownInput);
		resizeTextArea();
	}, [markdownInput]);

	return (
		<Container className="mb-16">
			<div className="min-w-full text-center mt-4 mb-16">
				<h1 className="font-extrabold lg:text-6xl text-4xl md:text-5xl mb-4">
					Markdown Preview
				</h1>
				<p className="md:text-lg lg:text-xl">
					Preview your markdown before committing it.
				</p>
			</div>
			<div className="mb-4 flex gap-4 md:flex-row flex-col">
				<button className="bg-white shadow max-w-fit hover:bg-gray-200 rounded p-4">
					<WrenchScrewdriverIcon className="w-6 h-6" />
				</button>
				<div className="grid grid-cols-6 rounded shadow gap-y-4 max-w-fi bg-white">
					<button className="btn-tools">
						<FontAwesomeIcon icon={faBold} />
					</button>
					<button className="btn-tools">
						<FontAwesomeIcon icon={faItalic} />
					</button>
					<button className="btn-tools">
						<FontAwesomeIcon icon={faUnderline} />
					</button>
					<button className="btn-tools">
						<FontAwesomeIcon icon={faCode} />
					</button>
					<button className="btn-tools">
						<FontAwesomeIcon icon={faQuoteRight} />
					</button>
					<button className="btn-tools">
						<FontAwesomeIcon icon={faStrikethrough} />
					</button>
				</div>
			</div>
			<div className="flex gap-x-4 flex-col gap-y-4 lg:flex-row">
				<Section>
					<textarea
						className="w-full whitespace-nowrap lg:min-h-screen form-textarea rounded border-gray-300 focus:border-gray-400 focus:ring-gray-400"
						ref={textarea}
						autoFocus={true}
						onChange={(e) => setMarkdownInput(e.target.value)}
					></textarea>
				</Section>
				<Section>
					<div
						className="prose prose-sky break-words prose-a:inline-block dark:prose-invert prose-headings:border-b-2 prose-headings:pb-4"
						ref={div}
					></div>
				</Section>
			</div>
		</Container>
	);
}
