import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

export default function ImageGallery({ galleryList, onImageClick }) {
	return (
		<ul className={style.gallery_list}>
			{galleryList.map((galleryItem) => {
				return (
					<li className={style.gallery_list_item} key={galleryItem.id}>
						<ImageCard galleryItem={galleryItem} onImageClick={onImageClick} />
					</li>
				);
			})}
		</ul>
	);
}
