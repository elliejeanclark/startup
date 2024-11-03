const express = require('express');
const uuid = require('uuid');
const app = express();

let users = {};
let reviews = {};

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res_) => {
    const user = users[req.body.username];
    if (user) {
        res_.status(409).send({ msg: 'That username is already taken'});
    } else {
        const user = { username: req.body.username, password: req.body.password, token: uuid.v4() };
        users[user.username] = user;

        res_.send({ token: user.token });
    }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res_) => {
    const user = users[req.body.username];
    if (user) {
        if ([req.body.password === user.passowrd]) {
            user.token = uuid.v4();
            res_.send({ token: user.token });
            return;
        }
    }
    res_.status(401).send({ msg: 'Invalid username or password' });
});

app.get('*', (_req, res) => {
  res.send({ msg: 'Startup Service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});