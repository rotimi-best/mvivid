const rq = require('request-promise');
const { API_KEY, ADMIN_CHAT_ID } = process.env;

/**
 * 
 * Calculate length
 * 
 * @param {Any} n Any type of value
 * @return {number}
 */
const len = n => n.length;

/**
 * 
 * Generate a random number from a range of 2 numbers
 * 
 * @param {Number} min The minimum number for the random number
 * @param {Number} max The maximum number for the random number
 */
const genRandNum = (min, max) => Math.floor(Math.random() * (1 + max - min)) + min;


/**
 * 
 * Send Message to user in telegram bot
 * 
 * @param {String} msg Message to send to a user on telegram
 */
const sendMsgToAdminOnTelegram = (text, chat_id = null) => {
  return new Promise(async resolve => {
    try {
      // const intro = '<b>Hello Best</b>\n';
      // const text = msg.length ? `${intro}${msg}` : 'No message to send';
      
      const options = {
        uri: `https://api.telegram.org/bot${API_KEY}/sendMessage`,
        qs: {
          text,
          chat_id: chat_id || ADMIN_CHAT_ID,
          parse_mode: 'HTML'
        },
        headers: {
          'User-Agent': 'Request-Promise'
        },
        json: true
      };
      
      const result = await rq(options);

      console.log("TELEGRAM-BOT-MESSAGE: ", result.ok);

      resolve('');
    } catch (error) {
      console.error(error);
      
      resolve('');
    }
  });
};

module.exports = {
  len,
  genRandNum,
  sendMsgToAdminOnTelegram
}
