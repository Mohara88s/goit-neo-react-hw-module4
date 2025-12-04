import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

export default function ImageGallery({ galleryList }) {
	return (
		<ul className={style.gallery_list}>
			{galleryList.map((galleryItem) => {
				return (
					<li className={style.gallery_list_item} key={galleryItem.id}>
						<ImageCard galleryItem={galleryItem} />
					</li>
				);
			})}
		</ul>
	);
}
