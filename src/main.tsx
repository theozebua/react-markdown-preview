import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppLayout from "./components/layouts/AppLayout";
import "./index.css";
import "../node_modules/highlight.js/styles/night-owl.css";
import ModalProvider from "./contexts/ModalContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ModalProvider>
			<AppLayout>
				<App />
			</AppLayout>
		</ModalProvider>
	</React.StrictMode>
);
