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

import LautFM from '../lib'

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

  it('Should get running state from server', async() => {
    return await LautFM.isServerRunning()
      .then(state => {
        expect(state).toBeDefined()
      })
  })
})