const express = require('express');
const path = require('path');
const ngApp = express();
var port = process.env.PORT || 3001;
ngApp.use(express.static('./dist/stumps11'));
ngApp.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/stumps11/index.html'));
});
ngApp.listen(port)