export interface handleToolInterface {
	(e: MouseEvent<HTMLButtonElement>, type: string): void;
}

export interface handleConvertInterface {
	(start: number, end: number, value: string, type: string): void;
}
