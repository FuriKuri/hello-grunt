module.exports = function(grunt) {
  grunt.registerTask('default', function() {
    // console.log('Hello form Grunt');
    grunt.log.writeln('Hello from Grunt');
  });

  grunt.registerTask('greet', function(name) {
    grunt.log.writeln('Hi there, ' + name);
  });
}
