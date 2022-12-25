import Container from "../utils/Container";

export default function Footer(): JSX.Element {
	return (
		<footer className="bg-white shadow mt-auto lg:py-2">
			<Container>
				<div className="flex flex-col gap-y-4 lg:flex-row lg:justify-between">
					<span className="text-center md:text-lg lg:text-xl">
						&copy; {new Date().getFullYear()} Markdown Preview. All rights
						reserved.
					</span>
					<span className="text-center md:text-lg lg:text-xl">
						Powered by&nbsp;
						<a
							className="font-bold"
							href="https://theozebua.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							theozebua.com
						</a>
					</span>
				</div>
			</Container>
		</footer>
	);
}
