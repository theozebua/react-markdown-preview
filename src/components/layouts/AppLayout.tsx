import { ReactNode } from "react";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";

interface Props {
	children: ReactNode;
}

export default function AppLayout({ children }: Props): JSX.Element {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
