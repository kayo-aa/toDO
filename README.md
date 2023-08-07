# toDo
This project was generated with Angular CLI version 16.0.3.



## Use


To use this project, follow the steps below:

1. Clone the repository to your local machine and navigate to the project:

```bash
git clone https://github.com/kayo-aa/toDo
cd toDo
```

2. Install the necessary dependencies and start the project:
```bash
npm install
ng serve
```
Open your browser and visit the following address:
http://localhost:4200

## Funcionalidades
1. Crear tareas.
- Creá las tareas que quieras para organizarte. Escribí en el input de texto y presioná "enter" para agragarla a la lista de tareas
2. Interacción
Una tarea tiene 3 posibles interacciones:
- La tarea está completa al marcarse en el checkbox. Regresa al estado de pendiente si se vuelve a cliquear.
- Si se hace doble clic en el <label> se activa el modo edición. Modifica el texto de tu tarea,
- Si posiciona el mouse en en una tarea o se cliquea, se muestra el botón para eliminar.
4. Editando una tarea
- La edición se guarda al pulsar la tecla Enter y salir del modo edición.
- Asegúrate de usar métodos como .trim() limpiar espacios al inicio o al final.
5. Contador
- En el footer se debería mostrar el número de tareas en estado pendiente.
6. Botón de limpiar
- Se pueden eliminar todas las tareas completas con el botón 'Clear Completed'
7. Persistencia
- Cuando se recargue la aplicación obtendrá las tareas.
8. Filtros y rutas
- Se pueden filtrar las tareas según su estado

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

/all: Muestra todas las tareas tanto las que están en estado de completed y pending.
/pending: Muestra todas las tareas en estado pending.
/completed: Muestra todas las tareas en estado completed.
9. Deployment
Desplegar la aplicación en alguno de los siguientes servicios: GitHub Pages, Netlify, Vercel, Firebase Hosting.
