module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: '邮箱',
                password: '密码',
                branch: 'dev',
                ptr: false
            },
            dist: {
                src: ['dist/*.js']
            }
        }
    });
}