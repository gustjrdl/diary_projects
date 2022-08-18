import "../styles/DiaryMenu.scss";
import "../styles/DiaryButton.scss";

function DiaryMenu() {
  return (
    <div className="DiaryButton">
      <div className="mi-1">일기쓰기</div>
      <div className="mi-2">읽기</div>
      <div className="mi-3">수정하기</div>
      <div className="mi-4">삭제하기</div>
    </div>
  );
}

export default DiaryMenu;
