module.exports = function(grunt) {

    // NOTE : This is an improved usage of Grunt, followed example :
    // http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/

    // measures the time each task takes
    require('time-grunt')(grunt);

    // Load all grunt dependencies and tasks automatically
    require('load-grunt-config')(grunt, {
        data: { // Data passed into config. Can use with <%= test %>
            pkg: grunt.file.readJSON('package.json')
        }
    });

    grunt.registerTask('hugo', function(target) {
        var done = this.async();
        var args = ['--destination=./build/' + target];
        if (target == 'dev') {
            args.push('--baseUrl=http://127.0.0.1:8080/');
            args.push('--buildDrafts=true');
            args.push('--buildFuture=true');
        }
        var hugo = require('child_process').spawn('hugo', args, {stdio: 'inherit'});
        for(var e of ['exit', 'error']) {
            hugo.on(e, () => done(true));
        }
    });
};
