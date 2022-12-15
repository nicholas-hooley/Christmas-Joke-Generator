import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let jokeResponse = '';

    const res = await fetch(
      'https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
    );

    jokeResponse = await res.json();

    console.log(jokeResponse);
    return jokeResponse;
  }
}
