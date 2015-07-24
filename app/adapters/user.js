import ApplicationAdapter from './application';
//import config from 'client/config/environment';

export default ApplicationAdapter.extend({
  type: 'user',

  url: /*config.APP.API_PATH + */ '/users',

  /*fetchUrl: function(url) {
    const proxy = config.APP.API_HOST_PROXY;
    const host = config.APP.API_HOST;
    if (proxy && host) {
      url = url.replace(proxy, host);
    }
    return url;
  }*/
});
