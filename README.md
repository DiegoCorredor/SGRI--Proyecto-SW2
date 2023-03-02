<h1 align="center">SISTEMA DE GESTIÓN DE RESERVAS E INVENTARIOS</h1>
<p align="left"><img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green"/></p>


## Status de la App
![Netlify Status](https://api.netlify.com/api/v1/badges/b540e2c4-4349-45e4-9fbc-948ae71c726d/deploy-status) 

* Ver [SGRI :: Home](https://jolly-phoenix-2ee534.netlify.app/)
<p align="center">:construction: Proyecto en construcción :construction:</p>

## Descripción
_Este proyecto es realizado para el Hotel Marquesa de Pinares de la ciudad de Tibabosa, Boyacá para tener una plataforma propia donde sus clientes puedan realizar reservaciones y además de ello, gestionarlas. También el sistema les brindará la posibilidad de tener y de gestionar un inventario de todos los implementos del hotel y lo requerido para su estado idoneao._



## :hammer:Funcionalidades del proyecto

- `Funcionalidad 1`: El sistema permite realizar una reservación en el hotel.
- `Funcionalidad 2`: El sistema permite gestionar las reservas realizadas.
- `Funcionalidad 2a`: Permite a los usuarios gestionar las reservas sin iniciar sesión, basta un código de seguridad.
- `Funcionalidad 3`: El sistema permite a los usuarios administradores o empleados gestionar el inventario del hotel.

## 📁 Acceso al proyecto

**El proyecto está estructurado en 2 carpetas, en la primera está lo necesario para el Frontend y la segunda todo para el Backend.**

## 🛠️ Abre y ejecuta el proyecto

**Para la ejecución local del proyecto es necesario:**
_Para trabajar con React Native, deberá comprender los fundamentos de JavaScript. Si es nuevo en JavaScript o necesita una actualización, puede sumergirse o repasar en Mozilla Developer Network._

**Importante tener instalado node.js**
* Para instalarlo dirijase a [NodeJs official site](https://nodejs.org/es/download/)

Para comprobar que se instaló bien, abra un cmd y ecriba
```
node --version
```

Para obtener todos los modulos ubiquese en la carpeta **Client** y digite en una terminal:
```
npm install
```

Luego para iniciar el proyecto en esa misma terminal puede digitar:
```
npm start
```

Para construir el proyecto en la terminal puede digitar:
```
npm run build 
```

Y para iniciar el despligue en local puede usar 2 comandos, primero realizar la instalación de serve:
```
npm install -g serve
```
```
serve -s build 
```

Y si desea desplegarlo en otro puerto diferente:
```
serve -s build -l 4000
```

## :wrench:Tecnologias utilizadas

- `Front-end`: React v18.2.
- `NodeJs`: NodeJs v18.12.1.
- `Gestor de paquetes`: Npm v8.19.2.
- `Base de datos`: MySQL v8. 
- `Tipografia`: Google Font API. 
- `Framework javascript`: PRIMEREACT como componentes nativos para React. 
- `Back-end`: TypeScript.

## Comandos utiles para actualizar todos los paquetes via NPM

Debe realizarse en el siguiente orden de comandos (preferiblemente en una shell con permisos de administrador), recuerde estar en la carpeta client
```
npm outdated
```
```
npm install -g npm-check-updates
```
```
ncu -u
```
```
npm install
```