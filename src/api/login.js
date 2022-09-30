import base from '@/api/plugins/base'
import axios from '@/api/plugins/request'

const login = {
  /**
   * 登录接口
   */
  login(query) {
    return axios.post(`${base.sq}/inde/login`,query)
  },
}

export default login