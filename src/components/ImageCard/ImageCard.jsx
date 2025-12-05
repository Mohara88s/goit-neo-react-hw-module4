import style from "./ImageCard.module.css";

export default function ImageCard({
	galleryItem: {
		id,
		urls: { small },
		alt_description,
	},
	onImageClick,
}) {
	return (
		<div className={style.gallery_card} onClick={() => onImageClick(id)}>
			<img src={small} alt={alt_description} className={style.gallery_img} />
		</div>
	);
}
