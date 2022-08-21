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

  const acibal = () => {
    console.log("진짜 개씨발 존나 뭐라도 좀 나와라");
  };

  const onInsert = (text) => {
    // const data = await axios({
    //   url: "http://localhost:4000",
    //   method: "POST",
    //   data: { text },
    // });
    console.log("이렇게는 나오는가");
  };

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = await axios({
  //         url: "http://localhost:4000",
  //         method: "GET",
  //       });

  //       setArticles(data.data);
  //       setIsLoading(false);
  //       // throw new Error("조회중 에러발생!!");
  //       // await new Promise((resolve, reject) => {
  //       //   setTimeout(() => {
  //       //     resolve()
  //       //   }, 3000)
  //       // })
  //     } catch (e) {
  //       setError(e);
  //     }
  //   };
  //   console.log(articles);
  //   getData();
  // }, []);

  // if (error) {
  //   return <>에러: {error.message}</>;
  // }

  // if (isLoading) {
  //   return <>Loading...</>;
  // }

  return (
    <DiaryTemplate>
      <DiaryBody onInsert={onInsert}></DiaryBody>
      <DiaryPage acibal={acibal} />
      <DiaryList></DiaryList>
    </DiaryTemplate>
  );
}

export default App;
