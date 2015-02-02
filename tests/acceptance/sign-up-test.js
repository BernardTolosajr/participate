import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Sign up', function() {
  beforeEach(function(){
    App = startApp();
  });
  
  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  describe('with Facebook', function(){
    beforeEach(function(){
      visit('/').then(function() {
        click( $("button:contains('Login or Sign-up with Facebook')") );             
      });
    });

    it('shows success message', function() {
      expect(find('.notice').text()).to.equal('Logged in to Facebook successfully');
    });
  });
});