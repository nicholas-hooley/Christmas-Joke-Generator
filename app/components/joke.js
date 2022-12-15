import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class JokeComponent extends Component {
  @tracked delivery = '';
  @tracked setup = '';
  @tracked gift = [
    'Badge',
    'Bouncy ball',
    'Bracelet',
    'Cookie cutter',
    'Crayons',
    'Dice',
    'Mini rubix cube',
    'Spinning top',
  ];
  @tracked imgLink = '';

  @action
  async getJoke() {
    let response = await fetch(
      'https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
    );
    const data = await response.json();
    this.delivery = data.delivery;
    this.setup = data.setup;

    const randomInt = Math.floor(Math.random() * 8);

    this.imgLink = `/assets/image/${this.gift[randomInt]}.png`;
    console.log(imgLink);

    return data;
  }
}
