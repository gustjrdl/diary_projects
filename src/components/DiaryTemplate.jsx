import "../styles/DiaryTemplate.scss";
import DiaryBody from "./DiaryBody";
import DiaryMenu from "./DiaryMenu";

function DiaryTemplate() {
  return (
    <div className="DiaryTemplate">
      <div>HOME</div>왜 안뿌려져~~~~~~~~~~~~~~~~~
      <DiaryBody></DiaryBody>
      <DiaryMenu></DiaryMenu>
    </div>
  );
}

export default DiaryTemplate;
