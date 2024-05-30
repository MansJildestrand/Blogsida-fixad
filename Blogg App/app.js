const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/posts', postsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
