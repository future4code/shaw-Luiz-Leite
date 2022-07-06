import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FeedPage from "../Pages/FeedPage/FeedPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import PostDetailsPage from "../Pages/PostDetailsPage/PostDetailsPage";
import SignUpPage from "../Pages/SignupPage/SignupPage";

function Router({rightButtonText, setRightButtonText}) {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<FeedPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>}/>
                <Route path="/login" element={<LoginPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>}/>
                <Route path="/signup" element={<SignUpPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>}/>
                <Route path="/post/:id" element={<PostDetailsPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
