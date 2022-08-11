import React, { useRef, useState } from "react";
import TodoEdit from "./components/TodoEdit";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [articles, setArticles] = useState([]);
  const [insertToggle, setInsertToggle] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const nextId = useRef(1);

  const onInsert = (text) => { //입력함수
    const article = {
      id: nextId.current,
      text: text,
    //   checked: false,
    };
    setArticles((articles) => articles.concat(article));
    nextId.current++;
  };

  const onInsertToggle = () => { //수정 시 뜨는 팝업창
    setInsertToggle((prev) => !prev);
  };

//   const onToggle = (id) => { 클릭하면 checked 값이 !반전되는 함수
//     setArticles((articles) =>
//       articles.map((todo) =>
//         todo.id === id ? { ...todo, checked: !todo.checked } : todo
//       )
//     );
//   };

  const onUpdate = (id, text) => { //수정 함수
    setArticles((articles) =>
      articles.map((article) => (article.id === id ? { ...article, text } : article)) // 들어온 값이 맞으면 왼쪽 처리, 아니면 오른쪽 처리
    );
    onInsertToggle(); //수정 팝업창 닫아주기
  };

  const onRemove = (id) => { //삭제 함수
    setArticles(
      (articles) => articles.filter((article) => article.id !== id) //id가 다른 아이들만 기존 배열에 남아있다. id가 같은 녀석은 배열에서 빠진다.
    );
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        articles={articles}
        onRemove={onRemove}
        onToggle={onToggle}
        onInsertToggle={onInsertToggle}
        setSelectedArticle={setSelectedArticle}
      />
      {insertToggle && (
        <TodoEdit
          onInsertToggle={onInsertToggle}
          seletedTodo={seletedTodo}
          onUpdate={onUpdate}
        />
      )}
    </TodoTemplate>
  );
}

export default App;
