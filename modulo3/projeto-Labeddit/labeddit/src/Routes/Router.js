import React from "react";
import {BrowserRouter, Routes , Route} from "react-router-dom";
import LoginPage from "../Pages/Login/LoginPage";
import CadastroPage from "../Pages/Cadastro/CadastroPage";
import FeedPage from "../Pages/Feed/FeedPage";
import PostPage from "../Pages/Post/PostPage";



export const RouterPage = () => {

    return (
    <BrowserRouter>
        <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage/>} />
        <Route path="/feed" element={<FeedPage/>} />
        <Route path="/post" element={<PostPage/>} />
        <Route path="*" element={<div>Pagina não encontrada </div>} />
      </Routes>
    </BrowserRouter>
  );
};