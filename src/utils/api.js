import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import env from '../config'

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = env.API_URL
const encode = encodeURIComponent;
const responseBody = res => res.body;

const Tags = {
  getAll: () => superagent.get(`${API_ROOT}/genre/movie/list`).query({api_key: env.API_KEY}).then(responseBody)
};

const limit = (pageId) => `page=${pageId}`;
const Movies = {
  all: page =>
    superagent
      .get(`${API_ROOT}/discover/movie?${limit(page)}`)
      .query({api_key: env.API_KEY})
      .then(responseBody),

  byTag: (tag, page) =>
    superagent
      .get(`${API_ROOT}/discover/movie?${limit(page)}`)
      .query({api_key: env.API_KEY, with_genres: encode(tag)})
      .then(responseBody),

  get: slug =>
    superagent
      .get(`${API_ROOT}/movie/${slug}`)
      .query({api_key: env.API_KEY})
      .then(responseBody),
};

export default {
  Movies,
  Tags,
};
