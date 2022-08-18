import "../styles/DiaryTemplate.scss";
import DiaryBody from "./DiaryBody";
import DiaryMenu from "./DiaryMenu";
import DiaryButton from "./DiaryButton";
import { children } from "react";

function DiaryTemplate(children) {
  return (
    <div className="DiaryTemplate">
      <DiaryBody></DiaryBody>
    </div>
  );
}

export default DiaryTemplate;
