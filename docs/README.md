better-lautfm / [Exports](modules.md)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/eca001c7b1814436ac2a7f939d5e3ea7)](https://www.codacy.com/gh/Randoooom/better-lautfm/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Randoooom/better-lautfm&amp;utm_campaign=Badge_Grade)
[![npm](https://img.shields.io/npm/v/better-lautfm)](https://www.npmjs.com/package/better-lautfm)
![NPM](https://img.shields.io/npm/l/better-lautfm)
![npm](https://img.shields.io/npm/dt/better-lautfm)
![cd](https://build.randoms.rocks/app/rest/builds/buildType:(id:BetterLautfm_Publish)/statusIcon)

# Better-LautFM

## About

This is a lightweight, object orientated and small wrapper for the public [LautFM-API](https://api.laut.fm). With
following Features:

-   types for nearly everything (more will be added soon)
-   nearly full station coverage
-   coverage for basic lautFM requests (status and so on)

## Installation

``npm install --save better-lautfm``

## Documentation
For detailed explanation visit the [wiki](https://github.com/Randoooom/better-lautfm/wiki)

## Basic usage

Usage is currently only optimized for CommonJS, other builds will follow soon.

### Example for fetching the whole data of a station

```ts
import { Station } from 'better-lautfm'

// dont do this in production
async function topLevelAwait() {
  // init station class
  const station = new Station('bravefm')

  // fetch data
  const data = await station.fetch().then(value => value)
  console.log(data)

  /* the following examples will be inserted here (please take care of imports) */
}

topLevelAwait()
```

### Example for fetching the formatted schedule of a station

```ts
const schedule = await station.getSchedule().then(value => value)
console.log(schedule)
```
