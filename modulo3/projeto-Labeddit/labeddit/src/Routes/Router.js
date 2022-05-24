import React from "react";
import {BrowserRouter, Routes , Route} from "react-router-dom";
import LoginPage from "../Pages/Login/LoginPage";
import CadastroPage from "../Pages/Cadastro/CadastroPage";
import FeedPage from "../Pages/Feed/FeedPage";
import PostPage from "../Pages/Post/PostPage";
import Header from "../Header/Header";




export const RouterPage = () => {

    return (
    <BrowserRouter>
        <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/cadastro" element={<div><Header/><CadastroPage/></div>} />
        <Route path="/feed" element={<div><Header/><FeedPage/></div>} />
        <Route path="/post/:postId" element={<div><Header/><PostPage/></div>} />
        <Route path="*" element={<div>Pagina não encontrada </div>} />
      </Routes>
    </BrowserRouter>
  );
};