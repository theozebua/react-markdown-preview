import { createContext, ReactNode, useState } from "react";
import { ModalContextProps, ModalContextType } from "../@types/modal-context";

export const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalProvider({ children }: ModalContextProps) {
	const [showModal, setShowModal] = useState(false);

	return (
		<ModalContext.Provider value={{ showModal, setShowModal }}>
			{children}
		</ModalContext.Provider>
	);
}
