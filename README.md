# proyecto-base-express-angular
Proyecto base para angular en el front y express en el back. Propuesta para el Xacademy.

# Lo que falta
- Configurar env de producción
- Agregar linter 
  - en el package.json padre de ambos front y back?
  - usar Rome? o eslint?
- Revisar middlewares y modelos propuestos por el proyecto base
- Usar logger para la base de datos (¿cómo se configura?)
- sqlite3 tá para probar nomás.
- Jest para hacer test en node?
- Agregar `envalid` para validar archivos .env

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
### Dev
- Acá va a ir eslint
- nodemon solo si `node --watch` no funciona bien

### Config
- [dotenv](https://www.npmjs.com/package/dotenv) -> a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
- Falta agregar envalid


## Preguntas
> ### ¿Por qué no se llama la función `app.listen()` para iniciar el servidor?
> it is just a helper function. All, it does is this:
> ```
> app.listen = function listen() {
>   var server = http.createServer(this);
>   return server.listen.apply(server, arguments);
> };
> ```
>

> ### Lo que no vamos a usar y porqué
> - `express-session` -> no vamos a crear sesiones de usuarios, en principio vamos a manejar la autenticación con JWT
> - `cookie-parser` -> en principio no vamos a trabajar con cookies... o sí?
> - `husky` -> al menos por ahora, quisiera entender la configuración antes de usarlo porque me daba errores

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