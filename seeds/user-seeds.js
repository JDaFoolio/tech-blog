const { User } = require('../models');

const userData = [{
        username: 'Jared',
        password: 'jared123'

    },
    {
        username: 'Tommy',
        password: 'tommy'
    },
    {
        username: 'Kendall',
        password: 'kendall'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;