import Avatar from "./Avatar.jsx";
import CommentSection from "./CommentSection.jsx";
import styled from "styled-components";

const Card = styled.div `
  display: flex;
  flex-direction: row;
  background-color: #18191A;
  color: white;
`

const CommentCard = ({avatar, ...rest}) => {
    return (
        <Card>
            <Avatar src={avatar}/>
            <CommentSection {...rest}/>
        </Card>
    )
}

export default CommentCard;
