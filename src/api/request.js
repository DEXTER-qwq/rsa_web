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
      //   case 2:
      //     notify({
      //       type: 'warn',
      //       title: '密码错误'
      //     });break;
      //   case 3:
      //     notify({
      //       type: 'warn',
      //       title: '未知错误，请联系管理员'
      //     });break;
      //   case 4:
      //     notify({
      //       type: 'warn',
      //       title: '登录过期，请重新登录'
      //     });break;
      //   case 5:
      //     notify({
      //       type: 'warn',
      //       title: '没有相应权限'
      //     });break;
      //   case 6:
      //     notify({
      //       type: 'warn',
      //       title: '查询页数超出范围'
      //     });break;
      //   case 7:
      //     notify({
      //       type: 'warn',
      //       title: '帐号已注册'
      //     });break;
      //   case 8:
      //     notify({
      //       type: 'warn',
      //       title: '请重新登录'
      //     });break;
      //   case 9:
      //     notify({
      //       type: 'warn',
      //       title: '指定ID不存在'
      //     });break;
      //   case 10:
      //     notify({
      //       type: 'warn',
      //       title: '该问题类型已存在'
      //     });break;
      //   case 11:
      //     notify({
      //       type: 'warn',
      //       title: '指定问题类型不存在'
      //     });break;
      // }
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  }
)

// 导出
export default instance;