import CommentCard from "./CommentCard.jsx";
import {useState} from "react";

const comment1 = {
    id : 0,
    firstName: 'Evangeline',
    lastName: 'Mcintyre',
    avatar: 'https://via.placeholder.com/150',
    content: 'Nisi ipsum anim reprehenderit ex id laboris sunt deserunt quis. Id velit aliqua commodo reprehenderit nostrud sit elit exercitation mollit proident amet et amet. Do reprehenderit tempor tempor excepteur fugiat irure anim deserunt elit incididunt ut cillum dolore.'
}

const comment2 = {
    id: 1,
    firstName: 'Dudley',
    lastName: 'Gates',
    avatar: 'https://via.placeholder.com/150',
    content: 'Reprehenderit sunt enim dolore cillum. Proident Lorem commodo ea duis tempor ipsum dolore in magna aliquip reprehenderit esse. Consequat do fugiat veniam esse anim ullamco eu pariatur laboris ullamco velit excepteur ipsum. Ea consectetur quis anim fugiat fugiat veniam Lorem exercitation Lorem aliqua do.'
}


const ExerciseEight = () => {
    const [expandedComment, setExpandedComment] = useState(undefined)

    const toggleIsExpanded = (id) => {
        if (expandedComment === id) {
            setExpandedComment(undefined)
        }
        else{
            setExpandedComment(id)
        }
    }

    return (
        <>
            <CommentCard {...comment1} isExpanded={expandedComment === comment1.id}
                         toggleIsExpanded={() => toggleIsExpanded(comment1.id)}/>
            <hr/>
            <CommentCard {...comment2} isExpanded={expandedComment === comment2.id}
                         toggleIsExpanded={() => toggleIsExpanded(comment2.id)}/>
        </>
    )
}

export default ExerciseEight;
