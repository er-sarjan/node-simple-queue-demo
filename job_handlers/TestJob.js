var TestJob = function() {};
TestJob.perform = function(data, done) {
  console.log('doing job');
  console.log(data.number);
  done(null, true); // if your job is successful
  done(err); // if your job fails
};
GLOBAL.QUEUE.TestJob = TestJob;