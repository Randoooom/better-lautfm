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

import axiosInstance from '../core/axiosInstance'
import { Playlist } from './Playlist'

export default class Station {
  // internal name of the station
  name: string
  // the display name of the station
  displayName?: string
  // description of station
  description?: string
  // djs of station
  djs?: string
  // location of station
  location?: string
  // color of station
  color?: string
  // last updated timestamp
  updatedAt?: Date
  // station active?
  active?: boolean
  // position in lauFM ranking
  position?: number
  // genres
  genres?: string[]

  // current playlist
  currentPlaylist?: Playlist
  // next playlist
  nextPlaylist?: Playlist

  /**
   * constructor for the station
   * @param name {string} name of the station
   */

  public constructor(name: string) {
    this.name = name
  }

  /**
   * fetch the data of the station
   * @throws {Error} station does not exist
   */

  public async fetch(): Promise<Station | undefined> {
    // fetch api data
    return await axiosInstance.get(`/station/${this.name}`)
      // handle json response
      .then(response => {
        /**
         * update all class values
         * could be cleaner code
         */
        this.displayName = response.data['display_name']
        this.description = response.data['description']
        this.djs = response.data['djs']
        this.location = response.data['location']
        this.color = response.data['color']
        this.updatedAt = new Date(response.data['updated_at'])
        this.active = response.data['active']
        this.position = response.data['position']
        this.genres = response.data['genres']

        this.currentPlaylist = new Playlist(response.data['current_playlist'])
        this.nextPlaylist = new Playlist(response.data['next_playlist'])

        return this
      })
      // handle error
      .catch((error) => {
        if (error.response.status === 404)
          throw new Error('Could not find station')

        // global error will handle others
        return undefined
      })
  }

  /**
   * get station page url
   */

  public get pageUrl(): string {
    return `https://laut.fm/${this.name}`
  }

  /**
   * get station stream url (including subdomain)
   */

  public get streamUrl(): string {
    return `https://${this.name}.stream.laut.fm/${this.name}`
  }
}