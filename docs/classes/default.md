[better-lautfm](../README.md) / [Exports](../modules.md) / default

# Class: default

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Methods

- [getServerTime](default.md#getservertime)
- [getStatus](default.md#getstatus)
- [isServerRunning](default.md#isserverrunning)
- [searchStations](default.md#searchstations)

## Constructors

### constructor

• **new default**()

## Methods

### getServerTime

▸ `Static` **getServerTime**(): `Promise`<`Date`\>

get current serverTime

#### Returns

`Promise`<`Date`\>

#### Defined in

[core/LautFM.ts:88](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/core/LautFM.ts#L88)

___

### getStatus

▸ `Static` **getStatus**(): `Promise`<[`LautFMStatus`](../interfaces/LautFMStatus.md)\>

get server status

#### Returns

`Promise`<[`LautFMStatus`](../interfaces/LautFMStatus.md)\>

#### Defined in

[core/LautFM.ts:98](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/core/LautFM.ts#L98)

___

### isServerRunning

▸ `Static` **isServerRunning**(): `Promise`<`boolean`\>

get running state of api

#### Returns

`Promise`<`boolean`\>

#### Defined in

[core/LautFM.ts:108](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/core/LautFM.ts#L108)

___

### searchStations

▸ `Static` **searchStations**(`searchOptions`): `Promise`<[`LautFMSearchResult`](../interfaces/LautFMSearchResult.md)\>

execute lautFM search query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchOptions` | [`LautFMSearchOptions`](../interfaces/LautFMSearchOptions.md) | the options |

#### Returns

`Promise`<[`LautFMSearchResult`](../interfaces/LautFMSearchResult.md)\>

#### Defined in

[core/LautFM.ts:119](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/core/LautFM.ts#L119)
