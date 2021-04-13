REM Mise a jour des dependances du projet
call "%ARP_PHP_CONF_71%\npm" update
REM Lancement du serveur de dev
set current_dir=%~dp0
call "%ARP_PHP_CONF_71%\create_watch_vuejs_project.cmd" "%current_dir:~0,-1%"
