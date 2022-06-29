import cheerio from 'cheerio'
import axios from 'axios'

import axiosRetry from 'axios-retry'

axiosRetry(axios, { retries: 3, retryDelay: (retryCount) => retryCount * 1000 })

export async function manhuagui(id) {
  try {
    const { data } = await axios.get(`https://www.manhuagui.com/comic/${id}/`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
      }
    })
    const $ = cheerio.load(data)

    return {
      id,
      title: {
        chinese: $('.book-title h1').text(),
        raw: $('.book-title h2').text(),
      },
      status: $('li.status > span > .red:nth-child(2)').text(),
      latest: $('li.status > span > a.blue').text(),
      modifiedAt: $('li.status > span > .red:nth-child(3)').text(),
      success: true
    }
  } catch (err) {
    return {
      id,
      success: false,
      status: err.response.status,
      message: err.response.statusText
    }
  }
}
