import base from '@/api/plugins/base'
import axios from '@/api/plugins/request'

export function getAllCourse () {
  return axios({
    url: base.path + '/course/all',
    method: 'get'
  })
}
