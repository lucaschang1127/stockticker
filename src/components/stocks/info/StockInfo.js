import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import History from '../details/History'
import NewsFeed from '../details/NewsFeed'

class StockInfo extends Component {

  fetchHistory = () => {
    const { stockData } = this.props

    if (stockData) {
      return stockData.chart.slice(-10).reverse().map( (data, idx) => {
        return <History 
                  key={idx} 
                  data={data} 
                />
      })
    }

  }

  fetchNewsFeed = () => {
    const { stockData } = this.props
    if (stockData) {
      return stockData.news.map( (article, idx) => {
        return <NewsFeed 
                  key={idx} 
                  article={article} 
                />
      })
    }
  }

  render() {
    const { symbol, stockData } = this.props
    if (stockData) {
      var { companyName, latestPrice, change, changePercent } = stockData.quote
      var { logo } = stockData
    }

    return(
      <div className='stock-info'>
        <div className='stock-header'>
          {stockData && <div className='stock-logo' style={{backgroundImage: `url(${logo.url})`}}></div>}

          <h1 className='stock-symbol'>{symbol}</h1> 

          {stockData && <i className='stock-company-name'>({companyName})</i>}

          {stockData && 
            <div className='current'>

              <h3>${latestPrice.toFixed(2)}</h3>

              <p style={{color: change === 0 ? '#3C455C' : change > 0 ? 'green' : 'red'}}>
                <span>{change.toFixed(2)} </span>
                <span>
                  {change > 0 ? <i className="fas fa-caret-up"></i> : <i className="fas fa-caret-down"></i>}
                  {(Math.abs(changePercent) * 100).toFixed(2)}%
                </span>
              </p>
            </div>}
        </div>

        {stockData ? 
        <div className='stock-info-data'>
          
          <div className='history'>
            <h3><i className="far fa-calendar-alt"></i> 10-Day Chart</h3>
            {this.fetchHistory()}
          </div>

          <div className='news'>
            <h3><i className="far fa-newspaper"></i> {companyName} News Stories</h3>
            {this.fetchNewsFeed()}
          </div>
        </div>
        :
        <div className='stock-info-data'>
          <h3>Loading...</h3>
        </div>
        }

        <Link to='/'>
          <span>Back</span>
        </Link>
      </div>
    )
  }
}



export default StockInfo