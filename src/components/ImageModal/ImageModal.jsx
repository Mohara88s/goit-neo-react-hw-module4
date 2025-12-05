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
		with: "80%",
		height: "80%",
	},
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.75)", // темний бекдроп
	},
};

export default function ImageModal({ isOpen, onClose, modalItem }) {
	const {
		urls: { regular },
		alt_description,
	} = modalItem;
	console.log(modalItem);
	return (
		<Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
			<img src={regular} alt={alt_description} className={style.modal_img} />
		</Modal>
	);
}
