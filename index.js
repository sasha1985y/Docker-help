function createDropdown() {
    var commonCommandsSelect = document.getElementById("commonCommands");
    var overalCommandsSelect = document.getElementById("overalCommands");
    var managementCommandsSelect = document.getElementById("managementCommands");
    var swarmCommandsSelect = document.getElementById("swarmCommands");
    var globalOptionsSelect = document.getElementById("globalOptions");
    commonCommandsSelect.onchange = commonNavigate;
    overalCommandsSelect.onchange = overalNavigate;
    managementCommandsSelect.onchange = managementNavigate;
    swarmCommandsSelect.onchange = swarmNavigate;
    globalOptionsSelect.onchange = globalOptionsNavigate;


    // Создаем опции
    var commonCommandsOptions = [
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

    commonCommandsOptions.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        commonCommandsSelect.appendChild(opt);
    });

    var overalCommandsOptions = [
        { value: "", text: "Общие команды" },
        { value: "index.html", text: "Домой" },
        { value: "overal_docker_create.html", text: "docker create" },
        { value: "overal_docker_logs.html", text: "docker logs" },
        { value: "overal_docker_restart.html", text: "docker restart" },
        { value: "overal_docker_rm.html", text: "docker rm" },
        { value: "overal_docker_start.html", text: "docker start" },
        { value: "overal_docker_stop.html", text: "docker stop" },
        
    ];
    
    overalCommandsOptions.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        overalCommandsSelect.appendChild(opt);
    });
    
    var managementCommandsOptions = [
        { value: "", text: "Управляющие команды" },
        { value: "index.html", text: "Домой" },
        { value: "management_docker_volume.html", text: "docker volume" },
    ];

    managementCommandsOptions.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        managementCommandsSelect.appendChild(opt);
    });

    var swarmCommandsOptions = [
        { value: "", text: "Swarm-команды" },
        { value: "index.html", text: "Домой" },
        { value: "common_docker_bake.html", text: "docker bake" },
        
    ];

    swarmCommandsOptions.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        swarmCommandsSelect.appendChild(opt);
    });

    var globalOptions = [
        { value: "", text: "Глобальные опции" },
        { value: "index.html", text: "Домой" },
        { value: "common_docker_bake.html", text: "docker bake" },
        
    ];

    globalOptions.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        globalOptionsSelect.appendChild(opt);
    });
}

function commonNavigate() {
    var commonSelect = document.getElementById("commonCommands");

    var commonUrl = commonSelect.value;

    if (commonUrl) {
        window.location.href = commonUrl; // Переход по выбранной ссылке
    }
}

function overalNavigate() {

    var overalSelect = document.getElementById("overalCommands");

    var overalUrl = overalSelect.value;
    if (overalUrl) {
        window.location.href = overalUrl;
    }
}

function managementNavigate() {

    var managementSelect = document.getElementById("managementCommands");

    var managementUrl = managementSelect.value;
    if (managementUrl) {
        window.location.href = managementUrl;
    }
}

function swarmNavigate() {

    var swarmSelect = document.getElementById("swarmCommands");

    var swarmUrl = swarmSelect.value;
    if (swarmUrl) {
        window.location.href = swarmUrl;
    }
}

function globalOptionsNavigate() {

    var globalOptionsSelect = document.getElementById("globalOptions");

    var globalOptionsUrl = globalOptionsSelect.value;
    if (globalOptionsUrl) {
        window.location.href = globalOptionsUrl;
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
