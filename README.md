# proyecto-base-express-angular
Proyecto base para angular en el front y express en el back. Propuesta para el Xacademy.

# Links
[Proyecto github](https://github.com/Eze-Mz/proyecto-base-express-angular)

[Trello](https://trello.com/b/XanHBY7J/xacademy)

[Drive](https://drive.google.com/drive/folders/1IxqBTvYTILYmmq27C7sxkTb-GLeJNiLi?usp=drive_link)

[Sketch en excalidraw](https://excalidraw.com/#json=UL-8pkQ0Wm5VtEvjFlPdC,1ZEOxX_mH0YgPop2-7IFuA)

# Preguntas/dudas
- Sobre el middleware de los errores del proyecto base
- Jest para hacer test en node?
- CÓMO USAR EL INDEX PARA CONFIGURAR LAS RUTAS?? (back)

# Base de datos
- Una sola tabla para usuarios
- Una tabla de roles
- Una tabla que relaciones usuarios y encuestadores

# Lo que falta
- Configurar la base de datos -> docker img
- Eliminar sqlite
- Logging base de datos, ver -> https://sequelize.org/docs/v6/getting-started/ (la parte que habla de configurar el logger)

# Scripts en el directorio raíz
- `install-back`
- `install-front`
- `install` -> instala ambos
- `back` -> inicia express
- `front` -> inicia angular
- `dev` -> iniciar los servidores del front y del back

# Back

## Estructura

```
.
└── Back
    ├── bin
    │   └── www -> sets up the server and starts listening for incoming HTTP requests.
    ├── config -> define configurations
    │   └── config.js
    ├── controllers
    ├── exceptions
    ├── helpers -> ????
    ├── middleware
    ├── models
    ├── providers -> communication with database or other api
    ├── routes
    ├── seeders -> populate the database
    ├── services -> business logic of the app
    ├── utils -> other tools needed
    ├── app.js -> load the configuration of the server
    └── package.json
```
## Dependencias
### Core
- [express](https://expressjs.com/) 
- [sequelize](https://sequelize.org/) -> TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server
- Base de datos: https://www.fl0.com/ 
- [sqlite3](https://www.npmjs.com/package/sqlite3) 

### Loggers
- [debug](https://www.npmjs.com/package/debug) -> a module called "debug" used for debugging purposes in Node.js applications. It allows you to add debug logging to your code selectively. With the "debug" module, you can instrument your code with debug messages that can be enabled or disabled based on environment variables. This means you can add detailed logging during development and easily disable it in production to improve performance and reduce noise in the logs.
- [morgan](https://www.npmjs.com/package/morgan) -> a middleware used for HTTP request logging in Node.js applications. It provides logging capabilities for incoming HTTP requests, making it easier to track and debug the flow of requests in your server. Morgan supports various pre-defined logging formats, such as 'combined', 'common', 'dev', 'short', and 'tiny'. Additionally, it allows you to define custom logging formats according to your needs.
- [winston](https://www.npmjs.com/package/winston) -> It supports multiple transports, allowing you to log messages to various destinations like the console, file, database, external logging services, etc. Winston also provides customizable log formatting, log levels, and log rotation. It's widely used in production environments  
  - [winston-daily-rotate-file](https://www.npmjs.com/package/winston-daily-rotate-file)
- [moment](https://www.npmjs.com/package/moment) -> A JavaScript date library for parsing, validating, manipulating, and formatting dates.

### Security
- XSS sanitizer -> The "xss" library provides methods to sanitize user-generated input by escaping or removing potentially harmful characters and tags from the input data. This process makes sure that any user input displayed on web pages does not execute as executable code, thus mitigating the risk of XSS attacks. Examples and explanations
  - https://www.youtube.com/watch?v=EWGUznyQIhE 
  - https://www.youtube.com/watch?v=EoaDgUgS6QA 
  - https://www.youtube.com/watch?v=2GtbY1XWGlQ
  
  Opciones a elegir:
  - [xss-filters](https://www.npmjs.com/package/xss-filters) -> requiere más configuración 
  - [express-xss-sanitizer](https://www.npmjs.com/package/express-xss-sanitizer) -> no se actualiza hace 10 meses
  - [xss-clean](https://www.npmjs.com/package/xss-clean) -> deprecada, **NO PARECE COMPLICADO DE IMPLEMENTAR**
    - https://github.com/jsonmaur/xss-clean/blob/master/src/xss.js
- [helmet](https://www.npmjs.com/package/helmet) -> Helmet helps secure Express apps by setting HTTP response headers.
- [cors](https://www.npmjs.com/package/cors) -> CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- Node crypto module to create passwords. See: https://www.youtube.com/watch?v=NuyzuNBFWxQ 
### Dev
- [eslint](https://eslint.org/docs/latest/use/getting-started) -> ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
- [eslint-config-semistandard](https://www.npmjs.com/package/eslint-config-semistandard) -> standard styles but with semicolons
  - See: https://github.com/angular-eslint/angular-eslint/tree/main/packages/eslint-plugin-template/docs/rules for the rules
- nodemon solo si `node --watch` no funciona bien

### Config
- [dotenv](https://www.npmjs.com/package/dotenv) -> a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
- [envalid]()

### Database
We use a postgreSQL database, with sequelize ORM.
- [pg](https://node-postgres.com/) -> node-postgres is a collection of node.js modules for interfacing with your PostgreSQL database. It has support for callbacks, promises, async/await, connection pooling, prepared statements, cursors, streaming results, C/C++ bindings, rich type parsing, and more!
- [pg-hstore](https://www.npmjs.com/package/pg-hstore) -> A node package for serializing and deserializing JSON data to hstore format


## Preguntas
> ### ¿Por qué no se llama la función `app.listen()` para iniciar el servidor?
> it is just a helper function. All, it does is this:
> ```
> app.listen = function listen() {
>   var server = http.createServer(this);
>   return server.listen.apply(server, arguments);
> };
> ```

> ### Sobre los middlewares del proyecto base
> - validación -> sugiero usar Zod para hacer las validaciones, por lo tanto armamos nosotros la configuración
> - root_path -> no lo termino de entender, agregaro si hace falta
> - error_handler -> este lo haría de manera similar si vemos que lo necesitamos

> ### Lo que no vamos a usar y porqué
> - `express-session` -> no vamos a crear sesiones de usuarios, en principio vamos a manejar la autenticación con JWT
> - `cookie-parser` -> en principio no vamos a trabajar con cookies... o sí?
> - `husky` -> al menos por ahora, quisiera entender la configuración antes de usarlo porque me daba errores
> - `express-validator` -> sugiero usar Zod para hacer las validaciones

# Front
## Estructura
/core -> 
  /guards
  /http -> servicio para conectar con la api, hay varias funciones que pueden ser útiles.
/modules -> Según esta propuesta los componentes van a estar separados en distintos módulos. En principio podrían ser: login/registro, dashboard, shared/compartidos (para elementos compartidos)

Para qué es el archivo `core-import.guard.ts`?????????????
## Framework
[Angular]()
Y todas las dependencias que usa angular.

## Dependencies
### Data visualization
- [apexcharts](https://apexcharts.com/) -> 
- [ng-apexcharts](https://apexcharts.com/docs/angular-charts/) ->
### Dev
- [@angular/eslint](https://github.com/angular-eslint/angular-eslint#readme) -> enables ESLint to lint Angular projects. Lint ts and html files with Angular good practices. 