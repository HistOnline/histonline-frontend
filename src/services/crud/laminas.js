import axios from 'axios'

export default class Laminas {
  static get = id => {
    if (id) {
      return axios(`${process.env.REACT_APP_API}/laminas/v1/laminas/${id}`)
    } else {
      console.log('chamou')
      return axios(`${process.env.REACT_APP_API}/laminas/v1/laminas`)
    }
  }
}