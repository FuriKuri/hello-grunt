module.exports = function(grunt) {
  grunt.registerTask('default', function() {
    // console.log('Hello form Grunt');
    grunt.log.writeln('Hello from Grunt');
  });

  grunt.registerTask('greet', function(name) {
    grunt.log.writeln('Hi there, ' + name);
  });

  grunt.registerTask('addNumbers', function(first, second) {
    var answer = Number(first) + Number(second);
    grunt.log.writeln(first + ' + ' + second + ' is ' + answer);
  });
}
