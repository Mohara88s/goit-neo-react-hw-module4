import style from "./ImageCard.module.css";

export default function ImageCard({
	galleryItem: {
		id,
		urls: { small, regular },
		alt_description,
	},
}) {
	return (
		<div className={style.gallery_card}>
			<img src={small} alt={alt_description} className={style.gallery_img} />
		</div>
	);
}
