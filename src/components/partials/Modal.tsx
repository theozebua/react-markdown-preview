import { ReactNode, useContext, useEffect, useRef } from "react";
import { ModalContextType } from "../../@types/modal";
import { ModalContext } from "../../contexts/ModalContext";
import Overlay from "../utils/Overlay";

interface Props {
	children?: ReactNode;
	header?: ReactNode;
	footer?: ReactNode;
}

export default function Modal({
	children,
	header,
	footer,
}: Props): JSX.Element {
	const { showModal, setShowModal } = useContext(
		ModalContext
	) as ModalContextType;
	const overlay = useRef<HTMLDivElement>(null);

	useEffect(() => {
		overlay.current!.addEventListener("click", () => setShowModal(false));
		document.addEventListener(
			"keydown",
			(e) => e.key === "Escape" && setShowModal(false)
		);
	}, []);

	return (
		<>
			<Overlay refProp={overlay} showModal={showModal} />
			<div
				className={`fixed top-1/2 left-1/2 z-50 flex h-[46rem] max-h-96 w-[64rem] max-w-[90%] -translate-y-1/2 -translate-x-1/2 flex-col overflow-hidden rounded bg-white transition duration-300 dark:bg-gray-900 md:max-w-2xl lg:max-h-[46rem] lg:max-w-4xl ${
					showModal
						? "pointer-events-auto visible scale-100 opacity-100"
						: "pointer-events-none invisible scale-50 opacity-0"
				}`}
				aria-hidden={true}
				role={"dialog"}
				tabIndex={-1}
			>
				<div className="bg-gray-100 p-4 shadow dark:bg-gray-800">{header}</div>
				<div className="my-auto h-full overflow-y-auto p-4">{children}</div>
				<div className="bg-gray-100 p-4 shadow dark:bg-gray-800">{footer}</div>
			</div>
		</>
	);
}
