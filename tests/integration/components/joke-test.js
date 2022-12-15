import { module, test } from 'qunit';
import { setupRenderingTest } from 'christmas-joke-generator/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | joke', function (hooks) {
  setupRenderingTest(hooks);

  test('it should not render a joke when button is clicked', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    assert.expect(2);

    await render(hbs`<Joke />`);

    assert
      .dom(this.element.querySelector('h1').textContent.trim())
      .doesNotContainText();

    await click('title-button');

    assert.dom(this.element.querySelector('h1')).containsText();
  });
});
