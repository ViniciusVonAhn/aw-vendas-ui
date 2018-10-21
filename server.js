const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/aw-vendas-ui'));
app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/aw-vendas-ui/index.html'));
});
app.listen(process.env.PORT || 8080);