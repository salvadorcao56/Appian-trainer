import { Question } from '../models/question.model';

export const QUESTIONS: Question[] = [
  // Pregunta 1 (ya existente)
  {
    id: 1,
    contenido: 'Select 2 that apply. You have built an expression rule that takes in two numbers and returns the first number divided by the second number. What are two useful test cases that you can create to ensure the expression outputs an expected numerical response?',
    multiple: true,
    respuestas: [
      {
        id: 1,
        contenido: 'firstNumber = 2, secondNumber = 3',
        correcta: true,
        explicacion: 'CORRECTO: Prueba con números válidos para verificar el cálculo básico de división.'
      },
      {
        id: 2,
        contenido: 'firstNumber = "2", secondNumber = "3"',
        correcta: true,
        explicacion: 'CORRECTO: Prueba con strings numéricos que pueden ser convertidos internamente.'
      },
      {
        id: 3,
        contenido: 'firstNumber = 2, secondNumber = "Three"',
        correcta: false,
        explicacion: 'INCORRECTO: "Three" no es un número y causaría un error en la operación de división.'
      },
      {
        id: 4,
        contenido: 'firstNumber = "Two", secondNumber = 3',
        correcta: false,
        explicacion: 'INCORRECTO: "Two" no es convertible a número, generaría un error de tipo de dato.'
      }
    ]
  },
  // Pregunta 2 (ya existente)
  {
    id: 2,
    contenido: 'What is the primary purpose of using process variables within a process model?',
    multiple: false,
    respuestas: [
      {
        id: 5,
        contenido: 'To store and transfer data between nodes.',
        correcta: true,
        explicacion: 'CORRECTO: Las process variables permiten almacenar y transferir datos entre diferentes nodos del flujo del proceso.'
      },
      {
        id: 6,
        contenido: 'To manage user task assignments.',
        correcta: false,
        explicacion: 'INCORRECTO: Las asignaciones de tareas se gestionan mediante configuraciones específicas de las tareas de usuario.'
      },
      {
        id: 7,
        contenido: 'To monitor the performance of the process model in real time.',
        correcta: false,
        explicacion: 'INCORRECTO: El monitoreo se realiza mediante herramientas específicas como Appian Monitoring.'
      },
      {
        id: 8,
        contenido: 'To define the process\'s start and end nodes.',
        correcta: false,
        explicacion: 'INCORRECTO: Los nodos de inicio y fin se definen en el diseño del proceso modeler.'
      }
    ]
  },
  // Pregunta 3 (nueva)
  {
    id: 3,
    contenido: 'You are creating an interface, and want the user to have an interactive component that saves and submits a form. Which Appian function should you use?',
    multiple: false,
    respuestas: [
      {
        id: 9,
        contenido: 'a!buttonWidget()',
        correcta: false,
        explicacion: 'INCORRECTO: a!buttonWidget() es para botones simples, no para guardar/enviar formularios.'
      },
      {
        id: 10,
        contenido: 'a!save()',
        correcta: false,
        explicacion: 'INCORRECTO: No existe una función a!save() en Appian.'
      },
      {
        id: 11,
        contenido: 'a!buttonLink()',
        correcta: false,
        explicacion: 'INCORRECTO: a!buttonLink() es para enlaces con apariencia de botón.'
      },
      {
        id: 12,
        contenido: 'a!buttonField()',
        correcta: true,
        explicacion: 'CORRECTO: a!buttonField() está diseñado específicamente para guardar y enviar formularios.'
      }
    ]
  },
  // Pregunta 4 (nueva)
  {
    id: 4,
    contenido: 'When configuring a dropdown component, which parameter contains the data that is displayed to the user?',
    multiple: false,
    respuestas: [
      {
        id: 13,
        contenido: 'Validations',
        correcta: false,
        explicacion: 'INCORRECTO: Validations es para reglas de validación, no para mostrar datos.'
      },
      {
        id: 14,
        contenido: 'Choice Values',
        correcta: false,
        explicacion: 'INCORRECTO: Choice Values contiene los valores internos, no lo que ve el usuario.'
      },
      {
        id: 15,
        contenido: 'Choice Labels',
        correcta: true,
        explicacion: 'CORRECTO: Choice Labels contiene el texto que se muestra al usuario en el dropdown.'
      },
      {
        id: 16,
        contenido: 'Instructions',
        correcta: false,
        explicacion: 'INCORRECTO: Instructions son texto de ayuda, no las opciones del dropdown.'
      }
    ]
  },
  // Pregunta 5 (nueva)
  {
    id: 5,
    contenido: 'Select 3 that apply. Which 3 options are valid use cases for expression rules in Appian?',
    multiple: true,
    respuestas: [
      {
        id: 17,
        contenido: 'To query the database.',
        correcta: false,
        explicacion: 'INCORRECTO: Para queries de base de datos se usan otros métodos como queryRecordType().'
      },
      {
        id: 18,
        contenido: 'To dynamically update configurations in the Administration Console.',
        correcta: false,
        explicacion: 'INCORRECTO: Las configuraciones de Administration Console no se actualizan con expression rules.'
      },
      {
        id: 19,
        contenido: 'To dynamically update process model properties.',
        correcta: true,
        explicacion: 'CORRECTO: Las expression rules pueden usarse para actualizar propiedades de process models.'
      },
      {
        id: 20,
        contenido: 'To create a function that can be called within numerous components across the application.',
        correcta: true,
        explicacion: 'CORRECTO: Las expression rules permiten crear funciones reutilizables en toda la aplicación.'
      }
    ]
  },
  // Pregunta 6 (nueva)
  {
    id: 6,
    contenido: 'You created a Salesperson record type with a related action to update an employee record. This action should only be accessible to a certain user group. How can you manage access to the related action?',
    multiple: false,
    respuestas: [
      {
        id: 21,
        contenido: 'In the Context setting of the related action.',
        correcta: false,
        explicacion: 'INCORRECTO: Context define el contexto de datos, no la seguridad.'
      },
      {
        id: 22,
        contenido: 'In the Views and Actions Security page.',
        correcta: true,
        explicacion: 'CORRECTO: La seguridad de related actions se gestiona en Views and Actions Security.'
      },
      {
        id: 23,
        contenido: 'In the Interface security within the process model.',
        correcta: false,
        explicacion: 'INCORRECTO: Esto controla seguridad de interfaces, no de record actions.'
      },
      {
        id: 24,
        contenido: 'In the Related Action Shortcuts setting of the record view.',
        correcta: false,
        explicacion: 'INCORRECTO: Esto es para accesos directos, no para seguridad.'
      }
    ]
  },
  // Pregunta 7 (nueva)
  {
    id: 7,
    contenido: 'Select 3 that apply. Why might you add a record type data type as a rule input in your interface?',
    multiple: true,
    respuestas: [
      {
        id: 25,
        contenido: 'To pass values to a CDT.',
        correcta: false,
        explicacion: 'INCORRECTO: Los CDTs se usan de forma diferente a los record types.'
      },
      {
        id: 26,
        contenido: 'To pass information to and from a process model.',
        correcta: true,
        explicacion: 'CORRECTO: Los record types pueden pasar datos entre interfaces y process models.'
      },
      {
        id: 27,
        contenido: 'To pass information to be displayed from a summary view.',
        correcta: true,
        explicacion: 'CORRECTO: Puede usarse para mostrar datos de una summary view.'
      },
      {
        id: 28,
        contenido: 'To pass information to be captured from a form.',
        correcta: true,
        explicacion: 'CORRECTO: Puede usarse para capturar datos en formularios.'
      }
    ]
  },
  // Pregunta 8 (nueva)
  {
    id: 8,
    contenido: 'Select 2 that apply. Which two statements about record views are true?',
    multiple: true,
    respuestas: [
      {
        id: 29,
        contenido: 'Appian can generate record views for you.',
        correcta: true,
        explicacion: 'CORRECTO: Appian puede generar automáticamente record views básicas.'
      },
      {
        id: 30,
        contenido: 'You can configure record view visibility based on user groups.',
        correcta: true,
        explicacion: 'CORRECTO: La visibilidad de record views puede restringirse por grupos de usuarios.'
      },
      {
        id: 31,
        contenido: 'The default summary view must always be named "summary".',
        correcta: false,
        explicacion: 'INCORRECTO: El nombre de la summary view puede personalizarse.'
      },
      {
        id: 32,
        contenido: 'A record view can only display data from a single record type.',
        correcta: false,
        explicacion: 'INCORRECTO: Las record views pueden mostrar datos de múltiples record types relacionados.'
      }
    ]
  },
  // Pregunta 9 (nueva)
  {
    id: 9,
    contenido: 'In which scenario should a site be used?',
    multiple: false,
    respuestas: [
      {
        id: 33,
        contenido: 'When users need a public web app they can access without signing in to Appian.',
        correcta: false,
        explicacion: 'INCORRECTO: Los sites requieren autenticación.'
      },
      {
        id: 34,
        contenido: 'When you need to structure and model your enterprise data.',
        correcta: false,
        explicacion: 'INCORRECTO: Para modelar datos se usan record types.'
      },
      {
        id: 35,
        contenido: 'When users need the ability to utilize tasks, actions, related actions, reports, and record views with full control of custom CSS of all components.',
        correcta: false,
        explicacion: 'INCORRECTO: Esto describe capacidades generales, no el propósito específico de un site.'
      },
      {
        id: 36,
        contenido: 'When a group of users need a customized user experience tailored to a specific set of functionalities.',
        correcta: true,
        explicacion: 'CORRECTO: Los sites permiten crear experiencias personalizadas para grupos específicos.'
      }
    ]
  },
  // Pregunta 10 (nueva)
  {
    id: 10,
    contenido: 'How can application users launch a process?',
    multiple: true,
    respuestas: [
      {
        id: 37,
        contenido: 'Use a record type\'s related action',
        correcta: true,
        explicacion: 'CORRECTO: Las related actions pueden configurarse para iniciar procesos.'
      },
      {
        id: 38,
        contenido: 'Submit a form from a record action',
        correcta: true,
        explicacion: 'CORRECTO: Los forms pueden configurarse para lanzar procesos al ser enviados.'
      },
      {
        id: 39,
        contenido: 'Add a gateway to the process',
        correcta: false,
        explicacion: 'INCORRECTO: Los gateways son para flujo interno del proceso.'
      },
      {
        id: 40,
        contenido: 'Create a task',
        correcta: false,
        explicacion: 'INCORRECTO: Las tasks son actividades dentro de procesos ya iniciados.'
      }
    ]
  },
  // Pregunta 11 (nueva)
  {
    id: 11,
    contenido: 'Which parameter in a queryRecordType() function can be used to configure sorting?',
    multiple: false,
    respuestas: [
      {
        id: 41,
        contenido: 'filters',
        correcta: false,
        explicacion: 'INCORRECTO: filters se usa para filtrar datos, no para ordenar.'
      },
      {
        id: 42,
        contenido: 'pagingInfo',
        correcta: false,
        explicacion: 'INCORRECTO: pagingInfo controla paginación, no ordenamiento.'
      },
      {
        id: 43,
        contenido: 'sortFields',
        correcta: true,
        explicacion: 'CORRECTO: sortFields permite definir campos y dirección de ordenamiento.'
      },
      {
        id: 44,
        contenido: 'fetchSort',
        correcta: false,
        explicacion: 'INCORRECTO: fetchSort no es un parámetro válido en queryRecordType().'
      }
    ]
  },
  // Pregunta 12 (nueva)
  {
    id: 12,
    contenido: 'How would you use aIqueryEntity() to retrieve data from a database?',
    multiple: false,
    respuestas: [
      {
        id: 45,
        contenido: 'Use it to create a new record in a database by providing data through a CDT.',
        correcta: false,
        explicacion: 'INCORRECTO: Para crear registros se usan operaciones de escritura.'
      },
      {
        id: 46,
        contenido: 'To get data from a record type.',
        correcta: false,
        explicacion: 'INCORRECTO: Para record types se usa queryRecordType().'
      },
      {
        id: 47,
        contenido: 'Use it to return data from a data store entity and return the results.',
        correcta: true,
        explicacion: 'CORRECTO: queryEntity() está diseñado específicamente para data store entities.'
      },
      {
        id: 48,
        contenido: 'To run a custom SQL query and return the data for use in an expression rule.',
        correcta: false,
        explicacion: 'INCORRECTO: Para SQL customizado se usan otros métodos.'
      }
    ]
  }
];
