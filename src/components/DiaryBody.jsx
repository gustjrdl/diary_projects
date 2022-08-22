import React from "react";
import "../styles/DiaryBody.scss";
import DiaryPage from "./DiaryPage";
import DiaryList from "./DiaryList";

function DiaryBody() {
  return (
    <div className="DiaryBody">
      <DiaryList></DiaryList>
      <DiaryPage></DiaryPage>
    </div>
  );
}
export default DiaryBody;
