import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppLayout from "./components/layouts/AppLayout";
import "./index.css";
import "../node_modules/highlight.js/styles/night-owl.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AppLayout>
			<App />
		</AppLayout>
	</React.StrictMode>
);
