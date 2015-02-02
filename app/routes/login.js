import Ember from 'ember';

var LoginRoute = Ember.Route.extend({
  actions: {
    authenticateWithFacebook: function() {
      this.get('session').authenticate('simple-auth-authenticator:torii', 'facebook-oauth2');
    }

    // authenticateWithGooglePlus: function() {
    //   this.get('session').authenticate('simple-auth-authenticator:torii', 'google-oauth2');
    // }
  }
});

export default LoginRoute;