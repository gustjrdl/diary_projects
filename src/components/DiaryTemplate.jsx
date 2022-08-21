import "../styles/DiaryTemplate.scss";
import DiaryBody from "./DiaryBody";
import DiaryMenu from "./DiaryMenu";

function DiaryTemplate() {
  return (
    <div className="DiaryTemplate">
      <div className="DiaryDraw"></div>
      <DiaryBody></DiaryBody>
    </div>
  );
}

export default DiaryTemplate;
