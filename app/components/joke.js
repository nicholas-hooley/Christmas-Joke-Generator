import Component from '@glimmer/component';
import { trackedFunction } from 'ember-resources/util/function';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class JokeComponent extends Component {
  @tracked fetchItems = '';

  @action
  getJoke() {
    this.fetchItems = trackedFunction(this, async () => {
      let response = await fetch(
        'https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
      );
      const data = await response.json();
      return data;
    });
    // specify a default value of empty array when value is undefined
    // (value is undefined before the function finishes running)
    console.log(this.fetchItems);
    return this.fetchItems.value ?? [];
  }
}
