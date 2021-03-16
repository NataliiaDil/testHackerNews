import React from 'react'
import moment from 'moment'

import './NewsItem.css'

export const NewsItem = ({ story, author }) => {
  const { title, time, score, url } = story
  const { id, karma } = author

  const renderRow = ({ rowTitle, value }) => (
    <div className="NewsItem__row">
      <b>{rowTitle}: </b> {value}
    </div>
  )

  return (
    <div className="NewsItem">
      {renderRow({ rowTitle: 'Story title', value: title })}
      {renderRow({
        rowTitle: 'Story date',
        value: moment(time).format('YYYY MMM DD'),
      })}
      {renderRow({ rowTitle: 'Story score', value: score })}

      <div className="NewsItem__row">
        <b>URL: </b>
        <a href={url} target="blank">
          Click to view story
        </a>
      </div>

      {renderRow({ rowTitle: 'Author id', value: id })}
      {renderRow({ rowTitle: 'Author karma', value: karma })}
    </div>
  )
}
