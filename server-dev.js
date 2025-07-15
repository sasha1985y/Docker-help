const express = require('express');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

// Используем корневую папку проекта для статических файлов
app.use(express.static(__dirname));

// Обработка запросов на получение списка файлов
app.get('/files', (req, res) => {
    fs.readdir(__dirname, (err, files) => {
        if (err) return res.status(500).send(err);
        res.json(files.filter(file => file.endsWith('.html')));
    });
});

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        const { filename, content } = JSON.parse(message);
        // Запись изменений в указанный файл
        fs.writeFile(path.join(__dirname, filename), content, (err) => {
            if (err) console.error(err);
        });
    });
});

server.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000');
});
