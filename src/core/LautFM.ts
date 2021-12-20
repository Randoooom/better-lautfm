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

export interface LautFMStatus {
  running: boolean
  message: string
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
}