import React, { useState } from "react";
import "../styles/DiaryPage.scss";
import DiaryButton from "./DiaryButton";

function DiaryPage({ onInsert }) {
  const [title, setTitle] = useState("");
  const [DiaryText, setDiaryText] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(title, DiaryText);
    setTitle("");
  };

  return (
    <div className="DiaryPage">
      <input
        type="text"
        className="DiaryTitle"
        value={title}
        onChange={onChange}
      />
      <button onClick={onInsert}>+</button>

      <form className="DiaryMain">
        <textarea
          className="DiaryText"
          // spellcheck="false"
          name=""
          id=""
          // DiaryText={DiaryText}
          // onChange={onChange}
          // onSubmit={onSubmit}
          cols="30"
          rows="10"
          placeholder="내용입력창"
        ></textarea>
      </form>
    </div>
  );
}

export default DiaryPage;
