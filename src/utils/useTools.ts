import { Dispatch, RefObject, SetStateAction } from "react";
import { handleConvertInterface, handleToolInterface } from "../@types/tools";

let textarea: HTMLTextAreaElement;
let setMarkdownInput: Dispatch<SetStateAction<string>>;

export const setTextarea = (ref: RefObject<HTMLTextAreaElement>) => {
	textarea = ref.current!;
};

export const setSetmarkdownInput = (
	setter: Dispatch<SetStateAction<string>>
) => {
	setMarkdownInput = setter;
};

export const handleTool: handleToolInterface = (e, type) => {
	e.preventDefault();
	textarea.focus();

	const start = textarea.selectionStart;
	const end = textarea.selectionEnd;
	let value = textarea.value.substring(start, end);

	if (start === end) {
		alert("No text selected.");

		return;
	}

	handleConvert(start, end, value, type);
};

const handleConvert: handleConvertInterface = (start, end, value, type) => {
	let convertedValue: string = "";
	let symbolLength: number = 0;

	switch (type) {
		case "bold":
			convertedValue = `**${value}**`;
			symbolLength = 2;
			break;

		case "italic":
			convertedValue = `_${value}_`;
			symbolLength = 1;
			break;

		case "underline":
			convertedValue = `<ins>${value}</ins>`;
			symbolLength = 5;
			break;

		case "strikethrough":
			convertedValue = `~~${value}~~`;
			symbolLength = 2;
			break;

		case "quote":
			convertedValue = `> ${value}`;
			symbolLength = 2;
			break;

		case "code":
			convertedValue = `\`${value}\``;
			symbolLength = 1;
			break;

		default:
			alert(`Type ${type} is unknown.`);
			break;
	}

	const newValue = `${textarea.value.substring(
		0,
		start
	)}${convertedValue}${textarea.value.substring(end)}`;
	textarea.value = newValue;
	setMarkdownInput(newValue);
	textarea.setSelectionRange(
		start + symbolLength,
		end + symbolLength,
		"forward"
	);
};
