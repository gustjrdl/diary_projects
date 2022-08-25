import React, { useState } from "react";
import axios from "axios";
import "../styles/DiaryBody.scss";
import DiaryPageUpdate from "./DiaryPageUpdate.jsx";
import DiaryPageDelete from "./DiaryPageDelete";
import DiaryEdit from "./DiaryEdit";
import DiaryList from "./DiaryList";
import DiaryMenu from "./DiaryMenu";

function DiaryBody({ diaryArticles, diaryDelete, onInsert }) {
  const [showDiary, setShowDiary] = useState([]);
  const [editToggle, setEditToggle] = useState(false);
  const [diaryText, setDiaryText] = useState({ title: "", text: "" });

  function onDiaryItemClick(id) {
    console.log(id);
    const getSelectedDiary = async (id) => {
      const data = await axios({
        url: `http://localhost:4000/diary/${id}`,
        method: "GET",
      });
      console.log(data.data);
      setShowDiary(data.data);
    };
    getSelectedDiary(id);
  }

  const { title, text } = diaryText; //비구조화 할당을 통해 값 추출

  function DiaryChange(e) {
    const { name, value } = e.target;
    // e.taget은 name, value 의 이벤트가 발생하면 name, value 값의 속성들을 얻을 수 있다.

    setDiaryText({
      ...diaryText, //...DiaryText(스프레드 연산자)로 데이터(Diary.title, Diary.text)를 불러오고 (객체복사),
      [name]: value,
    }); //name 키를 가진 값을 value 로 설정
  }

  function onSubmit(e) {
    e.preventDefault();
    onInsert(title, text);
    setDiaryText({
      title: "",
      text: "",
    });
  }

  function deleteDiaryItemClick(id) {
    diaryDelete(id);
    setShowDiary("");
  }

  function onEditToggle(id, title, text) {
    setEditToggle(!editToggle);
  }

  return (
    <div className="DiaryTemplate">
      <div className="bookdot">
        <div className="DiaryBody">
          <ul className="DiaryBodyLeft">
            <DiaryList
              diaryArticles={diaryArticles}
              onDiaryItemClick={onDiaryItemClick}
            ></DiaryList>
          </ul>
          <div className="DiaryBodyRight">
            <form className="DiaryPage">
              <input
                className="DiaryTitle"
                type="text"
                name="title"
                value={title}
                onChange={DiaryChange}
                placeholder="제목을 입력하세요"
              />
              <textarea
                className="DiaryText"
                spellCheck="false" //빨간 밑줄 없애기
                onChange={DiaryChange}
                name="text"
                value={text}
                cols="30"
                rows="10"
                placeholder="내용을 입력하세요"
              ></textarea>
            </form>
            <button className="onSubmitButton" onClick={onSubmit}>
              onSubmit
            </button>
          </div>
          {editToggle && <DiaryEdit />}
        </div>
      </div>
      <DiaryMenu></DiaryMenu>
    </div>
  );
}

export default DiaryBody;
