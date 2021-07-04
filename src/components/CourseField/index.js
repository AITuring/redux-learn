import React from 'react';
import { getCourseFields } from '../../models';
import FieldItem from './FieldItem';

class CourseField extends React.Component {
  state = {
    fieldData: [],
  }

  async getFieldData() {
    const courseFieldData  = await getCourseFields();
      this.setState({
        fieldData: courseFieldData
      });
  }

  componentDidMount() {
    this.getFieldData();
  }

  render () {
    const { fieldData } = this.state;
    return (
      <div className="bg-yellow-300 flex-initial w-6/12" >
        {/* <div className="text-2xl text-center m-4">CourseField</div> */}
        <FieldItem
          key={'-1'}
          item={
            {
              id: '共计',
              title: fieldData.length,
              userId: fieldData.length
            }
          }
        />
        {
          fieldData.map((item) => {
            return (
              <FieldItem
                key={item.id}
                item={item}
              />
            )
          })
        }
      </div>
    )
  }
}

export default CourseField;
