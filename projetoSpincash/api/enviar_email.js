const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar o Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware para permitir solicitações de diferentes origens
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // Altere este valor para o endereço do seu site
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Rota para enviar e-mails
app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    // Configurar o Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'testeSamuelCbt@hotmail.com',
            pass: 'borabora22'
        }
    });

    // Definir o e-mail
    const mailOptions = {
        from: 'testeSamuelCbt@hotmail.com',
        to: 'samuel.eug7@gmail.com',
        subject: subject,
        text: text
    };

    // Enviar o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erro ao enviar o e-mail:', error);
            res.status(500).send('Erro ao enviar o e-mail');
        } else {
            console.log('E-mail enviado:', info.response);
            res.status(200).send('E-mail enviado com sucesso');
        }
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
