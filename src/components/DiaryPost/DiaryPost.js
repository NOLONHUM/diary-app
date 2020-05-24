import React from 'react';

import classes from './DiaryPost.module.css';

const diaryPost = props => {
    let postContent = props.postContent;
    if (props.postContent.length > 150) {
        postContent = postContent.slice(0, 150) + '...';
    };
    
    return (
        <div className={classes.DiaryPost}>
            <div className={classes.Heading}>
                <h2>{props.title}</h2>
                <span>{props.date}</span>
            </div>
            <div className={classes.PostContent}>
                <p>{postContent}</p>
            </div>
        </div>
    );
};

export default diaryPost;