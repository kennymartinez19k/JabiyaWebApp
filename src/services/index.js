import axios from 'axios'
import MeasurementUnitService from './MeasurementUnitService'
const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-type': 'application/json'
  }
})

export default {
  measurementUnitService: new MeasurementUnitService(axiosInstance),
}
