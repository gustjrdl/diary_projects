import "../styles/DiaryBody.scss";
import DiaryPage from "./DiaryPage";
import DiaryList from "./DiaryList";

function DiaryBody({ onInsert }) {
  return (
    <div className="DiaryBody">
      <DiaryList></DiaryList>
      <DiaryPage onInsert={onInsert}></DiaryPage>
    </div>
  );
}
export default DiaryBody;
