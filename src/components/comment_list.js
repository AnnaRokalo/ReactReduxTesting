import React from 'react';
import {connect} from 'react-redux';

const CommentList = function (props) {
  const list = props.comments.map( comment => <li key={comment}>{comment}</li>);

  return (
    <div>
      <h4>Comments</h4>
      <ul className="comment-list">
        {list}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {comments: state.comments}
}

export default connect(mapStateToProps)(CommentList);

