# ReactJS

<h3 align="left"> O projeto foi criado no sistema operacional Ubuntu 22.04.4 LTS </h3>

<h3 align="left"> Para inicializar o projeto é necessário fazer algumas instalações: </h3>

<div align="center">
    <img width="300" title="NodeJs + NPM" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-L_8A13X2zAfFIAJ3c3URvDpdYIb5MiRtEA&usqp=CAU"/>
</div>

<h3 align="left">
NodeJs + NPM
<br> 
</h3>

Como Instalar o Node.js com o Apt Usando o NodeSource
Outra maneira de instalar o Node.js é usar um repositório Personal Package Archive (PPA), como o NodeSource. Em comparação com o repositório padrão do Ubuntu, o NodeSource oferece mais versões do Node.js.

Em outras palavras, este método é indicado se você quiser instalar uma versão específica ou a mais recente do Node.js. Veja como instalar o Node.js no Ubuntu usando o repositório NodeSource:

Digite os seguintes comandos, pressionando Enter após cada um deles:
>sudo apt-get update
>sudo apt-get upgrade

Pule esta etapa se você já tiver o cURL instalado. Caso contrário, digite o seguinte comando:
>sudo apt-get install curl

Para instalar o NodeSource, execute o seguinte comando. Lembre-se de substituir o valor 18.x por sua versão desejada do Node.js:
> curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

instalar node.js no ubuntu

Quando o repositório NodeSource estiver devidamente instalado, instale o Node.js:
> sudo apt-get install nodejs

node.js no ubuntu

Além do Node.js, esse comando instalará o NPM junto com outros pacotes dependentes.

Use esses dois comandos para consultar as versões do Node.js e do NPM e confirmar que o processo de instalação foi bem-sucedido:
> node -v
> npm -v

instalando node.js no linux

Atualize a versão
> npm install -g npm

Limpe o cache
> npm cache clean --force

Após isso instale o pacote node_modules
> npm install

Iniciliaze o projeto
> npm start

<br>
<div 
    style="
    background-color: #FFFFE0; 
    padding: 10px; 
    border-left: 5px solid #008000;
    "
> ℹ️ <strong>Links e referências: </strong><br>
</div>

- [hostinger](https://www.hostinger.com.br/tutoriais/instalar-node-js-ubuntu)
- [github](https://github.com/nodesource/distributions)
- [linkedin](https://www.linkedin.com/in/iranildo-ramos-82011988/)

