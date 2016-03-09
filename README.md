# Slack Relay
Token authenticated Slack relay server for non-HTTPS compatible devices

## Install
**Slack Relay** requires Node.js and NPM to be installed locally.

```bash
git clone https://github.com/TheConnMan/Slack-Relay.git
cd Slack-Relay
npm install
node index.js
```

Then access the API at [http://localhost:3000](http://localhost:3000).

## Docker
**Slack Relay** can also be run with Docker with the following commands:

```bash
docker run -d -p 80:3000 --name slack-relay -e API_KEY=secret-key  theconnman/slack-relay
```

or built locally with:

```bash
docker build -t theconnman/slack-relay .
```

then run with the same command as above.
