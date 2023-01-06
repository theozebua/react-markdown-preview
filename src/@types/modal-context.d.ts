import { Dispatch, ReactNode, SetStateAction } from "react";

export type ModalContextType = {
	showModal: boolean;
	setShowModal: Dispatch<SetStateAction<boolean>>;
};

export type ModalContextProps = {
	children: ReactNode;
};
