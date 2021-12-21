
<a name="readmemd"></a>

better-lautfm

# better-lautfm

## Table of contents

### Classes

- [Station](#classesstationmd)
- [default](#classesdefaultmd)

### Interfaces

- [Airtime](#interfacesairtimemd)
- [Artist](#interfacesartistmd)
- [LautFMAPISearchResult](#interfaceslautfmapisearchresultmd)
- [LautFMSearchOptions](#interfaceslautfmsearchoptionsmd)
- [LautFMSearchResult](#interfaceslautfmsearchresultmd)
- [LautFMStatus](#interfaceslautfmstatusmd)
- [Playlist](#interfacesplaylistmd)
- [Track](#interfacestrackmd)

# Classes


<a name="classesstationmd"></a>

[better-lautfm](#readmemd) / Station

## Class: Station

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Properties

- [active](#active)
- [color](#color)
- [currentPlaylist](#currentplaylist)
- [description](#description)
- [displayName](#displayname)
- [djs](#djs)
- [genres](#genres)
- [location](#location)
- [name](#name)
- [nextPlaylist](#nextplaylist)
- [position](#position)
- [updatedAt](#updatedat)

#### Accessors

- [pageUrl](#pageurl)
- [streamUrl](#streamurl)

#### Methods

- [fetch](#fetch)
- [getCurrentTrack](#getcurrenttrack)
- [getHistory](#gethistory)
- [getListenerCount](#getlistenercount)
- [getNextArtists](#getnextartists)
- [getPlaylists](#getplaylists)
- [getSchedule](#getschedule)
- [build](#build)

### Constructors

#### constructor

• **new Station**(`name`)

constructor for the station

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of the station |

##### Defined in

[station/Station.ts:62](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L62)

### Properties

#### active

• `Optional` **active**: `boolean`

##### Defined in

[station/Station.ts:46](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L46)

___

#### color

• `Optional` **color**: `string`

##### Defined in

[station/Station.ts:42](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L42)

___

#### currentPlaylist

• `Optional` **currentPlaylist**: [`Playlist`](#interfacesplaylistmd)

##### Defined in

[station/Station.ts:53](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L53)

___

#### description

• `Optional` **description**: `string`

##### Defined in

[station/Station.ts:36](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L36)

___

#### displayName

• `Optional` **displayName**: `string`

##### Defined in

[station/Station.ts:34](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L34)

___

#### djs

• `Optional` **djs**: `string`

##### Defined in

[station/Station.ts:38](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L38)

___

#### genres

• `Optional` **genres**: `string`[]

##### Defined in

[station/Station.ts:50](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L50)

___

#### location

• `Optional` **location**: `string`

##### Defined in

[station/Station.ts:40](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L40)

___

#### name

• **name**: `string`

##### Defined in

[station/Station.ts:32](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L32)

___

#### nextPlaylist

• `Optional` **nextPlaylist**: [`Playlist`](#interfacesplaylistmd)

##### Defined in

[station/Station.ts:55](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L55)

___

#### position

• `Optional` **position**: `number`

##### Defined in

[station/Station.ts:48](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L48)

___

#### updatedAt

• `Optional` **updatedAt**: `Date`

##### Defined in

[station/Station.ts:44](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L44)

### Accessors

#### pageUrl

• `get` **pageUrl**(): `string`

get station page url

##### Returns

`string`

##### Defined in

[station/Station.ts:117](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L117)

___

#### streamUrl

• `get` **streamUrl**(): `string`

get station stream url (including subdomain)

##### Returns

`string`

##### Defined in

[station/Station.ts:125](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L125)

### Methods

#### fetch

▸ **fetch**(): `Promise`<`undefined` \| [`Station`](#classesstationmd)\>

fetch the data of the station

**`throws`** {Error} station does not exist

##### Returns

`Promise`<`undefined` \| [`Station`](#classesstationmd)\>

##### Defined in

[station/Station.ts:96](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L96)

___

#### getCurrentTrack

▸ **getCurrentTrack**(): `Promise`<[`Track`](#interfacestrackmd)\>

get current track

##### Returns

`Promise`<[`Track`](#interfacestrackmd)\>

##### Defined in

[station/Station.ts:147](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L147)

___

#### getHistory

▸ **getHistory**(): `Promise`<[`Track`](#interfacestrackmd)[]\>

get last 10 tracks

##### Returns

`Promise`<[`Track`](#interfacestrackmd)[]\>

##### Defined in

[station/Station.ts:133](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L133)

___

#### getListenerCount

▸ **getListenerCount**(): `Promise`<`number`\>

get the count of currently listening people

##### Returns

`Promise`<`number`\>

##### Defined in

[station/Station.ts:172](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L172)

___

#### getNextArtists

▸ **getNextArtists**(): `Promise`<[`Artist`](#interfacesartistmd)[]\>

get next 3 artists

##### Returns

`Promise`<[`Artist`](#interfacesartistmd)[]\>

##### Defined in

[station/Station.ts:161](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L161)

___

#### getPlaylists

▸ **getPlaylists**(): `Promise`<[`Playlist`](#interfacesplaylistmd)[]\>

get all playlists with their airtimes

##### Returns

`Promise`<[`Playlist`](#interfacesplaylistmd)[]\>

##### Defined in

[station/Station.ts:183](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L183)

___

#### getSchedule

▸ **getSchedule**(): `Promise`<[`Playlist`](#interfacesplaylistmd)[][]\>

return format schedule of station

##### Returns

`Promise`<[`Playlist`](#interfacesplaylistmd)[][]\>

##### Defined in

[station/Station.ts:234](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L234)

___

#### build

▸ `Static` **build**(`options`): [`Station`](#classesstationmd)

factory for Station

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Record`<`string`, `unknown`\> |

##### Returns

[`Station`](#classesstationmd)

##### Defined in

[station/Station.ts:71](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/Station.ts#L71)


<a name="classesdefaultmd"></a>

[better-lautfm](#readmemd) / default

## Class: default

### Table of contents

#### Constructors

- [constructor](#constructor)

#### Methods

- [getServerTime](#getservertime)
- [getStatus](#getstatus)
- [isServerRunning](#isserverrunning)
- [searchStations](#searchstations)

### Constructors

#### constructor

• **new default**()

### Methods

#### getServerTime

▸ `Static` **getServerTime**(): `Promise`<`Date`\>

get current serverTime

##### Returns

`Promise`<`Date`\>

##### Defined in

[core/LautFM.ts:88](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/core/LautFM.ts#L88)

___

#### getStatus

▸ `Static` **getStatus**(): `Promise`<[`LautFMStatus`](#interfaceslautfmstatusmd)\>

get server status

##### Returns

`Promise`<[`LautFMStatus`](#interfaceslautfmstatusmd)\>

##### Defined in

[core/LautFM.ts:98](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/core/LautFM.ts#L98)

___

#### isServerRunning

▸ `Static` **isServerRunning**(): `Promise`<`boolean`\>

get running state of api

##### Returns

`Promise`<`boolean`\>

##### Defined in

[core/LautFM.ts:108](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/core/LautFM.ts#L108)

___

#### searchStations

▸ `Static` **searchStations**(`searchOptions`): `Promise`<[`LautFMSearchResult`](#interfaceslautfmsearchresultmd)\>

execute lautFM search query

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchOptions` | [`LautFMSearchOptions`](#interfaceslautfmsearchoptionsmd) | the options |

##### Returns

`Promise`<[`LautFMSearchResult`](#interfaceslautfmsearchresultmd)\>

##### Defined in

[core/LautFM.ts:119](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/core/LautFM.ts#L119)

# Interfaces


<a name="interfacesairtimemd"></a>

[better-lautfm](#readmemd) / Airtime

## Interface: Airtime

declaration for airtime

**`param`** day shortcut

**`param`** hour of start

**`param`** hour of end

### Table of contents

#### Properties

- [day](#day)
- [endTime](#endtime)
- [hour](#hour)

### Properties

#### day

• **day**: ``"mon"`` \| ``"tue"`` \| ``"wed"`` \| ``"thu"`` \| ``"fri"`` \| ``"sat"`` \| ``"sun"``

##### Defined in

[station/interface.ts:113](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L113)

___

#### endTime

• **endTime**: `number`

##### Defined in

[station/interface.ts:115](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L115)

___

#### hour

• **hour**: `number`

##### Defined in

[station/interface.ts:114](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L114)


<a name="interfacesartistmd"></a>

[better-lautfm](#readmemd) / Artist

## Interface: Artist

declaration for formatted artists

**`param`** name of artist

**`param`** internal lautFM id

**`param`** url to personal page

**`param`** url to lautFM page

**`param`** image of artist

**`param`** thumbnail of artist

### Table of contents

#### Properties

- [image](#image)
- [lautId](#lautid)
- [lautUrl](#lauturl)
- [name](#name)
- [thumb](#thumb)
- [url](#url)

### Properties

#### image

• `Optional` **image**: `string`

##### Defined in

[station/interface.ts:72](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L72)

___

#### lautId

• `Optional` **lautId**: `number`

##### Defined in

[station/interface.ts:69](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L69)

___

#### lautUrl

• `Optional` **lautUrl**: `string`

##### Defined in

[station/interface.ts:71](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L71)

___

#### name

• **name**: `string`

##### Defined in

[station/interface.ts:68](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L68)

___

#### thumb

• `Optional` **thumb**: `string`

##### Defined in

[station/interface.ts:73](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L73)

___

#### url

• `Optional` **url**: `string`

##### Defined in

[station/interface.ts:70](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L70)


<a name="interfaceslautfmapisearchresultmd"></a>

[better-lautfm](#readmemd) / LautFMAPISearchResult

## Interface: LautFMAPISearchResult

declaration of direct api response

**`param`** categories matching query, for further information visit https://api.laut.fm/documentation/search (german documentation)

**`param`** number of total results in this categories

**`param`** matching stations / stationNames

### Table of contents

#### Properties

- [categories](#categories)
- [items](#items)
- [total](#total)

### Properties

#### categories

• **categories**: `string`[]

##### Defined in

[core/LautFM.ts:65](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/core/LautFM.ts#L65)

___

#### items

• **items**: [`Station`](#classesstationmd)[] \| `string`[]

##### Defined in

[core/LautFM.ts:67](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/core/LautFM.ts#L67)

___

#### total

• **total**: `number`

##### Defined in

[core/LautFM.ts:66](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/core/LautFM.ts#L66)


<a name="interfaceslautfmsearchoptionsmd"></a>

[better-lautfm](#readmemd) / LautFMSearchOptions

## Interface: LautFMSearchOptions

declaration of search options

**`param`** max length of result

**`param`** the value to search for

**`param`** toggle station fetch (server side, not our fetch)

**`param`** offset of the results

### Table of contents

#### Properties

- [limit](#limit)
- [offset](#offset)
- [onlyStationNames](#onlystationnames)
- [query](#query)

### Properties

#### limit

• `Optional` **limit**: `number`

##### Defined in

[core/LautFM.ts:51](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/core/LautFM.ts#L51)

___

#### offset

• `Optional` **offset**: `number`

##### Defined in

[core/LautFM.ts:54](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/core/LautFM.ts#L54)

___

#### onlyStationNames

• `Optional` **onlyStationNames**: `boolean`

##### Defined in

[core/LautFM.ts:53](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/core/LautFM.ts#L53)

___

#### query

• **query**: `string`

##### Defined in

[core/LautFM.ts:52](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/core/LautFM.ts#L52)


<a name="interfaceslautfmsearchresultmd"></a>

[better-lautfm](#readmemd) / LautFMSearchResult

## Interface: LautFMSearchResult

declaration of our formatted response

**`param`** matching stations / stationNames

**`param`** total matched Stations (not 100% exact because of duplicates)

### Table of contents

#### Properties

- [result](#result)
- [totalCount](#totalcount)

### Properties

#### result

• **result**: [`Station`](#classesstationmd)[] \| `string`[]

##### Defined in

[core/LautFM.ts:77](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/core/LautFM.ts#L77)

___

#### totalCount

• **totalCount**: `number`

##### Defined in

[core/LautFM.ts:78](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/core/LautFM.ts#L78)


<a name="interfaceslautfmstatusmd"></a>

[better-lautfm](#readmemd) / LautFMStatus

## Interface: LautFMStatus

declaration of status object

**`param`** running state

**`param`** description of status

### Table of contents

#### Properties

- [message](#message)
- [running](#running)

### Properties

#### message

• **message**: `string`

##### Defined in

[core/LautFM.ts:38](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/core/LautFM.ts#L38)

___

#### running

• **running**: `boolean`

##### Defined in

[core/LautFM.ts:37](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/core/LautFM.ts#L37)


<a name="interfacesplaylistmd"></a>

[better-lautfm](#readmemd) / Playlist

## Interface: Playlist

declaration for formatted Playlists

**`param`** lautFM intern number

**`param`** name of the playlist

**`param`** shortcut of day

**`param`** starting hour of playlist

**`param`** ending hour of playlist

**`param`** description of playlist

**`param`** hex color

**`param`** length in seconds

**`param`** is playlist shuffled

**`param`** starting timestamp

**`param`** ending timestamp

**`param`**

### Table of contents

#### Properties

- [airtimes](#airtimes)
- [color](#color)
- [day](#day)
- [description](#description)
- [endTime](#endtime)
- [endsAt](#endsat)
- [hour](#hour)
- [id](#id)
- [length](#length)
- [name](#name)
- [shuffled](#shuffled)
- [startsAt](#startsat)

### Properties

#### airtimes

• `Optional` **airtimes**: [`Airtime`](#interfacesairtimemd)[]

##### Defined in

[station/interface.ts:54](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L54)

___

#### color

• **color**: `string`

##### Defined in

[station/interface.ts:49](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L49)

___

#### day

• `Optional` **day**: `string`

##### Defined in

[station/interface.ts:45](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L45)

___

#### description

• **description**: `string`

##### Defined in

[station/interface.ts:48](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L48)

___

#### endTime

• `Optional` **endTime**: `number`

##### Defined in

[station/interface.ts:47](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L47)

___

#### endsAt

• `Optional` **endsAt**: `Date`

##### Defined in

[station/interface.ts:53](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L53)

___

#### hour

• `Optional` **hour**: `number`

##### Defined in

[station/interface.ts:46](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L46)

___

#### id

• **id**: `number`

##### Defined in

[station/interface.ts:43](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L43)

___

#### length

• **length**: `number`

##### Defined in

[station/interface.ts:50](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L50)

___

#### name

• **name**: `string`

##### Defined in

[station/interface.ts:44](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L44)

___

#### shuffled

• **shuffled**: `boolean`

##### Defined in

[station/interface.ts:51](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L51)

___

#### startsAt

• `Optional` **startsAt**: `Date`

##### Defined in

[station/interface.ts:52](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L52)


<a name="interfacestrackmd"></a>

[better-lautfm](#readmemd) / Track

## Interface: Track

declaration of formatted track

**`param`** internal lautID

**`param`** type of track (for Example: 'Jingle' or 'Song')

**`param`**

**`param`**

**`param`** length of track in seconds

**`param`** genre of track

**`param`** year of release

**`param`** inserted into playlist timestamp

**`param`** start timestamp

**`param`** end timestamp

**`param`**

### Table of contents

#### Properties

- [album](#album)
- [artist](#artist)
- [createdAt](#createdat)
- [endsAt](#endsat)
- [genre](#genre)
- [id](#id)
- [length](#length)
- [releaseyear](#releaseyear)
- [startedAt](#startedat)
- [title](#title)
- [type](#type)

### Properties

#### album

• **album**: `string`

##### Defined in

[station/interface.ts:95](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L95)

___

#### artist

• **artist**: [`Artist`](#interfacesartistmd)

##### Defined in

[station/interface.ts:102](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L102)

___

#### createdAt

• **createdAt**: `Date`

##### Defined in

[station/interface.ts:99](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L99)

___

#### endsAt

• **endsAt**: `Date`

##### Defined in

[station/interface.ts:101](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L101)

___

#### genre

• **genre**: `string`

##### Defined in

[station/interface.ts:97](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L97)

___

#### id

• **id**: `number`

##### Defined in

[station/interface.ts:92](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L92)

___

#### length

• **length**: `number`

##### Defined in

[station/interface.ts:96](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L96)

___

#### releaseyear

• **releaseyear**: `number`

##### Defined in

[station/interface.ts:98](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L98)

___

#### startedAt

• **startedAt**: `Date`

##### Defined in

[station/interface.ts:100](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L100)

___

#### title

• **title**: `string`

##### Defined in

[station/interface.ts:94](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L94)

___

#### type

• **type**: `string`

##### Defined in

[station/interface.ts:93](https://github.com/Randoooom/better-lautfm/blob/6cee1e7/src/station/interface.ts#L93)
