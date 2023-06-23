import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import AuthorDetail from "./authordetail/AuthorDetail";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Context from "./Context";
import reducer from "./reducer";

function App() {

  const [context, dispatch] = useReducer(reducer, {
    width: 30,
    searchKeyword: '',
    page: 1,
  })

  return (
    <BrowserRouter>
      <Context.Provider value={ {context, dispatch} }>
        <div className="main">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/author/:author" element={<AuthorDetail />} />
          </Routes>
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
