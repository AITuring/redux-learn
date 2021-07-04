import React from 'react';
import {getCourseList} from '../../models';
import CourseItem from './CourseItem';

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
    const { courseList } = this.state;
    return (
      <div className="w-6/12 flex-initial bg-gray-300">
        <div className="text-2xl text-center m-4">CourseList</div>
        {
          courseList.map(item => (
            <CourseItem
              key={item.id}
              item={item}
            />
          ))
        }
      </div>
    )
  }

}

export default CourseList;
