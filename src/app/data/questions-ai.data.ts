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
        contenido: 'datetext()',
        correcta: true,
        explicacion: 'CORRECTO: La función datetext() con el parámetro format se usa para formatear fechas en patrones específicos.'
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
        "contenido": "Subprocess",
        "correcta": true,
        "explicacion": "CORRECTO: El servicio inteligente Subprocess inicia otro modelo de proceso desde un proceso en ejecución."
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
        "contenido": "a!isNullOrEmpty()",
        "correcta": true,
        "explicacion": "CORRECTO: isnullorempty() verifica si un valor es nulo o vacío."
      },
      {
        "id": 1704,
        "contenido": "isnullorempty()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función isnullorempty()."
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
        "contenido": "tointeger()",
        "correcta": true,
        "explicacion": "CORRECTO: tointeger() convierte una cadena de texto a un valor numérico."
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
    },
  {
    "id": 570,
    "contenido": "Which function is used to check if a value exists in a list in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1785,
        "contenido": "contains()",
        "correcta": true,
        "explicacion": "CORRECTO: La función contains() verifica si un valor está presente en una lista."
      },
      {
        "id": 1786,
        "contenido": "exists()",
        "correcta": false,
        "explicacion": "INCORRECTO: exists() no es una función válida en Appian."
      },
      {
        "id": 1787,
        "contenido": "find()",
        "correcta": false,
        "explicacion": "INCORRECTO: find() no verifica presencia en listas, busca posiciones."
      },
      {
        "id": 1788,
        "contenido": "lookup()",
        "correcta": false,
        "explicacion": "INCORRECTO: lookup() se usa para relaciones de datos, no listas simples."
      }
    ]
  },
  {
    "id": 571,
    "contenido": "Select 2 that apply. Which two are common phases in the Agile software development lifecycle?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1789,
        "contenido": "Sprint Planning",
        "correcta": true,
        "explicacion": "CORRECTO: La planificación del sprint es una fase clave de Agile."
      },
      {
        "id": 1790,
        "contenido": "Waterfall Design",
        "correcta": false,
        "explicacion": "INCORRECTO: Waterfall es un enfoque tradicional, no parte de Agile."
      },
      {
        "id": 1791,
        "contenido": "Daily Stand-up",
        "correcta": true,
        "explicacion": "CORRECTO: Las reuniones diarias (daily stand-up) son parte de Agile."
      },
      {
        "id": 1792,
        "contenido": "Project Closure Report",
        "correcta": false,
        "explicacion": "INCORRECTO: Puede existir, pero no es un evento típico de cada sprint."
      }
    ]
  },
  {
    "id": 572,
    "contenido": "What is the purpose of the a!queryRecordType() function in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1793,
        "contenido": "To retrieve data from a record type based on filters and sorting",
        "correcta": true,
        "explicacion": "CORRECTO: Permite obtener datos de un record type aplicando filtros y ordenamiento."
      },
      {
        "id": 1794,
        "contenido": "To create a new record type",
        "correcta": false,
        "explicacion": "INCORRECTO: No se utiliza para crear record types."
      },
      {
        "id": 1795,
        "contenido": "To update user interface components",
        "correcta": false,
        "explicacion": "INCORRECTO: No afecta componentes de interfaz directamente."
      },
      {
        "id": 1796,
        "contenido": "To configure system permissions",
        "correcta": false,
        "explicacion": "INCORRECTO: No se relaciona con permisos del sistema."
      }
    ]
  },
  {
    "id": 573,
    "contenido": "Select 3 that apply. Which three are valid roles in Scrum methodology?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1797,
        "contenido": "Product Owner",
        "correcta": true,
        "explicacion": "CORRECTO: El Product Owner define las prioridades del producto."
      },
      {
        "id": 1798,
        "contenido": "Scrum Master",
        "correcta": true,
        "explicacion": "CORRECTO: Facilita el proceso Scrum y ayuda al equipo a eliminar impedimentos."
      },
      {
        "id": 1799,
        "contenido": "Development Team",
        "correcta": true,
        "explicacion": "CORRECTO: El equipo de desarrollo realiza el trabajo técnico."
      },
      {
        "id": 1800,
        "contenido": "Project Sponsor",
        "correcta": false,
        "explicacion": "INCORRECTO: Puede existir en la organización, pero no es un rol Scrum formal."
      }
    ]
  },
  {
    "id": 574,
    "contenido": "Which parameter in a!textField() makes the field required for form submission?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1801,
        "contenido": "required",
        "correcta": true,
        "explicacion": "CORRECTO: El parámetro 'required' obliga al usuario a completar el campo."
      },
      {
        "id": 1802,
        "contenido": "mandatory",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe el parámetro 'mandatory' en Appian."
      },
      {
        "id": 1803,
        "contenido": "validate",
        "correcta": false,
        "explicacion": "INCORRECTO: 'validate' no hace el campo obligatorio."
      },
      {
        "id": 1804,
        "contenido": "enforce",
        "correcta": false,
        "explicacion": "INCORRECTO: 'enforce' no es un parámetro válido en Appian."
      }
    ]
  },
  {
    "id": 575,
    "contenido": "What is the main goal of a retrospective in Agile?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1805,
        "contenido": "To reflect on the previous sprint and identify improvements",
        "correcta": true,
        "explicacion": "CORRECTO: La retrospectiva permite mejorar procesos y colaboración del equipo."
      },
      {
        "id": 1806,
        "contenido": "To plan the next sprint",
        "correcta": false,
        "explicacion": "INCORRECTO: La planificación es otro evento de Scrum."
      },
      {
        "id": 1807,
        "contenido": "To assign tasks to team members",
        "correcta": false,
        "explicacion": "INCORRECTO: La asignación se realiza durante la planificación o por el equipo mismo."
      },
      {
        "id": 1808,
        "contenido": "To define project budget",
        "correcta": false,
        "explicacion": "INCORRECTO: No se aborda el presupuesto en la retrospectiva."
      }
    ]
  },
  {
    "id": 576,
    "contenido": "Select 2 that apply. Which two practices help ensure data consistency in Appian records?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1809,
        "contenido": "Use record type relationships and queries",
        "correcta": true,
        "explicacion": "CORRECTO: Las relaciones y consultas entre record types ayudan a mantener la consistencia."
      },
      {
        "id": 1810,
        "contenido": "Allow users to directly modify database tables",
        "correcta": false,
        "explicacion": "INCORRECTO: No se debe modificar la base de datos directamente."
      },
      {
        "id": 1811,
        "contenido": "Validate inputs using expressions",
        "correcta": true,
        "explicacion": "CORRECTO: La validación en interfaces garantiza datos correctos."
      },
      {
        "id": 1812,
        "contenido": "Disable audit logs",
        "correcta": false,
        "explicacion": "INCORRECTO: Desactivar auditoría puede comprometer integridad y trazabilidad."
      }
    ]
  },
  {
    "id": 577,
    "contenido": "Which Appian function is used to concatenate multiple text values?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1813,
        "contenido": "concat()",
        "correcta": true,
        "explicacion": "CORRECTO: concat() une múltiples valores de texto en uno solo."
      },
      {
        "id": 1814,
        "contenido": "join()",
        "correcta": false,
        "explicacion": "INCORRECTO: join() no es la función utilizada en Appian."
      },
      {
        "id": 1815,
        "contenido": "merge()",
        "correcta": false,
        "explicacion": "INCORRECTO: merge() no existe en Appian."
      },
      {
        "id": 1816,
        "contenido": "append()",
        "correcta": false,
        "explicacion": "INCORRECTO: append() no concatena cadenas en Appian."
      }
    ]
  },
  {
    "id": 578,
    "contenido": "Select 3 that apply. Which three are considered Agile ceremonies?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1817,
        "contenido": "Sprint Planning",
        "correcta": true,
        "explicacion": "CORRECTO: La planificación del sprint es una ceremonia formal."
      },
      {
        "id": 1818,
        "contenido": "Daily Stand-up",
        "correcta": true,
        "explicacion": "CORRECTO: Reunión diaria de seguimiento del equipo."
      },
      {
        "id": 1819,
        "contenido": "Retrospective",
        "correcta": true,
        "explicacion": "CORRECTO: Retrospectiva para identificar mejoras."
      },
      {
        "id": 1820,
        "contenido": "Project Kickoff",
        "correcta": false,
        "explicacion": "INCORRECTO: Kickoff es un evento de inicio de proyecto tradicional, no una ceremonia Agile."
      }
    ]
  },
  {
    "id": 579,
    "contenido": "What parameter in a!numberField() sets the minimum allowed value?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1821,
        "contenido": "min",
        "correcta": true,
        "explicacion": "CORRECTO: 'min' define el valor mínimo que el usuario puede ingresar."
      },
      {
        "id": 1822,
        "contenido": "minimumValue",
        "correcta": false,
        "explicacion": "INCORRECTO: minimumValue no es un parámetro válido en Appian."
      },
      {
        "id": 1823,
        "contenido": "lowerLimit",
        "correcta": false,
        "explicacion": "INCORRECTO: lowerLimit no se usa en Appian."
      },
      {
        "id": 1824,
        "contenido": "floor",
        "correcta": false,
        "explicacion": "INCORRECTO: floor no restringe el valor mínimo del campo."
      }
    ]
  },
