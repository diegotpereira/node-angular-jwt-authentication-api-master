const config = require('config.json');
const jwt = require('jsonwebtoken');

const users = [{ id: 1, username: 'test', password: 'test', firstName: 'test', lastName: 'User' }];

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) throw 'Nome de usuário ou senha incorretos!.';

    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });

    return {
        ...omitPassword(user),
        token
    };
}
async function getAll() {
    return users.map(u => omitPassword(u));
}

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}