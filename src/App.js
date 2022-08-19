import React, { useRef, useState, useEffect } from "react";
import DiaryTemplate from "./components/DiaryTemplate";
import DiaryBody from "./components/DiaryBody";
import DiaryList from "./components/DiaryList";
import DiaryPage from "./components/DiaryPage";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState("");
  const [selectedArticle, setSelectedArticle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const onInsert = async (title, text) => {
    // try {
    //   const data = await axios({
    //     url: `http//localhost:4000/diary/insert`,
    //     method: "POST",
    //     params: { title, text },
    //   });
    //   setArticles(data.data);
    // } catch (e) {
    //   setError(e);
    // }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4000",
          method: "GET",
        });

        setArticles(data.data);
        setIsLoading(false);
        // throw new Error("조회중 에러발생!!");
        // await new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     resolve()
        //   }, 3000)
        // })
      } catch (e) {
        setError(e);
      }
    };
    console.log(setArticles);
    getData();
  }, []);

  if (error) {
    return <>에러: {error.message}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  const onChange = (e) => {
    setArticle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (article === "") {
      alert(" 한 글자 이상 입력해주세요. ");
      return;
    }
    setArticles((currentArray) => []);
  };

  return (
    <DiaryTemplate>
      <DiaryPage
        article={article}
        articles={articles}
        setArticle={setArticle}
        setArticles={setArticles}
      ></DiaryPage>
      <DiaryList>articles={articles}</DiaryList>
    </DiaryTemplate>
  );
}

export default App;
