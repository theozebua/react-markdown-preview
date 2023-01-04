import { createContext, ReactNode, useState } from "react";
import { ModalContextType } from "../@types/modal";

type Props = {
	children: ReactNode;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalProvider({ children }: Props) {
	const [showModal, setShowModal] = useState(false);

	return (
		<ModalContext.Provider value={{ showModal, setShowModal }}>
			{children}
		</ModalContext.Provider>
	);
}
