import React from 'react';
import {getCourseList} from '../../models'

class CourseList extends React.Component {

  state = {
    courseList: []
  }

  async getData() {
    const courseData = await getCourseList();
    this.setState({
      courseList: courseData
    })
  }

  componentDidMount() {
    this.getData()
  }

  render () {
    return (
      <div>CourseList</div>
    )
  }

}

export default CourseList;
