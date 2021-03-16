import request from 'src/web-api-client/request'

const GET_STORY_URL = (storyId) =>
  `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`

const GET_AUTHOR_URL = (authorId) =>
  `https://hacker-news.firebaseio.com/v0/user/${authorId}.json?print=pretty`

const getStory = async (storyId) =>
  request({
    method: 'GET',
    url: GET_STORY_URL(storyId),
  })

const getAuthors = async (authorId) =>
  request({
    method: 'GET',
    url: GET_AUTHOR_URL(authorId),
  })

export const getStoriesAndAuthors = async (storyId) => {
  const story = await getStory(storyId)
  const author = await getAuthors(story.by)
  return { story, author }
}
