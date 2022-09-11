import axios from 'axios'

// 创建一个axios实例
const instance = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 60 * 1000,
  responseType: "json",
})


instance.interceptors.response.use(
  response => {
    if (response.status === 200) {
      // switch (response.data.code) {
      //   case 1:
      //     notify({
      //       type: 'warn',
      //       title: '用户不存在'
      //     }); break;
      // }
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  }
)

// 导出
export default instance;