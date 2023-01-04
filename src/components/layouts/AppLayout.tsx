import { LayoutProps } from "../../@types/props";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";

export default function AppLayout({ children }: LayoutProps): JSX.Element {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
