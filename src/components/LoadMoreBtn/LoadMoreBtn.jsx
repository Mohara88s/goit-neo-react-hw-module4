import style from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ loadMoreBtnClick }) {
	return (
		<>
			<button
				type="button"
				onClick={() => loadMoreBtnClick()}
				className={style.button}
			>
				Load more
			</button>
		</>
	);
}
