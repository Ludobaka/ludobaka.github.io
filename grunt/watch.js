module.exports = {
    options: {
        atBegin: true,
        livereload: true
    },
    hugo: {
        files: ['content/**', 'static/**', 'archetypes/**', 'layouts/**', 'config.toml'],
        tasks: 'hugo:dev'
    },
    all: {
        files: ['Gruntfile.js'],
        tasks: 'dev'
    }
};
