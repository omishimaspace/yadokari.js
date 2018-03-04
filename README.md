# Yadokari

Yadokari.js is a command line tool yadokari management system built with Node.js.

## Prerequisites

1. Install [Node.js](https://nodejs.org/en/)
2. Install [Commanderjs](https://github.com/tj/commander.js)
3. Install [Inquirerjs](https://github.com/SBoudrias/Inquirer.js/)

## Installation

1. Clone the repository [here](https://github.com/omishimaspace/yadokari.js)
2. Run `yarn` to install node dependencies.
3. Run `yarn link` to creates a symbolic link between project directory and executable command.

## Usage

```
Usage: contact [options] [command]


  Commands:

    list|l Get Yado list
    reserve|r <_id> Make a reserve
    cal|c Get yado schedules list
    me|m <token>  Get my reserve info

  Yadokari management system

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```
