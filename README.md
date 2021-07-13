# XCH-auto-faucet

Automatically claim XCH tokens from a faucet.

## Installation

To use this script, you need Node.js and npm/yarn.

First, create a filed in the root directory named .env and fill it according to this template.

```
XCH_WALLET=<YOUR_XCH_WALLET_ADDRESS>
XCH_FAUCET=http://chia.crypto-faucet.ml/100k
```

Then install the dependencies

```
npm install
```

or

```
yarn install
```

## Usage

Simply run the script, ideally using a process manager such as [PM2](https://pm2.keymetrics.io).

```
npm start
```

or

```
yarn start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
