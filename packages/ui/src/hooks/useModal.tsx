import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import { useOverlayTrigger } from "react-aria";
import { useOverlayTriggerState } from "react-stately";

import { Modal } from "../components/Modal/Modal";

export interface ModalProps {
	close: () => void;
}

interface UseModalArgs {
	children: ({ close }: ModalProps) => JSX.Element;
	title?: string;
}

export const useModal = ({ children, title, ...props }: UseModalArgs) => {
	const state = useOverlayTriggerState({});

	const triggerProps = {
		onPress: state.open,
	};

	return {
		triggerProps,
		Modal: () => (
			<AnimatePresence>
				{state.isOpen && (
					<Modal
						state={state}
						title={title}
					>
						{children({ close: state.close })}
					</Modal>
				)}
			</AnimatePresence>
		),
	};
};
