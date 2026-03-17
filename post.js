const express = require('express');
const app = express();

app.use(express.json());

let users = [{ id: 1, name: 'John' }];

// GET all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET single user
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.send('User not found');
    }

    res.json(user);
});

// POST add user
app.post('/users', (req, res) => {
    if (!req.body.name) {
        return res.send('Name is required');
    }

    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };

    users.push(newUser);
    res.json(newUser);
});

// PUT update user
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.send('User not found');
    }

    if (!req.body.name) {
        return res.send('Name is required');
    }

    user.name = req.body.name;
    res.json(user);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.send('User not found');
    }

    users = users.filter(u => u.id !== id);
    res.send('User deleted');
});

// START SERVER
app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});
