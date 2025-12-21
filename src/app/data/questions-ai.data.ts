import { Question } from '../models/question.model';

export const QUESTIONS_AI: Question[] = [
  {
    id: 501,
    contenido: 'Which Appian component is used to display a list of records with customizable columns and sorting capabilities?',
    multiple: false,
    respuestas: [
      {
        id: 1501,
        contenido: 'a!gridField()',
        correcta: true,
        explicacion: 'CORRECTO: a!gridField() muestra registros en formato tabular con columnas personalizables, ordenamiento y filtrado.'
      },
      {
        id: 1502,
        contenido: 'a!recordData()',
        correcta: false,
        explicacion: 'INCORRECTO: a!recordData() es para recuperar datos de registros, no para mostrarlos en una grid.'
      },
      {
        id: 1503,
        contenido: 'a!queryRecordType()',
        correcta: false,
        explicacion: 'INCORRECTO: Esta función consulta datos pero no los muestra en una interfaz.'
      },
      {
        id: 1504,
        contenido: 'a!listView()',
        correcta: false,
        explicacion: 'INCORRECTO: No existe la función a!listView() en Appian.'
      }
    ]
  },
  {
    id: 502,
    contenido: 'Select 2 that apply. What are two primary benefits of using constants in Appian?',
    multiple: true,
    respuestas: [
      {
        id: 1505,
        contenido: 'To store sensitive configuration values securely.',
        correcta: true,
        explicacion: 'CORRECTO: Las constantes proporcionan una forma segura de almacenar valores sensibles como claves API o configuraciones.'
      },
      {
        id: 1506,
        contenido: 'To improve application performance by caching frequently used values.',
        correcta: true,
        explicacion: 'CORRECTO: Las constantes se almacenan en caché y proporcionan mejor rendimiento para valores accedidos frecuentemente.'
      },
      {
        id: 1507,
        contenido: 'To dynamically update based on user input.',
        correcta: false,
        explicacion: 'INCORRECTO: Las constantes son estáticas y no pueden cambiar basándose en entrada del usuario.'
      },
      {
        id: 1508,
        contenido: 'To create reusable interface components.',
        correcta: false,
        explicacion: 'INCORRECTO: Las interfaces y componentes se crean de forma diferente, no mediante constantes.'
      }
    ]
  },
  {
    id: 503,
    contenido: 'When configuring a connected system in Appian, which authentication method should you use for maximum security when integrating with REST APIs?',
    multiple: false,
    respuestas: [
      {
        id: 1509,
        contenido: 'Basic Authentication',
        correcta: false,
        explicacion: 'INCORRECTO: Basic Authentication envía credenciales en texto plano y es menos seguro.'
      },
      {
        id: 1510,
        contenido: 'OAuth 2.0',
        correcta: true,
        explicacion: 'CORRECTO: OAuth 2.0 proporciona el método de autenticación más seguro para integraciones con APIs REST con seguridad basada en tokens.'
      },
      {
        id: 1511,
        contenido: 'API Key in URL parameters',
        correcta: false,
        explicacion: 'INCORRECTO: Esto expone la clave API en logs y es inseguro.'
      },
      {
        id: 1512,
        contenido: 'No authentication',
        correcta: false,
        explicacion: 'INCORRECTO: La mayoría de APIs REST requieren autenticación por seguridad.'
      }
    ]
  },
  {
    id: 504,
    contenido: 'What is the purpose of the a!localVariables() function in Appian interfaces?',
    multiple: false,
    respuestas: [
      {
        id: 1513,
        contenido: 'To define variables that can be shared across multiple interfaces.',
        correcta: false,
        explicacion: 'INCORRECTO: Las variables locales tienen alcance en una sola interfaz, no se comparten entre interfaces.'
      },
      {
        id: 1514,
        contenido: 'To store data temporarily during interface evaluation.',
        correcta: true,
        explicacion: 'CORRECTO: a!localVariables() permite almacenar datos temporales durante la evaluación de un componente de interfaz.'
      },
      {
        id: 1515,
        contenido: 'To create global variables accessible throughout the application.',
        correcta: false,
        explicacion: 'INCORRECTO: Para variables globales, usarías constantes o parámetros del sistema.'
      },
      {
        id: 1516,
        contenido: 'To persist user data between browser sessions.',
        correcta: false,
        explicacion: 'INCORRECTO: Las variables locales no persisten datos entre sesiones del navegador.'
      }
    ]
  },
  {
    id: 505,
    contenido: 'Select 3 that apply. Which of the following are valid use cases for decision objects in Appian?',
    multiple: true,
    respuestas: [
      {
        id: 1517,
        contenido: 'To automate business rules and logic.',
        correcta: true,
        explicacion: 'CORRECTO: Los objetos de decisión están diseñados para automatizar reglas y lógica de negocio.'
      },
      {
        id: 1518,
        contenido: 'To calculate complex mathematical formulas.',
        correcta: true,
        explicacion: 'CORRECTO: Los objetos de decisión pueden manejar cálculos complejos y fórmulas matemáticas.'
      },
      {
        id: 1519,
        contenido: 'To store user interface configurations.',
        correcta: false,
        explicacion: 'INCORRECTO: Las configuraciones de interfaz se almacenan en objetos de interfaz, no en objetos de decisión.'
      },
      {
        id: 1520,
        contenido: 'To determine process paths based on conditions.',
        correcta: true,
        explicacion: 'CORRECTO: Los objetos de decisión pueden determinar qué ruta debe tomar un proceso basándose en condiciones.'
      },
      {
        id: 1521,
        contenido: 'To display data in a grid format.',
        correcta: false,
        explicacion: 'INCORRECTO: La visualización de datos se maneja mediante componentes de interfaz, no objetos de decisión.'
      }
    ]
  },
  {
    id: 506,
    contenido: 'Which function would you use to retrieve a specific record by its primary key value?',
    multiple: false,
    respuestas: [
      {
        id: 1522,
        contenido: 'a!queryRecordType()',
        correcta: false,
        explicacion: 'INCORRECTO: a!queryRecordType() es para consultar múltiples registros con filtros.'
      },
      {
        id: 1523,
        contenido: 'a!recordData()',
        correcta: true,
        explicacion: 'CORRECTO: a!recordData() recupera un registro específico por su valor de clave primaria.'
      },
      {
        id: 1524,
        contenido: 'a!getRecord()',
        correcta: false,
        explicacion: 'INCORRECTO: No existe la función a!getRecord() en Appian.'
      },
      {
        id: 1525,
        contenido: 'a!findRecord()',
        correcta: false,
        explicacion: 'INCORRECTO: No existe la función a!findRecord() en Appian.'
      }
    ]
  },
  {
    id: 507,
    contenido: 'What is the primary purpose of the "Save Into" parameter in Appian interface components?',
    multiple: false,
    respuestas: [
      {
        id: 1526,
        contenido: 'To specify where the component should be displayed on the page.',
        correcta: false,
        explicacion: 'INCORRECTO: El posicionamiento de componentes se maneja mediante componentes de diseño, no el parámetro Save Into.'
      },
      {
        id: 1527,
        contenido: 'To define where user input data should be stored.',
        correcta: true,
        explicacion: 'CORRECTO: El parámetro Save Into especifica qué variable debe almacenar la entrada del usuario del componente.'
      },
      {
        id: 1528,
        contenido: 'To determine the security permissions for the component.',
        correcta: false,
        explicacion: 'INCORRECTO: La seguridad se configura separadamente mediante configuraciones de seguridad de Appian.'
      },
      {
        id: 1529,
        contenido: 'To cache the component for better performance.',
        correcta: false,
        explicacion: 'INCORRECTO: El almacenamiento en caché lo maneja automáticamente Appian, no mediante Save Into.'
      }
    ]
  },
  {
    id: 508,
    contenido: 'Select 2 that apply. Which statements are true about process variables in Appian?',
    multiple: true,
    respuestas: [
      {
        id: 1530,
        contenido: 'Process variables can store complex data types like CDTs.',
        correcta: true,
        explicacion: 'CORRECTO: Las variables de proceso pueden almacenar varios tipos de datos incluyendo Tipos de Datos Complejos (CDTs).'
      },
      {
        id: 1531,
        contenido: 'Process variables are accessible across all process models in an application.',
        correcta: false,
        explicacion: 'INCORRECTO: Las variables de proceso tienen alcance en instancias de proceso individuales.'
      },
      {
        id: 1532,
        contenido: 'Process variables persist data throughout the lifecycle of a process instance.',
        correcta: true,
        explicacion: 'CORRECTO: Las variables de proceso mantienen sus valores durante todo el ciclo de vida de la instancia del proceso.'
      },
      {
        id: 1533,
        contenido: 'Process variables can be directly modified from interfaces without node configuration.',
        correcta: false,
        explicacion: 'INCORRECTO: Las variables de proceso se actualizan mediante nodos configurados apropiadamente en el modelo de proceso.'
      }
    ]
  },
  {
    id: 509,
    contenido: 'When would you use a!queryEntity() instead of a!queryRecordType()?',
    multiple: false,
    respuestas: [
      {
        id: 1534,
        contenido: 'When you need to query data from a data store entity.',
        correcta: true,
        explicacion: 'CORRECTO: a!queryEntity() está específicamente diseñado para consultar entidades de almacén de datos.'
      },
      {
        id: 1535,
        contenido: 'When you need better performance for large datasets.',
        correcta: false,
        explicacion: 'INCORRECTO: Ambas funciones tienen características de rendimiento similares para consultas equivalentes.'
      },
      {
        id: 1536,
        contenido: 'When you want to query multiple record types simultaneously.',
        correcta: false,
        explicacion: 'INCORRECTO: No puedes consultar múltiples tipos de registro con una sola llamada a a!queryEntity().'
      },
      {
        id: 1537,
        contenido: 'When you need to update data in addition to querying it.',
        correcta: false,
        explicacion: 'INCORRECTO: Ambas funciones son solo para consultar, no para actualizar datos.'
      }
    ]
  },
  {
    id: 510,
    contenido: 'What is the correct way to handle errors in Appian expression rules?',
    multiple: false,
    respuestas: [
      {
        id: 1538,
        contenido: 'Using try-catch blocks like in traditional programming languages.',
        correcta: false,
        explicacion: 'INCORRECTO: Appian no usa bloques try-catch para el manejo de errores.'
      },
      {
        id: 1539,
        contenido: 'Using the a!try() function to handle potential errors gracefully.',
        correcta: true,
        explicacion: 'CORRECTO: a!try() te permite manejar errores potenciales y proporcionar valores alternativos en reglas de expresión.'
      },
      {
        id: 1540,
        contenido: 'Errors are automatically handled by Appian and cannot be customized.',
        correcta: false,
        explicacion: 'INCORRECTO: Aunque Appian proporciona algún manejo automático de errores, puedes personalizarlo usando a!try().'
      },
      {
        id: 1541,
        contenido: 'Using the onError parameter available in all functions.',
        correcta: false,
        explicacion: 'INCORRECTO: La mayoría de funciones de Appian no tienen un parámetro onError.'
      }
    ]
  },
  {
    id: 511,
    contenido: 'Select 2 that apply. Which of the following are best practices for designing Appian interfaces?',
    multiple: true,
    respuestas: [
      {
        id: 1542,
        contenido: 'Use consistent spacing and alignment throughout the interface.',
        correcta: true,
        explicacion: 'CORRECTO: Espaciado y alineación consistentes mejoran la usabilidad y apariencia profesional.'
      },
      {
        id: 1543,
        contenido: 'Place critical actions in hidden sections to prevent accidental clicks.',
        correcta: false,
        explicacion: 'INCORRECTO: Las acciones críticas deben ser visibles y claramente etiquetadas, no ocultas.'
      },
      {
        id: 1544,
        contenido: 'Group related fields together logically.',
        correcta: true,
        explicacion: 'CORRECTO: La agrupación lógica de campos relacionados mejora la experiencia del usuario y la finalización de formularios.'
      },
      {
        id: 1545,
        contenido: 'Use as many different colors as possible to distinguish sections.',
        correcta: false,
        explicacion: 'INCORRECTO: Demasiados colores pueden crear desorden visual; usa un esquema de colores consistente.'
      }
    ]
  },
  {
    id: 512,
    contenido: 'Which smart service would you use to send email notifications from a process model?',
    multiple: false,
    respuestas: [
      {
        id: 1546,
        contenido: 'Send Email smart service',
        correcta: true,
        explicacion: 'CORRECTO: El servicio inteligente Send Email está específicamente diseñado para enviar notificaciones por correo desde modelos de proceso.'
      },
      {
        id: 1547,
        contenido: 'Write to Data Store Entity smart service',
        correcta: false,
        explicacion: 'INCORRECTO: Este servicio inteligente es para almacenamiento de datos, no para notificaciones por correo.'
      },
      {
        id: 1548,
        contenido: 'User Input Task smart service',
        correcta: false,
        explicacion: 'INCORRECTO: User Input Task es para recopilar entrada del usuario, no para enviar correos.'
      },
      {
        id: 1549,
        contenido: 'Script Task smart service',
        correcta: false,
        explicacion: 'INCORRECTO: Script Task ejecuta expresiones pero no está optimizado para envío de correos.'
      }
    ]
  },
  {
    id: 513,
    contenido: 'What is the purpose of the "Chaining" configuration in process models?',
    multiple: false,
    respuestas: [
      {
        id: 1550,
        contenido: 'To define the order in which nodes execute sequentially.',
        correcta: true,
        explicacion: 'CORRECTO: Chaining determina el orden de ejecución secuencial de nodos en un modelo de proceso.'
      },
      {
        id: 1551,
        contenido: 'To connect multiple process models together.',
        correcta: false,
        explicacion: 'INCORRECTO: Los modelos de proceso se conectan usando servicios inteligentes Start Process, no chaining.'
      },
      {
        id: 1552,
        contenido: 'To create parallel execution paths in the process.',
        correcta: false,
        explicacion: 'INCORRECTO: La ejecución paralela se crea usando compuertas AND, no chaining.'
      },
      {
        id: 1553,
        contenido: 'To secure the process model with authentication chains.',
        correcta: false,
        explicacion: 'INCORRECTO: La seguridad se configura separadamente, no mediante chaining.'
      }
    ]
  },
  {
    id: 514,
    contenido: 'Select 3 that apply. Which of the following are valid data types in Appian?',
    multiple: true,
    respuestas: [
      {
        id: 1554,
        contenido: 'Text',
        correcta: true,
        explicacion: 'CORRECTO: Texto es un tipo de datos fundamental en Appian para valores de cadena.'
      },
      {
        id: 1555,
        contenido: 'Integer',
        correcta: true,
        explicacion: 'CORRECTO: Integer se usa para valores de números enteros en Appian.'
      },
      {
        id: 1556,
        contenido: 'Date',
        correcta: true,
        explicacion: 'CORRECTO: Date es un tipo de datos estándar para almacenar valores de fecha.'
      },
      {
        id: 1557,
        contenido: 'Binary',
        correcta: false,
        explicacion: 'INCORRECTO: Aunque Appian puede manejar datos binarios, no es un tipo de datos primario como Text o Integer.'
      },
      {
        id: 1558,
        contenido: 'Array',
        correcta: false,
        explicacion: 'INCORRECTO: Los arrays son estructuras de datos que contienen otros tipos de datos, pero no son un tipo de datos primario en sí mismos.'
      }
    ]
  },
  {
    id: 515,
    contenido: 'How can you improve the performance of an interface that loads large datasets?',
    multiple: false,
    respuestas: [
      {
        id: 1559,
        contenido: 'Use pagination to load data in smaller chunks.',
        correcta: true,
        explicacion: 'CORRECTO: La paginación mejora significativamente el rendimiento cargando datos en fragmentos manejables en lugar de todos a la vez.'
      },
      {
        id: 1560,
        contenido: 'Load all data initially and hide unused sections.',
        correcta: false,
        explicacion: 'INCORRECTO: Cargar todos los datos inicialmente anula el propósito de la optimización de rendimiento.'
      },
      {
        id: 1561,
        contenido: 'Use larger page sizes to reduce the number of database calls.',
        correcta: false,
        explicacion: 'INCORRECTO: Los tamaños de página más grandes pueden degradar el rendimiento cargando demasiados datos a la vez.'
      },
      {
        id: 1562,
        contenido: 'Disable sorting and filtering capabilities.',
        correcta: false,
        explicacion: 'INCORRECTO: Aunque esto podría mejorar ligeramente el rendimiento, reduce la funcionalidad y no es una mejor práctica.'
      }
    ]
  },
  {
    id: 516,
    contenido: 'What is the difference between a record type and a data store entity?',
    multiple: false,
    respuestas: [
      {
        id: 1563,
        contenido: 'Record types are for external data sources, while data store entities are for Appian-managed data.',
        correcta: false,
        explicacion: 'INCORRECTO: Ambos pueden trabajar con datos externos y datos gestionados por Appian.'
      },
      {
        id: 1564,
        contenido: 'Record types provide out-of-the-box features like views and actions, while data store entities require more manual configuration.',
        correcta: true,
        explicacion: 'CORRECTO: Los tipos de registro vienen con funciones incorporadas como vistas de registro y acciones relacionadas, mientras que las entidades de almacén de datos requieren más configuración manual.'
      },
      {
        id: 1565,
        contenido: 'Data store entities have better performance than record types.',
        correcta: false,
        explicacion: 'INCORRECTO: El rendimiento depende del caso de uso específico y la configuración, no del tipo en sí.'
      },
      {
        id: 1566,
        contenido: 'Record types can only store simple data types, while data store entities can store complex data.',
        correcta: false,
        explicacion: 'INCORRECTO: Ambos pueden almacenar datos complejos mediante CDTs.'
      }
    ]
  },
  {
    id: 517,
    contenido: 'Select 2 that apply. Which of the following are true about Appian sites?',
    multiple: true,
    respuestas: [
      {
        id: 1567,
        contenido: 'Sites can contain multiple applications and interfaces.',
        correcta: true,
        explicacion: 'CORRECTO: Los sitios están diseñados para agrupar múltiples aplicaciones e interfaces para grupos de usuarios específicos.'
      },
      {
        id: 1568,
        contenido: 'Sites require additional licensing beyond standard Appian licenses.',
        correcta: false,
        explicacion: 'INCORRECTO: Los sitios están incluidos con las licencias estándar de Appian.'
      },
      {
        id: 1569,
        contenido: 'Each site can have customized navigation and branding.',
        correcta: true,
        explicacion: 'CORRECTO: Los sitios permiten navegación, marca y experiencia de usuario personalizadas.'
      },
      {
        id: 1570,
        contenido: 'Sites are only accessible to system administrators.',
        correcta: false,
        explicacion: 'INCORRECTO: Los sitios son accesibles para usuarios autorizados según su configuración de seguridad.'
      }
    ]
  },
  {
    id: 518,
    contenido: 'Which function would you use to format a date value in a specific pattern?',
    multiple: false,
    respuestas: [
      {
        id: 1571,
        contenido: 'a!formatDate()',
        correcta: false,
        explicacion: 'INCORRECTO: No existe la función a!formatDate() en Appian.'
      },
      {
        id: 1572,
        contenido: 'text() with format parameter',
        correcta: true,
        explicacion: 'CORRECTO: La función text() con el parámetro format se usa para formatear fechas en patrones específicos.'
      },
      {
        id: 1573,
        contenido: 'a!dateFormat()',
        correcta: false,
        explicacion: 'INCORRECTO: No existe la función a!dateFormat() en Appian.'
      },
      {
        id: 1574,
        contenido: 'format()',
        correcta: false,
        explicacion: 'INCORRECTO: No existe la función format() para fechas en Appian.'
      }
    ]
  },
  {
    id: 519,
    contenido: 'What is the purpose of the "Validation" configuration in interface components?',
    multiple: false,
    respuestas: [
      {
        id: 1575,
        contenido: 'To define rules that user input must satisfy before submission.',
        correcta: true,
        explicacion: 'CORRECTO: Las reglas de validación aseguran que la entrada del usuario cumpla criterios específicos antes de que el formulario pueda ser enviado.'
      },
      {
        id: 1576,
        contenido: 'To verify that the component is properly configured.',
        correcta: false,
        explicacion: 'INCORRECTO: La validación de configuración ocurre durante el tiempo de diseño, no mediante el parámetro Validation.'
      },
      {
        id: 1577,
        contenido: 'To authenticate users accessing the component.',
        correcta: false,
        explicacion: 'INCORRECTO: La autenticación se maneja a nivel de aplicación/objeto, no por componente.'
      },
      {
        id: 1578,
        contenido: 'To optimize the component for mobile devices.',
        correcta: false,
        explicacion: 'INCORRECTO: La optimización móvil se maneja mediante diseño responsivo, no reglas de validación.'
      }
    ]
  },
  {
    id: 520,
    contenido: 'Select 3 that apply. Which of the following are advantages of using Appian for business process management?',
    multiple: true,
    respuestas: [
      {
        id: 1579,
        contenido: 'Rapid application development with low-code approach.',
        correcta: true,
        explicacion: 'CORRECTO: Appian permite desarrollo rápido mediante su plataforma low-code.'
      },
      {
        id: 1580,
        contenido: 'Built-in mobile responsiveness for all applications.',
        correcta: true,
        explicacion: 'CORRECTO: Las aplicaciones de Appian son automáticamente móvil-responsivas.'
      },
      {
        id: 1581,
        contenido: 'No need for database design or SQL knowledge.',
        correcta: false,
        explicacion: 'INCORRECTO: Aunque Appian simplifica la gestión de datos, algún conocimiento de bases de datos sigue siendo beneficioso.'
      },
      {
        id: 1582,
        contenido: 'Comprehensive security and compliance features.',
        correcta: true,
        explicacion: 'CORRECTO: Appian proporciona capacidades robustas de seguridad, auditoría y cumplimiento.'
      },
      {
        id: 1583,
        contenido: 'Eliminates the need for any custom coding.',
        correcta: false,
        explicacion: 'INCORRECTO: Aunque low-code reduce la codificación personalizada, algunos escenarios aún pueden requerirla.'
      }
    ]
  },
  {
    "id": 521,
    "contenido": "Which function is used to create a dropdown field in an Appian interface?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1584,
        "contenido": "a!dropdownField()",
        "correcta": true,
        "explicacion": "CORRECTO: a!dropdownField() crea un campo desplegable que permite a los usuarios seleccionar una opción de una lista."
      },
      {
        "id": 1585,
        "contenido": "a!selectField()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!selectField() en Appian."
      },
      {
        "id": 1586,
        "contenido": "a!choiceField()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!choiceField() en Appian."
      },
      {
        "id": 1587,
        "contenido": "a!listField()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!listField() en Appian."
      }
    ]
  },
  {
    "id": 522,
    "contenido": "Select 2 that apply. Which two configurations are required for a record type to enable data synchronization with an external database?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1588,
        "contenido": "Data store entity connection",
        "correcta": true,
        "explicacion": "CORRECTO: Se requiere una conexión a data store entity para la sincronización con base de datos externa."
      },
      {
        "id": 1589,
        "contenido": "Process model for data sync",
        "correcta": false,
        "explicacion": "INCORRECTO: La sincronización de datos no requiere un process model específico."
      },
      {
        "id": 1590,
        "contenido": "Database table mapping",
        "correcta": true,
        "explicacion": "CORRECTO: Es necesario mapear los campos del record type a las columnas de la tabla de base de datos."
      },
      {
        "id": 1591,
        "contenido": "User authentication service",
        "correcta": false,
        "explicacion": "INCORRECTO: La autenticación de usuario se maneja separadamente."
      }
    ]
  },
  {
    "id": 523,
    "contenido": "What is the maximum number of characters allowed in a Text (VARCHAR) field in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1592,
        "contenido": "255 characters",
        "correcta": false,
        "explicacion": "INCORRECTO: Este es un límite común en otras bases de datos, pero no en Appian."
      },
      {
        "id": 1593,
        "contenido": "4000 characters",
        "correcta": false,
        "explicacion": "INCORRECTO: Este es el límite para algunos campos, pero no para Text (VARCHAR)."
      },
      {
        "id": 1594,
        "contenido": "Unlimited",
        "correcta": false,
        "explicacion": "INCORRECTO: Appian sí tiene límites para campos de texto."
      },
      {
        "id": 1595,
        "contenido": "Depends on the database configuration",
        "correcta": true,
        "explicacion": "CORRECTO: El límite depende de la configuración de la base de datos subyacente y puede variar."
      }
    ]
  },
  {
    "id": 524,
    "contenido": "Which smart service is used to start another process model from within a running process?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1596,
        "contenido": "Start Process",
        "correcta": true,
        "explicacion": "CORRECTO: El servicio inteligente Start Process inicia otro modelo de proceso desde un proceso en ejecución."
      },
      {
        "id": 1597,
        "contenido": "Execute Process",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe el servicio inteligente Execute Process."
      },
      {
        "id": 1598,
        "contenido": "Call Process",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe el servicio inteligente Call Process."
      },
      {
        "id": 1599,
        "contenido": "Process Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: Los gateways se usan para lógica de flujo, no para iniciar procesos."
      }
    ]
  },
  {
    "id": 525,
    "contenido": "Select 3 that apply. Which of the following are valid process model gateway types in Appian?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1600,
        "contenido": "AND Gateway",
        "correcta": true,
        "explicacion": "CORRECTO: AND Gateway permite múltiples flujos de ejecución paralelos."
      },
      {
        "id": 1601,
        "contenido": "OR Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe OR Gateway en Appian."
      },
      {
        "id": 1602,
        "contenido": "XOR Gateway",
        "correcta": true,
        "explicacion": "CORRECTO: XOR Gateway permite exactamente una ruta de ejecución basada en condiciones."
      },
      {
        "id": 1603,
        "contenido": "Decision Gateway",
        "correcta": true,
        "explicacion": "CORRECTO: Decision Gateway dirige el flujo basado en condiciones de negocio."
      },
      {
        "id": 1604,
        "contenido": "WHILE Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe WHILE Gateway en Appian."
      }
    ]
  },
  {
    "id": 526,
    "contenido": "What is the purpose of the a!localVariables() function?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1605,
        "contenido": "To declare variables that are only accessible within the current expression",
        "correcta": true,
        "explicacion": "CORRECTO: a!localVariables() declara variables con alcance limitado a la expresión actual."
      },
      {
        "id": 1606,
        "contenido": "To create global variables accessible across the application",
        "correcta": false,
        "explicacion": "INCORRECTO: Las variables globales se manejan mediante constantes, no con a!localVariables()."
      },
      {
        "id": 1607,
        "contenido": "To store user session data",
        "correcta": false,
        "explicacion": "INCORRECTO: Los datos de sesión se manejan mediante otros mecanismos en Appian."
      },
      {
        "id": 1608,
        "contenido": "To define process variables",
        "correcta": false,
        "explicacion": "INCORRECTO: Las variables de proceso se definen en el modelo de proceso, no con a!localVariables()."
      }
    ]
  },
  {
    "id": 527,
    "contenido": "Which function is used to display a rich text editor in an interface?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1609,
        "contenido": "a!richTextDisplayField()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!richTextDisplayField()."
      },
      {
        "id": 1610,
        "contenido": "a!paragraphField()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!paragraphField()."
      },
      {
        "id": 1611,
        "contenido": "a!richTextField()",
        "correcta": true,
        "explicacion": "CORRECTO: a!richTextField() proporciona un editor de texto enriquecido para entrada de usuario."
      },
      {
        "id": 1612,
        "contenido": "a!textAreaField()",
        "correcta": false,
        "explicacion": "INCORRECTO: a!textAreaField() es para texto plano, no enriquecido."
      }
    ]
  },
  {
    "id": 528,
    "contenido": "Select 2 that apply. Which two methods can be used to debug Appian interfaces?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1613,
        "contenido": "Using the Appian Debugger tool",
        "correcta": true,
        "explicacion": "CORRECTO: Appian proporciona herramientas de depuración integradas."
      },
      {
        "id": 1614,
        "contenido": "Adding console.log() statements",
        "correcta": false,
        "explicacion": "INCORRECTO: console.log() no funciona en expresiones SAIL de Appian."
      },
      {
        "id": 1615,
        "contenido": "Using a!log() function",
        "correcta": true,
        "explicacion": "CORRECTO: a!log() permite registrar información para depuración."
      },
      {
        "id": 1616,
        "contenido": "Browser developer tools only",
        "correcta": false,
        "explicacion": "INCORRECTO: Las herramientas del navegador son útiles pero no el único método disponible."
      }
    ]
  },
  {
    "id": 529,
    "contenido": "What is the default timeout value for a web API integration in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1617,
        "contenido": "30 seconds",
        "correcta": true,
        "explicacion": "CORRECTO: El timeout predeterminado para integraciones web API es 30 segundos."
      },
      {
        "id": 1618,
        "contenido": "60 seconds",
        "correcta": false,
        "explicacion": "INCORRECTO: 60 segundos no es el valor predeterminado."
      },
      {
        "id": 1619,
        "contenido": "5 minutes",
        "correcta": false,
        "explicacion": "INCORRECTO: 5 minutos es demasiado largo para el timeout predeterminado."
      },
      {
        "id": 1620,
        "contenido": "No default timeout",
        "correcta": false,
        "explicacion": "INCORRECTO: Todas las integraciones web API tienen timeout configurado."
      }
    ]
  },
  {
    "id": 530,
    "contenido": "Which function is used to convert a text string to uppercase in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1621,
        "contenido": "upper()",
        "correcta": true,
        "explicacion": "CORRECTO: upper() convierte una cadena de texto a mayúsculas."
      },
      {
        "id": 1622,
        "contenido": "toupper()",
        "correcta": false,
        "explicacion": "INCORRECTO: toupper() no es una función válida en Appian."
      },
      {
        "id": 1623,
        "contenido": "a!toUpperCase()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!toUpperCase()."
      },
      {
        "id": 1624,
        "contenido": "textUpper()",
        "correcta": false,
        "explicacion": "INCORRECTO: textUpper() no es una función válida en Appian."
      }
    ]
  },
  {
    "id": 531,
    "contenido": "Select 2 that apply. Which two security principles are enforced by Appian's object security model?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1625,
        "contenido": "Principle of Least Privilege",
        "correcta": true,
        "explicacion": "CORRECTO: Appian aplica el principio de privilegio mínimo por defecto."
      },
      {
        "id": 1626,
        "contenido": "Role-Based Access Control",
        "correcta": true,
        "explicacion": "CORRECTO: Appian usa RBAC para gestionar permisos de objetos."
      },
      {
        "id": 1627,
        "contenido": "Mandatory Access Control",
        "correcta": false,
        "explicacion": "INCORRECTO: Appian no usa Mandatory Access Control."
      },
      {
        "id": 1628,
        "contenido": "Attribute-Based Access Control",
        "correcta": false,
        "explicacion": "INCORRECTO: Appian no usa ABAC como modelo principal."
      }
    ]
  },
  {
    "id": 532,
    "contenido": "What is the purpose of the 'saveInto' parameter in interface components?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1629,
        "contenido": "To define where user input data is stored",
        "correcta": true,
        "explicacion": "CORRECTO: saveInto especifica dónde se almacenan los datos de entrada del usuario."
      },
      {
        "id": 1630,
        "contenido": "To configure auto-save functionality",
        "correcta": false,
        "explicacion": "INCORRECTO: saveInto no está relacionado con auto-guardado."
      },
      {
        "id": 1631,
        "contenido": "To define backup locations for data",
        "correcta": false,
        "explicacion": "INCORRECTO: saveInto no maneja backups de datos."
      },
      {
        "id": 1632,
        "contenido": "To specify database connection details",
        "correcta": false,
        "explicacion": "INCORRECTO: Las conexiones a base de datos se configuran separadamente."
      }
    ]
  },
  {
    "id": 533,
    "contenido": "Which function is used to retrieve the current user's information in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1633,
        "contenido": "loggedinuser()",
        "correcta": true,
        "explicacion": "CORRECTO: loggedinuser() devuelve información del usuario actualmente autenticado."
      },
      {
        "id": 1634,
        "contenido": "currentuser()",
        "correcta": false,
        "explicacion": "INCORRECTO: currentuser() no es una función válida en Appian."
      },
      {
        "id": 1635,
        "contenido": "a!currentUser()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!currentUser()."
      },
      {
        "id": 1636,
        "contenido": "user()",
        "correcta": false,
        "explicacion": "INCORRECTO: user() no es una función válida en Appian."
      }
    ]
  },
  {
    "id": 534,
    "contenido": "Select 3 that apply. Which three types of rules can be created in Appian?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1637,
        "contenido": "Expression Rule",
        "correcta": true,
        "explicacion": "CORRECTO: Las Expression Rules contienen lógica de negocio reutilizable."
      },
      {
        "id": 1638,
        "contenido": "Interface Rule",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe Interface Rule como tipo separado."
      },
      {
        "id": 1639,
        "contenido": "Constant Rule",
        "correcta": false,
        "explicacion": "INCORRECTO: Las constantes son objetos separados, no un tipo de rule."
      },
      {
        "id": 1640,
        "contenido": "Decision Rule",
        "correcta": true,
        "explicacion": "CORRECTO: Las Decision Rules encapsulan lógica de decisión compleja."
      },
      {
        "id": 1641,
        "contenido": "Query Rule",
        "correcta": true,
        "explicacion": "CORRECTO: Las Query Rules definen consultas reutilizables para datos."
      }
    ]
  },
  {
    "id": 535,
    "contenido": "What is the purpose of the 'feeds' feature in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1642,
        "contenido": "To display real-time updates and notifications",
        "correcta": true,
        "explicacion": "CORRECTO: Los feeds muestran actualizaciones en tiempo real y notificaciones."
      },
      {
        "id": 1643,
        "contenido": "To import data from external RSS feeds",
        "correcta": false,
        "explicacion": "INCORRECTO: Los feeds no están diseñados para importar datos RSS externos."
      },
      {
        "id": 1644,
        "contenido": "To manage social media integrations",
        "correcta": false,
        "explicacion": "INCORRECTO: Los feeds no están específicamente para redes sociales."
      },
      {
        "id": 1645,
        "contenido": "To create data pipelines for ETL processes",
        "correcta": false,
        "explicacion": "INCORRECTO: Los feeds no son para procesos ETL."
      }
    ]
  },
  {
    "id": 536,
    "contenido": "Which function is used to create a button that submits a form?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1646,
        "contenido": "a!submitButton()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!submitButton()."
      },
      {
        "id": 1647,
        "contenido": "a!buttonWidget()",
        "correcta": true,
        "explicacion": "CORRECTO: a!buttonWidget() puede configurarse para enviar formularios."
      },
      {
        "id": 1648,
        "contenido": "a!formButton()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!formButton()."
      },
      {
        "id": 1649,
        "contenido": "a!actionButton()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!actionButton()."
      }
    ]
  },
  {
    "id": 537,
    "contenido": "Select 2 that apply. Which two deployment approaches are supported by Appian?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1650,
        "contenido": "Manual deployment through Appian Designer",
        "correcta": true,
        "explicacion": "CORRECTO: Appian soporta despliegue manual mediante Appian Designer."
      },
      {
        "id": 1651,
        "contenido": "Automated deployment using CI/CD pipelines",
        "correcta": true,
        "explicacion": "CORRECTO: Appian soporta despliegue automatizado mediante pipelines CI/CD."
      },
      {
        "id": 1652,
        "contenido": "Direct database deployment",
        "correcta": false,
        "explicacion": "INCORRECTO: No se permite el despliegue directo a bases de datos."
      },
      {
        "id": 1653,
        "contenido": "Git-based deployment only",
        "correcta": false,
        "explicacion": "INCORRECTO: Appian soporta múltiples métodos de despliegue, no solo Git."
      }
    ]
  },
  {
    "id": 538,
    "contenido": "What is the maximum number of environments supported in an Appian application?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1654,
        "contenido": "3 environments (Dev, Test, Prod)",
        "correcta": false,
        "explicacion": "INCORRECTO: Appian soporta más de 3 entornos."
      },
      {
        "id": 1655,
        "contenido": "5 environments maximum",
        "correcta": false,
        "explicacion": "INCORRECTO: El límite es mayor que 5 entornos."
      },
      {
        "id": 1656,
        "contenido": "No fixed limit, depends on licensing",
        "correcta": true,
        "explicacion": "CORRECTO: El número de entornos depende de la licencia y configuración."
      },
      {
        "id": 1657,
        "contenido": "10 environments maximum",
        "correcta": false,
        "explicacion": "INCORRECTO: No hay un límite fijo de 10 entornos."
      }
    ]
  },
  {
    "id": 539,
    "contenido": "Which function is used to create a link that opens a record view?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1658,
        "contenido": "a!recordLink()",
        "correcta": true,
        "explicacion": "CORRECTO: a!recordLink() crea un enlace que abre la vista de un registro."
      },
      {
        "id": 1659,
        "contenido": "a!recordViewLink()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!recordViewLink()."
      },
      {
        "id": 1660,
        "contenido": "a!linkToRecord()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!linkToRecord()."
      },
      {
        "id": 1661,
        "contenido": "a!navigationLink()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!navigationLink()."
      }
    ]
  },
  {
    "id": 540,
    "contenido": "Select 2 that apply. Which two types of integrations are natively supported in Appian?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1662,
        "contenido": "REST API integrations",
        "correcta": true,
        "explicacion": "CORRECTO: Appian soporta integraciones REST API de forma nativa."
      },
      {
        "id": 1663,
        "contenido": "SOAP Web Service integrations",
        "correcta": true,
        "explicacion": "CORRECTO: Appian soporta integraciones SOAP Web Services de forma nativa."
      },
      {
        "id": 1664,
        "contenido": "GraphQL integrations",
        "correcta": false,
        "explicacion": "INCORRECTO: Appian no soporta GraphQL de forma nativa."
      },
      {
        "id": 1665,
        "contenido": "gRPC integrations",
        "correcta": false,
        "explicacion": "INCORRECTO: Appian no soporta gRPC de forma nativa."
      }
    ]
  },
  {
    "id": 541,
    "contenido": "Which function is used to round a decimal number to a specified number of decimal places in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1666,
        "contenido": "round()",
        "correcta": true,
        "explicacion": "CORRECTO: round() redondea un número al número especificado de decimales."
      },
      {
        "id": 1667,
        "contenido": "a!round()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!round()."
      },
      {
        "id": 1668,
        "contenido": "decimalRound()",
        "correcta": false,
        "explicacion": "INCORRECTO: decimalRound() no es una función válida en Appian."
      },
      {
        "id": 1669,
        "contenido": "mathRound()",
        "correcta": false,
        "explicacion": "INCORRECTO: mathRound() no es una función válida en Appian."
      }
    ]
  },
  {
    "id": 542,
    "contenido": "Select 2 that apply. Which two methods can be used to optimize the performance of Appian interfaces?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1670,
        "contenido": "Using a!localVariables() to cache expensive calculations",
        "correcta": true,
        "explicacion": "CORRECTO: a!localVariables() puede almacenar en caché cálculos costosos para mejorar el rendimiento."
      },
      {
        "id": 1671,
        "contenido": "Loading all data on initial interface load",
        "correcta": false,
        "explicacion": "INCORRECTO: Cargar todos los datos inicialmente puede degradar el rendimiento."
      },
      {
        "id": 1672,
        "contenido": "Implementing pagination for large datasets",
        "correcta": true,
        "explicacion": "CORRECTO: La paginación mejora significativamente el rendimiento con grandes conjuntos de datos."
      },
      {
        "id": 1673,
        "contenido": "Using complex nested a!forEach() loops extensively",
        "correcta": false,
        "explicacion": "INCORRECTO: Los bucles anidados complejos pueden degradar el rendimiento."
      }
    ]
  },
  {
    "id": 543,
    "contenido": "What is the purpose of the 'validIf' parameter in interface field components?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1674,
        "contenido": "To conditionally show or hide the field based on expressions",
        "correcta": false,
        "explicacion": "INCORRECTO: Eso se hace con el parámetro 'showWhen', no 'validIf'."
      },
      {
        "id": 1675,
        "contenido": "To define validation rules that prevent form submission",
        "correcta": true,
        "explicacion": "CORRECTO: 'validIf' define reglas de validación que deben cumplirse para enviar el formulario."
      },
      {
        "id": 1676,
        "contenido": "To specify the data type of the field",
        "correcta": false,
        "explicacion": "INCORRECTO: El tipo de datos se especifica en la configuración del campo, no en 'validIf'."
      },
      {
        "id": 1677,
        "contenido": "To configure autocomplete behavior",
        "correcta": false,
        "explicacion": "INCORRECTO: 'validIf' no está relacionado con autocompletado."
      }
    ]
  },
  {
    "id": 544,
    "contenido": "Which function would you use to extract a substring from a text value in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1678,
        "contenido": "substring()",
        "correcta": true,
        "explicacion": "CORRECTO: substring() extrae una parte de una cadena de texto."
      },
      {
        "id": 1679,
        "contenido": "extract()",
        "correcta": false,
        "explicacion": "INCORRECTO: extract() no es una función válida para extraer subcadenas."
      },
      {
        "id": 1680,
        "contenido": "a!substring()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!substring()."
      },
      {
        "id": 1681,
        "contenido": "textExtract()",
        "correcta": false,
        "explicacion": "INCORRECTO: textExtract() no es una función válida en Appian."
      }
    ]
  },
  {
    "id": 545,
    "contenido": "Select 3 that apply. Which three are valid use cases for process reports in Appian?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1682,
        "contenido": "Monitoring process instance duration",
        "correcta": true,
        "explicacion": "CORRECTO: Los informes de procesos pueden monitorizar la duración de instancias."
      },
      {
        "id": 1683,
        "contenido": "Tracking user task completion times",
        "correcta": true,
        "explicacion": "CORRECTO: Los informes pueden rastrear tiempos de finalización de tareas."
      },
      {
        "id": 1684,
        "contenido": "Analyzing process bottlenecks",
        "correcta": true,
        "explicacion": "CORRECTO: Los informes ayudan a identificar cuellos de botella en procesos."
      },
      {
        "id": 1685,
        "contenido": "Editing process model configurations",
        "correcta": false,
        "explicacion": "INCORRECTO: Los informes son para análisis, no para editar configuraciones."
      },
      {
        "id": 1686,
        "contenido": "Executing process instances",
        "correcta": false,
        "explicacion": "INCORRECTO: Los informes no ejecutan instancias de proceso."
      }
    ]
  },
  {
    "id": 546,
    "contenido": "What is the default data storage location for Appian process variables?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1687,
        "contenido": "Appian's internal database",
        "correcta": true,
        "explicacion": "CORRECTO: Las variables de proceso se almacenan en la base de datos interna de Appian."
      },
      {
        "id": 1688,
        "contenido": "External database configured by the administrator",
        "correcta": false,
        "explicacion": "INCORRECTO: Las variables de proceso no se almacenan en bases de datos externas por defecto."
      },
      {
        "id": 1689,
        "contenido": "Local browser storage",
        "correcta": false,
        "explicacion": "INCORRECTO: No se almacenan en el navegador del usuario."
      },
      {
        "id": 1690,
        "contenido": "In-memory cache only",
        "correcta": false,
        "explicacion": "INCORRECTO: Se persisten en base de datos, no solo en caché de memoria."
      }
    ]
  },
  {
    "id": 547,
    "contenido": "Which smart service is used to update multiple data store records in a single operation?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1691,
        "contenido": "Write to Data Store Entity",
        "correcta": true,
        "explicacion": "CORRECTO: Write to Data Store Entity puede crear o actualizar múltiples registros."
      },
      {
        "id": 1692,
        "contenido": "Update Records",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe el servicio inteligente Update Records."
      },
      {
        "id": 1693,
        "contenido": "Batch Update",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe el servicio inteligente Batch Update."
      },
      {
        "id": 1694,
        "contenido": "Modify Data Store",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe el servicio inteligente Modify Data Store."
      }
    ]
  },
  {
    "id": 548,
    "contenido": "Select 2 that apply. Which two statements are true about Appian expressions?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1695,
        "contenido": "Expressions can be used in both interfaces and process models",
        "correcta": true,
        "explicacion": "CORRECTO: Las expresiones se usan en interfaces, modelos de proceso y reglas."
      },
      {
        "id": 1696,
        "contenido": "Expressions support traditional programming loops like for and while",
        "correcta": false,
        "explicacion": "INCORRECTO: Appian usa a!forEach() en lugar de bucles tradicionales."
      },
      {
        "id": 1697,
        "contenido": "Expressions are evaluated server-side, not in the browser",
        "correcta": true,
        "explicacion": "CORRECTO: Las expresiones SAIL se evalúan en el servidor de Appian."
      },
      {
        "id": 1698,
        "contenido": "Expressions can directly manipulate database records",
        "correcta": false,
        "explicacion": "INCORRECTO: Las expresiones necesitan servicios inteligentes para manipular registros."
      }
    ]
  },
  {
    "id": 549,
    "contenido": "What is the purpose of the 'index' parameter in the a!forEach() function?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1699,
        "contenido": "To specify the starting position for iteration",
        "correcta": false,
        "explicacion": "INCORRECTO: No es para especificar la posición inicial."
      },
      {
        "id": 1700,
        "contenido": "To provide the current iteration count within the loop",
        "correcta": true,
        "explicacion": "CORRECTO: 'index' proporciona el número de iteración actual (comenzando en 1)."
      },
      {
        "id": 1701,
        "contenido": "To define the maximum number of iterations allowed",
        "correcta": false,
        "explicacion": "INCORRECTO: El número de iteraciones lo determina la lista de entrada."
      },
      {
        "id": 1702,
        "contenido": "To sort the items before iteration",
        "correcta": false,
        "explicacion": "INCORRECTO: a!forEach() no ordena los elementos."
      }
    ]
  },
  {
    "id": 550,
    "contenido": "Which function is used to check if a value is null or empty in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1703,
        "contenido": "isnullorempty()",
        "correcta": true,
        "explicacion": "CORRECTO: isnullorempty() verifica si un valor es nulo o vacío."
      },
      {
        "id": 1704,
        "contenido": "a!isNullOrEmpty()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!isNullOrEmpty()."
      },
      {
        "id": 1705,
        "contenido": "checknull()",
        "correcta": false,
        "explicacion": "INCORRECTO: checknull() no es una función válida en Appian."
      },
      {
        "id": 1706,
        "contenido": "empty()",
        "correcta": false,
        "explicacion": "INCORRECTO: empty() no es una función válida en Appian."
      }
    ]
  },
  {
    "id": 551,
    "contenido": "Select 3 that apply. Which three are valid notification types in Appian?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1707,
        "contenido": "Email notifications",
        "correcta": true,
        "explicacion": "CORRECTO: Appian soporta notificaciones por correo electrónico."
      },
      {
        "id": 1708,
        "contenido": "In-app notifications (feeds)",
        "correcta": true,
        "explicacion": "CORRECTO: Los feeds proporcionan notificaciones dentro de la aplicación."
      },
      {
        "id": 1709,
        "contenido": "Mobile push notifications",
        "correcta": true,
        "explicacion": "CORRECTO: Appian soporta notificaciones push en dispositivos móviles."
      },
      {
        "id": 1710,
        "contenido": "SMS text messages",
        "correcta": false,
        "explicacion": "INCORRECTO: Appian no soporta SMS de forma nativa."
      },
      {
        "id": 1711,
        "contenido": "Voice call notifications",
        "correcta": false,
        "explicacion": "INCORRECTO: Appian no realiza llamadas de voz para notificaciones."
      }
    ]
  },
  {
    "id": 552,
    "contenido": "What is the maximum number of characters in an Appian expression rule name?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1712,
        "contenido": "50 characters",
        "correcta": false,
        "explicacion": "INCORRECTO: El límite es mayor que 50 caracteres."
      },
      {
        "id": 1713,
        "contenido": "100 characters",
        "correcta": true,
        "explicacion": "CORRECTO: Los nombres de reglas de expresión están limitados a 100 caracteres."
      },
      {
        "id": 1714,
        "contenido": "200 characters",
        "correcta": false,
        "explicacion": "INCORRECTO: 200 caracteres excede el límite permitido."
      },
      {
        "id": 1715,
        "contenido": "No limit",
        "correcta": false,
        "explicacion": "INCORRECTO: Existe un límite de caracteres."
      }
    ]
  },
  {
    "id": 553,
    "contenido": "Which function is used to create a section header in an Appian interface?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1716,
        "contenido": "a!sectionHeader()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!sectionHeader()."
      },
      {
        "id": 1717,
        "contenido": "a!heading()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!heading()."
      },
      {
        "id": 1718,
        "contenido": "a!paragraphField() with style parameter",
        "correcta": true,
        "explicacion": "CORRECTO: a!paragraphField() con estilo 'HEADING' crea encabezados de sección."
      },
      {
        "id": 1719,
        "contenido": "a!textField() with header configuration",
        "correcta": false,
        "explicacion": "INCORRECTO: a!textField() no tiene configuración de encabezado."
      }
    ]
  },
  {
    "id": 554,
    "contenido": "Select 2 that apply. Which two deployment strategies are recommended when moving Appian applications between environments?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1720,
        "contenido": "Deploy all application objects together as a single unit",
        "correcta": true,
        "explicacion": "CORRECTO: Desplegar objetos relacionados juntos mantiene la consistencia."
      },
      {
        "id": 1721,
        "contenido": "Deploy process models and interfaces separately",
        "correcta": false,
        "explicacion": "INCORRECTO: Separarlos puede causar dependencias rotas."
      },
      {
        "id": 1722,
        "contenido": "Use export/import functionality for controlled deployment",
        "correcta": true,
        "explicacion": "CORRECTO: Exportar/importar proporciona control sobre qué se despliega."
      },
      {
        "id": 1723,
        "contenido": "Copy database tables directly between environments",
        "correcta": false,
        "explicacion": "INCORRECTO: Esto no es una práctica recomendada en Appian."
      }
    ]
  },
  {
    "id": 555,
    "contenido": "What is the purpose of the 'readOnly' parameter in interface field components?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1724,
        "contenido": "To prevent users from modifying the field value",
        "correcta": true,
        "explicacion": "CORRECTO: readOnly hace que el campo sea de solo lectura."
      },
      {
        "id": 1725,
        "contenido": "To hide the field from users",
        "correcta": false,
        "explicacion": "INCORRECTO: Para ocultar campos se usa showWhen o condicionales."
      },
      {
        "id": 1726,
        "contenido": "To encrypt the field data",
        "correcta": false,
        "explicacion": "INCORRECTO: readOnly no encripta datos."
      },
      {
        "id": 1727,
        "contenido": "To validate user input",
        "correcta": false,
        "explicacion": "INCORRECTO: La validación se hace con validIf."
      }
    ]
  },
  {
    "id": 556,
    "contenido": "Which function is used to convert a text string to a number in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1728,
        "contenido": "tonumber()",
        "correcta": true,
        "explicacion": "CORRECTO: tonumber() convierte una cadena de texto a un valor numérico."
      },
      {
        "id": 1729,
        "contenido": "a!toNumber()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!toNumber()."
      },
      {
        "id": 1730,
        "contenido": "convertToNumber()",
        "correcta": false,
        "explicacion": "INCORRECTO: convertToNumber() no es una función válida en Appian."
      },
      {
        "id": 1731,
        "contenido": "parseInt()",
        "correcta": false,
        "explicacion": "INCORRECTO: parseInt() no es una función válida en Appian."
      }
    ]
  },
  {
    "id": 557,
    "contenido": "Select 3 that apply. Which three are valid aggregation functions in Appian query expressions?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1732,
        "contenido": "sum()",
        "correcta": true,
        "explicacion": "CORRECTO: sum() calcula la suma de valores numéricos."
      },
      {
        "id": 1733,
        "contenido": "average()",
        "correcta": true,
        "explicacion": "CORRECTO: average() calcula el promedio de valores."
      },
      {
        "id": 1734,
        "contenido": "count()",
        "correcta": true,
        "explicacion": "CORRECTO: count() cuenta el número de elementos."
      },
      {
        "id": 1735,
        "contenido": "aggregate()",
        "correcta": false,
        "explicacion": "INCORRECTO: aggregate() no es una función de agregación válida."
      },
      {
        "id": 1736,
        "contenido": "groupby()",
        "correcta": false,
        "explicacion": "INCORRECTO: groupby() es una cláusula, no una función de agregación."
      }
    ]
  },
  {
    "id": 558,
    "contenido": "What is the default behavior when a process model reaches an end event?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1737,
        "contenido": "The process instance is archived",
        "correcta": false,
        "explicacion": "INCORRECTO: Los procesos no se archivan automáticamente al finalizar."
      },
      {
        "id": 1738,
        "contenido": "The process instance completes and becomes read-only",
        "correcta": true,
        "explicacion": "CORRECTO: Al alcanzar un end event, la instancia se completa y queda de solo lectura."
      },
      {
        "id": 1739,
        "contenido": "The process instance restarts automatically",
        "correcta": false,
        "explicacion": "INCORRECTO: Los procesos no se reinician automáticamente."
      },
      {
        "id": 1740,
        "contenido": "All process data is deleted",
        "correcta": false,
        "explicacion": "INCORRECTO: Los datos del proceso se conservan después de completarse."
      }
    ]
  },
  {
    "id": 559,
    "contenido": "Which function is used to get the current date and time in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1741,
        "contenido": "now()",
        "correcta": true,
        "explicacion": "CORRECTO: now() devuelve la fecha y hora actuales."
      },
      {
        "id": 1742,
        "contenido": "currentdatetime()",
        "correcta": false,
        "explicacion": "INCORRECTO: currentdatetime() no es una función válida en Appian."
      },
      {
        "id": 1743,
        "contenido": "a!now()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!now()."
      },
      {
        "id": 1744,
        "contenido": "todaysdate()",
        "correcta": false,
        "explicacion": "INCORRECTO: todaysdate() no es una función válida en Appian."
      }
    ]
  },
  {
    "id": 560,
    "contenido": "Select 2 that apply. Which two statements are true about Appian's mobile capabilities?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1745,
        "contenido": "All Appian interfaces are automatically mobile-responsive",
        "correcta": true,
        "explicacion": "CORRECTO: Las interfaces de Appian son responsivas por diseño."
      },
      {
        "id": 1746,
        "contenido": "Native mobile apps require separate development",
        "correcta": false,
        "explicacion": "INCORRECTO: Appian proporciona aplicaciones móviles nativas sin desarrollo separado."
      },
      {
        "id": 1747,
        "contenido": "Offline functionality is supported for certain operations",
        "correcta": true,
        "explicacion": "CORRECTO: Appian soporta funcionalidad offline limitada."
      },
      {
        "id": 1748,
        "contenido": "Mobile interfaces use different components than web interfaces",
        "correcta": false,
        "explicacion": "INCORRECTO: Los mismos componentes funcionan en web y móvil."
      }
    ]
  },
  {
    "id": 561,
    "contenido": "What is the purpose of the 'label' parameter in interface field components?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1749,
        "contenido": "To define the text displayed next to the field",
        "correcta": true,
        "explicacion": "CORRECTO: 'label' define el texto que identifica el campo para el usuario."
      },
      {
        "id": 1750,
        "contenido": "To specify the database column name",
        "correcta": false,
        "explicacion": "INCORRECTO: La columna de base de datos se configura separadamente."
      },
      {
        "id": 1751,
        "contenido": "To create a hyperlink for the field",
        "correcta": false,
        "explicacion": "INCORRECTO: Las etiquetas no son hipervínculos."
      },
      {
        "id": 1752,
        "contenido": "To validate the field value",
        "correcta": false,
        "explicacion": "INCORRECTO: La validación se hace con validIf."
      }
    ]
  },
  {
    "id": 562,
    "contenido": "Which smart service is used to assign a task to a specific user or group?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1753,
        "contenido": "User Input Task",
        "correcta": true,
        "explicacion": "CORRECTO: User Input Task asigna trabajo a usuarios o grupos específicos."
      },
      {
        "id": 1754,
        "contenido": "Assign Task",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe el servicio inteligente Assign Task."
      },
      {
        "id": 1755,
        "contenido": "Human Task",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe el servicio inteligente Human Task."
      },
      {
        "id": 1756,
        "contenido": "Work Assignment",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe el servicio inteligente Work Assignment."
      }
    ]
  },
  {
    "id": 563,
    "contenido": "Select 3 that apply. Which three are valid data transformation functions in Appian?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1757,
        "contenido": "merge()",
        "correcta": true,
        "explicacion": "CORRECTO: merge() combina múltiples mapas o diccionarios."
      },
      {
        "id": 1758,
        "contenido": "flatten()",
        "correcta": true,
        "explicacion": "CORRECTO: flatten() aplana listas anidadas en una sola lista."
      },
      {
        "id": 1759,
        "contenido": "reverse()",
        "correcta": true,
        "explicacion": "CORRECTO: reverse() invierte el orden de los elementos en una lista."
      },
      {
        "id": 1760,
        "contenido": "transform()",
        "correcta": false,
        "explicacion": "INCORRECTO: transform() no es una función válida en Appian."
      },
      {
        "id": 1761,
        "contenido": "convert()",
        "correcta": false,
        "explicacion": "INCORRECTO: convert() no es una función válida en Appian."
      }
    ]
  },
  {
    "id": 564,
    "contenido": "What is the maximum number of records that can be returned by a!queryRecordType() without pagination?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1762,
        "contenido": "100 records",
        "correcta": false,
        "explicacion": "INCORRECTO: El límite es mayor que 100."
      },
      {
        "id": 1763,
        "contenido": "500 records",
        "correcta": false,
        "explicacion": "INCORRECTO: El límite es mayor que 500."
      },
      {
        "id": 1764,
        "contenido": "1000 records",
        "correcta": false,
        "explicacion": "INCORRECTO: El límite es mayor que 1000."
      },
      {
        "id": 1765,
        "contenido": "Configured by system administrator",
        "correcta": true,
        "explicacion": "CORRECTO: El límite máximo es configurable por el administrador del sistema."
      }
    ]
  },
  {
    "id": 565,
    "contenido": "Which function is used to sort a list of values in ascending or descending order?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1766,
        "contenido": "sort()",
        "correcta": true,
        "explicacion": "CORRECTO: sort() ordena una lista de valores en orden ascendente o descendente."
      },
      {
        "id": 1767,
        "contenido": "a!sort()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!sort()."
      },
      {
        "id": 1768,
        "contenido": "orderby()",
        "correcta": false,
        "explicacion": "INCORRECTO: orderby() no es una función válida en Appian."
      },
      {
        "id": 1769,
        "contenido": "arrange()",
        "correcta": false,
        "explicacion": "INCORRECTO: arrange() no es una función válida en Appian."
      }
    ]
  },
  {
    "id": 566,
    "contenido": "Select 2 that apply. Which two are valid approaches for handling large file uploads in Appian?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1770,
        "contenido": "Use a!documentUploadField() with chunking enabled",
        "correcta": true,
        "explicacion": "CORRECTO: a!documentUploadField() soporta carga por fragmentos para archivos grandes."
      },
      {
        "id": 1771,
        "contenido": "Split files into smaller parts before uploading",
        "correcta": false,
        "explicacion": "INCORRECTO: No es necesario dividir manualmente los archivos."
      },
      {
        "id": 1772,
        "contenido": "Increase the server timeout configuration",
        "correcta": true,
        "explicacion": "CORRECTO: Aumentar el timeout del servidor puede ayudar con archivos grandes."
      },
      {
        "id": 1773,
        "contenido": "Store files directly in the database as BLOBs",
        "correcta": false,
        "explicacion": "INCORRECTO: Appian tiene almacenamiento de documentos dedicado."
      }
    ]
  },
  {
    "id": 567,
    "contenido": "What is the purpose of the 'required' parameter in interface field components?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1774,
        "contenido": "To make the field mandatory for form submission",
        "correcta": true,
        "explicacion": "CORRECTO: 'required' hace que el campo sea obligatorio."
      },
      {
        "id": 1775,
        "contenido": "To mark the field as important for users",
        "correcta": false,
        "explicacion": "INCORRECTO: No es solo para importancia visual."
      },
      {
        "id": 1776,
        "contenido": "To require server-side validation",
        "correcta": false,
        "explicacion": "INCORRECTO: La validación del lado del servidor es diferente."
      },
      {
        "id": 1777,
        "contenido": "To force data encryption for the field",
        "correcta": false,
        "explicacion": "INCORRECTO: 'required' no afecta el cifrado."
      }
    ]
  },
  {
    "id": 568,
    "contenido": "Which function is used to create a checkbox field in an Appian interface?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1778,
        "contenido": "a!checkboxField()",
        "correcta": true,
        "explicacion": "CORRECTO: a!checkboxField() crea un campo de casilla de verificación."
      },
      {
        "id": 1779,
        "contenido": "a!checkField()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!checkField()."
      },
      {
        "id": 1780,
        "contenido": "a!booleanField()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!booleanField()."
      },
      {
        "id": 1781,
        "contenido": "a!toggleField()",
        "correcta": false,
        "explicacion": "INCORRECTO: a!toggleField() es diferente de un checkbox."
      }
    ]
  },
  {
    "id": 569,
    "contenido": "Select 3 that apply. Which three are valid expression editor features in Appian Designer?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1782,
        "contenido": "Syntax highlighting",
        "correcta": true,
        "explicacion": "CORRECTO: El editor resalta la sintaxis para mejor legibilidad."
      },
      {
        "id": 1783,
        "contenido": "Auto-complete suggestions",
        "correcta": true,
        "explicacion": "CORRECTO: Sugiere funciones y parámetros mientras escribes."
      },
      {
        "id": 1784,
        "contenido": "Real-time error checking",
        "correcta": true,
        "explicacion": "CORRECTO"
      }]
    }


  // =====================================================
  // PRÓXIMAS PREGUNTAS A AÑADIR (IDs 521 en adelante)
  // =====================================================
  // Para añadir más preguntas:
  // 1. Continuar desde ID 521
  // 2. Mantener preguntas en inglés
  // 3. Explicaciones en castellano
  // 4. IDs de respuestas consecutivos desde 1584
  // =====================================================
];
