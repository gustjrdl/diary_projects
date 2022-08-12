import "../styles/DiaryList.scss";
import DiaryListItem from "./DiaryListItem";

function DiaryList() {
  return (
    <div className="DiaryList">
      <div> 일기 리스트 창 </div>
      <DiaryListItem></DiaryListItem>
    </div>
  );
}

export default DiaryList;
