[better-lautfm](../README.md) / [Exports](../modules.md) / LautFMAPISearchResult

# Interface: LautFMAPISearchResult

declaration of direct api response

**`param`** categories matching query, for further information visit https://api.laut.fm/documentation/search (german documentation)

**`param`** number of total results in this categories

**`param`** matching stations / stationNames

## Table of contents

### Properties

- [categories](LautFMAPISearchResult.md#categories)
- [items](LautFMAPISearchResult.md#items)
- [total](LautFMAPISearchResult.md#total)

## Properties

### categories

• **categories**: `string`[]

#### Defined in

[core/LautFM.ts:65](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/core/LautFM.ts#L65)

___

### items

• **items**: [`Station`](../classes/Station.md)[] \| `string`[]

#### Defined in

[core/LautFM.ts:67](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/core/LautFM.ts#L67)

___

### total

• **total**: `number`

#### Defined in

[core/LautFM.ts:66](https://github.com/Randoooom/better-lautfm/blob/d24f451/src/core/LautFM.ts#L66)
