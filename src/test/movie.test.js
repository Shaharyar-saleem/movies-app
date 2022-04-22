import supertest from 'supertest';
import { expect } from 'chai';

const requestMovies = supertest('https://api.netzkino.de.simplecache.net/capi-2.0a/');
const moviePoster = supertest('https://api.themoviedb.org/3');
const API_KEY = '78247849b9888da02ffb1655caa3a9b9';

describe('Movies', () => {

    it(`GET /movies with query params`, () => {
      const url = `/search?q=hitchcock&d=devtest`
      requestMovies.get(url).then((res) => {
            expect(res.body.posts).to.not.be.empty;
        });
    });

    it(`GET /movie poster from IMDb_id`, () => {
        const url = `/find/tt4450624?api_key=${API_KEY}&language=en-US&external_source=imdb_id`
        moviePoster.get(url).then((res) => {
              expect(res.body.movie_results).to.not.be.empty;
          });
      });

});