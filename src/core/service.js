import axios from 'axios';

export default class API {
  /**
   * Helps create custom "axios" instance
   * Which allow inject common options to request, response
   * @param {*} _options
   */
  constructor(_options = {}) {
    if (!this.axios) {
      this.axios = axios.create({
        baseURL: 'http://localhost:3232/api/functions/',
        responseType: 'json',
        headers: {
         'X-Parse-Application-Id': 'hHdDuClDuzXuRxnYmWOzNZ4qxZW7MVHq61u',
         'X-Parse-REST-API-Key': 'B9ncAZ4bTyY8RYyKvNQOzwrRTo27ds0BINr'
    }
      });
      this.axios.defaults.params = {};
      this.axios.defaults.headers.common.Accept = '*/*';
    }
  }
  /**
   * @returns  {Promise}
   */
  post(action, params) {
    const token = localStorage.getItem('token') || '';

    if (token) {
      this.axios.defaults.headers.common['X-Parse-Session-Token'] = `${token}`;
    }

    return this.axios
      .request(action, {
        method: 'post',
        data: params
      })
      .then(response => {
        if (
          response.status < 200 ||
          response.status >= 300 ||
          response.data.status === 'F' ||
          response.data.status === 'NotAuthorized' ||
          (response.data && response.data.sessionToken && !response.data.sessionToken)
        ) {
          localStorage.removeItem('token');
          window.location.reload();
          throw new Error(response.message || response.statusText || 'Session Timeout');
        }
        return {
          data: response.data.result
        };
      })
      .catch(error => {
        if (error.response && error.response.data) {
          throw error.response.data;
        } else {
          throw error;
        }
      });
  }
}
