module.exports = function(grunt) {
  grunt.registerTask('default', function() {
    // console.log('Hello form Grunt');
    grunt.log.writeln('Hello from Grunt');
  });

  grunt.registerTask('greet', function(name) {
    grunt.log.writeln('Hi there, ' + name);
  });

  grunt.registerTask('addNumbers', function(first, second) {
    if (isNaN(Number(first))) {
      grunt.warn('First argument must be a number.');
    }
    var answer = Number(first) + Number(second);
    grunt.log.writeln(first + ' + ' + second + ' is ' + answer);
  });

  grunt.registerTask('all', ['default', 'greet:Brian', 'addNumbers:2:3']);

  grunt.registerTask('praise', 'Have Grunt say nice things about you.', function(){
    var praise = ['You are awesome', 'Everyone loves you'];
    var pick = praise[(Math.floor(Math.random() * praise.length))];
    grunt.log.writeln(pick)
  });
}
