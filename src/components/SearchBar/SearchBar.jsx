import { IoSearch } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

import style from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const form = evt.target;
		const query = form.elements.query.value.trim();
		if (query === "") {
			toast.error("Please, enter a query!");
			return;
		}
		onSubmit(query);
	};
	return (
		<header className={style.header}>
			<form onSubmit={handleSubmit} className={style.form}>
				<input
					className={style.input}
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search images and photos"
					name="query"
				/>
				<button type="submit" className={style.button}>
					<IoSearch />
				</button>
				<Toaster position="top-right" reverseOrder={false} />
			</form>
		</header>
	);
}
