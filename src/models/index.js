import { axiosGet } from "../utils/request";

function getCourseFields () {
  return new Promise((resolve, reject) => {
    axiosGet({
      url: 'GetAllInfoGzip?id=1&page=0&type=pc',
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error);
      }
    })
  })
}

function getCourseList() {
  return new Promise((resolve, reject) => {
    axiosGet({
      url: 'posts',
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error);
      }
    })
  })
}

export {
  getCourseList,
  getCourseFields
}
