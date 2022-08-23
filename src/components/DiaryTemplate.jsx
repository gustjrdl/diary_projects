import React, { useState } from "react";
import "../styles/DiaryTemplate.scss";
import DiaryBody from "./DiaryBody";
import DiaryPage from "./DiaryPage";
import DiaryMenu from "./DiaryMenu";

function DiaryTemplate() {
  const [title, setTitle] = useState("");
  const [DiaryText, setDiaryText] = useState("");

  return (
    <div className="DiaryTemplate">
      <div className="DiaryDraw"></div>
      <DiaryPage></DiaryPage>
    </div>
  );
}

export default DiaryTemplate;
