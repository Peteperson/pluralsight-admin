import React, { PropTypes } from 'react';

const CommentList = ({ comments }) => {
    console.log(comments.length);
    return (
        <div>FUCK YOU !!!!</div>
    );
};

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
};

export default CommentList;
