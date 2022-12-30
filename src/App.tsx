import {
	faBold,
	faCode,
	faItalic,
	faQuoteRight,
	faStrikethrough,
	faUnderline,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	BookOpenIcon,
	WrenchScrewdriverIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { KeyboardEvent, MouseEvent, useEffect, useRef, useState } from "react";
import Container from "./components/utils/Container";
import Section from "./components/utils/Section";
import Modal from "./components/partials/Modal";
import useMarkdown from "./hooks/useMarkdown";

export default function App(): JSX.Element {
	const [markdownInput, setMarkdownInput] = useState("");
	const [showTools, setShowTools] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const div = useRef<HTMLDivElement>(null);
	const textarea = useRef<HTMLTextAreaElement>(null);
	const modalBody = useRef<HTMLDivElement>(null);
	const md = useMarkdown();

	const parse = (markdown: string) => {
		div.current!.innerHTML = md.render(markdown);
	};

	const resizeTextArea = () => {
		textarea.current!.style.height = "auto";
		textarea.current!.style.height = `${textarea.current!.scrollHeight + 20}px`;
	};

	const useTool = (e: MouseEvent, type: string) => {
		e.preventDefault();
		textarea.current!.focus();

		const start = textarea.current!.selectionStart;
		const end = textarea.current!.selectionEnd;
		let value = textarea.current!.value.substring(start, end);

		if (start === end) {
			alert("No text selected.");

			return;
		}

		convert(start, end, value, type);
	};

	const convert = (start: number, end: number, value: string, type: string) => {
		let convertedValue: string = "";

		switch (type) {
			case "bold":
				convertedValue = `**${value}**`;
				break;

			case "italic":
				convertedValue = `_${value}_`;
				break;

			case "underline":
				convertedValue = `<ins>${value}</ins>`;
				break;

			case "strikethrough":
				convertedValue = `~~${value}~~`;
				break;

			case "quote":
				convertedValue = `> ${value}`;
				break;

			case "code":
				convertedValue = `\`${value}\``;
				break;

			default:
				alert(`Type ${type} is unknown.`);
				break;
		}

		value = `${textarea.current!.value.substring(
			0,
			start
		)}${convertedValue}${textarea.current!.value.substring(end)}`;
		textarea.current!.value = value;
		setMarkdownInput(value);
	};

	const useTab = (e: KeyboardEvent) => {
		if (e.key === "Tab") {
			e.preventDefault();
			const start = textarea.current!.selectionStart;
			const end = textarea.current!.selectionEnd;

			textarea.current!.value = `${textarea.current!.value.substring(
				0,
				start
			)}\t${textarea.current!.value.substring(end)}`;
		}
	};

	const fetchMarkdownGuide = async () => {
		const res = await fetch("/assets/markdown/guide.md");
		const text = await res.text();

		modalBody.current!.innerHTML = md.render(text);
	};

	useEffect(() => {
		parse(markdownInput);
		resizeTextArea();
	}, [markdownInput]);

	useEffect(() => {
		fetchMarkdownGuide();
	}, []);

	return (
		<Container className="mb-16">
			<div className="mt-4 mb-16 min-w-full text-center">
				<h1 className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl">
					Markdown Preview
				</h1>
				<p className="md:text-lg lg:text-xl">
					Preview your markdown before committing it.
				</p>
			</div>
			<div className="mb-4 flex flex-col gap-4 md:flex-row">
				<div className="flex gap-4">
					<button
						className="relative max-w-fit rounded bg-white p-4 shadow transition hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
						data-toggle="tooltip"
						data-title="Guide"
						onClick={() => setShowModal(true)}
					>
						<BookOpenIcon className="h-6 w-6" />
					</button>
					<button
						className="relative max-w-fit rounded bg-white p-4 shadow transition hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
						data-toggle="tooltip"
						data-title="Tools"
						onClick={() => setShowTools(!showTools)}
					>
						<WrenchScrewdriverIcon className="h-6 w-6" />
					</button>
				</div>
				<div className={`tools ${showTools ? "show" : "hide"}`}>
					<button
						className="btn-tools"
						onClick={(e) => useTool(e, "bold")}
						data-toggle="tooltip"
						data-title="Bold"
					>
						<FontAwesomeIcon icon={faBold} />
					</button>
					<button
						className="btn-tools"
						onClick={(e) => useTool(e, "italic")}
						data-toggle="tooltip"
						data-title="Italic"
					>
						<FontAwesomeIcon icon={faItalic} />
					</button>
					<button
						className="btn-tools"
						onClick={(e) => useTool(e, "underline")}
						data-toggle="tooltip"
						data-title="Underline"
					>
						<FontAwesomeIcon icon={faUnderline} />
					</button>
					<button
						className="btn-tools"
						onClick={(e) => useTool(e, "strikethrough")}
						data-toggle="tooltip"
						data-title="Strikethrough"
					>
						<FontAwesomeIcon icon={faStrikethrough} />
					</button>
					<button
						className="btn-tools"
						onClick={(e) => useTool(e, "code")}
						data-toggle="tooltip"
						data-title="Code"
					>
						<FontAwesomeIcon icon={faCode} />
					</button>
					<button
						className="btn-tools"
						onClick={(e) => useTool(e, "quote")}
						data-toggle="tooltip"
						data-title="Quote"
					>
						<FontAwesomeIcon icon={faQuoteRight} />
					</button>
				</div>
			</div>
			<div className="flex flex-col gap-4 lg:flex-row">
				<Section>
					<textarea
						className="form-textarea w-full resize-none whitespace-nowrap rounded border-gray-300 focus:border-gray-400 focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:focus:border-gray-600 dark:focus:ring-gray-600 lg:min-h-screen"
						ref={textarea}
						autoFocus={true}
						onChange={(e) => setMarkdownInput(e.target.value)}
						onKeyDown={(e) => useTab(e)}
					></textarea>
				</Section>
				<Section>
					<div className="markdown" ref={div}></div>
				</Section>
			</div>

			<Modal
				header={
					<div className="flex items-center justify-between">
						<h5 className="text-lg font-bold md:text-2xl">Markdown Guide</h5>
						<button
							className="rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-700 md:p-2"
							onClick={() => setShowModal(false)}
						>
							<XMarkIcon className="h-6 w-6" />
						</button>
					</div>
				}
				footer={
					<button
						className="ml-auto block rounded transition hover:bg-gray-200 dark:hover:bg-gray-700 md:py-2 md:px-4"
						onClick={() => setShowModal(false)}
					>
						Close
					</button>
				}
				showModal={showModal}
			>
				<div className="markdown" ref={modalBody}></div>
			</Modal>
		</Container>
	);
}
