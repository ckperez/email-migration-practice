var studentExpertsEmployeeEmail = ['me@studentexperts.com', 'you@studentexperts.com', 'her@studentexperts.com', 'him@studentexperts.com', 'thatguy@studentexperts.com', 'who@studentexperts.com', 'bart@studentexperts.com', 'info@studentexperts.com'];
var penningtonEmployeeEmail = [];

for (i = 0; i < studentExpertsEmployeeEmail.length; i++) {
  penningtonEmployeeEmail.push(studentExpertsEmployeeEmail[i].replace('studentexperts', 'penningtoncreative'));
}
console.log(penningtonEmployeeEmail);
