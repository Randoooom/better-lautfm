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

/**
 * declaration for formatted Playlists
 * @param id {number} lautFM intern number
 * @param name {string} name of the playlist
 * @param day {string?} shortcut of day
 * @param hour {number?} starting hour of playlist
 * @param endTime {number?} ending hour of playlist
 * @param description {string} description of playlist
 * @param color {string} hex color
 * @param length {number} length in seconds
 * @param shuffled {boolean} is playlist shuffled
 * @param startsAt {Date?} starting timestamp
 * @param endsAt {Date?} ending timestamp
 * @param airtimes {Airtime[]?}
 */

export interface Playlist {
  id: number
  name: string
  day?: string
  hour?: number
  endTime?: number
  description: string
  color: string
  length: number
  shuffled: boolean
  startsAt?: Date
  endsAt?: Date
  airtimes?: Airtime[]
}

/**
 * declaration for formatted artists
 * @param name {string} name of artist
 * @param lautId {number?} internal lautFM id
 * @param url {string?} url to personal page
 * @param lautUrl {string?} url to lautFM page
 * @param image {string?} image of artist
 * @param thumb {string?} thumbnail of artist
 */

export interface Artist {
  name: string
  lautId?: number
  url?: string
  lautUrl?: string
  image?: string
  thumb?: string
}

/**
 * declaration of formatted track
 * @param id {number} internal lautID
 * @param type {string} type of track (for Example: 'Jingle' or 'Song')
 * @param title {string}
 * @param album {string}
 * @param length {number} length of track in seconds
 * @param genre {string} genre of track
 * @param releaseyear {number} year of release
 * @param createdAt {Date} inserted into playlist timestamp
 * @param startedAt {Date} start timestamp
 * @param endsAt {Date} end timestamp
 * @param artist {Artist}
 */

export interface Track {
  id: number
  type: string
  title: string
  album: string
  length: number
  genre: string
  releaseyear: number
  createdAt: Date
  startedAt: Date
  endsAt: Date
  artist: Artist
}

/**
 * declaration for airtime
 * @param day {string} day shortcut
 * @param hour {number} hour of start
 * @param endTime {number} hour of end
 */

export interface Airtime {
  day: 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'
  hour: number
  endTime: number
}