module.exports = {
    options: {
        atBegin: true,
        livereload: true
    },
    hugo: {
        files: ['content/**', 'static/**', 'config.toml'],
        tasks: 'hugo:dev'
    },
    all: {
        files: ['Gruntfile.js'],
        tasks: 'dev'
    }
};
