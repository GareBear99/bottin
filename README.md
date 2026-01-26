# botterccino

A Discord bot deployed on Cloudflare Workers.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure your secrets:
   ```bash
   wrangler secret put YOUR_SECRET_NAME
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Webhook URL

Set your webhook/interaction endpoint to:
```
https://bottin.workers.dev
```

---
*Created with [BotFortress](https://botfortress.io)*
