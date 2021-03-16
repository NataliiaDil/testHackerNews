import request from 'src/web-api-client/request'

const GET_TOP_STORIES_URL =
  'https://hacker-news.firebaseio.com/v0/topstories.json'

export const getTopStories = async () =>
  request({
    method: 'GET',
    url: GET_TOP_STORIES_URL,
  })
