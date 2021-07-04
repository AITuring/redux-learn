import React from 'react';
import {getCourseList, getCourseFields} from '../models';
import CourseList from '../components/CourseList';
import CourseField from '../components/CourseField';

class ReduxLearn extends React.Component {

  render() {
    return (
      <>
        <div className="flex">
          <div
            className="bg-green-500 flex-initial w-6/12 text-2xl text-center p-4 cursor-pointer">
            CourseList
          </div>
          <div
            className="bg-green-400 flex-initial w-6/12 text-2xl text-center p-4 cursor-pointer">
            CourseField
          </div>
        </div>
        <div className="flex">
          <CourseList />
          <CourseField />
        </div>
      </>
    )
  }
}

export default ReduxLearn;
