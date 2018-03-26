const faker = require('faker');

function generateUsers(num) {
  var users = [];
  for(var i = 0; i < num; i++) {
    name = [faker.name.firstName(), faker.name.lastName()]
    users.push({
      id: i + 1,
      name: name.join(' '),
      userName: faker.internet.userName(name),
      password: faker.internet.password(),
      email: faker.internet.email(name[0], name[1], "cqinvestigations.com"),
      roles: [
        faker.random.arrayElement(["Records Custodian", "Interview Specialist", "Case Manager", "Administrator", "Accounting"])
      ]
    });
  }

  return users;
}

module.exports = { generateUsers };
