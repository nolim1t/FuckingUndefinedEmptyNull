[![npm version](https://badge.fury.io/js/fuckingundefinedemptynull.svg)](https://badge.fury.io/js/fuckingundefinedemptynull)



# FuckingUndefinedEmptyNull

Detecting undefined, null, or empty strings. Eventually, I want to make this like the lonely operator equivalent (see ruby 2.3 feature) in javascript

## Installation

```bash
npm i fuckingundefinedemptynull
```

## Usage

```javascript
var emptyStringCheck = require("fuckingundefinedemptynull").isStringSet;

var undefinedVariable;

if (emptyStringCheck(undefinedVariable)) {
    console.log("Variable is set");
} else {
    console.log("Variable is NOT set");
}
```
