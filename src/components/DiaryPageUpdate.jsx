import "../styles/DiaryPage.scss";

function DiaryPageUpdate({ showDiary, onEditToggle }) {
  const { id, title, text, reg_date } = showDiary;
  return (
    <div className="DiaryPage">
      <div className="title">{title}</div>
      <div className="text">{text}</div>
      <button
        className="updateButton"
        onClick={() => {
          onEditToggle();
        }}
      >
        수정
      </button>
    </div>
  );
}

export default DiaryPageUpdate;
