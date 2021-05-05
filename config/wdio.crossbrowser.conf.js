const { config } = require(`./wdio.shared.conf`);

config.capabilities = [
    {
        maxInstances: 5,
        browserName: 'internet explorer'
    },
    {
        maxInstances: 5,
        browserName: 'chrome'
    },
    {
        maxInstances: 5,
        browserName: 'firefox'
    }
]

exports.config = config;
