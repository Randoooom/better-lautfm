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

import axiosInstance from './axiosInstance'
import { Station } from '../station/Station'
import { filterUndefined } from './JSONUtil'

/**
 * declaration of status object
 * @param running {boolean} running state
 * @param message {string} description of status
 */

export interface LautFMStatus {
  running: boolean
  message: string
}

/**
 * declaration of search options
 * @param limit {number?} max length of result
 * @param query {string} the value to search for
 * @param onlyStationNames {boolean?} toggle station fetch (server side, not our fetch)
 * @param offset {number?} offset of the results
 */

export interface LautFMSearchOptions {
  // default server side should be 10 I guess, but do not really know
  limit?: number
  query: string
  onlyStationNames?: boolean
  offset?: number
}

/**
 * declaration of direct api response
 * @param categories categories matching query, for further information visit https://api.laut.fm/documentation/search (german documentation)
 * @param total number of total results in this categories
 * @param items matching stations / stationNames
 */

export interface LautFMAPISearchResult {
  categories: string[]
  total: number
  items: Station[] | string[]
}

/**
 * declaration of our formatted response
 * @param result matching stations / stationNames
 * @param totalCount total matched Stations (not 100% exact because of duplicates)
 */

export interface LautFMSearchResult {
  result: Station[] | string[]
  totalCount: number
  // we also get things like 'next_offset' but this should not be relevant
}

/**
 * genre like we get it from /genres
 */
export interface LautFMGenre  {
  /** name of the genre */
  name: string,
  /** score of the genre */
  score: number,
  /**  list of related genre names */
  related: string[]
}

export default class LautFM {
  /**
   * get current serverTime
   * @returns {Promise<Date>}
   */

  public static async getServerTime(): Promise<Date> {
    return await axiosInstance.get('/time')
      .then((value) => new Date(value.data))
  }

  /**
   * get server status
   * @returns {Promise<LautFMStatus>}
   */

  public static async getStatus(): Promise<LautFMStatus> {
    return await axiosInstance.get('/server_status')
      .then(value => value.data)
  }

  /**
   * get running state of api
   * @returns {Promise<boolean>}
   */

  public static async isServerRunning(): Promise<boolean> {
    return await LautFM.getStatus()
      .then(value => value.running)
  }

  /**
   * execute lautFM search query
   * @param searchOptions {LautFMSearchOptions} the options
   * @returns {Promise<LautFMSearchResult>}
   */

  public static async searchStations(searchOptions: LautFMSearchOptions): Promise<LautFMSearchResult> {
    // execute request and collect response
    // format is really weird (https://api.laut.fm/documentation/search)
    const response = await axiosInstance.get('/search/stations', {
      // here we delete all keys standing in relation with undefined value
      params: filterUndefined({
        query: searchOptions.query,
        offset: searchOptions.offset,
        limit: searchOptions.limit,
        'just_names': searchOptions.onlyStationNames
      })
      // return response data
    }).then(value => value.data)

    let totalCount = 0
    const result = response.results.map((result: { total: number, items: Array<unknown> }) => {
      // increase total count
      totalCount += result.total

      // map items
      return result.items.map((value: unknown) => {
        // return name of it is the name
        if(typeof value === 'string') return value
        // return parsed object on station
        return Station.build(<Record<string, unknown>>(<Record<string, unknown>>value).station)
      })
    })

    // transform all stations to top level and return result
    return {
      result: result.flat().filter((station: string | Station, index: number, array: Array<Station | string>) => {
        // build station name
        const name = typeof station === 'string' ? station : station.name

        // sort duplicates
        return index === array.findIndex((value) =>
          (typeof value === 'string' ? value : value.name) === name
        )
      }),
      totalCount
    }
  }

  /**
   * get all available starting letters of station
   */

  public static async getStartingLetters(): Promise<string[]> {
    return await axiosInstance.get('/letters')
      .then(value => value.data)
  }

  /**
   * get a list of all known genres
   */

  public static async getAvailableGenres(): Promise<LautFMGenre[]> {
    return await axiosInstance.get('/genres')
      .then(value => value.data)
  }
}