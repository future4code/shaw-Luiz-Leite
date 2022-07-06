import { useNavigate } from "react-router-dom";
import Header from "../../componets/Header/Header";
import PostCard from "../../componets/PostCard/PostCard";
import { baseURL } from "../../Constants/url";
import { useProtectedPage } from "../../Hooks/UseProtectedPage";
import useRequestData from "../../Hooks/UseRequestData";
import { goToPostDetailsPage } from "../../Routes/cordinator";
import PostForm from "./PostForm";
import {
  CircularProgressLoading,
  FeedPageContainer,
  HorizontalLine,
  PageContainer,
  PostsListContainer
} from "./Styled";

function FeedPage({ rightButtonText, setRightButtonText }) {
  useProtectedPage();
  const navigate = useNavigate();
  const [posts, getPosts, isLoading] = useRequestData([], `${baseURL}/posts`);

  const onClickCard = (id) => {
    goToPostDetailsPage(navigate, id);
  };

  const postsList =
    posts &&
    posts.map((post) => {
      return (
        <PostCard
          key={post.id}
          post={post}
          goToDetailsPage={onClickCard}
          getPosts={getPosts}
        />
      );
    });

  return (
    <PageContainer>
      <FeedPageContainer>
        <Header
          rightButtonText={rightButtonText}
          setRightButtonText={setRightButtonText}
        />
        <PostForm getPosts={getPosts} />
        <HorizontalLine />
        <PostsListContainer>
          {isLoading && <CircularProgressLoading color="inherit" size={50} />}
          {postsList}
        </PostsListContainer>
      </FeedPageContainer>
    </PageContainer>
  );
}

export default FeedPage;
