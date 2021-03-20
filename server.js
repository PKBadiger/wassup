
const express = require('express');

const startServer = async () => {
    const app = express();
    const PORT = process.env.PORT || 5000;
    await require('./loaders').default(app);
    app.listen(PORT, () => console.log(`Server is Running at Port - ${PORT}`))
}

startServer();