//==========================================================
  {
    "id": 580,
    "contenido": "Which Appian function is used to calculate the number of items in a list?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1825,
        "contenido": "count()",
        "correcta": true,
        "explicacion": "CORRECTO: La función count() devuelve la cantidad de elementos en una lista."
      },
      {
        "id": 1826,
        "contenido": "length()",
        "correcta": false,
        "explicacion": "INCORRECTO: length() no es una función válida en Appian."
      },
      {
        "id": 1827,
        "contenido": "size()",
        "correcta": false,
        "explicacion": "INCORRECTO: size() no se usa en Appian para contar elementos."
      },
      {
        "id": 1828,
        "contenido": "total()",
        "correcta": false,
        "explicacion": "INCORRECTO: total() no cuenta elementos de listas."
      }
    ]
  },
  {
    "id": 581,
    "contenido": "Select 2 that apply. Which two are valid Appian data types?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1829,
        "contenido": "Text",
        "correcta": true,
        "explicacion": "CORRECTO: Text es un tipo de dato básico en Appian."
      },
      {
        "id": 1830,
        "contenido": "Number",
        "correcta": true,
        "explicacion": "CORRECTO: Number es un tipo de dato numérico válido."
      },
      {
        "id": 1831,
        "contenido": "StringList",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe StringList como tipo nativo en Appian."
      },
      {
        "id": 1832,
        "contenido": "BooleanArray",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe BooleanArray como tipo nativo en Appian."
      }
    ]
  },
  {
    "id": 582,
    "contenido": "What is the main purpose of a!localVariables() in an Appian interface?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1833,
        "contenido": "To define temporary values for use in expressions",
        "correcta": true,
        "explicacion": "CORRECTO: Permite declarar variables locales temporales para cálculos o lógica dentro de la interfaz."
      },
      {
        "id": 1834,
        "contenido": "To store data permanently in the database",
        "correcta": false,
        "explicacion": "INCORRECTO: Las variables locales no persisten en la base de datos."
      },
      {
        "id": 1835,
        "contenido": "To define system-wide constants",
        "correcta": false,
        "explicacion": "INCORRECTO: No se usan para valores globales, solo locales."
      },
      {
        "id": 1836,
        "contenido": "To manage user permissions",
        "correcta": false,
        "explicacion": "INCORRECTO: No tiene relación con permisos de usuarios."
      }
    ]
  },
  {
    "id": 583,
    "contenido": "Select 2 that apply. Which two are common metrics tracked in Agile projects?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1837,
        "contenido": "Velocity",
        "correcta": true,
        "explicacion": "CORRECTO: Velocity mide la cantidad de trabajo completado en un sprint."
      },
      {
        "id": 1838,
        "contenido": "Burn-down Chart",
        "correcta": true,
        "explicacion": "CORRECTO: Muestra la evolución del trabajo restante en un sprint."
      },
      {
        "id": 1839,
        "contenido": "Code Coverage",
        "correcta": false,
        "explicacion": "INCORRECTO: Es una métrica de calidad de código, no directamente de Agile."
      },
      {
        "id": 1840,
        "contenido": "Budget Utilization",
        "correcta": false,
        "explicacion": "INCORRECTO: No es un KPI estándar en Agile."
      }
    ]
  },
  {
    "id": 584,
    "contenido": "Which function is used to round a number to the nearest integer in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1841,
        "contenido": "round()",
        "correcta": true,
        "explicacion": "CORRECTO: round() redondea un número al entero más cercano."
      },
      {
        "id": 1842,
        "contenido": "ceil()",
        "correcta": false,
        "explicacion": "INCORRECTO: ceil() redondea hacia arriba, no al entero más cercano."
      },
      {
        "id": 1843,
        "contenido": "floor()",
        "correcta": false,
        "explicacion": "INCORRECTO: floor() redondea hacia abajo."
      },
      {
        "id": 1844,
        "contenido": "truncate()",
        "correcta": false,
        "explicacion": "INCORRECTO: truncate() elimina decimales sin redondear."
      }
    ]
  },
  {
    "id": 585,
    "contenido": "Select 3 that apply. Which three are benefits of using Appian records?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1845,
        "contenido": "Centralized access to related data",
        "correcta": true,
        "explicacion": "CORRECTO: Los records permiten ver y manejar datos relacionados desde un punto central."
      },
      {
        "id": 1846,
        "contenido": "Pre-built UI components for record actions",
        "correcta": true,
        "explicacion": "CORRECTO: Los records incluyen acciones integradas como editar o crear."
      },
      {
        "id": 1847,
        "contenido": "Automatic data encryption",
        "correcta": false,
        "explicacion": "INCORRECTO: Los records no cifran datos automáticamente."
      },
      {
        "id": 1848,
        "contenido": "Consistent business rules enforcement",
        "correcta": true,
        "explicacion": "CORRECTO: Permiten aplicar reglas de negocio consistentes en toda la información."
      }
    ]
  },
  {
    "id": 586,
    "contenido": "What is the primary purpose of a Scrum board?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1849,
        "contenido": "To visualize work in progress and track task status",
        "correcta": true,
        "explicacion": "CORRECTO: Permite que el equipo vea tareas pendientes, en progreso y completadas."
      },
      {
        "id": 1850,
        "contenido": "To assign salaries to team members",
        "correcta": false,
        "explicacion": "INCORRECTO: No tiene relación con remuneraciones."
      },
      {
        "id": 1851,
        "contenido": "To define the project scope",
        "correcta": false,
        "explicacion": "INCORRECTO: No se utiliza para definir alcance."
      },
      {
        "id": 1852,
        "contenido": "To store archived documents",
        "correcta": false,
        "explicacion": "INCORRECTO: No es su función principal."
      }
    ]
  },
  {
    "id": 587,
    "contenido": "Select 2 that apply. Which two are valid ways to handle null values in Appian expressions?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1853,
        "contenido": "Using if() to provide default values",
        "correcta": true,
        "explicacion": "CORRECTO: if() permite definir un valor cuando se encuentra null."
      },
      {
        "id": 1854,
        "contenido": "Using isnull() to check for null",
        "correcta": true,
        "explicacion": "CORRECTO: isnull() permite detectar valores nulos antes de procesarlos."
      },
      {
        "id": 1855,
        "contenido": "Directly assigning null to a!textField() without checks",
        "correcta": false,
        "explicacion": "INCORRECTO: Puede generar errores si no se maneja correctamente."
      },
      {
        "id": 1856,
        "contenido": "Using append() to ignore nulls",
        "correcta": false,
        "explicacion": "INCORRECTO: append() no maneja automáticamente valores nulos."
      }
    ]
  },
  {
    "id": 588,
    "contenido": "Which function is used to format dates in Appian expressions?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1857,
        "contenido": "todatetime()",
        "correcta": true,
        "explicacion": "CORRECTO: todatetime() se utiliza para convertir o formatear fechas."
      },
      {
        "id": 1858,
        "contenido": "formatdate()",
        "correcta": false,
        "explicacion": "INCORRECTO: formatdate() no es una función nativa de Appian."
      },
      {
        "id": 1859,
        "contenido": "datetimeformat()",
        "correcta": false,
        "explicacion": "INCORRECTO: datetimeformat() no existe en Appian."
      },
      {
        "id": 1860,
        "contenido": "dateconvert()",
        "correcta": false,
        "explicacion": "INCORRECTO: dateconvert() no es válido en Appian."
      }
    ]
  },
  {
    "id": 589,
    "contenido": "Select 3 that apply. Which three are key characteristics of Agile teams?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1861,
        "contenido": "Self-organizing",
        "correcta": true,
        "explicacion": "CORRECTO: Los equipos Agile gestionan su propio trabajo."
      },
      {
        "id": 1862,
        "contenido": "Cross-functional",
        "correcta": true,
        "explicacion": "CORRECTO: Los equipos tienen todas las habilidades necesarias para completar tareas."
      },
      {
        "id": 1863,
        "contenido": "Hierarchical decision-making",
        "correcta": false,
        "explicacion": "INCORRECTO: Agile promueve decisiones colaborativas, no jerárquicas."
      },
      {
        "id": 1864,
        "contenido": "Continuous improvement",
        "correcta": true,
        "explicacion": "CORRECTO: Agile fomenta la mejora continua en procesos y productos."
      }
    ]
  },

