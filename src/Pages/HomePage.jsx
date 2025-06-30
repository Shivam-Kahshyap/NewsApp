

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import NewsItem from '../Components/NewsItem'

export default function HomePage() {
  const [articles, setArticles] = useState([])
  const [totalResults, setTotalResult] = useState(0)

  const [searchParams] = useSearchParams()

  useEffect(() => {
    const qParam = searchParams.get("q") ?? "All"
    const langParam = searchParams.get("language") ?? "hi"

    getAPIData(qParam, langParam)
  }, [searchParams])

  async function getAPIData(qValue, languageValue) {
    const query = qValue === "All" ? "latest" : qValue
    let response = await fetch(`https://newsapi.org/v2/everything?q=${query}&language=${languageValue}&from=2025-05-29&sortBy=publishedAt&apiKey=4f17e266937b479bb588353938c1046f`)
    response = await response.json()

    if (response.status === 'ok') {
      setArticles(response.articles)
      setTotalResult(response.totalResults)
    }
  }

  return (
    <div className="container-fluid my-3">
     <h5 className='background text-center p-2 text-light'>{searchParams.get("q") ?? "All"} Articles</h5>

      <div className="row">
        {
          articles.map((item, index) => (
            <NewsItem
              key={index}
              source={item.source.name}
              title={item.title}
              description={item.description}
              url={item.url}
              pic={item.urlToImage??"/images/noimages.png" }
              date={item.publishedAt}
            />
          ))
        }
      </div>
    </div>
  )
}
