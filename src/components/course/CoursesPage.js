import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      course: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
    const crs = this.state.course;
    crs.title = event.target.value;
    this.setState({course: crs});
  }

  onClickSave(){
    alert(`Saving ${this.state.course.title}`);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add course</h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
        <input type="submit" onClick={this.onClickSave} value="save" />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  //state.courses equals courses in line 2 of ...reducers/index.js
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);