//==========================================================
  {
    "id": 590,
    "contenido": "Which Appian function is used to merge two lists into a single list?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1865,
        "contenido": "append()",
        "correcta": true,
        "explicacion": "CORRECTO: append() combina listas en una sola lista."
      },
      {
        "id": 1866,
        "contenido": "merge()",
        "correcta": false,
        "explicacion": "INCORRECTO: merge() no es una función válida en Appian."
      },
      {
        "id": 1867,
        "contenido": "combine()",
        "correcta": false,
        "explicacion": "INCORRECTO: combine() no existe en Appian."
      },
      {
        "id": 1868,
        "contenido": "concat()",
        "correcta": false,
        "explicacion": "INCORRECTO: concat() se usa para texto, no listas."
      }
    ]
  },
  {
    "id": 591,
    "contenido": "Select 2 that apply. Which two are valid ways to restrict access to a process model in Appian?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1869,
        "contenido": "Set user/group permissions in the process model security settings",
        "correcta": true,
        "explicacion": "CORRECTO: Se pueden configurar permisos para usuarios o grupos específicos."
      },
      {
        "id": 1870,
        "contenido": "Use a!securityGroup() in the interface",
        "correcta": true,
        "explicacion": "CORRECTO: Permite restringir visibilidad en la interfaz de la aplicación."
      },
      {
        "id": 1871,
        "contenido": "Modify the database ACL",
        "correcta": false,
        "explicacion": "INCORRECTO: La seguridad de Appian no depende de la base de datos directamente."
      },
      {
        "id": 1872,
        "contenido": "Hide the model in the Appian Designer by renaming it",
        "correcta": false,
        "explicacion": "INCORRECTO: Renombrar no restringe el acceso a usuarios."
      }
    ]
  },
  {
    "id": 592,
    "contenido": "What is the purpose of a!textField() in an Appian interface?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1873,
        "contenido": "To allow users to input or edit text",
        "correcta": true,
        "explicacion": "CORRECTO: a!textField() permite la entrada o edición de texto por parte del usuario."
      },
      {
        "id": 1874,
        "contenido": "To store text permanently in the database",
        "correcta": false,
        "explicacion": "INCORRECTO: No almacena datos automáticamente, solo captura input."
      },
      {
        "id": 1875,
        "contenido": "To display static labels",
        "correcta": false,
        "explicacion": "INCORRECTO: Para mostrar texto estático se usa a!textLabel()."
      },
      {
        "id": 1876,
        "contenido": "To enforce text encryption",
        "correcta": false,
        "explicacion": "INCORRECTO: a!textField() no cifra texto."
      }
    ]
  },
  {
    "id": 593,
    "contenido": "Select 3 that apply. Which three are principles of the Agile Manifesto?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1877,
        "contenido": "Customer collaboration over contract negotiation",
        "correcta": true,
        "explicacion": "CORRECTO: Prioriza la colaboración con el cliente sobre la negociación de contratos."
      },
      {
        "id": 1878,
        "contenido": "Working software over comprehensive documentation",
        "correcta": true,
        "explicacion": "CORRECTO: Se valora entregar software funcional sobre documentar en exceso."
      },
      {
        "id": 1879,
        "contenido": "Process and tools over individuals and interactions",
        "correcta": false,
        "explicacion": "INCORRECTO: Los individuos e interacciones se valoran más que los procesos y herramientas."
      },
      {
        "id": 1880,
        "contenido": "Responding to change over following a plan",
        "correcta": true,
        "explicacion": "CORRECTO: La adaptabilidad es más importante que seguir estrictamente un plan."
      }
    ]
  },
  {
    "id": 594,
    "contenido": "Which Appian function converts a text into a date?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1881,
        "contenido": "todate()",
        "correcta": true,
        "explicacion": "CORRECTO: todatetime() o todate() se usan para convertir texto a fecha."
      },
      {
        "id": 1882,
        "contenido": "texttodate()",
        "correcta": false,
        "explicacion": "INCORRECTO: texttodate() no existe en Appian."
      },
      {
        "id": 1883,
        "contenido": "formatdate()",
        "correcta": false,
        "explicacion": "INCORRECTO: formatdate() no convierte, solo formatea fechas."
      },
      {
        "id": 1884,
        "contenido": "convertDate()",
        "correcta": false,
        "explicacion": "INCORRECTO: convertDate() no es función nativa."
      }
    ]
  },
  {
    "id": 595,
    "contenido": "Select 2 that apply. Which two are common Agile ceremonies?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1885,
        "contenido": "Sprint Planning",
        "correcta": true,
        "explicacion": "CORRECTO: Reunión para planificar el trabajo del sprint."
      },
      {
        "id": 1886,
        "contenido": "Daily Stand-up",
        "correcta": true,
        "explicacion": "CORRECTO: Reunión diaria para sincronizar al equipo y resolver impedimentos."
      },
      {
        "id": 1887,
        "contenido": "Code Review",
        "correcta": false,
        "explicacion": "INCORRECTO: No es una ceremonia Agile, aunque sí práctica de desarrollo."
      },
      {
        "id": 1888,
        "contenido": "Budget Review",
        "correcta": false,
        "explicacion": "INCORRECTO: No es ceremonia Agile."
      }
    ]
  },
  {
    "id": 596,
    "contenido": "Which function is used to remove duplicates from a list in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1889,
        "contenido": "distinct()",
        "correcta": true,
        "explicacion": "CORRECTO: distinct() devuelve una lista sin duplicados."
      },
      {
        "id": 1890,
        "contenido": "unique()",
        "correcta": false,
        "explicacion": "INCORRECTO: unique() no existe en Appian."
      },
      {
        "id": 1891,
        "contenido": "removeDuplicates()",
        "correcta": false,
        "explicacion": "INCORRECTO: removeDuplicates() no es válido en Appian."
      },
      {
        "id": 1892,
        "contenido": "filter()",
        "correcta": false,
        "explicacion": "INCORRECTO: filter() no elimina duplicados automáticamente."
      }
    ]
  },
  {
    "id": 597,
    "contenido": "Select 3 that apply. Which three are benefits of using process models in Appian?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1893,
        "contenido": "Automate repetitive tasks",
        "correcta": true,
        "explicacion": "CORRECTO: Los process models permiten automatizar procesos."
      },
      {
        "id": 1894,
        "contenido": "Enforce business rules",
        "correcta": true,
        "explicacion": "CORRECTO: Se pueden aplicar reglas de negocio consistentes."
      },
      {
        "id": 1895,
        "contenido": "Guarantee user adoption",
        "correcta": false,
        "explicacion": "INCORRECTO: No garantiza que los usuarios adopten la aplicación."
      },
      {
        "id": 1896,
        "contenido": "Integrate with external systems",
        "correcta": true,
        "explicacion": "CORRECTO: Permite la integración con sistemas externos mediante conectores o APIs."
      }
    ]
  },
  {
    "id": 598,
    "contenido": "Which Appian function is used to remove null values from a list?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1897,
        "contenido": "rejectnulls()",
        "correcta": true,
        "explicacion": "CORRECTO: rejectnulls() filtra los valores nulos de una lista."
      },
      {
        "id": 1898,
        "contenido": "filter()",
        "correcta": false,
        "explicacion": "INCORRECTO: filter() necesita una expresión, no filtra nulls automáticamente."
      },
      {
        "id": 1899,
        "contenido": "removeNull()",
        "correcta": false,
        "explicacion": "INCORRECTO: removeNull() no es válido en Appian."
      },
      {
        "id": 1900,
        "contenido": "distinct()",
        "correcta": false,
        "explicacion": "INCORRECTO: distinct() elimina duplicados, no nulls."
      }
    ]
  },
  {
    "id": 599,
    "contenido": "Select 2 that apply. Which two are ways to improve collaboration in Agile teams?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1901,
        "contenido": "Daily stand-ups",
        "correcta": true,
        "explicacion": "CORRECTO: Permiten sincronizar el equipo y detectar bloqueos rápidamente."
      },
      {
        "id": 1902,
        "contenido": "Pair programming",
        "correcta": true,
        "explicacion": "CORRECTO: Fomenta colaboración directa y mejora la calidad del código."
      },
      {
        "id": 1903,
        "contenido": "Individual code ownership",
        "correcta": false,
        "explicacion": "INCORRECTO: Puede generar silos, contrario a colaboración."
      },
      {
        "id": 1904,
        "contenido": "Monthly status reports",
        "correcta": false,
        "explicacion": "INCORRECTO: No promueven colaboración diaria ni inmediata."
      }
    ]
  },

