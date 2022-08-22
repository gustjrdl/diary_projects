import React, { useState } from "react";
import "../styles/DiaryPage.scss";
import axios from "axios";

function DiaryPage() {
  const [title, setTitle] = useState("");
  const [DiaryText, setDiaryText] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // onInsert(title);
    setTitle("");
  };

  return (
    <form onSubmit={onSubmit} className="DiaryPage">
      <input
        type="text"
        className="DiaryTitle"
        value={title}
        onChange={onChange}
        placeholder="제목을 입력하세요"
      />
      <button>+</button>

      {/* <form className="DiaryMain">
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
      </form> */}
    </form>
  );
}

export default DiaryPage;
