import React from 'react';
import { connect } from 'react-redux';
import CourseList from '../components/CourseList';
import CourseField from '../components/CourseField';
import changeCourseField from '../store/actions';

class ReduxLearn extends React.Component {

  render() {
    const { currentField, changeCourseField } = this.props;
    console.log(currentField)
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
          <CourseList currentField = {currentField}/>
          <CourseField currentField = {currentField}/>
        </div>
      </>
    )
  }
}

export default connect (
  function mapStateToProps (state) {
    return {
      currentField: state.courseTabList.currentField
    }
  },

  function mapDispatchToProps (dispatch) {
    return {
      changeCourseField: (field) => dispatch(changeCourseField(field))
    }
  }
)(ReduxLearn);
