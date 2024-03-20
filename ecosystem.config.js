module.exports = {
    apps: [
        {
            name: 'test',
            script: 'src/server.ts',
            interpreter: 'ts-node-dev',
            instances: 1,
            autorestart: true,
            watch: true,
            ignore_watch: ['node_modules'],
            max_memory_restart: '1G',
        },
    ],
};
