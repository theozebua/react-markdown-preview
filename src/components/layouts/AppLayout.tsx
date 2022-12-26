import { ReactNode } from "react";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";

interface Props {
	children: ReactNode;
}

export default function AppLayout({ children }: Props): JSX.Element {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
