import request from 'src/web-api-client/request'

const GET_STORY_URL = (storyId) =>
  `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`

const GET_AUTHOR_URL = (authorName) =>
  `https://hacker-news.firebaseio.com/v0/user/${authorName}.json?print=pretty`

const getStory = async (storyId) =>
  request({
    method: 'GET',
    url: GET_STORY_URL(storyId),
  })

const getAuthors = async (authorName) =>
  request({
    method: 'GET',
    url: GET_AUTHOR_URL(authorName),
  })

export const getStoriesAndAuthors = async (storyId) => {
  const story = await getStory(storyId)
  const author = await getAuthors(story.by)
  return { story, author }
}
