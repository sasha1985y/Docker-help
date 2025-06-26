function createDropdown() {
    var select = document.getElementById("commonCommands");
    select.onchange = navigate;

    // Создаем опции
    var options = [
        { value: "", text: "Основные команды" },
        { value: "index.html", text: "Домой" },
        { value: "common_docker_bake.html", text: "docker bake" },
        { value: "common_docker_build.html", text: "docker build" },
        { value: "common_docker_exec.html", text: "docker exec" },
        { value: "common_docker_images.html", text: "docker images" },
        { value: "common_docker_info.html", text: "docker info" },
        { value: "common_docker_login.html", text: "docker login" },
        { value: "common_docker_logout.html", text: "docker logout" },
        { value: "common_docker_ps.html", text: "docker ps" },
        { value: "common_docker_pull.html", text: "docker pull" },
        { value: "common_docker_push.html", text: "docker push" },
        { value: "common_docker_run.html", text: "docker run" },
        { value: "common_docker_search.html", text: "docker search" },
        { value: "common_docker_version.html", text: "docker version" },
    ];

    options.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        select.appendChild(opt);
    });
}

function navigate() {
    var select = document.getElementById("commonCommands");
    var url = select.value;
    if (url) {
        window.location.href = url; // Переход по выбранной ссылке
    }
}


function getExample() {
    const codeExampleBtn = document.querySelector(".code-example-btn");
    const codeExample = document.querySelector(".code-example");
    
    codeExampleBtn.addEventListener('click', () => {
        codeExample.classList.toggle("visually-hidden")
    })
}

// Вызываем функцию для создания dropdown при загрузке страницы
window.onload = createDropdown;
