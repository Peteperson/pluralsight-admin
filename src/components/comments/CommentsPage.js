import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commentActions from '../../actions/commentActions';
import CommentList from './CommentList';
import { browserHistory } from 'react-router';

class CommentsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCommentPage = this.redirectToAddCommentPage.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadComments();
    }

    redirectToAddCommentPage() {
        browserHistory.push('/comment');
    }

    commentRow(comment, index) {
        return (
            <div key={index}>{comment.title}</div>
        );
    }

    render() {
        const { comments } = this.props;

        return (
            <div>
                {comments && comments.length > 0 ? <div>
                    <h1>Comments</h1>
                    <input type="submit"
                        value="Add comment"
                        className="btn btn-primary"
                        onClick={this.redirectToAddCommentPage} />
                    {<CommentList comments={comments} />}
                </div> :
                    <div>
                        Please wait...
                    </div>
                }
            </div>

        );
    }
}

CommentsPage.propTypes = {
    comments: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        comments: state.comments
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(commentActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPage);
