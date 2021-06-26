# Restserver con typescript y mysql

Creación de un restserver utilizando typescript y mysql

### Notas

Para crear el archivo de configuración de typescript usar ``` tsc --init ```

Una vez ajustadas las configuraciones se puede usar el comando ```tsc``` para que se el compiler haga su trabajo (Compilar el proyecto...)

Para ejecutar el proyecto usar ```node ./dist/app.js``` o simplemente agregar el comando start en package.json

Para mantener a typescript pendiente de los cambios en los archivos y haga compilación automática, usar: ```tsc --watch```

### Instalaciones

Recuerda instalar typescript con ```npm i -g typescript```.

Adicionalmente se puede instalar el tslint para seguir los estandares de desarrollo al programar en TS ```npm i tslint --save-dev```.

Para instalar typescript de manera local en el proyecto usar ```npm i typescript --save-dev```

Finalizando... crear el archivo de configuración de tslint ejecutando ```./node_modules/.bin/tslint --init```

Para habilitar los tipados con cada paquete, instalar las dependencias de desarrollo requeridas. Ej: ```npm i --save-dev @types/express```

No olvidar instalar el controlador de tu DB con ```npm install --save mariadb``` según sea el caso de la base de datos utilizada.

### Documentación

[Typescript](https://www.npmjs.com/package/typescript)

[tslint](https://www.npmjs.com/package/tslint)

[Express](https://www.npmjs.com/package/express)

[Dotenv](https://www.npmjs.com/package/dotenv)

[CORS](https://www.npmjs.com/package/cors)

[sequelize](https://sequelize.org/)

