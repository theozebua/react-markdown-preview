import { ReactNode } from "react";

export type LayoutProps = {
	children: ReactNode;
};

export type ModalProps = {
	children?: ReactNode;
	header?: ReactNode;
	footer?: ReactNode;
};

export type ContainerProps = {
	children: ReactNode;
	className?: string;
};

export type SectionProps = {
	children?: ReactNode;
	className?: string;
};
