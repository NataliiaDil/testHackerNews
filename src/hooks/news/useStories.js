import { useEffect, useState } from 'react'

import * as newsApiClient from 'src/web-api-client/news'
import { sortStoriesByScore } from 'src/helpers/newsHelpers'

export const useStories = () => {
  const [stories, setStories] = useState([])

  const getRandomStoryIds = async () => {
    let randomStoryIds = []

    const topStories = await newsApiClient.getTopStories()

    for (let i = 0; i < 10; i++) {
      randomStoryIds.push(
        topStories[Math.floor(Math.random() * topStories.length)]
      )
    }

    return randomStoryIds
  }

  const getStoriesAndAuthors = async () => {
    let storiesAndAuthors = []
    const randomStoryIds = await getRandomStoryIds()

    await randomStoryIds.reduce(async (previousPromise, nextStoryId) => {
      await previousPromise
      const storyAndAuthor = await newsApiClient.getStoriesAndAuthors(
        nextStoryId
      )
      storiesAndAuthors.push(storyAndAuthor)
    }, Promise.resolve())

    return storiesAndAuthors
  }

  useEffect(() => {
    const storiesAndAuthors = async () => {
      const storiesAndAuthors = await getStoriesAndAuthors()
      setStories(storiesAndAuthors)
    }

    storiesAndAuthors()
  }, [])

  return sortStoriesByScore(stories)
}
