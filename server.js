const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static('./dist/notes'));
app.get('/*', function (request, response) {  
    response.sendFile(path.join(__dirname, '/dist/notes/index.html'));  
});
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);