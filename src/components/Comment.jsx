import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleNewCommentChange() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        // setLikeCount(likeCount + 1);
        setLikeCount((state) => {
            return state + 1;

        })
    }
    
    

    return (
        <div className={styles.comment}>
             <Avatar hasBorder={false} src="https://github.com/matheususko.png" alt="" />

             <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Susko</strong>
                            <time title="1 de Julho às 12:28" dateTime="2022-07-01">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleNewCommentChange} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
             </div>

        </div>
    )
}