//==========================================================
  {
    "id": 600,
    "contenido": "Which Appian function is used to check if a value exists in a list?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1905,
        "contenido": "contains()",
        "correcta": true,
        "explicacion": "CORRECTO: contains() devuelve true si el valor existe en la lista."
      },
      {
        "id": 1906,
        "contenido": "exists()",
        "correcta": false,
        "explicacion": "INCORRECTO: exists() no es una función válida en Appian."
      },
      {
        "id": 1907,
        "contenido": "inList()",
        "correcta": false,
        "explicacion": "INCORRECTO: inList() no existe en Appian."
      },
      {
        "id": 1908,
        "contenido": "find()",
        "correcta": false,
        "explicacion": "INCORRECTO: find() busca posición, no devuelve un booleano de existencia."
      }
    ]
  },
  {
    "id": 601,
    "contenido": "Select 2 that apply. Which two are valid ways to handle exceptions in Appian process models?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1909,
        "contenido": "Configure a node to catch errors and redirect the flow",
        "correcta": true,
        "explicacion": "CORRECTO: Se puede capturar el error y redirigir el flujo a un nodo específico."
      },
      {
        "id": 1910,
        "contenido": "Use a!save() with try/catch",
        "correcta": false,
        "explicacion": "INCORRECTO: a!save() no maneja excepciones directamente."
      },
      {
        "id": 1911,
        "contenido": "Use error event sub-processes",
        "correcta": true,
        "explicacion": "CORRECTO: Los sub-procesos de error permiten manejar fallos específicos."
      },
      {
        "id": 1912,
        "contenido": "Wrap all code in if() statements",
        "correcta": false,
        "explicacion": "INCORRECTO: if() no captura errores de ejecución."
      }
    ]
  },
  {
    "id": 602,
    "contenido": "Which Appian function is used to round a number to a specific number of decimal places?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1913,
        "contenido": "round()",
        "correcta": true,
        "explicacion": "CORRECTO: round() redondea números a los decimales indicados."
      },
      {
        "id": 1914,
        "contenido": "truncate()",
        "correcta": false,
        "explicacion": "INCORRECTO: truncate() corta el número sin redondear."
      },
      {
        "id": 1915,
        "contenido": "floor()",
        "correcta": false,
        "explicacion": "INCORRECTO: floor() redondea hacia abajo siempre."
      },
      {
        "id": 1916,
        "contenido": "ceil()",
        "correcta": false,
        "explicacion": "INCORRECTO: ceil() redondea hacia arriba siempre."
      }
    ]
  },
  {
    "id": 603,
    "contenido": "Select 2 that apply. Which two are valid ways to improve user experience in an Appian interface?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1917,
        "contenido": "Use dynamic links to show or hide fields based on conditions",
        "correcta": true,
        "explicacion": "CORRECTO: La interfaz se adapta según condiciones del usuario."
      },
      {
        "id": 1918,
        "contenido": "Minimize the number of fields displayed at once",
        "correcta": true,
        "explicacion": "CORRECTO: Mejora la claridad y reduce saturación visual."
      },
      {
        "id": 1919,
        "contenido": "Force all fields to be visible always",
        "correcta": false,
        "explicacion": "INCORRECTO: Mostrar todo siempre puede confundir al usuario."
      },
      {
        "id": 1920,
        "contenido": "Disable validations to speed up form submission",
        "correcta": false,
        "explicacion": "INCORRECTO: Validaciones son necesarias para evitar errores."
      }
    ]
  },
  {
    "id": 604,
    "contenido": "Which Appian function returns the first element of a list?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1921,
        "contenido": "first()",
        "correcta": true,
        "explicacion": "CORRECTO: first() devuelve el primer valor de la lista."
      },
      {
        "id": 1922,
        "contenido": "head()",
        "correcta": false,
        "explicacion": "INCORRECTO: head() no es función de Appian."
      },
      {
        "id": 1923,
        "contenido": "get(0)",
        "correcta": false,
        "explicacion": "INCORRECTO: get() requiere un índice válido y no siempre es preferido."
      },
      {
        "id": 1924,
        "contenido": "take(1)",
        "correcta": false,
        "explicacion": "INCORRECTO: take() devuelve una lista, no un elemento único."
      }
    ]
  },
  {
    "id": 605,
    "contenido": "Select 3 that apply. Which three are best practices when designing process models in Appian?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1925,
        "contenido": "Keep models simple and modular",
        "correcta": true,
        "explicacion": "CORRECTO: Modelos simples son más fáciles de mantener."
      },
      {
        "id": 1926,
        "contenido": "Use subprocesses for reusable logic",
        "correcta": true,
        "explicacion": "CORRECTO: Subprocesos promueven reutilización de lógica."
      },
      {
        "id": 1927,
        "contenido": "Document all assumptions and rules",
        "correcta": true,
        "explicacion": "CORRECTO: La documentación ayuda a comprensión y mantenimiento."
      },
      {
        "id": 1928,
        "contenido": "Avoid using connectors",
        "correcta": false,
        "explicacion": "INCORRECTO: Los conectores son necesarios para integraciones externas."
      }
    ]
  },
  {
    "id": 606,
    "contenido": "Which function is used to calculate the length of a list in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1929,
        "contenido": "length()",
        "correcta": true,
        "explicacion": "CORRECTO: length() devuelve el número de elementos de la lista."
      },
      {
        "id": 1930,
        "contenido": "size()",
        "correcta": false,
        "explicacion": "INCORRECTO: size() no es función de Appian."
      },
      {
        "id": 1931,
        "contenido": "count()",
        "correcta": false,
        "explicacion": "INCORRECTO: count() no existe en Appian."
      },
      {
        "id": 1932,
        "contenido": "total()",
        "correcta": false,
        "explicacion": "INCORRECTO: total() no es válida para listas."
      }
    ]
  },
  {
    "id": 607,
    "contenido": "Select 2 that apply. Which two are valid ways to optimize performance in Appian process models?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1933,
        "contenido": "Use query aggregation instead of looping through each record",
        "correcta": true,
        "explicacion": "CORRECTO: Las agregaciones reducen consultas repetitivas y mejoran el rendimiento."
      },
      {
        "id": 1934,
        "contenido": "Reduce the number of nested process calls",
        "correcta": true,
        "explicacion": "CORRECTO: Menos llamadas anidadas simplifican el flujo y aumentan eficiencia."
      },
      {
        "id": 1935,
        "contenido": "Add delays between nodes",
        "correcta": false,
        "explicacion": "INCORRECTO: Los retrasos no optimizan rendimiento."
      },
      {
        "id": 1936,
        "contenido": "Use multiple timers for the same task",
        "correcta": false,
        "explicacion": "INCORRECTO: No mejora rendimiento, solo complica el modelo."
      }
    ]
  },
  {
    "id": 608,
    "contenido": "Which Appian function is used to convert a number to text?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1937,
        "contenido": "tostring()",
        "correcta": true,
        "explicacion": "CORRECTO: tostring() convierte números en texto."
      },
      {
        "id": 1938,
        "contenido": "tonumber()",
        "correcta": false,
        "explicacion": "INCORRECTO: tonumber() convierte texto a número, no al revés."
      },
      {
        "id": 1939,
        "contenido": "text()",
        "correcta": false,
        "explicacion": "INCORRECTO: text() no es función válida en Appian."
      },
      {
        "id": 1940,
        "contenido": "format()",
        "correcta": false,
        "explicacion": "INCORRECTO: format() se usa para formatos, no conversión directa."
      }
    ]
  },
  {
    "id": 609,
    "contenido": "Select 3 that apply. Which three are advantages of Agile methodologies in software development?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1941,
        "contenido": "Faster feedback from stakeholders",
        "correcta": true,
        "explicacion": "CORRECTO: Iteraciones cortas permiten recibir retroalimentación rápidamente."
      },
      {
        "id": 1942,
        "contenido": "Better adaptability to change",
        "correcta": true,
        "explicacion": "CORRECTO: Agile se adapta a cambios de requisitos y prioridades."
      },
      {
        "id": 1943,
        "contenido": "Improved team collaboration",
        "correcta": true,
        "explicacion": "CORRECTO: La comunicación y colaboración constante mejora los resultados."
      },
      {
        "id": 1944,
        "contenido": "Guaranteed project success",
        "correcta": false,
        "explicacion": "INCORRECTO: Agile no garantiza éxito, solo aumenta probabilidad mediante buenas prácticas."
      }
    ]
  },


