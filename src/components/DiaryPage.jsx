import React, { useState } from "react";
import "../styles/DiaryPage.scss";
import axios from "axios";

function DiaryPage() {
  const [DiaryText, setDiaryText] = useState({ title: "", text: "" });

  const onInsert = async (title, text) => {
    const data = await axios({
      url: "http://localhost:4000/diary/create",
      method: "POST",
      data: { title, text },
    });
  };

  const DiaryChange = (e) => {
    const { name, value } = e.target;
    setDiaryText({ ...DiaryText, [name]: value });
    console.log(DiaryText);
  };

  // const getValue = (e) => {
  //   const { name, value } = e.target;
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  //   console.log(values);
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(DiaryText.title, DiaryText.text);
    setDiaryText("");
  };

  return (
    <div>
      <form className="DiaryPage">
        <input
          name="title"
          type="text"
          className="DiaryTitle"
          onChange={DiaryChange}
          placeholder="제목을 입력하세요"
        />
        <textarea
          spellCheck="true"
          onChange={DiaryChange}
          className="DiaryText"
          name="text"
          id=""
          cols="30"
          rows="10"
          placeholder="내용입력창"
        ></textarea>
      </form>
      <button onClick={onSubmit}>onSubmit</button>
    </div>
  );
}

export default DiaryPage;
