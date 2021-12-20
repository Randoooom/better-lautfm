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

export interface StringIndex {
  [key: string | number]: unknown
}

export const parseJSON = (source: Record<string, unknown>): unknown => {
  // index new object
  const value: StringIndex = {}

  // iterate through all source keys
  Object.keys(source).forEach(key => {
    // replace keys
    const replaced =  key.split('_').map((segment, index) => {
      // skip first
      if (index === 0) return segment
      // apply lowerCamelCase
      return `${segment.charAt(0).toUpperCase()}${segment.substring(1)}`
      // join all
    }).join('')

    // recursive
    if(typeof source[key] === 'object' && source[key] !== null)
      source[key] = parseJSON(<Record<string, unknown>>source[key])

    // set value
    value[replaced] = source[key]
  })



  return <unknown>value
}