// FeedMixer

var aggregateFeed = '';
var FeedMixer = require('feed-mixer');

var mixer = new FeedMixer('./config.json');

mixer.events.on('refreshComplete', function (feed) {
    aggregateFeed = feed;
})

mixer.events.on('refreshStart', function () {
    console.log('Fetching/creating initial feed.');
    console.log('Server not ready yet.');
})

// Server

var connect = require('connect');
var app = connect();

mixer.refresh().then(readyServer);

function readyServer () {
    app.use(function (request, response) {
        response.setHeader('content-type', 'application/rss+xml');
        response.end(aggregateFeed);
    });
    console.log('Done. Server accepting requests.');
    console.log('Visit localhost:3000');
    app.listen(3000);
}

