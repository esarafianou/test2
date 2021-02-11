let jwt = require("jsonwebtoken");
let secret = process.env.SECRET;
jwt.verify('token-here', secret, { algorithms: ['RS256', 'none'] }, function(err, payload) {
    console.log(payload);
});

if (jwt.decode(token, true).param === true) {
  console.log('token is valid');
}
