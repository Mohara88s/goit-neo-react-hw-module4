import { useState } from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { fetchGalleryWithQuery } from "../../services/unsplash-api";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import style from "./App.module.css";

export default function App() {
	const [galleryList, setGalleryList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [query, setQuery] = useState("");
	let page = 1;
	let totalPages = 0;

	const handleSubmit = async (query_string) => {
		try {
			page = 1;
			setQuery(query_string);
			setGalleryList([]);
			setLoading(true);
			const data = await fetchGalleryWithQuery(query_string, page);
			if (data.results.length === 0) {
				throw new Error("No photos were found for your request.");
			}
			setGalleryList(data.results);
			totalPages = data.total_pages;
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};
	const loadMoreBtnClick = async () => {
		try {
			page += 1;
			setLoading(true);
			console.log(page);
			const data = await fetchGalleryWithQuery(query, page);
			setGalleryList([...galleryList, ...data.results]);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<SearchBar onSubmit={handleSubmit} />
			<Section>
				<Container>
					<p>page:{page}</p>
					<p>totalPages:{totalPages}</p>
					{galleryList.length > 0 && <ImageGallery galleryList={galleryList} />}
					<LoadMoreBtn loadMoreBtnClick={loadMoreBtnClick} />
					<div className={style.loader_box}>
						<ClipLoader
							color="#1976d2"
							loading={loading}
							size={70}
							aria-label="Loading Spinner"
							data-testid="loader"
						/>
					</div>
					<Toaster position="top-right" reverseOrder={false} />
				</Container>
			</Section>
		</>
	);
}
