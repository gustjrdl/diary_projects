import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import DiaryTemplate from "./components/DiaryTemplate";
import DiaryBody from "./components/DiaryBody";
import DiaryList from "./components/DiaryList";

function App() {
  const [diaryArticles, setDiaryArticles] = useState([]);

  // const onChange = (e) => {
  //   setArticle(e.target.value);
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if (article === "") {
  //     alert(" 한 글자 이상 입력해주세요. ");
  //     return;
  //   }
  //   setArticles((currentArray) => []);
  // };

  const diaryDelete = async (id) => {
    const data = await axios({
      url: `http://localhost:4000/diary/delete/${id}`,
      method: "DELETE",
    });
    console.log(data.data);
    setDiaryArticles(data.data);
  };

  const onInsert = async (title, text) => {
    const data = await axios({
      url: "http://localhost:4000/diary/create",
      method: "POST",
      data: { title, text },
    });
    setDiaryArticles(data.data);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: "http://localhost:4000",
        method: "GET",
      });
      console.log(data.data, "저는 유즈이펙트입니다");
      setDiaryArticles(data.data);
    };

    getData();
  }, []);

  return (
    <div>
      {/* <DiaryTemplate></DiaryTemplate> */}
      <DiaryBody
        diaryArticles={diaryArticles}
        diaryDelete={diaryDelete}
        onInsert={onInsert}
      ></DiaryBody>
    </div>
  );
}

export default App;
