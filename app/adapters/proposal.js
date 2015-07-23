import ApplicationAdapter from 'ember-jsonapi-resources/adapters/application';
import AuthorizationMixin from '../mixins/authorization';
import config from '../config/environment';

//Hack: override the native fetch using the ember-fetch, ember-fetch play nicely with Pretender.
import fetch from 'fetch';
window.fetch = fetch;

export default ApplicationAdapter.extend(AuthorizationMixin, {
  type: 'proposal',

  url: config.APP.API_HOST +  'proposals',

  fetchAuthorizationHeader(options) {
    if (options.headers[this.authorizationHeaderField]) {
      return;
    } else {
      const credential = this.get('authorizationCredential');
      if (credential && this.authorizationHeaderField) {
          options.headers[this.authorizationHeaderField] = credential;
      }
    }
  }
});
