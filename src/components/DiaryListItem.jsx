import React from "react";
import "../styles/DiaryListItem.scss";

function DiaryListItem({ diaryArticle, onClickHandler }) {
  // const [selectedDiary, setSelectedDiary] = useState(null);
  const { id, title, text, reg_date } = diaryArticle;
  return (
    <li className="DiaryListItem">
      <a
        href="#"
        onClick={() => {
          onClickHandler(id);
        }}
      >
        제목:{title}, <br />
        날짜:{reg_date}
      </a>
    </li>
  );
}

export default DiaryListItem;
