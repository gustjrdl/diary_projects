import "../styles/DiaryMenu.scss";

function DiaryMenu() {
  return (
    <div className="DiaryMenu">
      <button>일기 보기</button>
      <br />
      <button>일기 쓰기</button>
      <button>일기 수정하기</button>
      <button>일기 삭제하기</button>
    </div>
  );
}

export default DiaryMenu;
