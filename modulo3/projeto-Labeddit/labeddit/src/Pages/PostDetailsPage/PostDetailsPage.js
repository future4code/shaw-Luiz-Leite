import axios from "axios";
import { useParams } from "react-router-dom";
import CommentCard from "../../componets/commentedCard/CommentedCard";
import Header from "../../componets/Header/Header";
import PostCard from "../../componets/PostCard/PostCard";
import { baseURL } from "../../Constants/url";
import { useProtectedPage } from "../../Hooks/UseProtectedPage";
import useRequestData from "../../Hooks/UseRequestData";
import CommentForm from "./CommentForm";
import {
  PageContainer,
  PostDetailsPageContainer,
  PostContainer,
  HorizontalLine,
  CircularProgressLoading
} from "./Styled";

function PostDetailsPage({ rightButtonText, setRightButtonText }) {
  useProtectedPage();
  const params = useParams();

  const [post, getPosts] = useRequestData([], `${baseURL}/posts`);
  const [postComments, getComments, isLoading] = useRequestData(
    [],
    `${baseURL}/posts/${params.id}/comments`
  );

  const handleCommentVote = (commentId, direction) => {
    const headers = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    };

    const body = {
      direction: direction
    };

    if (direction === 1) {
      axios
        .post(`${baseURL}/comments/${commentId}/votes`, body, headers)
        .then((res) => {
          console.log("entrei no post", res);
          getComments();
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else if (direction === -1) {
      axios
        .put(`${baseURL}/comments/${commentId}/votes`, body, headers)
        .then((res) => {
          console.log("entrei no put", res);
          getComments();
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else {
      axios
        .delete(`${baseURL}/comments/${commentId}/votes`, headers)
        .then((res) => {
          console.log("entrei no delete", res);
          getComments();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  const renderPost =
    post &&
    post.map((post) => {
      if (post.id === params.id) {
        return (
          <PostCard key={post.id} post={post} getPosts={getPosts} isDetails />
        );
      }
    });

  const commentsList =
    postComments &&
    postComments.map((comment) => {
      return (
        <CommentCard
          key={comment.id}
          comment={comment}
          handleCommentVote={handleCommentVote}
        />
      );
    });

  return (
    <PageContainer>
      <PostDetailsPageContainer>
        <Header
          rightButtonText={rightButtonText}
          setRightButtonText={setRightButtonText}
          showLeftButton
          isDetails
        />
        {isLoading && <CircularProgressLoading color="inherit" size={50} />}
        <div>
          <PostContainer>{renderPost}</PostContainer>
          <CommentForm id={params.id} getComments={getComments} />
          <HorizontalLine />
          <div>{commentsList}</div>
        </div>
      </PostDetailsPageContainer>
    </PageContainer>
  );
}

export default PostDetailsPage;
