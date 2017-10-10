import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  courseRow(course, index){
    return (
      <div key={index}>{course.title}</div>
      );
  }

  render() {
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.func.isRequired,
  actions: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps){
  //state.courses equals courses in line 2 of ...reducers/index.js
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
      actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
