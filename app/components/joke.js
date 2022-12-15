import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class JokeComponent extends Component {
  @tracked delivery = '';
  @tracked setup = '';

  @action
  async getJoke() {
    let response = await fetch(
      'https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
    );
    const data = await response.json();
    this.delivery = data.delivery;
    this.setup = data.setup;

    console.log('hi bee', data.delivery);
    return data;
  }
}
