import Author from "./Author.jsx";
import CommentContent from "./CommentContent.jsx";
import styled from "styled-components";

const Comments = styled.div`
  display: flex;
  flex-direction: column;
`

const ExpandText = styled.div`
  font-size: 110%;
  text-decoration: underline;
  color: #6b6b6f;
  cursor: pointer;
  margin: 0;
`

const CommentSection = ({firstName, lastName, content, isExpanded, setIsExpanded, toggleIsExpanded}) => {
    return (
        <Comments>
            <Author>{firstName} {lastName}</Author>
            <CommentContent>{isExpanded ? content : content.slice(0, 30)}</CommentContent>
            <ExpandText onClick={toggleIsExpanded}>{isExpanded ? "Show less" : "Show more"}</ExpandText>
        </Comments>
    )
}

export default CommentSection;
