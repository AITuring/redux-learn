import axios from 'axios';

import { BASE_URL } from '../config/config';

function axiosGet(options) {
  axios(BASE_URL + options.url).then((res) => {
    options.success(res.data);
  }).catch((err) => {
    options.error(err);
  })
}

export {
  axiosGet
}
