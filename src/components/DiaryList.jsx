import "../styles/DiaryList.scss";
import DiaryListItem from "./DiaryListItem";

function DiaryList({ articles }) {
  return (
    <ul className="DiaryList">
      <div className="DiaryListLink"> 일기 리스트 창 </div>
      {/*<DiaryListItem></DiaryListItem> */}
    </ul>
  );
}

export default DiaryList;
