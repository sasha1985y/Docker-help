const express = require('express');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

// Используем корневую папку проекта для статических файлов
app.use(express.static(__dirname));

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        // Запись изменений в index.html
        fs.writeFile(path.join(__dirname, 'swarm_docker_service.html'), message, (err) => {
            if (err) console.error(err);
        });
    });
});

server.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000');
});

