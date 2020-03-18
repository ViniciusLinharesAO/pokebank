# passo a passo para rodar o projeto do zero

tendo a imagem do maria db inicie o container com:

$ docker run -p 3306:3306 --name mariadb -e MYSQL_ROOT_PASSWORD=root -d mariadb

entre no bash do container:

$ docker exec -it mariadb bash

dentro do bash do container acesso o mysql com:

\# mysql -u root -p

insira a senha definida na hora de rodar o container em MYSQL\_ROOT\_PASSWORD, no caso a senha é root

agora crie o database com:

MariaDB [(none)]> CREATE DATABASE crud_sequelize;

defina qual database você está usando com:

MariaDB [(none)]> USE crud_sequelize;

saia da intercafe do mysql com ctrl+C, saia do bash do container com 'exit' e volte para a pasta root do projeto, feito isso rode a migrate com:

$ npx sequelize db:migrate

pronto, agora é só rodar o projeto com:

$ node index.js
