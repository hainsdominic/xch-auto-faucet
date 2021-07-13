const axios = require('axios');
const cron = require('node-cron');
require('dotenv').config();

cron.schedule('* */13 * * *', async () => {
  try {
    await axios.post(process.env.XCH_FAUCET, {
      xch_wallet: process.env.XCH_WALLET,
    });
    console.log(`Successfully claimed your Mojos at ${Date.now()}`);
  } catch (error) {
    console.error(error);
  }
});
