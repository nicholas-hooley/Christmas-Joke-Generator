import { module, test } from 'qunit';

import { setupTest } from 'christmas-joke-generator/tests/helpers';

module('Unit | Model | jokes', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('jokes', {});
    assert.ok(model);
  });
});
