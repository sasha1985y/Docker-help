const ws = new WebSocket('ws://localhost:3000');

const editablePre = document.getElementById('editablePre');

// Загрузка содержимого index.html при загрузке страницы
fetch('overal_docker_rmi.html')
    .then(response => response.text())
    .then(data => {
        editablePre.innerText = data;
    });

editablePre.addEventListener('input', () => {
    ws.send(editablePre.innerText);
});