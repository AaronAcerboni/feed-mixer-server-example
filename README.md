# feed-mixer-server-example

Simple connect server using [feed-mixer](https://github.com/AaronAcerboni/feed-mixer). It polls and aggregates the feeds specified in 
`config.json` and delivers it over HTTP.

## Usage

```
npm install
node app.js
```

Visit `localhost:3000` in your browser. The connect server won't respond to your 
request until it has collected the initial aggregate feed.