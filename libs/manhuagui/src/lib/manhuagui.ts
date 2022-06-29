import cheerio from 'cheerio'
import axios from 'axios'

export async function manhuagui(id) {
  const { data } = await axios.get(`https://www.manhuagui.com/comic/${id}/`)
  const $ = cheerio.load(data)

  return {
    title: {
      chinese: $('.book-title h1').text(),
      raw: $('.book-title h2').text(),
    },
    status: $('li.status > span > .red:nth-child(2)').text(),
    latest: $('li.status > span > a.blue').text(),
    modifiedAt: $('li.status > span > .red:nth-child(3)').text()
  }
}
