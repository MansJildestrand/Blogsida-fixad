const express = require('express');
const router = express.Router();

let posts = [];

router.get('/', (req, res) => {
    res.render('index', { posts: posts });
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/', (req, res) => {
    const { title, content } = req.body;
    const id = posts.length + 1;
    posts.push({ id, title, content });
    res.redirect('/posts');
});

router.get('/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');
    res.render('post', { post });
});

router.get('/edit/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');
    res.render('edit', { post });
});

router.put('/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');
    post.title = req.body.title;
    post.content = req.body.content;
    res.redirect('/posts');
});

router.delete('/:id', (req, res) => {
    posts = posts.filter(p => p.id !== parseInt(req.params.id));
    res.redirect('/posts');
});

module.exports = router;
