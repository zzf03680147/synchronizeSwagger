const express = require('express');
const generateRouter = require('./generateRouter');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`server is listening ${port}`);
});

// 路由
generateRouter(app);
