import Modal from "react-modal";
import style from "./ImageModal.module.css";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		width: "auto",
		height: "auto",
		maxWidth: "90%",
		maxHeight: "90%",
		overflow: "hidden",
		padding: "0",
		border: "none",
		outline: "none",
		boxShadow: "none",
		background: "transparent",
		caretColor: "transparent",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.75)",
		zIndex: 100,
		overflow: "hidden",
	},
};

export default function ImageModal({ isOpen, onClose, modalItem }) {
	const {
		urls: { regular },
		alt_description,
	} = modalItem;
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			style={customStyles}
			focusAfterRender={false}
		>
			<img
				src={regular}
				alt={alt_description}
				className={style.modal_img}
				tabIndex="-1"
			/>
		</Modal>
	);
}
