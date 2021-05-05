const { config } = require(`./wdio.shared.conf`);

config.capabilities = [
    {
        maxInstances: 5,
        browserName: process.env.BROWSER
    }
]

exports.config = config;
