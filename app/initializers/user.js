import Service from '../services/users';
import Model from '../models/user';
import Adapter from '../adapters/user';
import Serializer from '../serializers/user';

export function initialize(container, application) {
  const adapter = 'service:users-adapter';
  const serializer = 'service:users-serializer';
  const service = 'service:users';
  const model = 'model:users';

  application.register(model, Model, { instantiate: false, singleton: false });
  application.register(service, Service);
  application.register(adapter, Adapter);
  application.register(serializer, Serializer);

  application.inject('service:store', 'users', service);
  application.inject(service, 'serializer', serializer);
}

export default {
  name: 'users-service',
  after: 'store',
  initialize: initialize
};
