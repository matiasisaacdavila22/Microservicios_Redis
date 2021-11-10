const express = require('express');
const config = require('../config')
const user = require('./components/user/network')
const auth = require('./components/auth/network')
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const app = express();

const swaggerDoc = require('./swagger.json')

app.use(bodyParser.json());
app.use('/api/user', user);
app.use('/api/auth', auth);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.listen(config.api.port, () => {
        console.log(`api escuchando en puerto ${config.api.port}`);
});