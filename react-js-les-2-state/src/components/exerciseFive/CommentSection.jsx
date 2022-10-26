import Author from "./Author.jsx";
import CommentContent from "./CommentContent.jsx";
import styled from "styled-components";

const Comments =styled.div`
       display: flex;
       flex-direction: column;
`

const CommentSection = ({firstName,lastName,content}) => {
    return (
        <Comments>
            <Author>{firstName} {lastName}</Author>
            <CommentContent>{content}</CommentContent>
        </Comments>
    )
}

export default CommentSection;