//==========================================================
  {
    "id": 610,
    "contenido": "What is a key benefit of using process models in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1945,
        "contenido": "Visual representation of workflows",
        "correcta": true,
        "explicacion": "CORRECTO: Los modelos de proceso permiten ver los flujos de trabajo de manera visual, facilitando comprensión y mantenimiento."
      },
      {
        "id": 1946,
        "contenido": "Automatic database tuning",
        "correcta": false,
        "explicacion": "INCORRECTO: No se relaciona con optimización de bases de datos."
      },
      {
        "id": 1947,
        "contenido": "Real-time server monitoring",
        "correcta": false,
        "explicacion": "INCORRECTO: Esto no es un beneficio directo de los modelos de proceso."
      },
      {
        "id": 1948,
        "contenido": "Increased browser compatibility",
        "correcta": false,
        "explicacion": "INCORRECTO: Los modelos de proceso no afectan la compatibilidad del navegador."
      }
    ]
  },
  {
    "id": 611,
    "contenido": "Which methodology emphasizes iterative development and continuous feedback?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1949,
        "contenido": "Agile",
        "correcta": true,
        "explicacion": "CORRECTO: Agile promueve entregas iterativas y retroalimentación continua durante el desarrollo."
      },
      {
        "id": 1950,
        "contenido": "Waterfall",
        "correcta": false,
        "explicacion": "INCORRECTO: Waterfall sigue un enfoque secuencial y no iterativo."
      },
      {
        "id": 1951,
        "contenido": "V-Model",
        "correcta": false,
        "explicacion": "INCORRECTO: V-Model es un modelo secuencial con pruebas planificadas, no iterativo."
      },
      {
        "id": 1952,
        "contenido": "Spiral",
        "correcta": false,
        "explicacion": "INCORRECTO: Spiral combina iteraciones con análisis de riesgos, pero Agile es el enfoque principal iterativo con feedback."
      }
    ]
  },
  {
    "id": 612,
    "contenido": "Select 2 that apply. Which two are valid ways to handle errors in Appian process models?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1953,
        "contenido": "Use exception flows",
        "correcta": true,
        "explicacion": "CORRECTO: Los flujos de excepción permiten capturar errores y actuar en consecuencia."
      },
      {
        "id": 1954,
        "contenido": "Ignore errors and retry manually",
        "correcta": false,
        "explicacion": "INCORRECTO: No es una práctica recomendada; los errores deben gestionarse automáticamente."
      },
      {
        "id": 1955,
        "contenido": "Use try/catch blocks in expressions",
        "correcta": true,
        "explicacion": "CORRECTO: Las expresiones pueden incluir manejo de errores mediante try/catch."
      },
      {
        "id": 1956,
        "contenido": "Delete the process instance",
        "correcta": false,
        "explicacion": "INCORRECTO: Borrar la instancia no maneja correctamente el error."
      }
    ]
  },
  {
    "id": 613,
    "contenido": "What is the purpose of milestones in Appian project management?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1957,
        "contenido": "Track progress and key deliverables",
        "correcta": true,
        "explicacion": "CORRECTO: Los hitos ayudan a monitorizar el progreso y los entregables importantes del proyecto."
      },
      {
        "id": 1958,
        "contenido": "Set database access permissions",
        "correcta": false,
        "explicacion": "INCORRECTO: No se relaciona con gestión de proyectos."
      },
      {
        "id": 1959,
        "contenido": "Control network traffic",
        "correcta": false,
        "explicacion": "INCORRECTO: Los hitos no controlan el tráfico de red."
      },
      {
        "id": 1960,
        "contenido": "Encrypt sensitive data",
        "correcta": false,
        "explicacion": "INCORRECTO: La encriptación no es función de los hitos de proyecto."
      }
    ]
  },
  {
    "id": 614,
    "contenido": "Which Appian function is used to query a record type with filtering?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1961,
        "contenido": "a!queryRecordType()",
        "correcta": true,
        "explicacion": "CORRECTO: a!queryRecordType() permite consultar un tipo de registro con filtros y condiciones."
      },
      {
        "id": 1962,
        "contenido": "a!recordFilter()",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe la función a!recordFilter()."
      },
      {
        "id": 1963,
        "contenido": "query()",
        "correcta": false,
        "explicacion": "INCORRECTO: query() no es una función válida en Appian."
      },
      {
        "id": 1964,
        "contenido": "filterRecordType()",
        "correcta": false,
        "explicacion": "INCORRECTO: filterRecordType() no es válida."
      }
    ]
  },
  {
    "id": 615,
    "contenido": "Select 2 that apply. Which two are benefits of using interfaces in Appian?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1965,
        "contenido": "Reusable components across multiple applications",
        "correcta": true,
        "explicacion": "CORRECTO: Las interfaces se pueden reutilizar en diferentes aplicaciones."
      },
      {
        "id": 1966,
        "contenido": "Automatic code compilation",
        "correcta": false,
        "explicacion": "INCORRECTO: Las interfaces no compilán código automáticamente."
      },
      {
        "id": 1967,
        "contenido": "Consistent user experience",
        "correcta": true,
        "explicacion": "CORRECTO: Las interfaces proporcionan una experiencia de usuario consistente."
      },
      {
        "id": 1968,
        "contenido": "Direct manipulation of the database schema",
        "correcta": false,
        "explicacion": "INCORRECTO: Las interfaces no modifican directamente la base de datos."
      }
    ]
  },
  {
    "id": 616,
    "contenido": "Which Agile ceremony is used to plan the work for the upcoming sprint?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1969,
        "contenido": "Sprint Planning",
        "correcta": true,
        "explicacion": "CORRECTO: Sprint Planning se utiliza para planificar el trabajo de la siguiente iteración."
      },
      {
        "id": 1970,
        "contenido": "Daily Standup",
        "correcta": false,
        "explicacion": "INCORRECTO: Daily Standup se centra en seguimiento diario, no planificación."
      },
      {
        "id": 1971,
        "contenido": "Sprint Review",
        "correcta": false,
        "explicacion": "INCORRECTO: Sprint Review revisa lo entregado, no planifica."
      },
      {
        "id": 1972,
        "contenido": "Backlog Refinement",
        "correcta": false,
        "explicacion": "INCORRECTO: Refinamiento de backlog ajusta historias, no planifica toda la iteración."
      }
    ]
  },
  {
    "id": 617,
    "contenido": "What does a!save() do in an interface expression?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1973,
        "contenido": "Stores the value in a local variable or rule input",
        "correcta": true,
        "explicacion": "CORRECTO: a!save() almacena un valor en una variable local o en una entrada de regla."
      },
      {
        "id": 1974,
        "contenido": "Saves the interface as a PDF",
        "correcta": false,
        "explicacion": "INCORRECTO: No guarda la interfaz como PDF."
      },
      {
        "id": 1975,
        "contenido": "Commits a database transaction",
        "correcta": false,
        "explicacion": "INCORRECTO: No realiza transacciones de base de datos."
      },
      {
        "id": 1976,
        "contenido": "Triggers a workflow email",
        "correcta": false,
        "explicacion": "INCORRECTO: No dispara correos automáticamente."
      }
    ]
  },
  {
    "id": 618,
    "contenido": "Select 2 that apply. Which two practices improve process performance in Appian?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1977,
        "contenido": "Use parallel gateways when possible",
        "correcta": true,
        "explicacion": "CORRECTO: Las gateways paralelas permiten ejecutar tareas simultáneamente, mejorando rendimiento."
      },
      {
        "id": 1978,
        "contenido": "Avoid indexing database fields",
        "correcta": false,
        "explicacion": "INCORRECTO: Evitar índices empeora el rendimiento."
      },
      {
        "id": 1979,
        "contenido": "Minimize sub-process calls",
        "correcta": true,
        "explicacion": "CORRECTO: Reducir llamadas a subprocesos ayuda a mejorar eficiencia."
      },
      {
        "id": 1980,
        "contenido": "Use nested loops extensively",
        "correcta": false,
        "explicacion": "INCORRECTO: Los bucles anidados en exceso disminuyen el rendimiento."
      }
    ]
  },
  {
    "id": 619,
    "contenido": "Which statement about record types in Appian is correct?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1981,
        "contenido": "They allow defining data structures and actions for business entities",
        "correcta": true,
        "explicacion": "CORRECTO: Los record types permiten definir estructuras de datos y acciones asociadas a entidades de negocio."
      },
      {
        "id": 1982,
        "contenido": "They automatically generate reports in Excel",
        "correcta": false,
        "explicacion": "INCORRECTO: No generan reportes Excel automáticamente."
      },
      {
        "id": 1983,
        "contenido": "They are only used for UI layout",
        "correcta": false,
        "explicacion": "INCORRECTO: No son solo para la interfaz de usuario."
      },
      {
        "id": 1984,
        "contenido": "They replace process models entirely",
        "correcta": false,
        "explicacion": "INCORRECTO: No reemplazan modelos de proceso."
      }
    ]
  }

//==========================================================
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
