import axios from 'axios'

export default class Laminas {
  static get = slug => {
    if (slug) {
      return axios(`${process.env.REACT_APP_API}/laminas/v1/laminas/${slug}`)
    } else {
      console.log('chamou')
      return axios(`${process.env.REACT_APP_API}/laminas/v1/laminas`)
    }
  }
}