const express = require('express');


const app = express();

app.get('/api/users', (req, res) => {
    const users = [{
            id: 1,
            firstName: 'Bilal',
            surName: 'Koçak',
            birthDay:"04.02.1998"
        },
        {
            id: 2,
            firstName: 'Enes',
            surName: 'Nazlı'
        },
    ];
    res.json(users);


})

const port = 5000;

app.listen(port, () => console.log('Server ' + port + ' portu üzerinde çalışıyor.'));