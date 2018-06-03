import React from 'react'
import moment from 'moment'

const NewsFeed = ({ article }) => {
  const { url, headline, summary, datetime, source } = article
  let timeFromNow = moment(datetime).fromNow()

  return (
    <article className='news-item'>
      <a className='headline' href={url}>{headline} <h3 className='date'>{timeFromNow}</h3></a>
      <h3 className='source'>Source: {source}</h3>
      {!summary.includes('No summary available.') && <p className='summary'>{summary}</p>}
      
    </article>

  )
}

export default NewsFeed