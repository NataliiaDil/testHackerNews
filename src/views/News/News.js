import React from 'react'

import './News.css'
import NewsItem from './NewsItem'
import { useStories } from 'src/hooks/news'

export const News = () => {
  const stories = useStories()

  if (!stories.length) return null

  return (
    <div className="News">
      <h3 className="News__header">News</h3>

      <ul>
        {stories.map(({ story, author }) => (
          <li key={story.id}>
            <NewsItem story={story} author={author} />
          </li>
        ))}
      </ul>
    </div>
  )
}
