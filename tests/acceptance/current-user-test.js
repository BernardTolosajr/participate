/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import Ember from 'ember';
import startApp from '../helpers/start-app';
import Pretender from 'pretender';

const participantId = '54d39ede62155f8a0301967b';

describe('Acceptance: CurrentUser', function() {
  var application,
      server;

  beforeEach(function() {
    application = startApp();
    let session = currentSession();
    session.set('isAuthenticated', true);
    session.set('secure.user_id', participantId);

    server = new Pretender(function() {
      this.get(`/users/${participantId}`, function() {
        let response = JSON.stringify({ data: {
          id: participantId,
          type: 'users',
          attributes: {
            name: 'john'
          }
        }});

        return [200, { 'Content-Type': 'application/vnd.api+json' }, response];
      });
    });

    visit('/');
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  it('display current user', function() {
    visit('/');
    andThen(function() {
      expect(find('p:contains(Signed in as : john)').length).to.equal(1);
    });
  });
});
