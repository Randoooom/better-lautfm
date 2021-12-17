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
import { Artist, Playlist, Track } from './interface'
import { parseJSON } from '../core/JSONUtil'

export class Station {
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

  constructor(name: string) {
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

        this.currentPlaylist = <Playlist>parseJSON(response.data['current_playlist'])
        this.nextPlaylist = <Playlist>parseJSON(response.data['next_playlist'])

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

  /**
   * get last 10 tracks
   */

  public async getHistory(): Promise<Track[]> {
    // fetch data
    return await axiosInstance.get(`/station/${this.name}/last_songs`)
      // handle response
      .then(response => {
        // parse all to tracks
        return response.data.map((track: never) => <Track>parseJSON(track))
      })
  }

  /**
   * get current track
   */

  public async getCurrentTrack(): Promise<Track> {
    // fetch data
    return await axiosInstance.get(`/station/${this.name}/current_song`)
      // handle response
      .then(response =>
        // parse track
        <Track>parseJSON(response.data)
      )
  }

  /**
   * get next 3 artists
   */

  public async getNextArtists(): Promise<Artist[]> {
    // fetch data
    return await axiosInstance.get(`/station/${this.name}/next_artists`)
      // handle response
      .then(response => response.data.map((artist: never) => <Artist>parseJSON(artist)))
  }

  /**
   * get the count of currently listening people
   */

  public async getListenerCount(): Promise<number> {
    // fetch data
    return await axiosInstance.get(`/station/${this.name}/listeners`)
      // return data as number
      .then(response => +response.data)
  }

  /**
   * get all playlists with their airtimes
   */

  public async getPlaylists(): Promise<Playlist[]> {
    // fetch data
    return await axiosInstance.get(`/station/${this.name}/playlists`)
      // build objects
      .then(response => response.data.map((playlist: never) => <Playlist>parseJSON(playlist)))
  }

  /**
   * custom mapping for all airtimes of a day
   * @param playlist {Playlist}
   * @param index {number}
   * @param schedule {Playlist[]} current day schedule needed for LiveShows
   * @param next {Playlist[]} next day schedule
   * @private
   */
  private handleSpecificScheduleDay(
    playlist: Playlist,
    index: number,
    schedule: Playlist[],
    next: Playlist[]
  ) {
    // handle last item of the airtime (already including rotations)
    if (index === schedule.length - 1 && next) {
      next.push({ ...playlist, hour: 0, endTime: playlist.endTime })
      next.sort((a, b) => a.hour! - b.hour!)

      return {
        ...playlist,
        endTime: 24
      }
    }

    if (index === 0 && schedule[index + 1])
      playlist.endTime = schedule[index + 1].hour

    if (playlist.endTime === 0)
      playlist.endTime = 24

    return playlist
  }

  /**
   * return format schedule of station
   */

  public async getSchedule(): Promise<Playlist[][]> {
    // init empty array
    const schedule: Playlist[][] = new Array(7).fill(undefined).map(() => [])
    // fetch raw data from laut.fm (we will format it better than laut.fm)
    const rawData = await axiosInstance.get(`/station/${this.name}/schedule`)
      .then(value => value.data)

    // sort data by day
    rawData.forEach((raw: never) => {
      // parse raw data to playlist
      const playlist: Playlist = <Playlist>parseJSON(raw)

      // translate nam into index
      const index = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].indexOf(playlist.day!)

      // push into belonging array
      schedule[index].push(playlist)
    })

    // return mapped object
    return schedule.map((playlists: Playlist[], scheduleIndex: number) => playlists.map((playlist: Playlist, index: number, array: Playlist[]) =>
      // format and clone airtime
      this.handleSpecificScheduleDay(playlist, index, array, schedule[scheduleIndex + 1])
    ))
  }
}