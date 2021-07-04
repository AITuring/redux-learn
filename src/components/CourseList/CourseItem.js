import React from 'react';

class CourseItem extends React.Component {
    render() {
        const { item } = this.props;
        return (

            <div
                className="m-2 p-2 bg-purple-500 bg-opacity-25 rounded-lg hover:bg-opacity-75">
                <span className="font-bold text-blue-500 mr-2">
                    {item.id}:
                </span>
                <span className="text-black-600 hover:text-yellow-500">{item.title}</span>
            </div>
        )
    }

}

export default CourseItem;
