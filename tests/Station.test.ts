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

import { Station } from '../lib'

let station: Station

describe('Test station', () => {
  it('Should create an new instance', () => {
    station = new Station('bravefm')

    expect(station).toBeInstanceOf(Station)
    expect(station.name).toEqual('bravefm')
  })

  it('Should fetch the whole station', async () => {
    return await station.fetch().then((data) => {
      expect(data).toBeTruthy()
      expect(data).toHaveProperty('displayName')
      expect(data?.displayName).toEqual('Brave FM')
      expect(data?.streamUrl).toEqual('https://bravefm.stream.laut.fm/bravefm')
      expect(data?.pageUrl).toEqual('https://laut.fm/bravefm')
    })
  })

  it('Should return the station history', async () => {
    return await station.getHistory().then(data => {
      expect(data).toBeTruthy()
      expect(data).toBeInstanceOf(Array)
      expect(data).toHaveLength(10)
    })
  })

  it('Should return the current track', async () => {
    return await station.getCurrentTrack().then(data => {
      expect(data).toBeTruthy()
    })
  })

  it('Should return the next 3 artists', async () => {
    return await station.getNextArtists().then(data => {
      expect(data).toBeTruthy()
      expect(data).toBeInstanceOf(Array)
      expect(data).toHaveLength(3)
    })
  })

  it('Should return the number of listeners', async () => {
    return await station.getListenerCount().then(data => {
      expect(data).toBeTruthy()
    })
  })

  it('Should return all playlists', async () => {
    return await station.getPlaylists().then(data => {
      expect(data).toBeTruthy()
      expect(data).toBeInstanceOf(Array)
    })
  })

  it('Should get the schedule', async () => {
    return await station.getSchedule().then(data => {
      expect(data).toBeTruthy()
      expect(data).toBeInstanceOf(Array)
      expect(data).toHaveLength(7)
    })
  })
})