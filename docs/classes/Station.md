[better-lautfm](../README.md) / [Exports](../modules.md) / Station

# Class: Station

## Table of contents

### Constructors

- [constructor](Station.md#constructor)

### Properties

- [active](Station.md#active)
- [color](Station.md#color)
- [currentPlaylist](Station.md#currentplaylist)
- [description](Station.md#description)
- [displayName](Station.md#displayname)
- [djs](Station.md#djs)
- [genres](Station.md#genres)
- [location](Station.md#location)
- [name](Station.md#name)
- [nextPlaylist](Station.md#nextplaylist)
- [position](Station.md#position)
- [updatedAt](Station.md#updatedat)

### Accessors

- [pageUrl](Station.md#pageurl)
- [streamUrl](Station.md#streamurl)

### Methods

- [fetch](Station.md#fetch)
- [getCurrentTrack](Station.md#getcurrenttrack)
- [getHistory](Station.md#gethistory)
- [getListenerCount](Station.md#getlistenercount)
- [getNextArtists](Station.md#getnextartists)
- [getPlaylists](Station.md#getplaylists)
- [getSchedule](Station.md#getschedule)
- [handleSpecificScheduleDay](Station.md#handlespecificscheduleday)
- [build](Station.md#build)

## Constructors

### constructor

• **new Station**(`name`)

constructor for the station

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of the station |

#### Defined in

[station/Station.ts:62](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L62)

## Properties

### active

• `Optional` **active**: `boolean`

#### Defined in

[station/Station.ts:46](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L46)

___

### color

• `Optional` **color**: `string`

#### Defined in

[station/Station.ts:42](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L42)

___

### currentPlaylist

• `Optional` **currentPlaylist**: [`Playlist`](../interfaces/Playlist.md)

#### Defined in

[station/Station.ts:53](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L53)

___

### description

• `Optional` **description**: `string`

#### Defined in

[station/Station.ts:36](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L36)

___

### displayName

• `Optional` **displayName**: `string`

#### Defined in

[station/Station.ts:34](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L34)

___

### djs

• `Optional` **djs**: `string`

#### Defined in

[station/Station.ts:38](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L38)

___

### genres

• `Optional` **genres**: `string`[]

#### Defined in

[station/Station.ts:50](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L50)

___

### location

• `Optional` **location**: `string`

#### Defined in

[station/Station.ts:40](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L40)

___

### name

• **name**: `string`

#### Defined in

[station/Station.ts:32](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L32)

___

### nextPlaylist

• `Optional` **nextPlaylist**: [`Playlist`](../interfaces/Playlist.md)

#### Defined in

[station/Station.ts:55](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L55)

___

### position

• `Optional` **position**: `number`

#### Defined in

[station/Station.ts:48](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L48)

___

### updatedAt

• `Optional` **updatedAt**: `Date`

#### Defined in

[station/Station.ts:44](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L44)

## Accessors

### pageUrl

• `get` **pageUrl**(): `string`

get station page url

#### Returns

`string`

#### Defined in

[station/Station.ts:117](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L117)

___

### streamUrl

• `get` **streamUrl**(): `string`

get station stream url (including subdomain)

#### Returns

`string`

#### Defined in

[station/Station.ts:125](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L125)

## Methods

### fetch

▸ **fetch**(): `Promise`<`undefined` \| [`Station`](Station.md)\>

fetch the data of the station

**`throws`** {Error} station does not exist

#### Returns

`Promise`<`undefined` \| [`Station`](Station.md)\>

#### Defined in

[station/Station.ts:96](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L96)

___

### getCurrentTrack

▸ **getCurrentTrack**(): `Promise`<[`Track`](../interfaces/Track.md)\>

get current track

#### Returns

`Promise`<[`Track`](../interfaces/Track.md)\>

#### Defined in

[station/Station.ts:147](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L147)

___

### getHistory

▸ **getHistory**(): `Promise`<[`Track`](../interfaces/Track.md)[]\>

get last 10 tracks

#### Returns

`Promise`<[`Track`](../interfaces/Track.md)[]\>

#### Defined in

[station/Station.ts:133](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L133)

___

### getListenerCount

▸ **getListenerCount**(): `Promise`<`number`\>

get the count of currently listening people

#### Returns

`Promise`<`number`\>

#### Defined in

[station/Station.ts:172](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L172)

___

### getNextArtists

▸ **getNextArtists**(): `Promise`<[`Artist`](../interfaces/Artist.md)[]\>

get next 3 artists

#### Returns

`Promise`<[`Artist`](../interfaces/Artist.md)[]\>

#### Defined in

[station/Station.ts:161](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L161)

___

### getPlaylists

▸ **getPlaylists**(): `Promise`<[`Playlist`](../interfaces/Playlist.md)[]\>

get all playlists with their airtimes

#### Returns

`Promise`<[`Playlist`](../interfaces/Playlist.md)[]\>

#### Defined in

[station/Station.ts:183](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L183)

___

### getSchedule

▸ **getSchedule**(): `Promise`<[`Playlist`](../interfaces/Playlist.md)[][]\>

return format schedule of station

#### Returns

`Promise`<[`Playlist`](../interfaces/Playlist.md)[][]\>

#### Defined in

[station/Station.ts:234](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L234)

___

### handleSpecificScheduleDay

▸ `Private` **handleSpecificScheduleDay**(`playlist`, `index`, `schedule`, `next`): [`Playlist`](../interfaces/Playlist.md)

custom mapping for all airtimes of a day

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playlist` | [`Playlist`](../interfaces/Playlist.md) |  |
| `index` | `number` |  |
| `schedule` | [`Playlist`](../interfaces/Playlist.md)[] | current day schedule needed for LiveShows |
| `next` | [`Playlist`](../interfaces/Playlist.md)[] | next day schedule |

#### Returns

[`Playlist`](../interfaces/Playlist.md)

#### Defined in

[station/Station.ts:198](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L198)

___

### build

▸ `Static` **build**(`options`): [`Station`](Station.md)

factory for Station

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Record`<`string`, `unknown`\> |

#### Returns

[`Station`](Station.md)

#### Defined in

[station/Station.ts:71](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/station/Station.ts#L71)
