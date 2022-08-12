import "../styles/DiaryPage.scss";
import DiaryPageTitle from "./DiaryPageTitle";
import DiaryPageText from "./DiaryPageText";
import DiaryButton from "./DiaryButton";

function DiaryPage() {
  return (
    <div className="DiaryPage">
      <div> 일기 페이지 창 </div>
      <DiaryPageTitle></DiaryPageTitle>
      <DiaryPageText></DiaryPageText>
      <DiaryButton></DiaryButton>
    </div>
  );
}

export default DiaryPage;
