import "../styles/DiaryBody.scss";
import DiaryPage from "./DiaryPage";
import DiaryList from "./DiaryList";

function DiaryBody() {
  return (
    <div className="DiaryBody">
      <div>다이어리 바디</div>
      <DiaryPage></DiaryPage>
      <DiaryList></DiaryList>
    </div>
  );
}

export default DiaryBody;
