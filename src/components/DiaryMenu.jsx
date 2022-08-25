import React from "react";
import "../styles/DiaryMenu.scss";

function DiaryMenu() {
  return (
    <div className="DiaryMenu">
      <button mi-1>일기 보기</button>
      <button mi-2>일기 쓰기</button>
      <button mi-3>일기 수정하기</button>
      <button mi-4>일기 삭제하기</button>
    </div>
  );
}

export default DiaryMenu;
