# Wokkimons
Monster collecting game for Discord. Inspired by PokeCord. Collect em' all!

[Invite Wokkimon to your server](https://discordapp.com/oauth2/authorize?client_id=689846496417415174&scope=bot&permissions=116736)

# Requirements
- Node.js 12.0.0 or newer
- Database (PSQL used, but anything Sequelize supports should be fine)

# Configuration
- Create `.env`
```
PREFIX=w!
TOKEN=YOUR_DISCORD_BOT_TOKEN
SPAWNER_INTERVAL=5-30
NODE_ENV=production
DEV_DATABASE_URL=postgres://user:password@address/database_development
TEST_DATABASE_URL=postgres://user:password@address/database_test
DATABASE_URL=postgres://user:password@address/database
DIALECT=postgres
```
- In /database run `npx sequelize db:migrate`
- Run the bot `npm start`