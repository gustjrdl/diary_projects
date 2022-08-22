import React, { useState } from "react";
import "../styles/DiaryTemplate.scss";
import DiaryBody from "./DiaryBody";
import DiaryPage from "./DiaryPage";
import DiaryMenu from "./DiaryMenu";
import axios from "axios";

function DiaryTemplate({ onInsert }) {
  const [title, setTitle] = useState("");
  const [DiaryText, setDiaryText] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  // const DiaryonChange = (e) => {
  //   setTitle(e.target.value);
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(title);
    setTitle("");
  };
  // const DiaryonSubmit = (e) => {
  //   e.preventDefault();
  //   onDiaryInsert(DiaryText);
  //   setDiaryText("");
  // };

  return (
    <div className="DiaryTemplate">
      {/* <form action="">
        <textarea
          name="DiaryWriter"
          id=""
          cols="30"
          rows="10"
          DiaryonChange={DiaryonChange}
        ></textarea>
        <button DiaryonSubmit={DiaryonSubmit}>+</button>
      </form> */}

      <div className="DiaryDraw"></div>
      <DiaryBody></DiaryBody>
      <form action="">
        <textarea
          className="DiaryText"
          cols="30"
          rows="10"
          onChange={onChange}
        />
        <button onSubmit={onSubmit}></button>
      </form>
    </div>
  );
}

export default DiaryTemplate;
