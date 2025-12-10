import { useState, useEffect } from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { fetchGalleryWithQuery } from "../../services/unsplash-api";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import style from "./App.module.css";

export default function App() {
	const [query, setQuery] = useState("");
	let [page, setPage] = useState(1);
	let [totalPages, setTotalPages] = useState(0);
	const [galleryList, setGalleryList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [modalIsOpen, setIsOpen] = useState(false);
	const [modalItem, setModalItem] = useState({});

	const handleSubmit = async (query_string) => {
		try {
			setPage(1);
			setQuery(query_string);
			setGalleryList([]);
			setLoading(true);
			const data = await fetchGalleryWithQuery(query_string, 1);
			if (data.results.length === 0) {
				throw new Error("No photos were found for your request.");
			}
			setGalleryList(data.results);
			setTotalPages(data.total_pages);
		} catch (error) {
			toast.error(error.message);
			setTotalPages(0);
		} finally {
			setLoading(false);
		}
	};
	const loadMoreBtnClick = async () => {
		try {
			setLoading(true);
			const currentPage = page + 1;
			const data = await fetchGalleryWithQuery(query, currentPage);
			setGalleryList([...galleryList, ...data.results]);
			setPage(currentPage);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	function openModal(id) {
		const objItem = galleryList.find((item) => item.id === id);
		if (objItem) {
			setModalItem(objItem);
			setIsOpen(true);
		}
	}

	function closeModal() {
		setIsOpen(false);
		setModalItem({});
	}

	useEffect(() => {
		if (modalIsOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [modalIsOpen]);

	return (
		<>
			<SearchBar onSubmit={handleSubmit} />
			<Section>
				<Container>
					{galleryList.length > 0 && (
						<ImageGallery galleryList={galleryList} onImageClick={openModal} />
					)}
					{page < totalPages && !loading && (
						<LoadMoreBtn loadMoreBtnClick={loadMoreBtnClick} />
					)}
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
			{modalIsOpen && (
				<ImageModal
					isOpen={modalIsOpen}
					onClose={closeModal}
					modalItem={modalItem}
					key={modalItem.id}
				/>
			)}
		</>
	);
}
