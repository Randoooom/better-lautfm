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

export class Playlist {
  id: number
  name: string
  day: string
  hour: number
  endTime: number
  description: string
  color: string
  length: number
  shuffled: boolean
  startsAt: Date
  endsAt: Date

  /**
   * constructor for the class
   * @param data {Object} lautFM response for playlist
   */

  constructor(data: Record<string, unknown>) {
    this.id = data.id as number
    this.name = data.name as string
    this.day = data.day as string
    this.hour = data.hour as number
    this.endTime = data['end_time'] as number
    this.description = data.description as string
    this.color = data.color as string
    this.length = data.length as number
    this.shuffled = data.shuffled as boolean
    this.startsAt = new Date(data['starts_at'] as string)
    this.endsAt = new Date(data['ends_at'] as string)
  }
}