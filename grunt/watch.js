module.exports = {
    options: {
        atBegin: true,
        livereload: true
    },
    hugo: {
        files: ['**'],
        tasks: 'hugo:dev'
    },
    all: {
        files: ['Gruntfile.js'],
        tasks: 'dev'
    }
};
