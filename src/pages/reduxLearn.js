import React from 'react';
import {getCourseList, getCourseFields} from '../models';
import CourseList from '../components/CourseList';
import CourseField from '../components/CourseField';

class ReduxLearn extends React.Component {

  render() {
    return (
      <div>
        <CourseList className="bg-pink-300" />
        <CourseField />
      </div>
    )
  }
}

export default ReduxLearn;
