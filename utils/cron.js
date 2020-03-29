const CronJob = require('cron').CronJob;
const MonController = require('../controllers/MonController');
const winston = require('./logger');

module.exports = {
  start(client) {
    let job = new CronJob('0 0 0 * * *', async () => {
      winston.info('Running daily avatar change!');
      const mons = await MonController.getAllMons();
      const mon = mons[Math.floor(Math.random() * mons.length)];

      client.user.setAvatar(mon.image)
        .then(user => winston.info(`Avatar changed to ${mon.name} (${mon.image})`))
        .catch(winston.error);
    }, null, true, 'Europe/Helsinki');
    job.start();
  }
}