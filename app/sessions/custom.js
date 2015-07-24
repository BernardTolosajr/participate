import Ember from 'ember';
import Session from 'simple-auth/session';

export default Session.extend({
  currentUser: function() {
    var userId = this.get('secure.user_id');
    if (!Ember.isEmpty(userId)) {
      let self = this;
      return this.container.lookup('service:store').find('users', userId).then((user) => {
        self.set('currentUser', user);
      });
    }
  }.property('secure.user_id')
});
