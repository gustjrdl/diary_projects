import React, { useRef, useState, useEffect } from "react";
import DiaryTemplate from "./components/DiaryTemplate";
function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState("");
  const [selectedArticle, setSelectedArticle] = useState("");

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

  return <DiaryTemplate></DiaryTemplate>;
}

export default App;
