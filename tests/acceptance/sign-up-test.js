import Ember from 'ember';
import startApp from '../helpers/start-app';

var App, server;

describe('Sign up', function() {
  beforeEach(function(){
    App = startApp();
    server = new Pretender(function() {
      this.get("https://www.facebook.com/dialog/oauth", function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({"authorizationCode":"somecode"})];
      });
    });
  });
  
  afterEach(function() {
    server.shutdown();
    Ember.run(App, 'destroy');
  });

  describe('with Facebook', function(){
    beforeEach(function(){
      visit('/login').then(function() {
        click( $("button:contains('Login or Sign-up with Facebook')") );             
      });
    });

    it('shows success message', function() {

      expect(find('.notice').text()).to.equal('Logged in to Facebook successfully');
    });
  });
});