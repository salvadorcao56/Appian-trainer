import { Question } from '../models/question.model';

export const QUESTIONS: Question[] = [
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
  {
    id: 3,
    contenido: 'You are creating an interface, and want the user to have an interactive component that saves and submits a form. Which Appian function should you use?',
    multiple: false,
    respuestas: [
      {
        id: 9,
        contenido: 'a!buttonWidget()',
        correcta: true,
        explicacion: 'CORRECTO: a!buttonWidget() es para botones interactivos que pueden guardar y enviar formularios.'
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
        explicacion: 'INCORRECTO: a!buttonLink() es para enlaces con apariencia de botón, no para enviar formularios.'
      },
      {
        id: 12,
        contenido: 'a!buttonField()',
        correcta: false,
        explicacion: 'INCORRECTO: a!buttonField() está obsoleto, se usa a!buttonWidget() para funcionalidad de formularios.'
      }
    ]
  },
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
  {
    id: 5,
    contenido: 'Select 3 that apply. Which 3 options are valid use cases for expression rules in Appian?',
    multiple: true,
    respuestas: [
      {
        id: 17,
        contenido: 'To query the database.',
        correcta: true,
        explicacion: 'CORRECTO: Las expression rules pueden contener funciones de consulta como queryRecordType().'
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
  },
  {
    id: 13,
    contenido: 'Select 2 that apply. A user has Editor permissions to a record type. Which two actions can the user take?',
    multiple: true,
    respuestas: [
      {
        id: 49,
        contenido: 'Update record-level security.',
        correcta: false,
        explicacion: 'INCORRECTO: Se requieren permisos de administrador para seguridad.'
      },
      {
        id: 50,
        contenido: 'Delete the record type.',
        correcta: false,
        explicacion: 'INCORRECTO: Se requieren permisos más elevados para eliminar record types.'
      },
      {
        id: 51,
        contenido: 'View the record type in Tempo when it is configured to be visible.',
        correcta: true,
        explicacion: 'CORRECTO: Los editores pueden ver record types visibles en Tempo.'
      },
      {
        id: 52,
        contenido: 'Update the record type security.',
        correcta: false,
        explicacion: 'INCORRECTO: La seguridad del record type requiere permisos administrativos.'
      }
    ]
  },
  {
    id: 14,
    contenido: 'You just published a new process model and are testing and debugging. The process stops unexpectedly on the Write Records smart service. You confirm the data was not written to the record type or database. In Monitor mode, you notice the Write Records smart service indicates an error. What is the most effective next step you should take to troubleshoot this issue?',
    multiple: false,
    respuestas: [
      {
        id: 53,
        contenido: 'Change the Write Records smart service to a Write to Data Store Entity smart service.',
        correcta: false,
        explicacion: 'INCORRECTO: Cambiar el smart service no soluciona problemas de configuración.'
      },
      {
        id: 54,
        contenido: 'Delete the Write Records smart service and add a new one, then publish again.',
        correcta: false,
        explicacion: 'INCORRECTO: Esto no identifica la causa raíz del problema.'
      },
      {
        id: 55,
        contenido: 'Check the process model\'s process start form and confirm all fields are being properly captured before reaching the Write Records smart service.',
        correcta: false,
        explicacion: 'INCORRECTO: El error está en el Write Records, no necesariamente en el form.'
      },
      {
        id: 56,
        contenido: 'Open the Write Records smart service and confirm it is configured correctly.',
        correcta: true,
        explicacion: 'CORRECTO: La solución más efectiva es verificar la configuración del componente que falla.'
      }
    ]
  },
  {
    id: 15,
    contenido: 'What is the best description for the type of work Appian does?',
    multiple: false,
    respuestas: [
      {
        id: 57,
        contenido: 'Business-to-Government and Consumer-to-Consumer',
        correcta: false,
        explicacion: 'INCORRECTO: Appian no se especializa en C2C.'
      },
      {
        id: 58,
        contenido: 'Business-to-Business and Business-to-Government',
        correcta: true,
        explicacion: 'CORRECTO: Appian se enfoca principalmente en soluciones empresariales B2B y B2G.'
      },
      {
        id: 59,
        contenido: 'Business-to-Business and Consumer-to-Consumer',
        correcta: false,
        explicacion: 'INCORRECTO: El modelo C2C no es el foco principal.'
      },
      {
        id: 60,
        contenido: 'Business-to-Consumer and Consumer-to-Consumer',
        correcta: false,
        explicacion: 'INCORRECTO: Appian no está orientado principalmente al consumidor final.'
      }
    ]
  },
  {
    id: 16,
    contenido: 'Select 3 that apply. You\'re editing an interface object. Which elements would you find in the palette?',
    multiple: true,
    respuestas: [
      {
        id: 61,
        contenido: 'design library',
        correcta: true,
        explicacion: 'CORRECTO: La design library contiene componentes reutilizables.'
      },
      {
        id: 62,
        contenido: 'patterns',
        correcta: true,
        explicacion: 'CORRECTO: Los patterns son plantillas de diseño predefinidas.'
      },
      {
        id: 63,
        contenido: 'rule inputs',
        correcta: false,
        explicacion: 'INCORRECTO: Los rule inputs se configuran en propiedades, no en el palette.'
      },
      {
        id: 64,
        contenido: 'components',
        correcta: true,
        explicacion: 'CORRECTO: Los components son elementos básicos de interfaz.'
      }
    ]
  },
  {
    id: 17,
    contenido: 'Select 3 that apply. When configuring a relationship between record types with data sync enabled, which 3 relationship types can you choose?',
    multiple: true,
    respuestas: [
      {
        id: 65,
        contenido: 'one-to-one',
        correcta: true,
        explicacion: 'CORRECTO: Relación uno a uno entre record types.'
      },
      {
        id: 66,
        contenido: 'many-to-one',
        correcta: true,
        explicacion: 'CORRECTO: Relación muchos a uno entre record types.'
      },
      {
        id: 67,
        contenido: 'many-to-many',
        correcta: false,
        explicacion: 'INCORRECTO: Las relaciones many-to-many no están disponibles con data sync.'
      },
      {
        id: 68,
        contenido: 'one-to-many',
        correcta: true,
        explicacion: 'CORRECTO: Relación uno a muchos entre record types.'
      }
    ]
  },
  {
    id: 18,
    contenido: 'Which Appian feature allows you to automate high-volume manual tasks, especially when you need to connect to legacy systems that lack APIs?',
    multiple: false,
    respuestas: [
      {
        id: 69,
        contenido: 'Process modeler',
        correcta: false,
        explicacion: 'INCORRECTO: Process modeler es para workflows, no para automatización de legacy systems.'
      },
      {
        id: 70,
        contenido: 'RPA',
        correcta: true,
        explicacion: 'CORRECTO: RPA (Robotic Process Automation) permite automatizar tareas en sistemas legacy sin APIs.'
      },
      {
        id: 71,
        contenido: 'AI skill',
        correcta: false,
        explicacion: 'INCORRECTO: AI skills son para inteligencia artificial, no para legacy systems.'
      },
      {
        id: 72,
        contenido: 'Decision object',
        correcta: false,
        explicacion: 'INCORRECTO: Decision objects son para lógica de negocio, no para legacy automation.'
      }
    ]
  },
  {
    id: 19,
    contenido: 'What is typically used to execute an expression or rule as its own activity in a process model?',
    multiple: false,
    respuestas: [
      {
        id: 73,
        contenido: 'Process model properties',
        correcta: false,
        explicacion: 'INCORRECTO: Las propiedades definen metadatos, no ejecutan reglas.'
      },
      {
        id: 74,
        contenido: 'Write to Data Store Entity smart service',
        correcta: false,
        explicacion: 'INCORRECTO: Este smart service es para escritura de datos.'
      },
      {
        id: 75,
        contenido: 'Script task',
        correcta: true,
        explicacion: 'CORRECTO: El script task permite ejecutar expresiones y reglas como actividad independiente.'
      },
      {
        id: 76,
        contenido: 'Process start form',
        correcta: false,
        explicacion: 'INCORRECTO: El start form captura datos iniciales, no ejecuta reglas.'
      }
    ]
  },
  {
    id: 20,
    contenido: 'What is the primary purpose of adding a related action?',
    multiple: false,
    respuestas: [
      {
        id: 77,
        contenido: 'To automate the creation of new records.',
        correcta: false,
        explicacion: 'INCORRECTO: La creación de records se automatiza con otros mecanismos.'
      },
      {
        id: 78,
        contenido: 'To allow users to update a record using information from that record as context.',
        correcta: true,
        explicacion: 'CORRECTO: Las related actions permiten acciones contextuales basadas en el record actual.'
      },
      {
        id: 79,
        contenido: 'To allow users to create a new record.',
        correcta: false,
        explicacion: 'INCORRECTO: Para crear records se usan record actions, no related actions.'
      },
      {
        id: 80,
        contenido: 'To configure security for record actions.',
        correcta: false,
        explicacion: 'INCORRECTO: La seguridad se configura en propiedades, no con related actions.'
      }
    ]
  },
  {
    id: 21,
    contenido: 'You\'re editing an interface that has an Order record type rule input. The Order record type has a related record type: Order Status. When using the rule input, how would you reference the value field in the related Order Status record type?',
    multiple: false,
    respuestas: [
      {
        id: 81,
        contenido: 'rilorder[OrderStatus.fields.value]',
        correcta: false,
        explicacion: 'INCORRECTO: Sintaxis incorrecta para acceder a campos de record types relacionados.'
      },
      {
        id: 82,
        contenido: 'rilorder[Order.relationships.OrderStatus.fields.value]',
        correcta: true,
        explicacion: 'CORRECTO: Esta es la sintaxis correcta para acceder a campos de record types relacionados a través de relaciones.'
      },
      {
        id: 83,
        contenido: 'Order.fields.relationship.OrderStatus.value]',
        correcta: false,
        explicacion: 'INCORRECTO: Sintaxis incorrecta, no sigue el patrón de referencias de Appian.'
      },
      {
        id: 84,
        contenido: 'OrderStatus.fields.value',
        correcta: false,
        explicacion: 'INCORRECTO: No referencia correctamente el record type principal a través del rule input.'
      }
    ]
  },
  {
    id: 22,
    contenido: 'You are testing an interface by entering values into the various components. How can you tell if your values are being captured into the mapped rule input?',
    multiple: false,
    respuestas: [
      {
        id: 85,
        contenido: 'Your typed values would appear in the rule input on the right side of the screen.',
        correcta: true,
        explicacion: 'CORRECTO: En Appian Designer, los valores introducidos en los componentes se reflejan en tiempo real en los rule inputs correspondientes en el panel derecho.'
      },
      {
        id: 86,
        contenido: 'The value of the rule input will have the text "updated".',
        correcta: false,
        explicacion: 'INCORRECTO: Los rule inputs no muestran texto "updated", muestran los valores actuales.'
      },
      {
        id: 87,
        contenido: 'The component will have a check mark next to it.',
        correcta: false,
        explicacion: 'INCORRECTO: Los componentes no muestran check marks para indicar captura de valores.'
      },
      {
        id: 88,
        contenido: 'Your typed values would appear in the Performance tab.',
        correcta: false,
        explicacion: 'INCORRECTO: El Performance tab muestra métricas de rendimiento, no valores de datos.'
      }
    ]
  },
  {
    id: 23,
    contenido: 'Which of the following Appian design objects is used to define and automate workflows by modeling the flow of tasks, decisions, and events?',
    multiple: false,
    respuestas: [
      {
        id: 89,
        contenido: 'Process model',
        correcta: true,
        explicacion: 'CORRECTO: Los process models son específicamente para definir y automatizar flujos de trabajo con tareas, decisiones y eventos.'
      },
      {
        id: 90,
        contenido: 'Record type',
        correcta: false,
        explicacion: 'INCORRECTO: Los record types son para estructurar datos, no para automatizar workflows.'
      },
      {
        id: 91,
        contenido: 'Constant',
        correcta: false,
        explicacion: 'INCORRECTO: Los constants almacenan valores estáticos, no definen workflows.'
      },
      {
        id: 92,
        contenido: 'Portal',
        correcta: false,
        explicacion: 'INCORRECTO: Los portals son para agrupar aplicaciones, no para modelar flujos de trabajo.'
      }
    ]
  },
  {
    id: 24,
    contenido: 'Which of the following Appian design objects is used to structure and model enterprise data, and represents major business concepts or processes?',
    multiple: false,
    respuestas: [
      {
        id: 93,
        contenido: 'AI skill',
        correcta: false,
        explicacion: 'INCORRECTO: AI skills son para capacidades de inteligencia artificial, no para modelar datos empresariales.'
      },
      {
        id: 94,
        contenido: 'Record type',
        correcta: true,
        explicacion: 'CORRECTO: Los record types están diseñados específicamente para estructurar y modelar datos empresariales que representan conceptos o procesos de negocio.'
      },
      {
        id: 95,
        contenido: 'Expression rule',
        correcta: false,
        explicacion: 'INCORRECTO: Las expression rules son para lógica de cálculo, no para modelar datos.'
      },
      {
        id: 96,
        contenido: 'Interface',
        correcta: false,
        explicacion: 'INCORRECTO: Las interfaces son para presentación de datos, no para modelar datos empresariales.'
      }
    ]
  },
  {
    id: 25,
    contenido: 'When working with an interface object, which live view tab would you look at to see how long it takes your interface and its elements to render?',
    multiple: false,
    respuestas: [
      {
        id: 97,
        contenido: 'None of these tabs',
        correcta: false,
        explicacion: 'INCORRECTO: Existe un tab específico para métricas de rendimiento.'
      },
      {
        id: 98,
        contenido: 'Preview tab',
        correcta: false,
        explicacion: 'INCORRECTO: El Preview tab muestra la interfaz, no métricas de tiempo de renderizado.'
      },
      {
        id: 99,
        contenido: 'Performance tab',
        correcta: true,
        explicacion: 'CORRECTO: El Performance tab proporciona métricas detalladas sobre el tiempo de renderizado de la interfaz y sus componentes.'
      },
      {
        id: 100,
        contenido: 'Edit tab',
        correcta: false,
        explicacion: 'INCORRECTO: El Edit tab es para editar la interfaz, no para ver métricas de rendimiento.'
      }
    ]
  },
  {
    id: 26,
    contenido: 'When configuring a data source using existing data, which of the following source types can you use?',
    multiple: true,
    respuestas: [
      {
        id: 101,
        contenido: 'Salesforce object',
        correcta: true,
        explicacion: 'CORRECTO: Appian puede integrarse con objetos de Salesforce como fuente de datos.'
      },
      {
        id: 102,
        contenido: 'Database',
        correcta: true,
        explicacion: 'CORRECTO: Las bases de datos relacionales son fuentes de datos comunes en Appian.'
      },
      {
        id: 103,
        contenido: 'Process model',
        correcta: false,
        explicacion: 'INCORRECTO: Los process models no son fuentes de datos, son flujos de trabajo.'
      },
      {
        id: 104,
        contenido: 'Web service',
        correcta: true,
        explicacion: 'CORRECTO: Los web services pueden servir como fuentes de datos para Appian.'
      },
      {
        id: 105,
        contenido: 'Interface object',
        correcta: false,
        explicacion: 'INCORRECTO: Las interfaces son para presentación, no son fuentes de datos.'
      }
    ]
  },
  {
    id: 27,
    contenido: 'You need to update an employee management application. The Employee record type currently tracks the employee\'s name, department, and hire date. The company now requires employee salary to be included in the record type. Which of the following steps would you complete to update the record type\'s underlying data model?',
    multiple: false,
    respuestas: [
      {
        id: 106,
        contenido: 'Delete the existing Employee record type and recreate it with the new salary field.',
        correcta: false,
        explicacion: 'INCORRECTO: No es necesario eliminar y recrear el record type completo.'
      },
      {
        id: 107,
        contenido: 'Manually update the database schema to include the new salary field, then import the changes into Appian.',
        correcta: false,
        explicacion: 'INCORRECTO: Appian puede manejar cambios en el schema a través de su interfaz.'
      },
      {
        id: 108,
        contenido: 'Create a new Salary record type and configure a relationship between the Salary and Employee record types.',
        correcta: false,
        explicacion: 'INCORRECTO: El salario es un atributo del empleado, no requiere un record type separado.'
      },
      {
        id: 109,
        contenido: 'Add the new salary field to the Employee record type in Appian. When you save changes to the record type, the database schema will be updated.',
        correcta: true,
        explicacion: 'CORRECTO: Appian puede actualizar automáticamente el schema de la base de datos cuando se añaden campos a un record type.'
      }
    ]
  },
  {
    id: 28,
    contenido: 'When naming your expression rules, which casing should you use?',
    multiple: false,
    respuestas: [
      {
        id: 110,
        contenido: 'Camel case -> AA_expressionRule',
        correcta: false,
        explicacion: 'INCORRECTO: Esta no es la convención estándar de Appian.'
      },
      {
        id: 111,
        contenido: 'Snake case -> AA_expression_rule',
        correcta: false,
        explicacion: 'INCORRECTO: No es la convención recomendada para expression rules.'
      },
      {
        id: 112,
        contenido: 'Train case -> AA_Expression-Rule',
        correcta: false,
        explicacion: 'INCORRECTO: Los guiones no son estándar en nombres de Appian.'
      },
      {
        id: 113,
        contenido: 'Pascal case -> AA_ExpressionRule',
        correcta: true,
        explicacion: 'CORRECTO: Pascal case (AA_ExpressionRule) es la convención de nomenclatura estándar para expression rules en Appian.'
      }
    ]
  },
  {
    id: 29,
    contenido: 'You are configuring a Start Process smart service. You want the child process to complete before the parent process continues. Which is the correct set of steps to make that happen?',
    multiple: false,
    respuestas: [
      {
        id: 114,
        contenido: 'Navigate to the Scheduling tab and select Asynchronously.',
        correcta: false,
        explicacion: 'INCORRECTO: Asynchronous permite que el proceso padre continúe sin esperar al hijo.'
      },
      {
        id: 115,
        contenido: 'Navigate to the Setup tab and select Asynchronously.',
        correcta: false,
        explicacion: 'INCORRECTO: La configuración de synchronous/asynchronous está en otra pestaña.'
      },
      {
        id: 116,
        contenido: 'Navigate to the Setup tab and select Synchronously.',
        correcta: false,
        explicacion: 'INCORRECTO: La opción synchronous está en la pestaña Scheduling.'
      },
      {
        id: 117,
        contenido: 'Navigate to the Scheduling tab and select Synchronously.',
        correcta: true,
        explicacion: 'CORRECTO: En la pestaña Scheduling, seleccionar Synchronously hace que el proceso padre espere a que el proceso hijo termine.'
      }
    ]
  },
  {
    id: 30,
    contenido: 'What would the output of the following expression be?\n\na1forEach(\nitems: {"apple", "pear", "banana"},\nexpression: "Word " & fv!index & " is length: " & len(fv!item)-1\n)',
    multiple: false,
    respuestas: [
      {
        id: 118,
        contenido: '[{"Word 1 is length: 4", "Word 2 is length: 3", "Word 3 is length: 5"]',
        correcta: false,
        explicacion: 'INCORRECTO: Los cálculos de longitud no coinciden con las longitudes reales de las palabras.'
      },
      {
        id: 119,
        contenido: '[{"Word 1 is length: 1", "Word 2 is length: 2", "Word 3 is length: 3"]',
        correcta: false,
        explicacion: 'INCORRECTO: Los índices y longitudes no coinciden con la expresión.'
      },
      {
        id: 120,
        contenido: '[{"Word 1 is length: 5", "Word 2 is length: 4", "Word 3 is length: 6"]',
        correcta: true,
        explicacion: 'CORRECTO: "apple" tiene 5 letras, "pear" tiene 4, "banana" tiene 6. Los índices comienzan en 1.'
      },
      {
        id: 121,
        contenido: '["apple: 4", "pear: 3", "banana: 5"]',
        correcta: false,
        explicacion: 'INCORRECTO: El formato de salida no coincide con la expresión proporcionada.'
      }
    ]
  },
  {
    id: 31,
    contenido: 'When using the Appian platform, which resource can you use to find detailed product documentation?',
    multiple: false,
    respuestas: [
      {
        id: 122,
        contenido: 'Appian Max',
        correcta: false,
        explicacion: 'INCORRECTO: Appian Max no es el recurso principal para documentación.'
      },
      {
        id: 123,
        contenido: 'Appian Documentation',
        correcta: true,
        explicacion: 'CORRECTO: Appian Documentation es el recurso oficial para documentación detallada del producto.'
      },
      {
        id: 124,
        contenido: 'Appian Community',
        correcta: false,
        explicacion: 'INCORRECTO: La Community es para discusiones entre usuarios, no documentación oficial.'
      },
      {
        id: 125,
        contenido: 'Appian Academy',
        correcta: false,
        explicacion: 'INCORRECTO: Appian Academy es para cursos de entrenamiento, no documentación de producto.'
      }
    ]
  },
  {
    id: 32,
    contenido: 'Select 3 main purposes of a test environment.',
    multiple: true,
    respuestas: [
      {
        id: 126,
        contenido: 'Load testing',
        correcta: true,
        explicacion: 'CORRECTO: Los entornos de prueba se utilizan para pruebas de carga y rendimiento.'
      },
      {
        id: 127,
        contenido: 'User acceptance testing',
        correcta: true,
        explicacion: 'CORRECTO: El UAT (User Acceptance Testing) es una función principal de los entornos de prueba.'
      },
      {
        id: 128,
        contenido: 'To create a proof of concept',
        correcta: false,
        explicacion: 'INCORRECTO: Los proof of concept generalmente se hacen en entornos de desarrollo, no de testing.'
      },
      {
        id: 129,
        contenido: 'Functional testing',
        correcta: true,
        explicacion: 'CORRECTO: Las pruebas funcionales son un propósito principal de los entornos de prueba.'
      }
    ]
  },
  {
    id: 33,
    contenido: 'When testing your interface form, you notice that a value is being saved on your form, but not in the process model. What is causing this?',
    multiple: false,
    respuestas: [
      {
        id: 130,
        contenido: 'The User Input task is not chained to the next node in the process.',
        correcta: false,
        explicacion: 'INCORRECTO: La cadena de nodos no afecta la captura de datos en el task.'
      },
      {
        id: 131,
        contenido: 'The value is not mapped correctly in the Form tab of your user input form.',
        correcta: false,
        explicacion: 'INCORRECTO: El mapeo en el Form tab afecta la interfaz, no la transferencia al proceso.'
      },
      {
        id: 132,
        contenido: 'The task is incorrectly configured to be a "Quick Task."',
        correcta: false,
        explicacion: 'INCORRECTO: Los Quick Tasks no son el problema aquí.'
      },
      {
        id: 133,
        contenido: 'The node inputs within the Data tab of your user input task is not configured properly.',
        correcta: true,
        explicacion: 'CORRECTO: El Data tab del user input task es donde se mapean los datos del formulario a las process variables del modelo de proceso.'
      }
    ]
  },
  {
    id: 34,
    contenido: 'What are the benefits of enabling data sync on record types?',
    multiple: true,
    respuestas: [
      {
        id: 134,
        contenido: 'Use powerful features to accelerate app development, such as generating record views.',
        correcta: true,
        explicacion: 'CORRECTO: Data sync permite funciones como generación automática de record views.'
      },
      {
        id: 135,
        contenido: 'Automate content processing tasks.',
        correcta: false,
        explicacion: 'INCORRECTO: Data sync no está relacionado con procesamiento de contenido.'
      },
      {
        id: 136,
        contenido: 'Unify and transform data across sources.',
        correcta: true,
        explicacion: 'CORRECTO: Data sync ayuda a unificar y transformar datos de múltiples fuentes.'
      },
      {
        id: 137,
        contenido: 'Allow users to build custom reports from your data fabric in Process HQ.',
        correcta: true,
        explicacion: 'CORRECTO: Data sync facilita la creación de reports personalizados en Process HQ.'
      }
    ]
  },
  {
    id: 35,
    contenido: 'Select 3 that apply. Which of the following are ways you can use local variables in interfaces?',
    multiple: true,
    respuestas: [
      {
        id: 138,
        contenido: 'To hold data being modified in an interface.',
        correcta: true,
        explicacion: 'CORRECTO: Las variables locales pueden almacenar datos que se están modificando en una interfaz.'
      },
      {
        id: 139,
        contenido: 'To conditionally display information based on data like process status, milestone completion, or group membership.',
        correcta: true,
        explicacion: 'CORRECTO: Las variables locales pueden usarse para lógica condicional en la visualización.'
      },
      {
        id: 140,
        contenido: 'To hold data from a query.',
        correcta: true,
        explicacion: 'CORRECTO: Los resultados de queries pueden almacenarse en variables locales.'
      },
      {
        id: 141,
        contenido: 'To hold values that need to be shared across objects in an application.',
        correcta: false,
        explicacion: 'INCORRECTO: Las variables locales son específicas de una interfaz, no se comparten entre objetos.'
      }
    ]
  },
  {
    id: 36,
    contenido: 'Which data type can you use as the data parameter of an index function?',
    multiple: false,
    respuestas: [
      {
        id: 142,
        contenido: 'Record type only',
        correcta: false,
        explicacion: 'INCORRECTO: La función index puede trabajar con más tipos de datos.'
      },
      {
        id: 143,
        contenido: 'Map only',
        correcta: false,
        explicacion: 'INCORRECTO: No está limitado solo a maps.'
      },
      {
        id: 144,
        contenido: 'Dictionary and map',
        correcta: false,
        explicacion: 'INCORRECTO: Puede trabajar con más tipos además de dictionary y map.'
      },
      {
        id: 145,
        contenido: 'Any type',
        correcta: true,
        explicacion: 'CORRECTO: La función index en Appian puede trabajar con cualquier tipo de datos como parámetro.'
      }
    ]
  },
  {
    id: 37,
    contenido: 'When configuring a user input task, why would you pass process variable data into the task\'s inputs?',
    multiple: false,
    respuestas: [
      {
        id: 146,
        contenido: 'To allow the data to be stored in a database right after the task is complete.',
        correcta: false,
        explicacion: 'INCORRECTO: El almacenamiento en base de datos se configura separadamente.'
      },
      {
        id: 147,
        contenido: 'To assign the task to a user based on the process variable data.',
        correcta: false,
        explicacion: 'INCORRECTO: La asignación de tareas se configura en propiedades diferentes.'
      },
      {
        id: 148,
        contenido: 'To make the data available for the user to view or edit in the user input tasks interface form.',
        correcta: true,
        explicacion: 'CORRECTO: Pasar process variables a los inputs del task hace que los datos estén disponibles para ver/editar en el formulario de la tarea.'
      },
      {
        id: 149,
        contenido: 'To ensure that the process variables are automatically updated based on the user\'s input into the task form.',
        correcta: false,
        explicacion: 'INCORRECTO: La actualización de process variables se configura en el Data tab, no en los inputs.'
      }
    ]
  },
  {
    id: 38,
    contenido: 'What\'s an effective way to enable users to search for specific data in a record list?',
    multiple: false,
    respuestas: [
      {
        id: 150,
        contenido: 'User views',
        correcta: false,
        explicacion: 'INCORRECTO: Los user views son para personalizar la visualización, no para búsqueda.'
      },
      {
        id: 151,
        contenido: 'User filters',
        correcta: true,
        explicacion: 'CORRECTO: Los user filters permiten a los usuarios buscar y filtrar datos específicos en record lists.'
      },
      {
        id: 152,
        contenido: 'Record events',
        correcta: false,
        explicacion: 'INCORRECTO: Los record events son para automatización, no para búsqueda.'
      },
      {
        id: 153,
        contenido: 'Related actions',
        correcta: false,
        explicacion: 'INCORRECTO: Las related actions son para realizar acciones, no para buscar datos.'
      }
    ]
  },
  {
    id: 39,
    contenido: 'You have a process that has multiple paths. You want the process to go down only one single path based on a given value. Which type of gateway is best to use in this scenario?',
    multiple: false,
    respuestas: [
      {
        id: 154,
        contenido: 'OR',
        correcta: false,
        explicacion: 'INCORRECTO: Los gateways OR pueden permitir múltiples paths.'
      },
      {
        id: 155,
        contenido: 'AND',
        correcta: false,
        explicacion: 'INCORRECTO: Los gateways AND ejecutan todos los paths simultáneamente.'
      },
      {
        id: 156,
        contenido: 'Complex',
        correcta: false,
        explicacion: 'INCORRECTO: Los gateways complex son para lógica más elaborada, no necesariamente para un solo path.'
      },
      {
        id: 157,
        contenido: 'XOR',
        correcta: true,
        explicacion: 'CORRECTO: Los gateways XOR (Exclusive OR) garantizan que solo un path sea tomado basado en condiciones.'
      }
    ]
  },
  {
    id: 40,
    contenido: 'You are configuring a script task and need to output to a target process variable. Which three of the following operators can you use with all data types?',
    multiple: true,
    respuestas: [
      {
        id: 158,
        contenido: 'Is stored at index',
        correcta: false,
        explicacion: 'INCORRECTO: Este operador es específico para arrays/listas.'
      },
      {
        id: 159,
        contenido: 'Is stored as',
        correcta: true,
        explicacion: 'CORRECTO: "Is stored as" puede usarse con cualquier tipo de dato.'
      },
      {
        id: 160,
        contenido: 'Is multiplied by',
        correcta: false,
        explicacion: 'INCORRECTO: Este operador es solo para tipos numéricos.'
      },
      {
        id: 161,
        contenido: 'Is appended to list',
        correcta: false,
        explicacion: 'INCORRECTO: Este operador es específico para listas/arrays.'
      },
      {
        id: 162,
        contenido: 'Is added to',
        correcta: false,
        explicacion: 'INCORRECTO: Este operador es principalmente para números y fechas.'
      }
    ]
  },
  {
    id: 41,
    contenido: 'Select the best option. Which function allows you to specify a series of condition pairs using equal and then, or whenTrue and then?',
    multiple: false,
    respuestas: [
      {
        id: 163,
        contenido: 'almatch()',
        correcta: false,
        explicacion: 'INCORRECTO: a!match() no es una función estándar de Appian.'
      },
      {
        id: 164,
        contenido: 'and()',
        correcta: false,
        explicacion: 'INCORRECTO: and() es para operaciones lógicas booleanas, no para pares condición-resultado.'
      },
      {
        id: 165,
        contenido: 'if()',
        correcta: true,
        explicacion: 'CORRECTO: La función if() permite especificar pares de condiciones (equal/whenTrue) y resultados (then).'
      },
      {
        id: 166,
        contenido: 'or()',
        correcta: false,
        explicacion: 'INCORRECTO: or() es para operaciones lógicas booleanas, no para pares condición-resultado.'
      }
    ]
  },
  {
    id: 42,
    contenido: 'What must be defined for a table to publish in Appian?',
    multiple: false,
    respuestas: [
      {
        id: 167,
        contenido: 'Parent key',
        correcta: false,
        explicacion: 'INCORRECTO: Las parent keys no son requeridas para publicar tablas.'
      },
      {
        id: 168,
        contenido: 'Foreign key',
        correcta: false,
        explicacion: 'INCORRECTO: Las foreign keys son para relaciones, no para publicar tablas.'
      },
      {
        id: 169,
        contenido: 'Join key',
        correcta: false,
        explicacion: 'INCORRECTO: Las join keys no son un requisito para publicar.'
      },
      {
        id: 170,
        contenido: 'Primary key',
        correcta: true,
        explicacion: 'CORRECTO: Una primary key debe estar definida para que una tabla pueda publicarse en Appian.'
      }
    ]
  },
  {
    id: 43,
    contenido: 'Select 2 that apply. You\'re configuring the Write Records smart service. Which of the following are true about the record type that you can use with this smart service?',
    multiple: true,
    respuestas: [
      {
        id: 171,
        contenido: 'Must not have data sync enabled',
        correcta: false,
        explicacion: 'INCORRECTO: Write Records puede trabajar con record types con data sync enabled.'
      },
      {
        id: 172,
        contenido: 'Must use a database as its source',
        correcta: false,
        explicacion: 'INCORRECTO: Puede usar diferentes fuentes de datos.'
      },
      {
        id: 173,
        contenido: 'Must use a process as its source',
        correcta: false,
        explicacion: 'INCORRECTO: Los processes no son fuentes de datos para record types.'
      },
      {
        id: 174,
        contenido: 'Must have data sync enabled',
        correcta: true,
        explicacion: 'CORRECTO: El Write Records smart service requiere que el record type tenga data sync enabled.'
      }
    ]
  },
  {
    id: 44,
    contenido: 'Select 2 that apply. Which two record list styles can you choose for a record list?',
    multiple: true,
    respuestas: [
      {
        id: 175,
        contenido: 'Matrix style',
        correcta: false,
        explicacion: 'INCORRECTO: No existe "Matrix style" para record lists.'
      },
      {
        id: 176,
        contenido: 'Feed style',
        correcta: true,
        explicacion: 'CORRECTO: Feed style es una opción disponible para record lists.'
      },
      {
        id: 177,
        contenido: 'Image style',
        correcta: false,
        explicacion: 'INCORRECTO: No existe "Image style" como opción principal.'
      },
      {
        id: 178,
        contenido: 'Grid style',
        correcta: true,
        explicacion: 'CORRECTO: Grid style es una opción disponible para record lists.'
      }
    ]
  },
  {
    id: 45,
    contenido: 'Select 2 that apply. Which statements reflect interface design best practices?',
    multiple: true,
    respuestas: [
      {
        id: 179,
        contenido: 'Avoid reusing interfaces, as it complicates future application updates.',
        correcta: false,
        explicacion: 'INCORRECTO: Reutilizar interfaces es una buena práctica que promueve mantenibilidad.'
      },
      {
        id: 180,
        contenido: 'Referencing an interface from another interface is never efficient.',
        correcta: false,
        explicacion: 'INCORRECTO: Referenciar interfaces puede ser eficiente y promover reutilización.'
      },
      {
        id: 181,
        contenido: 'Reuse interfaces, as it promotes maintainability and can speed up application development.',
        correcta: true,
        explicacion: 'CORRECTO: Reutilizar interfaces es una best practice que mejora mantenibilidad y velocidad de desarrollo.'
      },
      {
        id: 182,
        contenido: 'Three key concepts of quality user experience design are: Present information clearly, show the right amount of information, and facilitate user orientation and navigation.',
        correcta: true,
        explicacion: 'CORRECTO: Estos son principios clave de diseño de experiencia de usuario de calidad.'
      }
    ]
  },
  {
    id: 46,
    contenido: 'When updating an interface, you need to save a dynamic number of values of the same type into a rule input. What should you do?',
    multiple: false,
    respuestas: [
      {
        id: 183,
        contenido: 'Create as many new variables as needed.',
        correcta: false,
        explicacion: 'INCORRECTO: Esto no es escalable para un número dinámico de valores.'
      },
      {
        id: 184,
        contenido: 'You can\'t save a dynamic number of values of the same type.',
        correcta: false,
        explicacion: 'INCORRECTO: Sí es posible usando arrays.'
      },
      {
        id: 185,
        contenido: 'Update the variable to be a CDT.',
        correcta: false,
        explicacion: 'INCORRECTO: Un CDT no es necesario para valores del mismo tipo.'
      },
      {
        id: 186,
        contenido: 'Create a new variable and set it as an array.',
        correcta: true,
        explicacion: 'CORRECTO: Usar un array permite almacenar un número dinámico de valores del mismo tipo.'
      }
    ]
  },
  {
    id: 47,
    contenido: 'You are building a customer management application. Each customer can have multiple orders, and each order can contain multiple items. You need to configure a relationship between the Customer and Order record types to display all orders for a specific customer. Which record type relationship should you configure?',
    multiple: false,
    respuestas: [
      {
        id: 187,
        contenido: 'many-to-many relationship from Customer to Order',
        correcta: false,
        explicacion: 'INCORRECTO: Un cliente tiene múltiples órdenes, pero una orden pertenece a un cliente específico.'
      },
      {
        id: 188,
        contenido: 'one-to-one relationship from Customer to Order',
        correcta: false,
        explicacion: 'INCORRECTO: Esto limitaría a un cliente a tener solo una orden.'
      },
      {
        id: 189,
        contenido: 'one-to-many relationship from Customer to Order',
        correcta: true,
        explicacion: 'CORRECTO: Un cliente (one) puede tener múltiples órdenes (many), pero cada orden pertenece a un solo cliente.'
      },
      {
        id: 190,
        contenido: 'many-to-one relationship from Customer to Order',
        correcta: false,
        explicacion: 'INCORRECTO: Esta sería la perspectiva desde Order hacia Customer.'
      }
    ]
  },
  {
    id: 48,
    contenido: 'Which of the following Appian design objects is used to define reusable statements that evaluate to return a value and can be applied across multiple parts of an application?',
    multiple: false,
    respuestas: [
      {
        id: 191,
        contenido: 'Process model',
        correcta: false,
        explicacion: 'INCORRECTO: Los process models son para flujos de trabajo, no para expresiones reutilizables.'
      },
      {
        id: 192,
        contenido: 'Constant',
        correcta: false,
        explicacion: 'INCORRECTO: Los constants almacenan valores estáticos, no evalúan statements.'
      },
      {
        id: 193,
        contenido: 'Record type',
        correcta: false,
        explicacion: 'INCORRECTO: Los record types son para estructurar datos, no para lógica evaluable.'
      },
      {
        id: 194,
        contenido: 'Expression rule',
        correcta: true,
        explicacion: 'CORRECTO: Las expression rules definen statements reutilizables que evalúan para retornar un valor.'
      }
    ]
  },
  {
    id: 49,
    contenido: 'What is the recommended action to prevent a user from accessing Appian?',
    multiple: false,
    respuestas: [
      {
        id: 195,
        contenido: 'Remove the user from all groups they are a member of.',
        correcta: false,
        explicacion: 'INCORRECTO: Esto no previene el acceso, solo limita permisos.'
      },
      {
        id: 196,
        contenido: 'Deactivate the user\'s account.',
        correcta: true,
        explicacion: 'CORRECTO: Desactivar la cuenta del usuario es la forma recomendada para prevenir acceso a Appian.'
      },
      {
        id: 197,
        contenido: 'Add the Deny privilege to the user\'s profile.',
        correcta: false,
        explicacion: 'INCORRECTO: No existe un privilegio "Deny" específico para esto.'
      },
      {
        id: 198,
        contenido: 'Delete the user\'s account.',
        correcta: false,
        explicacion: 'INCORRECTO: La eliminación es permanente, la desactivación es reversible y preferible.'
      }
    ]
  },
  {
    id: 50,
    contenido: 'Select 3 that apply. Where might you use interfaces in your applications?',
    multiple: true,
    respuestas: [
      {
        id: 199,
        contenido: 'To query data.',
        correcta: false,
        explicacion: 'INCORRECTO: Las queries se hacen con expression rules, no con interfaces.'
      },
      {
        id: 200,
        contenido: 'To display a form.',
        correcta: true,
        explicacion: 'CORRECTO: Las interfaces se usan comúnmente para mostrar formularios.'
      },
      {
        id: 201,
        contenido: 'To display a record backed grid.',
        correcta: true,
        explicacion: 'CORRECTO: Las interfaces pueden mostrar grids basados en records.'
      },
      {
        id: 202,
        contenido: 'To display reports.',
        correcta: true,
        explicacion: 'CORRECTO: Las interfaces pueden utilizarse para visualizar reports.'
      }
    ]
  },
  {
    id: 51,
    contenido: 'Which of the following is a best practice when writing an expression rule?',
    multiple: false,
    respuestas: [
      {
        id: 203,
        contenido: 'Add hardcoded values into the expression.',
        correcta: false,
        explicacion: 'INCORRECTO: Los valores hardcodeados reducen la reutilización y mantenibilidad.'
      },
      {
        id: 204,
        contenido: 'Avoid line breaks when possible.',
        correcta: false,
        explicacion: 'INCORRECTO: Los line breaks mejoran la legibilidad del código.'
      },
      {
        id: 205,
        contenido: 'Avoid using comments in the expression.',
        correcta: false,
        explicacion: 'INCORRECTO: Los comentarios mejoran la mantenibilidad del código.'
      },
      {
        id: 206,
        contenido: 'Whenever possible, use keyword syntax for parameters.',
        correcta: true,
        explicacion: 'CORRECTO: Usar keyword syntax hace el código más legible y mantenible.'
      }
    ]
  },
  {
    id: 52,
    contenido: 'Which type of user grants access to the Administration Console?',
    multiple: false,
    respuestas: [
      {
        id: 207,
        contenido: 'System Administrator',
        correcta: true,
        explicacion: 'CORRECTO: Los System Administrators tienen acceso al Administration Console.'
      },
      {
        id: 208,
        contenido: 'Basic User',
        correcta: false,
        explicacion: 'INCORRECTO: Los Basic Users no tienen acceso al Administration Console.'
      },
      {
        id: 209,
        contenido: 'Application Administrator',
        correcta: false,
        explicacion: 'INCORRECTO: Los Application Administrators gestionan aplicaciones específicas, no el Administration Console.'
      },
      {
        id: 210,
        contenido: 'Tempo User',
        correcta: false,
        explicacion: 'INCORRECTO: Los Tempo Users acceden a través de Tempo, no al Administration Console.'
      }
    ]
  },
  {
    id: 53,
    contenido: 'You need to set up a new application and its group structure. Which statement is a best practice for groups?',
    multiple: false,
    respuestas: [
      {
        id: 211,
        contenido: 'Group names should not have an application prefix.',
        correcta: false,
        explicacion: 'INCORRECTO: Los prefijos de aplicación ayudan a organizar y identificar grupos.'
      },
      {
        id: 212,
        contenido: 'Combine all roles with varying permission levels into a single group for simplicity.',
        correcta: false,
        explicacion: 'INCORRECTO: Esto viola el principio de mínimo privilegio y crea problemas de seguridad.'
      },
      {
        id: 213,
        contenido: 'Custom group types should be used as much as possible.',
        correcta: false,
        explicacion: 'INCORRECTO: Los group types estándar suelen ser suficientes y más mantenibles.'
      },
      {
        id: 214,
        contenido: 'There should be specific groups for roles and specific groups for tasks.',
        correcta: true,
        explicacion: 'CORRECTO: Es una best practice tener grupos separados para roles (funcionales) y para tasks (asignaciones específicas).'
      }
    ]
  },
  {
    id: 54,
    contenido: 'Based on the test inputs, what would the test output be of the following if() function:\n\nif(\nand(\nnlquote > rilbudget,\nrillevel = "Minor"),\n"Needs supervisor approval.",\n"Can be scheduled.")\nTest Inputs\n\nbudget: 100\nquote: 200\nlevel: Major',
    multiple: false,
    respuestas: [
      {
        id: 215,
        contenido: 'An empty string output',
        correcta: false,
        explicacion: 'INCORRECTO: La función if() siempre retorna uno de los valores especificados.'
      },
      {
        id: 216,
        contenido: '"Needs supervisor approval."',
        correcta: false,
        explicacion: 'INCORRECTO: Aunque quote > budget, level no es "Minor".'
      },
      {
        id: 217,
        contenido: '"Can be scheduled."',
        correcta: true,
        explicacion: 'CORRECTO: La condición AND requiere que AMBAS condiciones sean verdaderas. quote > budget es true, pero level = "Minor" es false (level es "Major"), por lo que el AND es false y se retorna el valor else.'
      },
      {
        id: 218,
        contenido: 'An evaluation error',
        correcta: false,
        explicacion: 'INCORRECTO: No hay error de evaluación, la expresión es válida.'
      }
    ]
  },
  {
    id: 55,
    contenido: 'When configuring a Write Records smart service\'s records input, how do you specify the records to be updated?',
    multiple: false,
    respuestas: [
      {
        id: 219,
        contenido: 'Select the process variable that contains the data of the relevant record type.',
        correcta: true,
        explicacion: 'CORRECTO: Se selecciona la process variable que contiene los datos del record type a actualizar.'
      },
      {
        id: 220,
        contenido: 'You must use a script task before the Write Records smart service to query for the records.',
        correcta: false,
        explicacion: 'INCORRECTO: No es obligatorio usar un script task antes.'
      },
      {
        id: 221,
        contenido: 'Use alqueryEntity() to query the records that are being updated.',
        correcta: false,
        explicacion: 'INCORRECTO: queryEntity() es para data store entities, no para Write Records.'
      },
      {
        id: 222,
        contenido: 'Write an expression to specify the records to update.',
        correcta: false,
        explicacion: 'INCORRECTO: No se escribe una expresión directa, se selecciona una process variable.'
      }
    ]
  },
  {
    id: 56,
    contenido: 'To create a mobile application, which of the following is required?',
    multiple: false,
    respuestas: [
      {
        id: 223,
        contenido: 'Additional licenses',
        correcta: false,
        explicacion: 'INCORRECTO: No se requieren licencias adicionales específicamente para mobile.'
      },
      {
        id: 224,
        contenido: 'Nothing additional is required',
        correcta: true,
        explicacion: 'CORRECTO: Las aplicaciones Appian son responsive por diseño y funcionan en dispositivos móviles sin requerir componentes adicionales.'
      },
      {
        id: 225,
        contenido: 'A connected system plug-in',
        correcta: false,
        explicacion: 'INCORRECTO: Los connected systems son para integraciones, no para capacidades móviles.'
      },
      {
        id: 226,
        contenido: 'A mobile-specialist development team',
        correcta: false,
        explicacion: 'INCORRECTO: No se requiere un equipo especializado en móviles.'
      }
    ]
  },
  {
    id: 57,
    contenido: 'Why would you want to save the output of a node into a process variable?',
    multiple: false,
    respuestas: [
      {
        id: 227,
        contenido: 'To prevent errors in the process model.',
        correcta: false,
        explicacion: 'INCORRECTO: Guardar outputs no previene errores directamente.'
      },
      {
        id: 228,
        contenido: 'To make the output available to other nodes or smart services.',
        correcta: true,
        explicacion: 'CORRECTO: Guardar outputs en process variables permite que otros nodos o smart services en el proceso accedan a esos datos.'
      },
      {
        id: 229,
        contenido: 'To automatically trigger subsequent user tasks based on the output data.',
        correcta: false,
        explicacion: 'INCORRECTO: Los user tasks se trigger manualmente o por flujo, no automáticamente por outputs.'
      },
      {
        id: 230,
        contenido: 'You can\'t save a node\'s output.',
        correcta: false,
        explicacion: 'INCORRECTO: Sí se puede guardar el output de un nodo en process variables.'
      }
    ]
  },
  {
    id: 58,
    contenido: 'Which node or smart service represents an automated system activity that is typically used to transform data, execute an expression, or execute a rule?',
    multiple: false,
    respuestas: [
      {
        id: 231,
        contenido: 'User input task',
        correcta: false,
        explicacion: 'INCORRECTO: Los user input tasks requieren interacción humana.'
      },
      {
        id: 232,
        contenido: 'Query Database smart service',
        correcta: false,
        explicacion: 'INCORRECTO: Este smart service es específico para consultas de base de datos.'
      },
      {
        id: 233,
        contenido: 'Script task',
        correcta: true,
        explicacion: 'CORRECTO: Los script tasks son actividades automatizadas del sistema para transformar datos, ejecutar expresiones o reglas.'
      },
      {
        id: 234,
        contenido: 'Write to Data Store Entity smart service',
        correcta: false,
        explicacion: 'INCORRECTO: Este smart service es específico para escritura de datos.'
      }
    ]
  },
  {
    id: 59,
    contenido: 'You are creating a record type for tracking student grades in a school management application. Each student has multiple grades, and you need to calculate the average grade for each student. Which choice best aligns to Appian\'s best practices?',
    multiple: false,
    respuestas: [
      {
        id: 235,
        contenido: 'Manually update the average grade in the Student record type whenever a new grade is added.',
        correcta: false,
        explicacion: 'INCORRECTO: Las actualizaciones manuales no son escalables y propensas a errores.'
      },
      {
        id: 236,
        contenido: 'Store the average grade directly in the Student record type.',
        correcta: false,
        explicacion: 'INCORRECTO: Almacenar datos derivados viola principios de normalización de datos.'
      },
      {
        id: 237,
        contenido: 'Use aIqueryRecordType() to query and aggregate grade data through the student record.',
        correcta: true,
        explicacion: 'CORRECTO: Calcular el promedio dinámicamente usando queryRecordType() con funciones de agregación es la mejor práctica.'
      },
      {
        id: 238,
        contenido: 'Configure the Student record type to automatically calculate the average grade without needing any relationships to the grade data.',
        correcta: false,
        explicacion: 'INCORRECTO: No es posible calcular promedios sin acceso a los datos de calificaciones.'
      }
    ]
  },
  {
    id: 60,
    contenido: 'What is the most appropriate reason for verifying a data store entity?',
    multiple: false,
    respuestas: [
      {
        id: 239,
        contenido: 'To create data store entities automatically.',
        correcta: false,
        explicacion: 'INCORRECTO: La verificación no crea entidades automáticamente.'
      },
      {
        id: 240,
        contenido: 'To validate data store edits.',
        correcta: false,
        explicacion: 'CORRECTO: La verificación de data store entities se utiliza principalmente para validar que las ediciones en el data store cumplan con las reglas de integridad referencial y estructura definidas.'
      },
      {
        id: 241,
        contenido: 'To check the security settings on the data store.',
        correcta: false,
        explicacion: 'INCORRECTO: La seguridad se configura separadamente.'
      },
      {
        id: 242,
        contenido: 'To nest CDTs.',
        correcta: true,
        explicacion: 'INCORRECTO: El anidamiento de CDTs se realiza durante el diseño, no mediante la verificación de entidades.'
      }
    ]
  }
];
