function createDropdown() {
    var commonCommandsSelect = document.getElementById("commonCommands");
    var overalCommandsSelect = document.getElementById("overalCommands");
    var managementCommandsSelect = document.getElementById("managementCommands");
    var swarmCommandsSelect = document.getElementById("swarmCommands");
    var globalOptionsSelect = document.getElementById("globalOptions");
    var editFilesSelect = document.getElementById("editFiles");
    var overalComposeCommandsSelect = document.getElementById("overalComposeCommands");
    var composeOptionsSelect = document.getElementById("composeOptions");
    commonCommandsSelect.onchange = commonNavigate;
    overalCommandsSelect.onchange = overalNavigate;
    managementCommandsSelect.onchange = managementNavigate;
    swarmCommandsSelect.onchange = swarmNavigate;
    globalOptionsSelect.onchange = globalOptionsNavigate;
    editFilesSelect.onchange = editFilesNavigate;
    overalComposeCommandsSelect.onchange = overalComposeCommandsNavigate;
    composeOptionsSelect.onchange = composeOptionsNavigate;


    // Создаем опции
    var commonCommandsOptions = [
        // { value: "", text: "Основные команды" },
        // { value: "index.html", text: "Домой" },
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
        // { value: "", text: "Общие команды" },
        // { value: "index.html", text: "Домой" },
        { value: "overal_docker_attach.html", text: "docker attach" },
        { value: "overal_docker_commit.html", text: "docker commit" },
        { value: "overal_docker_cp.html", text: "docker cp" },
        { value: "overal_docker_create.html", text: "docker create" },
        { value: "overal_docker_diff.html", text: "docker diff" },
        { value: "overal_docker_events.html", text: "docker events" },
        { value: "overal_docker_export.html", text: "docker export" },
        { value: "overal_docker_history.html", text: "docker history" },
        { value: "overal_docker_import.html", text: "docker import" },
        { value: "overal_docker_inspect.html", text: "docker inspect" },
        { value: "overal_docker_kill.html", text: "docker kill" },
        { value: "overal_docker_load.html", text: "docker load" },
        { value: "overal_docker_logs.html", text: "docker logs" },
        { value: "overal_docker_pause.html", text: "docker pause" },
        { value: "overal_docker_port.html", text: "docker port" },
        { value: "overal_docker_rename.html", text: "docker rename" },
        { value: "overal_docker_restart.html", text: "docker restart" },
        { value: "overal_docker_rm.html", text: "docker rm" },
        { value: "overal_docker_rmi.html", text: "docker rmi" },
        { value: "overal_docker_save.html", text: "docker save" },
        { value: "overal_docker_start.html", text: "docker start" },
        { value: "overal_docker_stats.html", text: "docker stats" },
        { value: "overal_docker_stop.html", text: "docker stop" },
        { value: "overal_docker_tag.html", text: "docker tag" },
        { value: "overal_docker_top.html", text: "docker top" },
        { value: "overal_docker_unpause.html", text: "docker unpause" },
        { value: "overal_docker_update.html", text: "docker update" },
        { value: "overal_docker_wait.html", text: "docker wait" },
        
    ];
    
    overalCommandsOptions.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        overalCommandsSelect.appendChild(opt);
    });
    
    var managementCommandsOptions = [
        // { value: "", text: "Управляющие команды" },
        // { value: "index.html", text: "Домой" },
        { value: "management_docker_ai.html", text: "docker ai" },
        { value: "management_docker_checkpoint.html", text: "docker checkpoint" },
        { value: "management_docker_cloud.html", text: "docker cloud" },
        { value: "management_docker_container.html", text: "docker container" },
        { value: "management_docker_context.html", text: "docker context" },
        { value: "management_docker_debug.html", text: "docker debug" },
        { value: "management_docker_extension.html", text: "docker extension" },
        { value: "management_docker_image.html", text: "docker image" },
        { value: "management_docker_init.html", text: "docker init" },
        { value: "management_docker_manifest.html", text: "docker manifest" },
        { value: "management_docker_mcp.html", text: "docker mcp" },
        { value: "management_docker_model.html", text: "docker model" },
        { value: "management_docker_network.html", text: "docker network" },
        { value: "management_docker_plugin.html", text: "docker plugin" },
        { value: "management_docker_sbom.html", text: "docker sbom" },
        { value: "management_docker_scout.html", text: "docker scout" },
        { value: "management_docker_system.html", text: "docker system" },
        { value: "management_docker_trust.html", text: "docker trust" },
        { value: "management_docker_volume.html", text: "docker volume" },
    ];

    managementCommandsOptions.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        managementCommandsSelect.appendChild(opt);
    });

    var swarmCommandsOptions = [
        // { value: "", text: "Swarm-команды" },
        // { value: "index.html", text: "Домой" },
        { value: "swarm_docker_config.html", text: "docker config" },
        { value: "swarm_docker_node.html", text: "docker node" },
        { value: "swarm_docker_secret.html", text: "docker secret" },
        { value: "swarm_docker_service.html", text: "docker service" },
        { value: "swarm_docker_stack.html", text: "docker stack" },
        { value: "swarm_docker_swarm.html", text: "docker swarm" },
        
    ];

    swarmCommandsOptions.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        swarmCommandsSelect.appendChild(opt);
    });

    var globalOptions = [
        // { value: "", text: "Глобальные опции" },
        // { value: "index.html", text: "Домой" },
        { value: "global_docker_options.html", text: "global options" },
        
    ];

    globalOptions.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        globalOptionsSelect.appendChild(opt);
    });

    var editFilesOptions = [
        // { value: "", text: "Конфигурацинные файлы" },
        // { value: "index.html", text: "Домой" },
        { value: "edition_dockerfile.html", text: ".Dockerfile" },
        { value: "edition_compose_yaml.html", text: "compose.yaml" },
        { value: "edition_env_file.html", text: ".env" },
        { value: "edition_compose_yaml_macvlan.html", text: "compose.yaml(macvlan)" },
        { value: "edition_compose_yaml(Swarm).html", text: "compose.yaml(Swarm)" },
        { value: "edition_reinstall_docker_file.html", text: "docker reinstall" },
        { value: "edition_nginx_config.html", text: "nginx.conf" },
        { value: "edition_utilites.html", text: "utilites" },
        
    ];

    editFilesOptions.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        editFilesSelect.appendChild(opt);
    });

    var overalComposeCommandsOptions = [
        // { value: "", text: "Общие команды compose" },
        // { value: "index.html", text: "Домой" },
        { value: "overal_compose_attach.html", text: "compose attach" },
        { value: "overal_compose_bridge.html", text: "compose bridge" },
        { value: "overal_compose_build.html", text: "compose build" },
        { value: "overal_compose_commit.html", text: "compose commit" },
        { value: "overal_compose_config.html", text: "compose config" },
        { value: "overal_compose_cp.html", text: "compose cp" },
        { value: "overal_compose_create.html", text: "compose create" },
        { value: "overal_compose_down.html", text: "compose down" },
        { value: "overal_compose_events.html", text: "compose events" },
        { value: "overal_compose_exec.html", text: "compose exec" },
        { value: "overal_compose_export.html", text: "compose export" },
        { value: "overal_compose_images.html", text: "compose images" },
        { value: "overal_compose_kill.html", text: "compose kill" },
        { value: "overal_compose_logs.html", text: "compose logs" },
        { value: "overal_compose_ls.html", text: "compose ls" },
        { value: "overal_compose_pause.html", text: "compose pause" },
        { value: "overal_compose_port.html", text: "compose port" },
        { value: "overal_compose_ps.html", text: "compose ps" },
        { value: "overal_compose_publish.html", text: "compose publish" },
        { value: "overal_compose_pull.html", text: "compose pull" },
        { value: "overal_compose_push.html", text: "compose push" },
        { value: "overal_compose_restart.html", text: "compose restart" },
        { value: "overal_compose_rm.html", text: "compose rm" },
        { value: "overal_compose_run.html", text: "compose run" },
        { value: "overal_compose_scale.html", text: "compose scale" },
        { value: "overal_compose_start.html", text: "compose start" },
        { value: "overal_compose_stats.html", text: "compose stats" },
        { value: "overal_compose_stop.html", text: "compose stop" },
        { value: "overal_compose_top.html", text: "compose top" },
        { value: "overal_compose_unpause.html", text: "compose unpause" },
        { value: "overal_compose_up.html", text: "compose up" },
        { value: "overal_compose_version.html", text: "compose version" },
        { value: "overal_compose_wait.html", text: "compose wait" },
        { value: "overal_compose_watch.html", text: "compose watch" },
    ];

    overalComposeCommandsOptions.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        overalComposeCommandsSelect.appendChild(opt);
    });

    var composeOptions = [
        // { value: "", text: "Compose опции" },
        // { value: "index.html", text: "Домой" },
        { value: "compose_docker_options.html", text: "compose options" },
        
    ];

    composeOptions.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        composeOptionsSelect.appendChild(opt);
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

function editFilesNavigate() {

    var editFilesSelect = document.getElementById("editFiles");

    var editFilesUrl = editFilesSelect.value;
    if (editFilesUrl) {
        window.location.href = editFilesUrl;
    }
}

function overalComposeCommandsNavigate() {

    var overalComposeCommandsSelect = document.getElementById("overalComposeCommands");

    var overalComposeUrl = overalComposeCommandsSelect.value;
    if (overalComposeUrl) {
        window.location.href = overalComposeUrl;
    }
}

function composeOptionsNavigate() {

    var composeOptionsSelect = document.getElementById("composeOptions");

    var composeOptionsUrl = composeOptionsSelect.value;
    if (composeOptionsUrl) {
        window.location.href = composeOptionsUrl;
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
