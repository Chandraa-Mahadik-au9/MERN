import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin user',
        email: 'admin@xyzcom',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: true
    },
    {
        name: 'Jerry',
        email: 'jerry@xyzcom',
        password: bcrypt.hashSync('1234', 10)
    },
    {
        name: 'Tom',
        email: 'tom@xyzcom',
        password: bcrypt.hashSync('1234', 10)
    }
]

export default users;