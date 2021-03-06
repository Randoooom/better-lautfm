/*
 *
 * MIT License
 *
 * Copyright (c) 2021 Randoooom
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import LautFM, { Station } from '../lib'

describe('Test LautFM server hooks', () => {
  it('Should get the server time', async () => {
    return await LautFM.getServerTime()
      .then(date => {
        expect(date).toBeTruthy()
        expect(date).toBeInstanceOf(Date)
      })
  })

  it('Should get the server status', async () => {
    return await LautFM.getStatus()
      .then(status => {
        expect(status).toBeTruthy()
        expect(status).toHaveProperty('running')
        expect(status).toHaveProperty('message')
      })
  })

  it('Should get running state from server', async () => {
    return await LautFM.isServerRunning()
      .then(state => {
        expect(state).toBeDefined()
      })
  })
})

describe('Search queries', () => {
  it('Should search for bravefm and return a string', async () => {
    return await LautFM.searchStations({ query: 'bravefm', onlyStationNames: true })
      .then(value => {
        expect(value).toHaveProperty('totalCount')
        expect(value).toHaveProperty('result')
        expect(value.result).toBeInstanceOf(Array)

        value.result.forEach(item => expect(typeof item).toBe('string'))
      })
  })

  it('Should search for bravefm and return a station', async() => {
    return await LautFM.searchStations({ query: 'bravefm' })
      .then(value => {
        expect(value).toHaveProperty('totalCount')
        expect(value).toHaveProperty('result')
        expect(value.result).toBeInstanceOf(Array)

        value.result.forEach(item => expect(item).toBeInstanceOf(Station))
      })
  })

  it('Should search for Queen and get max 10 results', async () => {
    return await LautFM.searchStations({ query: 'Queen', limit: 10 })
      .then(value => {
        expect(value).toHaveProperty('totalCount')
        expect(value).toHaveProperty('result')
        expect(value.result).toBeInstanceOf(Array)
        expect(value.result.length).toBeLessThanOrEqual(10)

        value.result.forEach(item => expect(item).toBeInstanceOf(Station))
      })
  })
})