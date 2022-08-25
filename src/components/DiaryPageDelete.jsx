import "../styles/DiaryPage.scss";

function DiaryPageDelete({ showDiary, deleteDiaryItemClick }) {
  const { id, title, text, reg_date } = showDiary;
  return (
    <div className="DiaryPage">
      <div className="title">{title}</div>
      <div className="text">{text}</div>
      <button
        className="deleteButton"
        onClick={() => {
          deleteDiaryItemClick(id);
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default DiaryPageDelete;
