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
  },

  //INTERFACES
  {
    "id": 620,
    "contenido": "Which component is commonly used in Appian interfaces to arrange content horizontally?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1985,
        "contenido": "a!columnsLayout",
        "correcta": true,
        "explicacion": "CORRECTO: a!columnsLayout organiza componentes en columnas dentro de la interfaz."
      },
      {
        "id": 1986,
        "contenido": "a!sectionLayout",
        "correcta": false,
        "explicacion": "INCORRECTO: a!sectionLayout agrupa contenido bajo un título, pero no crea columnas."
      },
      {
        "id": 1987,
        "contenido": "a!formLayout",
        "correcta": false,
        "explicacion": "INCORRECTO: a!formLayout define la estructura del formulario completo."
      },
      {
        "id": 1988,
        "contenido": "a!sideBySideLayout",
        "correcta": false,
        "explicacion": "INCORRECTO: Se usa para colocar pequeños elementos lado a lado, pero no para estructurar layouts completos."
      }
    ]
  },
  {
    "id": 621,
    "contenido": "In an Appian interface, which function is used to store temporary values during interface evaluation?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1989,
        "contenido": "a!localVariables",
        "correcta": true,
        "explicacion": "CORRECTO: Permite definir variables locales que existen durante la evaluación de la interfaz."
      },
      {
        "id": 1990,
        "contenido": "a!save",
        "correcta": false,
        "explicacion": "INCORRECTO: a!save guarda valores durante una acción del usuario."
      },
      {
        "id": 1991,
        "contenido": "a!queryRecordType",
        "correcta": false,
        "explicacion": "INCORRECTO: Se usa para consultar datos de un record type."
      },
      {
        "id": 1992,
        "contenido": "a!startProcess",
        "correcta": false,
        "explicacion": "INCORRECTO: Se utiliza para iniciar un proceso."
      }
    ]
  },
  {
    "id": 622,
    "contenido": "Which components can be used to structure content in an Appian interface?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1993,
        "contenido": "a!columnsLayout",
        "correcta": true,
        "explicacion": "CORRECTO: Permite organizar contenido en columnas."
      },
      {
        "id": 1994,
        "contenido": "a!sectionLayout",
        "correcta": true,
        "explicacion": "CORRECTO: Permite agrupar contenido con un encabezado."
      },
      {
        "id": 1995,
        "contenido": "a!gridField",
        "correcta": false,
        "explicacion": "INCORRECTO: gridField muestra datos en tabla, no estructura layouts."
      },
      {
        "id": 1996,
        "contenido": "a!formLayout",
        "correcta": true,
        "explicacion": "CORRECTO: formLayout define la estructura principal de una interfaz tipo formulario."
      }
    ]
  },
  {
    "id": 623,
    "contenido": "Which parameter is used in input components to store the user input?",
    "multiple": true,
    "respuestas": [
      {
        "id": 1997,
        "contenido": "value",
        "correcta": true,
        "explicacion": "CORRECTO: value contiene el valor actual del componente."
      },
      {
        "id": 1998,
        "contenido": "saveInto",
        "correcta": true,
        "explicacion": "CORRECTO: saveInto define dónde se guarda el valor introducido."
      },
      {
        "id": 1999,
        "contenido": "label",
        "correcta": false,
        "explicacion": "INCORRECTO: label solo muestra texto descriptivo."
      },
      {
        "id": 2000,
        "contenido": "required",
        "correcta": false,
        "explicacion": "INCORRECTO: required solo define si el campo es obligatorio."
      }
    ]
  },
  {
    "id": 624,
    "contenido": "Which function is used to refresh a variable when another variable changes?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2001,
        "contenido": "a!refreshVariable",
        "correcta": true,
        "explicacion": "CORRECTO: Permite recalcular una variable cuando cambian ciertas dependencias."
      },
      {
        "id": 2002,
        "contenido": "a!save",
        "correcta": false,
        "explicacion": "INCORRECTO: save se usa para guardar valores."
      },
      {
        "id": 2003,
        "contenido": "a!localVariables",
        "correcta": false,
        "explicacion": "INCORRECTO: Define variables pero no controla su refresco."
      },
      {
        "id": 2004,
        "contenido": "a!queryEntity",
        "correcta": false,
        "explicacion": "INCORRECTO: Se usa para consultar bases de datos."
      }
    ]
  },
  {
    "id": 625,
    "contenido": "Which component is used to display tabular data in an Appian interface?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2005,
        "contenido": "a!gridField",
        "correcta": true,
        "explicacion": "CORRECTO: gridField muestra datos en formato tabla."
      },
      {
        "id": 2006,
        "contenido": "a!columnsLayout",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo organiza contenido."
      },
      {
        "id": 2007,
        "contenido": "a!richTextDisplayField",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo muestra texto enriquecido."
      },
      {
        "id": 2008,
        "contenido": "a!imageField",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo muestra imágenes."
      }
    ]
  },
  {
    "id": 626,
    "contenido": "Which components allow users to input data?",
    "multiple": true,
    "respuestas": [
      {
        "id": 2009,
        "contenido": "a!textField",
        "correcta": true,
        "explicacion": "CORRECTO: Permite introducir texto."
      },
      {
        "id": 2010,
        "contenido": "a!dropdownField",
        "correcta": true,
        "explicacion": "CORRECTO: Permite seleccionar una opción de una lista."
      },
      {
        "id": 2011,
        "contenido": "a!paragraphField",
        "correcta": true,
        "explicacion": "CORRECTO: Permite introducir texto largo."
      },
      {
        "id": 2012,
        "contenido": "a!richTextDisplayField",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo muestra texto, no permite entrada."
      }
    ]
  },
  {
    "id": 627,
    "contenido": "What property makes an input field mandatory?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2013,
        "contenido": "required",
        "correcta": true,
        "explicacion": "CORRECTO: required: true obliga al usuario a introducir un valor."
      },
      {
        "id": 2014,
        "contenido": "mandatory",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe este parámetro en Appian."
      },
      {
        "id": 2015,
        "contenido": "validate",
        "correcta": false,
        "explicacion": "INCORRECTO: No es una propiedad válida para este propósito."
      },
      {
        "id": 2016,
        "contenido": "saveInto",
        "correcta": false,
        "explicacion": "INCORRECTO: saveInto solo guarda el valor."
      }
    ]
  },
  {
    "id": 628,
    "contenido": "Which layout component is typically used as the root of a form interface?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2017,
        "contenido": "a!formLayout",
        "correcta": true,
        "explicacion": "CORRECTO: Es el contenedor principal de interfaces tipo formulario."
      },
      {
        "id": 2018,
        "contenido": "a!columnsLayout",
        "correcta": false,
        "explicacion": "INCORRECTO: Se usa dentro del layout."
      },
      {
        "id": 2019,
        "contenido": "a!sectionLayout",
        "correcta": false,
        "explicacion": "INCORRECTO: Agrupa contenido dentro de otros layouts."
      },
      {
        "id": 2020,
        "contenido": "a!gridField",
        "correcta": false,
        "explicacion": "INCORRECTO: Muestra datos."
      }
    ]
  },
  {
    "id": 629,
    "contenido": "Which features help improve interface performance?",
    "multiple": true,
    "respuestas": [
      {
        "id": 2021,
        "contenido": "Using a!refreshVariable",
        "correcta": true,
        "explicacion": "CORRECTO: Permite controlar cuándo recalcular datos."
      },
      {
        "id": 2022,
        "contenido": "Avoiding unnecessary queries",
        "correcta": true,
        "explicacion": "CORRECTO: Reduce procesamiento innecesario."
      },
      {
        "id": 2023,
        "contenido": "Executing queries on every evaluation",
        "correcta": false,
        "explicacion": "INCORRECTO: Puede degradar el rendimiento."
      },
      {
        "id": 2024,
        "contenido": "Using local variables efficiently",
        "correcta": true,
        "explicacion": "CORRECTO: Mejora la gestión de datos en la interfaz."
      }
    ]
  },
  {
    "id": 630,
    "contenido": "Which component displays formatted text in an interface?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2025,
        "contenido": "a!richTextDisplayField",
        "correcta": true,
        "explicacion": "CORRECTO: Permite mostrar texto con formato."
      },
      {
        "id": 2026,
        "contenido": "a!textField",
        "correcta": false,
        "explicacion": "INCORRECTO: Permite introducir texto."
      },
      {
        "id": 2027,
        "contenido": "a!paragraphField",
        "correcta": false,
        "explicacion": "INCORRECTO: Es un campo de entrada."
      },
      {
        "id": 2028,
        "contenido": "a!gridField",
        "correcta": false,
        "explicacion": "INCORRECTO: Muestra tablas."
      }
    ]
  },
  {
    "id": 631,
    "contenido": "Which parameter is used to define the label of an input component?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2029,
        "contenido": "label",
        "correcta": true,
        "explicacion": "CORRECTO: Define el texto visible para el usuario."
      },
      {
        "id": 2030,
        "contenido": "title",
        "correcta": false,
        "explicacion": "INCORRECTO: No es el parámetro estándar."
      },
      {
        "id": 2031,
        "contenido": "name",
        "correcta": false,
        "explicacion": "INCORRECTO: No define la etiqueta visible."
      },
      {
        "id": 2032,
        "contenido": "caption",
        "correcta": false,
        "explicacion": "INCORRECTO: No es un parámetro estándar."
      }
    ]
  },
  {
    "id": 632,
    "contenido": "Which component allows selecting multiple options from a list?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2033,
        "contenido": "a!checkboxField",
        "correcta": true,
        "explicacion": "CORRECTO: Permite seleccionar múltiples opciones."
      },
      {
        "id": 2034,
        "contenido": "a!dropdownField",
        "correcta": false,
        "explicacion": "INCORRECTO: Normalmente permite solo una selección."
      },
      {
        "id": 2035,
        "contenido": "a!radioButtonField",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo permite una selección."
      },
      {
        "id": 2036,
        "contenido": "a!textField",
        "correcta": false,
        "explicacion": "INCORRECTO: Es un campo de texto."
      }
    ]
  },
  {
    "id": 633,
    "contenido": "Which functions are commonly used to retrieve data in interfaces?",
    "multiple": true,
    "respuestas": [
      {
        "id": 2037,
        "contenido": "a!queryRecordType",
        "correcta": true,
        "explicacion": "CORRECTO: Consulta datos desde record types."
      },
      {
        "id": 2038,
        "contenido": "a!queryEntity",
        "correcta": true,
        "explicacion": "CORRECTO: Consulta entidades de base de datos."
      },
      {
        "id": 2039,
        "contenido": "a!save",
        "correcta": false,
        "explicacion": "INCORRECTO: Guarda valores."
      },
      {
        "id": 2040,
        "contenido": "a!startProcess",
        "correcta": false,
        "explicacion": "INCORRECTO: Inicia procesos."
      }
    ]
  },
  {
    "id": 634,
    "contenido": "Which parameter is used to define validation logic in input components?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2041,
        "contenido": "validations",
        "correcta": true,
        "explicacion": "CORRECTO: Permite mostrar mensajes de validación."
      },
      {
        "id": 2042,
        "contenido": "required",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo indica si el campo es obligatorio."
      },
      {
        "id": 2043,
        "contenido": "saveInto",
        "correcta": false,
        "explicacion": "INCORRECTO: Guarda el valor introducido."
      },
      {
        "id": 2044,
        "contenido": "labelPosition",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo controla la posición del label."
      }
    ]
  },
  {
    "id": 635,
    "contenido": "Which component is used to display images in an interface?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2045,
        "contenido": "a!imageField",
        "correcta": true,
        "explicacion": "CORRECTO: Permite mostrar imágenes en la interfaz."
      },
      {
        "id": 2046,
        "contenido": "a!documentViewerField",
        "correcta": false,
        "explicacion": "INCORRECTO: Se usa para documentos."
      },
      {
        "id": 2047,
        "contenido": "a!richTextDisplayField",
        "correcta": false,
        "explicacion": "INCORRECTO: Es para texto enriquecido."
      },
      {
        "id": 2048,
        "contenido": "a!textField",
        "correcta": false,
        "explicacion": "INCORRECTO: Es un campo de entrada."
      }
    ]
  },
  {
    "id": 636,
    "contenido": "Which features are related to interface reactivity in Appian?",
    "multiple": true,
    "respuestas": [
      {
        "id": 2049,
        "contenido": "a!refreshVariable",
        "correcta": true,
        "explicacion": "CORRECTO: Permite actualizar valores cuando cambian dependencias."
      },
      {
        "id": 2050,
        "contenido": "saveInto",
        "correcta": true,
        "explicacion": "CORRECTO: Permite actualizar variables cuando el usuario interactúa."
      },
      {
        "id": 2051,
        "contenido": "a!startProcess",
        "correcta": false,
        "explicacion": "INCORRECTO: Se usa para iniciar procesos."
      },
      {
        "id": 2052,
        "contenido": "a!queryEntity",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo consulta datos."
      }
    ]
  },
  {
    "id": 637,
    "contenido": "Which component allows users to upload documents?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2053,
        "contenido": "a!fileUploadField",
        "correcta": true,
        "explicacion": "CORRECTO: Permite subir archivos."
      },
      {
        "id": 2054,
        "contenido": "a!imageField",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo muestra imágenes."
      },
      {
        "id": 2055,
        "contenido": "a!documentViewerField",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo visualiza documentos."
      },
      {
        "id": 2056,
        "contenido": "a!richTextDisplayField",
        "correcta": false,
        "explicacion": "INCORRECTO: Muestra texto."
      }
    ]
  },
  {
    "id": 638,
    "contenido": "Which layout allows placing small elements side by side inline?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2057,
        "contenido": "a!sideBySideLayout",
        "correcta": true,
        "explicacion": "CORRECTO: Permite colocar elementos pequeños en línea."
      },
      {
        "id": 2058,
        "contenido": "a!columnsLayout",
        "correcta": false,
        "explicacion": "INCORRECTO: Se usa para estructurar columnas más grandes."
      },
      {
        "id": 2059,
        "contenido": "a!formLayout",
        "correcta": false,
        "explicacion": "INCORRECTO: Es el layout principal."
      },
      {
        "id": 2060,
        "contenido": "a!sectionLayout",
        "correcta": false,
        "explicacion": "INCORRECTO: Agrupa contenido."
      }
    ]
  },
  {
    "id": 639,
    "contenido": "Which interface elements support the parameter saveInto?",
    "multiple": true,
    "respuestas": [
      {
        "id": 2061,
        "contenido": "Input components",
        "correcta": true,
        "explicacion": "CORRECTO: Los componentes de entrada usan saveInto para guardar datos."
      },
      {
        "id": 2062,
        "contenido": "Buttons",
        "correcta": true,
        "explicacion": "CORRECTO: Los botones pueden usar saveInto para ejecutar acciones."
      },
      {
        "id": 2063,
        "contenido": "Display fields",
        "correcta": false,
        "explicacion": "INCORRECTO: Los campos de visualización no guardan valores."
      },
      {
        "id": 2064,
        "contenido": "Layouts",
        "correcta": false,
        "explicacion": "INCORRECTO: Los layouts solo organizan contenido."
      }
    ]
  },

  //PROCESS MODEL
    {
    "id": 640,
    "contenido": "Which component starts a process in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1993,
        "contenido": "Start Event",
        "correcta": true,
        "explicacion": "CORRECTO: El Start Event inicia un proceso en un modelo de proceso."
      },
      {
        "id": 1994,
        "contenido": "End Event",
        "correcta": false,
        "explicacion": "INCORRECTO: Termina un proceso, no lo inicia."
      },
      {
        "id": 1995,
        "contenido": "User Task",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo representa tareas de usuario dentro del proceso."
      },
      {
        "id": 1996,
        "contenido": "Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo controla el flujo del proceso."
      }
    ]
  },
  {
    "id": 641,
    "contenido": "Which element allows branching based on conditions?",
    "multiple": false,
    "respuestas": [
      {
        "id": 1997,
        "contenido": "Gateway",
        "correcta": true,
        "explicacion": "CORRECTO: Los gateways permiten ramificar el flujo según condiciones."
      },
      {
        "id": 1998,
        "contenido": "Start Event",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo inicia el proceso."
      },
      {
        "id": 1999,
        "contenido": "User Task",
        "correcta": false,
        "explicacion": "INCORRECTO: Es una tarea de usuario, no controla el flujo."
      },
      {
        "id": 2000,
        "contenido": "End Event",
        "correcta": false,
        "explicacion": "INCORRECTO: Termina el flujo."
      }
    ]
  },
  {
    "id": 642,
    "contenido": "Which nodes can send email notifications in a process?",
    "multiple": true,
    "respuestas": [
      {
        "id": 2001,
        "contenido": "Send Message",
        "correcta": true,
        "explicacion": "CORRECTO: El nodo Send Message permite enviar notificaciones."
      },
      {
        "id": 2002,
        "contenido": "User Task",
        "correcta": true,
        "explicacion": "CORRECTO: Con configuraciones de notificación puede enviar emails."
      },
      {
        "id": 2003,
        "contenido": "Start Event",
        "correcta": false,
        "explicacion": "INCORRECTO: No envía mensajes por sí mismo."
      },
      {
        "id": 2004,
        "contenido": "Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: No envía notificaciones."
      }
    ]
  },
  {
    "id": 643,
    "contenido": "Which expression function is commonly used in process models?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2005,
        "contenido": "a!save",
        "correcta": false,
        "explicacion": "INCORRECTO: Se usa en interfaces, no directamente en modelos de proceso."
      },
      {
        "id": 2006,
        "contenido": "a!startProcess",
        "correcta": true,
        "explicacion": "CORRECTO: Inicia otro proceso desde un modelo."
      },
      {
        "id": 2007,
        "contenido": "a!queryRecordType",
        "correcta": false,
        "explicacion": "INCORRECTO: Se usa en interfaces para consultar datos."
      },
      {
        "id": 2008,
        "contenido": "a!localVariables",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo en interfaces."
      }
    ]
  },
  {
    "id": 644,
    "contenido": "Which task type requires user interaction?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2009,
        "contenido": "User Task",
        "correcta": true,
        "explicacion": "CORRECTO: Solo las tareas de usuario requieren acción humana."
      },
      {
        "id": 2010,
        "contenido": "Service Task",
        "correcta": false,
        "explicacion": "INCORRECTO: Se ejecuta automáticamente."
      },
      {
        "id": 2011,
        "contenido": "Script Task",
        "correcta": false,
        "explicacion": "INCORRECTO: Se ejecuta automáticamente con scripts."
      },
      {
        "id": 2012,
        "contenido": "Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo controla flujo."
      }
    ]
  },
  {
    "id": 645,
    "contenido": "Which node ends a process?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2013,
        "contenido": "End Event",
        "correcta": true,
        "explicacion": "CORRECTO: Marca el final del proceso."
      },
      {
        "id": 2014,
        "contenido": "Start Event",
        "correcta": false,
        "explicacion": "INCORRECTO: Inicia el proceso."
      },
      {
        "id": 2015,
        "contenido": "User Task",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo representa una tarea de usuario."
      },
      {
        "id": 2016,
        "contenido": "Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo controla el flujo."
      }
    ]
  },
  {
    "id": 646,
    "contenido": "Which feature allows a process to pause until an external signal is received?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2017,
        "contenido": "Receive Message Event",
        "correcta": true,
        "explicacion": "CORRECTO: Permite que un proceso espere hasta recibir un mensaje externo."
      },
      {
        "id": 2018,
        "contenido": "Start Event",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo inicia el proceso."
      },
      {
        "id": 2019,
        "contenido": "End Event",
        "correcta": false,
        "explicacion": "INCORRECTO: Termina el proceso."
      },
      {
        "id": 2020,
        "contenido": "Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: Controla flujo, no espera señales."
      }
    ]
  },
  {
    "id": 647,
    "contenido": "Which process node executes automated scripts or integrations?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2021,
        "contenido": "Service Task",
        "correcta": true,
        "explicacion": "CORRECTO: Ejecuta integraciones o scripts automáticamente."
      },
      {
        "id": 2022,
        "contenido": "User Task",
        "correcta": false,
        "explicacion": "INCORRECTO: Requiere acción de usuario."
      },
      {
        "id": 2023,
        "contenido": "Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo controla flujo."
      },
      {
        "id": 2024,
        "contenido": "End Event",
        "correcta": false,
        "explicacion": "INCORRECTO: Termina el proceso."
      }
    ]
  },
  {
    "id": 648,
    "contenido": "Which property defines who can perform a User Task?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2025,
        "contenido": "Assignment",
        "correcta": true,
        "explicacion": "CORRECTO: Define los usuarios o grupos asignados."
      },
      {
        "id": 2026,
        "contenido": "Task Name",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo da un nombre a la tarea."
      },
      {
        "id": 2027,
        "contenido": "Due Date",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo establece fecha límite."
      },
      {
        "id": 2028,
        "contenido": "Description",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo texto descriptivo."
      }
    ]
  },
  {
    "id": 649,
    "contenido": "Which node allows sending a message after certain conditions?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2029,
        "contenido": "Send Message",
        "correcta": true,
        "explicacion": "CORRECTO: Envía mensajes condicionalmente."
      },
      {
        "id": 2030,
        "contenido": "User Task",
        "correcta": false,
        "explicacion": "INCORRECTO: No envía mensajes por sí solo."
      },
      {
        "id": 2031,
        "contenido": "Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: Controla flujo, no envía mensajes."
      },
      {
        "id": 2032,
        "contenido": "Start Event",
        "correcta": false,
        "explicacion": "INCORRECTO: Inicia el proceso."
      }
    ]
  },
  {
    "id": 650,
    "contenido": "Which task type runs automatically without human interaction?",
    "multiple": true,
    "respuestas": [
      {
        "id": 2033,
        "contenido": "Service Task",
        "correcta": true,
        "explicacion": "CORRECTO: Ejecuta automáticamente integraciones o scripts."
      },
      {
        "id": 2034,
        "contenido": "User Task",
        "correcta": false,
        "explicacion": "INCORRECTO: Requiere usuario."
      },
      {
        "id": 2035,
        "contenido": "Script Task",
        "correcta": true,
        "explicacion": "CORRECTO: Ejecuta scripts automáticamente."
      },
      {
        "id": 2036,
        "contenido": "Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: Controla flujo."
      }
    ]
  },
  {
    "id": 651,
    "contenido": "Which property sets the deadline for a task?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2037,
        "contenido": "Due Date",
        "correcta": true,
        "explicacion": "CORRECTO: Define la fecha límite de la tarea."
      },
      {
        "id": 2038,
        "contenido": "Assignment",
        "correcta": false,
        "explicacion": "INCORRECTO: Define quién realiza la tarea."
      },
      {
        "id": 2039,
        "contenido": "Task Name",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo es el nombre."
      },
      {
        "id": 2040,
        "contenido": "Description",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo texto explicativo."
      }
    ]
  },
  {
    "id": 652,
    "contenido": "Which element is used to connect nodes in a process?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2041,
        "contenido": "Sequence Flow",
        "correcta": true,
        "explicacion": "CORRECTO: Conecta nodos para definir el flujo del proceso."
      },
      {
        "id": 2042,
        "contenido": "Message Flow",
        "correcta": false,
        "explicacion": "INCORRECTO: Envía mensajes entre procesos."
      },
      {
        "id": 2043,
        "contenido": "Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: Controla ramificaciones, no conecta nodos en línea."
      },
      {
        "id": 2044,
        "contenido": "Start Event",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo inicia procesos."
      }
    ]
  },
  {
    "id": 653,
    "contenido": "Which node allows a process to wait for a time period?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2045,
        "contenido": "Timer Event",
        "correcta": true,
        "explicacion": "CORRECTO: Hace que el proceso espere un tiempo definido."
      },
      {
        "id": 2046,
        "contenido": "Start Event",
        "correcta": false,
        "explicacion": "INCORRECTO: Inicia procesos."
      },
      {
        "id": 2047,
        "contenido": "User Task",
        "correcta": false,
        "explicacion": "INCORRECTO: Espera interacción de usuario."
      },
      {
        "id": 2048,
        "contenido": "Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: Controla flujo."
      }
    ]
  },
  {
    "id": 654,
    "contenido": "Which function can start another process model from an expression?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2049,
        "contenido": "a!startProcess",
        "correcta": true,
        "explicacion": "CORRECTO: Permite iniciar otro proceso desde expresiones."
      },
      {
        "id": 2050,
        "contenido": "a!save",
        "correcta": false,
        "explicacion": "INCORRECTO: Guarda valores en interfaces."
      },
      {
        "id": 2051,
        "contenido": "a!queryRecordType",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo consulta datos."
      },
      {
        "id": 2052,
        "contenido": "a!localVariables",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo define variables locales."
      }
    ]
  },
  {
    "id": 655,
    "contenido": "Which event marks the end of a process flow?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2053,
        "contenido": "End Event",
        "correcta": true,
        "explicacion": "CORRECTO: Finaliza el flujo de un proceso."
      },
      {
        "id": 2054,
        "contenido": "Start Event",
        "correcta": false,
        "explicacion": "INCORRECTO: Inicia el proceso."
      },
      {
        "id": 2055,
        "contenido": "Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo controla flujo."
      },
      {
        "id": 2056,
        "contenido": "User Task",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo tarea de usuario."
      }
    ]
  },
  {
    "id": 656,
    "contenido": "Which node type allows triggering a subprocess?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2057,
        "contenido": "Call Subprocess",
        "correcta": true,
        "explicacion": "CORRECTO: Permite ejecutar un modelo de proceso secundario."
      },
      {
        "id": 2058,
        "contenido": "User Task",
        "correcta": false,
        "explicacion": "INCORRECTO: No inicia subprocessos."
      },
      {
        "id": 2059,
        "contenido": "Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo controla flujo."
      },
      {
        "id": 2060,
        "contenido": "Service Task",
        "correcta": false,
        "explicacion": "INCORRECTO: Ejecuta acciones, no inicia procesos completos."
      }
    ]
  },
  {
    "id": 657,
    "contenido": "Which node allows attaching a script to automate tasks?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2061,
        "contenido": "Script Task",
        "correcta": true,
        "explicacion": "CORRECTO: Ejecuta scripts para automatizar acciones."
      },
      {
        "id": 2062,
        "contenido": "User Task",
        "correcta": false,
        "explicacion": "INCORRECTO: Requiere interacción de usuario."
      },
      {
        "id": 2063,
        "contenido": "Service Task",
        "correcta": false,
        "explicacion": "INCORRECTO: Ejecuta integraciones, no scripts internos."
      },
      {
        "id": 2064,
        "contenido": "Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: Controla flujo."
      }
    ]
  },
  {
    "id": 658,
    "contenido": "Which property defines the assignee dynamically using an expression?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2065,
        "contenido": "Assignment",
        "correcta": true,
        "explicacion": "CORRECTO: Se puede usar expresión para asignar dinámicamente."
      },
      {
        "id": 2066,
        "contenido": "Due Date",
        "correcta": false,
        "explicacion": "INCORRECTO: Define fecha límite."
      },
      {
        "id": 2067,
        "contenido": "Task Name",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo nombre."
      },
      {
        "id": 2068,
        "contenido": "Description",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo texto."
      }
    ]
  },
  {
    "id": 659,
    "contenido": "Which nodes are used to handle errors in a process?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2069,
        "contenido": "Error Event",
        "correcta": true,
        "explicacion": "CORRECTO: Captura errores durante la ejecución."
      },
      {
        "id": 2070,
        "contenido": "Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: No maneja errores."
      },
      {
        "id": 2071,
        "contenido": "User Task",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo tarea de usuario."
      },
      {
        "id": 2072,
        "contenido": "Service Task",
        "correcta": false,
        "explicacion": "INCORRECTO: Ejecuta acciones, pero no captura errores automáticamente."
      }
    ]
  },


  //RECORDS

    {
    "id": 660,
    "contenido": "What is a Record Type in Appian?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2013,
        "contenido": "A data structure representing business entities",
        "correcta": true,
        "explicacion": "CORRECTO: Un record type define estructuras de datos para entidades de negocio."
      },
      {
        "id": 2014,
        "contenido": "A process that runs automatically",
        "correcta": false,
        "explicacion": "INCORRECTO: Esto describe un proceso, no un record type."
      },
      {
        "id": 2015,
        "contenido": "A user interface layout",
        "correcta": false,
        "explicacion": "INCORRECTO: No es un layout de interfaz."
      },
      {
        "id": 2016,
        "contenido": "A security rule",
        "correcta": false,
        "explicacion": "INCORRECTO: No gestiona seguridad por sí mismo."
      }
    ]
  },
  {
    "id": 661,
    "contenido": "Which function is used to query a Record Type?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2017,
        "contenido": "a!queryRecordType",
        "correcta": true,
        "explicacion": "CORRECTO: Se usa para consultar datos de un record type."
      },
      {
        "id": 2018,
        "contenido": "a!queryEntity",
        "correcta": false,
        "explicacion": "INCORRECTO: Se usa para entidades de base de datos, no record types directamente."
      },
      {
        "id": 2019,
        "contenido": "a!save",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo guarda valores."
      },
      {
        "id": 2020,
        "contenido": "a!startProcess",
        "correcta": false,
        "explicacion": "INCORRECTO: Inicia procesos, no consulta record types."
      }
    ]
  },
  {
    "id": 662,
    "contenido": "Which views can be created in a Record Type?",
    "multiple": true,
    "respuestas": [
      {
        "id": 2021,
        "contenido": "List View",
        "correcta": true,
        "explicacion": "CORRECTO: Muestra múltiples registros en una lista."
      },
      {
        "id": 2022,
        "contenido": "Record View",
        "correcta": true,
        "explicacion": "CORRECTO: Muestra detalles de un registro individual."
      },
      {
        "id": 2023,
        "contenido": "Form View",
        "correcta": false,
        "explicacion": "INCORRECTO: No es un tipo de vista de record type."
      },
      {
        "id": 2024,
        "contenido": "Chart View",
        "correcta": false,
        "explicacion": "INCORRECTO: No es una vista estándar de record type."
      }
    ]
  },
  {
    "id": 663,
    "contenido": "Which component allows actions on a record?",
    "multiple": true,
    "respuestas": [
      {
        "id": 2025,
        "contenido": "Action",
        "correcta": true,
        "explicacion": "CORRECTO: Define acciones que se pueden ejecutar sobre un registro."
      },
      {
        "id": 2026,
        "contenido": "Record Action",
        "correcta": true,
        "explicacion": "CORRECTO: Específicamente asociado a records."
      },
      {
        "id": 2027,
        "contenido": "User Task",
        "correcta": false,
        "explicacion": "INCORRECTO: No es un record action."
      },
      {
        "id": 2028,
        "contenido": "Process Model",
        "correcta": false,
        "explicacion": "INCORRECTO: No define acciones directas sobre records."
      }
    ]
  },
  {
    "id": 664,
    "contenido": "Which expression function returns the details of a single record?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2029,
        "contenido": "a!recordData",
        "correcta": true,
        "explicacion": "CORRECTO: Devuelve los datos de un registro específico."
      },
      {
        "id": 2030,
        "contenido": "a!queryRecordType",
        "correcta": false,
        "explicacion": "INCORRECTO: Retorna múltiples registros o listas, no un solo registro."
      },
      {
        "id": 2031,
        "contenido": "a!save",
        "correcta": false,
        "explicacion": "INCORRECTO: Guarda valores, no consulta registros."
      },
      {
        "id": 2032,
        "contenido": "a!startProcess",
        "correcta": false,
        "explicacion": "INCORRECTO: Inicia procesos."
      }
    ]
  },
  {
    "id": 665,
    "contenido": "Which property defines the source of data for a Record Type?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2033,
        "contenido": "Data Store Entity",
        "correcta": true,
        "explicacion": "CORRECTO: Define la entidad de base de datos usada como fuente de datos."
      },
      {
        "id": 2034,
        "contenido": "Record Action",
        "correcta": false,
        "explicacion": "INCORRECTO: Define acciones, no fuente de datos."
      },
      {
        "id": 2035,
        "contenido": "List View",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo muestra datos, no los define."
      },
      {
        "id": 2036,
        "contenido": "Security",
        "correcta": false,
        "explicacion": "INCORRECTO: No define la fuente de datos."
      }
    ]
  },
  {
    "id": 666,
    "contenido": "Which of the following can be filtered in a Record Type?",
    "multiple": true,
    "respuestas": [
      {
        "id": 2037,
        "contenido": "List View",
        "correcta": true,
        "explicacion": "CORRECTO: Permite aplicar filtros sobre la lista de registros."
      },
      {
        "id": 2038,
        "contenido": "Record View",
        "correcta": true,
        "explicacion": "CORRECTO: Se puede filtrar la vista de detalles según reglas."
      },
      {
        "id": 2039,
        "contenido": "Record Action",
        "correcta": false,
        "explicacion": "INCORRECTO: No se filtra, ejecuta acciones."
      },
      {
        "id": 2040,
        "contenido": "Start Event",
        "correcta": false,
        "explicacion": "INCORRECTO: No es parte del record type."
      }
    ]
  },
  {
    "id": 667,
    "contenido": "Which security feature can be applied to Record Types?",
    "multiple": true,
    "respuestas": [
      {
        "id": 2041,
        "contenido": "Role-based access",
        "correcta": true,
        "explicacion": "CORRECTO: Se puede restringir el acceso según roles."
      },
      {
        "id": 2042,
        "contenido": "User-based access",
        "correcta": true,
        "explicacion": "CORRECTO: También se puede asignar acceso específico a usuarios."
      },
      {
        "id": 2043,
        "contenido": "Start Process",
        "correcta": false,
        "explicacion": "INCORRECTO: Inicia procesos, no controla seguridad de records."
      },
      {
        "id": 2044,
        "contenido": "Local Variables",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo se usa en interfaces."
      }
    ]
  },
  {
    "id": 668,
    "contenido": "Which function retrieves a list of records with optional filters?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2045,
        "contenido": "a!queryRecordType",
        "correcta": true,
        "explicacion": "CORRECTO: Devuelve múltiples registros y permite filtros."
      },
      {
        "id": 2046,
        "contenido": "a!recordData",
        "correcta": false,
        "explicacion": "INCORRECTO: Devuelve solo un registro específico."
      },
      {
        "id": 2047,
        "contenido": "a!save",
        "correcta": false,
        "explicacion": "INCORRECTO: No consulta datos."
      },
      {
        "id": 2048,
        "contenido": "a!startProcess",
        "correcta": false,
        "explicacion": "INCORRECTO: Inicia procesos."
      }
    ]
  },
  {
    "id": 669,
    "contenido": "Which type of Record Type view shows a chart of the data?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2049,
        "contenido": "Chart View",
        "correcta": true,
        "explicacion": "CORRECTO: Permite visualizar datos de manera gráfica."
      },
      {
        "id": 2050,
        "contenido": "List View",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo muestra registros en tabla o lista."
      },
      {
        "id": 2051,
        "contenido": "Record View",
        "correcta": false,
        "explicacion": "INCORRECTO: Muestra detalles de un registro individual."
      },
      {
        "id": 2052,
        "contenido": "Form View",
        "correcta": false,
        "explicacion": "INCORRECTO: No es tipo de vista en record types."
      }
    ]
  },
  {
    "id": 670,
    "contenido": "Which expression is used to get the ID of a record?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2053,
        "contenido": "ri!recordId",
        "correcta": true,
        "explicacion": "CORRECTO: El parámetro ri!recordId contiene el ID del registro."
      },
      {
        "id": 2054,
        "contenido": "a!recordData",
        "correcta": false,
        "explicacion": "INCORRECTO: Devuelve los datos completos, no solo el ID."
      },
      {
        "id": 2055,
        "contenido": "a!queryRecordType",
        "correcta": false,
        "explicacion": "INCORRECTO: Retorna registros, no un ID directamente."
      },
      {
        "id": 2056,
        "contenido": "a!save",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo guarda valores."
      }
    ]
  },
  {
    "id": 671,
    "contenido": "Which type of action can be added to a Record Type?",
    "multiple": true,
    "respuestas": [
      {
        "id": 2057,
        "contenido": "Quick Action",
        "correcta": true,
        "explicacion": "CORRECTO: Acción rápida sobre un registro."
      },
      {
        "id": 2058,
        "contenido": "Open Process",
        "correcta": true,
        "explicacion": "CORRECTO: Puede iniciar un proceso relacionado al registro."
      },
      {
        "id": 2059,
        "contenido": "Query Record Type",
        "correcta": false,
        "explicacion": "INCORRECTO: No es una acción directa sobre un registro."
      },
      {
        "id": 2060,
        "contenido": "List View",
        "correcta": false,
        "explicacion": "INCORRECTO: No es acción, es vista."
      }
    ]
  },
  {
    "id": 672,
    "contenido": "Which property defines a record type's default view?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2061,
        "contenido": "Default View",
        "correcta": true,
        "explicacion": "CORRECTO: Establece qué vista se muestra por defecto al abrir un record."
      },
      {
        "id": 2062,
        "contenido": "List View",
        "correcta": false,
        "explicacion": "INCORRECTO: No define default, solo muestra lista."
      },
      {
        "id": 2063,
        "contenido": "Record Action",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo acciones sobre registros."
      },
      {
        "id": 2064,
        "contenido": "Data Source",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo define la fuente de datos."
      }
    ]
  },
  {
    "id": 673,
    "contenido": "Which feature allows combining multiple sources in a record?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2065,
        "contenido": "Record Relationships",
        "correcta": true,
        "explicacion": "CORRECTO: Permite enlazar datos de distintas entidades."
      },
      {
        "id": 2066,
        "contenido": "Record Actions",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo define acciones sobre el registro."
      },
      {
        "id": 2067,
        "contenido": "List View",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo muestra registros."
      },
      {
        "id": 2068,
        "contenido": "Record Views",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo muestra un registro."
      }
    ]
  },
  {
    "id": 674,
    "contenido": "Which type of view is used for detailed data entry?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2069,
        "contenido": "Form View",
        "correcta": true,
        "explicacion": "CORRECTO: Se usa para capturar datos detallados de un registro."
      },
      {
        "id": 2070,
        "contenido": "List View",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo muestra múltiples registros."
      },
      {
        "id": 2071,
        "contenido": "Record View",
        "correcta": false,
        "explicacion": "INCORRECTO: Muestra información, no captura nuevos datos."
      },
      {
        "id": 2072,
        "contenido": "Chart View",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo visualización gráfica."
      }
    ]
  },
  {
    "id": 675,
    "contenido": "Which function retrieves related data from another record?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2073,
        "contenido": "a!relatedRecords",
        "correcta": true,
        "explicacion": "CORRECTO: Permite obtener registros relacionados."
      },
      {
        "id": 2074,
        "contenido": "a!recordData",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo devuelve datos de un registro."
      },
      {
        "id": 2075,
        "contenido": "a!queryRecordType",
        "correcta": false,
        "explicacion": "INCORRECTO: Consulta principal, no relaciones."
      },
      {
        "id": 2076,
        "contenido": "a!save",
        "correcta": false,
        "explicacion": "INCORRECTO: No consulta datos."
      }
    ]
  },
  {
    "id": 676,
    "contenido": "Which node type can execute actions from a record?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2077,
        "contenido": "Record Action",
        "correcta": true,
        "explicacion": "CORRECTO: Permite ejecutar acciones directamente desde el record."
      },
      {
        "id": 2078,
        "contenido": "User Task",
        "correcta": false,
        "explicacion": "INCORRECTO: No ejecuta acciones desde un record."
      },
      {
        "id": 2079,
        "contenido": "Service Task",
        "correcta": false,
        "explicacion": "INCORRECTO: Automatiza procesos, no acciones de record."
      },
      {
        "id": 2080,
        "contenido": "Gateway",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo controla flujo."
      }
    ]
  },
  {
    "id": 677,
    "contenido": "Which function defines filters for a Record Type view?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2081,
        "contenido": "filters",
        "correcta": true,
        "explicacion": "CORRECTO: Define qué registros se muestran según criterios."
      },
      {
        "id": 2082,
        "contenido": "columns",
        "correcta": false,
        "explicacion": "INCORRECTO: Define columnas visibles, no filtros."
      },
      {
        "id": 2083,
        "contenido": "actions",
        "correcta": false,
        "explicacion": "INCORRECTO: Define acciones, no filtros."
      },
      {
        "id": 2084,
        "contenido": "security",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo controla acceso."
      }
    ]
  },
  {
    "id": 678,
    "contenido": "Which parameter controls the columns displayed in a list view?",
    "multiple": false,
    "respuestas": [
      {
        "id": 2085,
        "contenido": "columns",
        "correcta": true,
        "explicacion": "CORRECTO: Define qué campos se muestran en la lista de registros."
      },
      {
        "id": 2086,
        "contenido": "filters",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo define criterios de filtrado."
      },
      {
        "id": 2087,
        "contenido": "actions",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo define acciones disponibles."
      },
      {
        "id": 2088,
        "contenido": "defaultView",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo define vista inicial."
      }
    ]
  },
  {
    "id": 679,
    "contenido": "Which security configuration can restrict record access by user role?",
    "multiple": true,
    "respuestas": [
      {
        "id": 2089,
        "contenido": "Record Type Security",
        "correcta": true,
        "explicacion": "CORRECTO: Permite restringir acceso a registros según roles."
      },
      {
        "id": 2090,
        "contenido": "Start Process",
        "correcta": false,
        "explicacion": "INCORRECTO: Inicia procesos, no controla seguridad de records."
      },
      {
        "id": 2091,
        "contenido": "Local Variables",
        "correcta": false,
        "explicacion": "INCORRECTO: Solo se usan en interfaces."
      },
      {
        "id": 2092,
        "contenido": "Action Assignments",
        "correcta": true,
        "explicacion": "CORRECTO: Puede restringir qué usuarios pueden ejecutar ciertas acciones sobre el registro."
      }
    ]
  },


  // CDTs
  {
    "id": 680,
    "contenido": "What is a CDT (Complex Data Type) in Appian?",
    "multiple": false,
    "respuestas": [
      {"id": 2033, "contenido": "A custom data structure representing business entities", "correcta": true, "explicacion": "CORRECTO: CDT permite definir estructuras de datos complejas para entidades de negocio."},
      {"id": 2034, "contenido": "A process model template", "correcta": false, "explicacion": "INCORRECTO: No tiene relación con procesos."},
      {"id": 2035, "contenido": "A security rule", "correcta": false, "explicacion": "INCORRECTO: No controla seguridad."},
      {"id": 2036, "contenido": "An interface layout", "correcta": false, "explicacion": "INCORRECTO: No define layouts."}
    ]
  },
  {
    "id": 681,
    "contenido": "Where are CDTs typically defined?",
    "multiple": false,
    "respuestas": [
      {"id": 2037, "contenido": "Data Types", "correcta": true, "explicacion": "CORRECTO: Se definen dentro de la sección Data Types de Appian."},
      {"id": 2038, "contenido": "Record Types", "correcta": false, "explicacion": "INCORRECTO: Los record types usan CDTs, pero no los definen."},
      {"id": 2039, "contenido": "Process Models", "correcta": false, "explicacion": "INCORRECTO: No se definen CDTs en procesos."},
      {"id": 2040, "contenido": "Interfaces", "correcta": false, "explicacion": "INCORRECTO: Las interfaces usan CDTs, pero no los definen."}
    ]
  },
  {
    "id": 682,
    "contenido": "Which function is used to create a CDT instance?",
    "multiple": false,
    "respuestas": [
      {"id": 2041, "contenido": "type!MyCDT()", "correcta": true, "explicacion": "CORRECTO: Se utiliza type!NombreCDT() para crear una instancia de CDT."},
      {"id": 2042, "contenido": "a!localVariables", "correcta": false, "explicacion": "INCORRECTO: Solo define variables locales, no CDT directamente."},
      {"id": 2043, "contenido": "a!queryRecordType", "correcta": false, "explicacion": "INCORRECTO: Consulta datos de record types."},
      {"id": 2044, "contenido": "a!startProcess", "correcta": false, "explicacion": "INCORRECTO: Inicia procesos."}
    ]
  },
  {
    "id": 683,
    "contenido": "Which of the following can be fields in a CDT?",
    "multiple": true,
    "respuestas": [
      {"id": 2045, "contenido": "Text", "correcta": true, "explicacion": "CORRECTO: Campos de tipo texto se pueden definir en un CDT."},
      {"id": 2046, "contenido": "Integer", "correcta": true, "explicacion": "CORRECTO: Campos numéricos también se pueden definir."},
      {"id": 2047, "contenido": "Record Type", "correcta": false, "explicacion": "INCORRECTO: No se usa un record type como campo directamente."},
      {"id": 2048, "contenido": "Boolean", "correcta": true, "explicacion": "CORRECTO: Campos lógicos son válidos en un CDT."}
    ]
  },
  {
    "id": 684,
    "contenido": "Which property defines the relationship between CDTs?",
    "multiple": false,
    "respuestas": [
      {"id": 2049, "contenido": "Parent-Child Relationship", "correcta": true, "explicacion": "CORRECTO: Permite anidar CDTs unos dentro de otros."},
      {"id": 2050, "contenido": "Assignment", "correcta": false, "explicacion": "INCORRECTO: Es para tareas de usuario."},
      {"id": 2051, "contenido": "Due Date", "correcta": false, "explicacion": "INCORRECTO: Solo en tareas."},
      {"id": 2052, "contenido": "List View", "correcta": false, "explicacion": "INCORRECTO: Solo muestra registros, no define relaciones."}
    ]
  },
  {
    "id": 685,
    "contenido": "Which feature ensures a CDT field cannot be null?",
    "multiple": false,
    "respuestas": [
      {"id": 2053, "contenido": "Required", "correcta": true, "explicacion": "CORRECTO: Required:true obliga a que el campo tenga valor."},
      {"id": 2054, "contenido": "Unique", "correcta": false, "explicacion": "INCORRECTO: Solo garantiza unicidad, no obligatoriedad."},
      {"id": 2055, "contenido": "Default Value", "correcta": false, "explicacion": "INCORRECTO: Solo asigna valor por defecto."},
      {"id": 2056, "contenido": "SaveInto", "correcta": false, "explicacion": "INCORRECTO: Solo guarda valores."}
    ]
  },
  {
    "id": 686,
    "contenido": "Which type of CDT can store multiple records?",
    "multiple": false,
    "respuestas": [
      {"id": 2057, "contenido": "List of CDT", "correcta": true, "explicacion": "CORRECTO: Un campo puede ser una lista de instancias de CDT."},
      {"id": 2058, "contenido": "Single CDT", "correcta": false, "explicacion": "INCORRECTO: Solo almacena un registro."},
      {"id": 2059, "contenido": "Integer", "correcta": false, "explicacion": "INCORRECTO: No almacena múltiples registros."},
      {"id": 2060, "contenido": "Boolean", "correcta": false, "explicacion": "INCORRECTO: No almacena múltiples registros."}
    ]
  },
  {
    "id": 687,
    "contenido": "Which CDT feature allows inheritance from another CDT?",
    "multiple": false,
    "respuestas": [
      {"id": 2061, "contenido": "Extends", "correcta": true, "explicacion": "CORRECTO: Un CDT puede extender otro para heredar campos."},
      {"id": 2062, "contenido": "Required", "correcta": false, "explicacion": "INCORRECTO: Obligatoriedad de campos, no herencia."},
      {"id": 2063, "contenido": "Default Value", "correcta": false, "explicacion": "INCORRECTO: Solo asigna valor por defecto."},
      {"id": 2064, "contenido": "SaveInto", "correcta": false, "explicacion": "INCORRECTO: Solo guarda valores."}
    ]
  },
  {
    "id": 688,
    "contenido": "Which expression function maps CDT data into an interface?",
    "multiple": false,
    "respuestas": [
      {"id": 2065, "contenido": "a!localVariables", "correcta": true, "explicacion": "CORRECTO: Permite almacenar instancias de CDT en interfaces."},
      {"id": 2066, "contenido": "a!startProcess", "correcta": false, "explicacion": "INCORRECTO: Solo inicia procesos."},
      {"id": 2067, "contenido": "a!queryRecordType", "correcta": false, "explicacion": "INCORRECTO: Consulta registros, no crea instancias en interfaz."},
      {"id": 2068, "contenido": "a!save", "correcta": false, "explicacion": "INCORRECTO: Solo guarda valores."}
    ]
  },
  {
    "id": 689,
    "contenido": "Which data type is NOT valid in a CDT field?",
    "multiple": false,
    "respuestas": [
      {"id": 2069, "contenido": "Color", "correcta": true, "explicacion": "CORRECTO: No existe tipo 'Color' en CDTs."},
      {"id": 2070, "contenido": "Text", "correcta": false, "explicacion": "INCORRECTO: Es válido."},
      {"id": 2071, "contenido": "Integer", "correcta": false, "explicacion": "INCORRECTO: Es válido."},
      {"id": 2072, "contenido": "Boolean", "correcta": false, "explicacion": "INCORRECTO: Es válido."}
    ]
  },
  {
    "id": 690,
    "contenido": "Which property allows defining default values for CDT fields?",
    "multiple": false,
    "respuestas": [
      {"id": 2073, "contenido": "Default Value", "correcta": true, "explicacion": "CORRECTO: Se puede asignar un valor inicial a un campo."},
      {"id": 2074, "contenido": "Required", "correcta": false, "explicacion": "INCORRECTO: Solo obliga a que el campo tenga valor."},
      {"id": 2075, "contenido": "Unique", "correcta": false, "explicacion": "INCORRECTO: Solo garantiza unicidad."},
      {"id": 2076, "contenido": "Assignment", "correcta": false, "explicacion": "INCORRECTO: Solo para tareas de usuario."}
    ]
  },
  {
    "id": 691,
    "contenido": "Which function converts CDT to JSON for integrations?",
    "multiple": false,
    "respuestas": [
      {"id": 2077, "contenido": "a!toJson", "correcta": true, "explicacion": "CORRECTO: Convierte instancias de CDT a JSON."},
      {"id": 2078, "contenido": "a!fromJson", "correcta": false, "explicacion": "INCORRECTO: Convierte JSON a CDT."},
      {"id": 2079, "contenido": "type!MyCDT()", "correcta": false, "explicacion": "INCORRECTO: Crea instancias de CDT, no las convierte."},
      {"id": 2080, "contenido": "a!save", "correcta": false, "explicacion": "INCORRECTO: Solo guarda valores."}
    ]
  },
  {
    "id": 692,
    "contenido": "Which field type allows referencing another CDT?",
    "multiple": false,
    "respuestas": [
      {"id": 2081, "contenido": "Data Type", "correcta": true, "explicacion": "CORRECTO: Se puede definir un campo que sea de otro CDT."},
      {"id": 2082, "contenido": "Integer", "correcta": false, "explicacion": "INCORRECTO: Campo numérico, no referencia CDT."},
      {"id": 2083, "contenido": "Text", "correcta": false, "explicacion": "INCORRECTO: Campo texto, no referencia CDT."},
      {"id": 2084, "contenido": "Boolean", "correcta": false, "explicacion": "INCORRECTO: Campo lógico, no referencia CDT."}
    ]
  },
  {
    "id": 693,
    "contenido": "Which CDT property ensures field values are unique?",
    "multiple": false,
    "respuestas": [
      {"id": 2085, "contenido": "Unique", "correcta": true, "explicacion": "CORRECTO: Unique:true garantiza que los valores no se repitan."},
      {"id": 2086, "contenido": "Required", "correcta": false, "explicacion": "INCORRECTO: Solo hace obligatorio un valor."},
      {"id": 2087, "contenido": "Default Value", "correcta": false, "explicacion": "INCORRECTO: Solo asigna un valor inicial."},
      {"id": 2088, "contenido": "Assignment", "correcta": false, "explicacion": "INCORRECTO: Solo para tareas de usuario."}
    ]
  },
  {
    "id": 694,
    "contenido": "Which type of CDT field stores a single date value?",
    "multiple": true,
    "respuestas": [
      {"id": 2089, "contenido": "Date", "correcta": true, "explicacion": "CORRECTO: Campo de tipo Date almacena un valor de fecha."},
      {"id": 2090, "contenido": "DateTime", "correcta": true, "explicacion": "CORRECTO: También almacena fecha y hora."},
      {"id": 2091, "contenido": "Integer", "correcta": false, "explicacion": "INCORRECTO: Solo números enteros."},
      {"id": 2092, "contenido": "Text", "correcta": false, "explicacion": "INCORRECTO: Solo texto."}
    ]
  },
  {
    "id": 695,
    "contenido": "Which property defines a list field in a CDT?",
    "multiple": false,
    "respuestas": [
      {"id": 2093, "contenido": "Multiple", "correcta": true, "explicacion": "CORRECTO: Indica que el campo almacena múltiples valores."},
      {"id": 2094, "contenido": "Required", "correcta": false, "explicacion": "INCORRECTO: Solo obliga a tener valor."},
      {"id": 2095, "contenido": "Unique", "correcta": false, "explicacion": "INCORRECTO: Solo garantiza unicidad."},
      {"id": 2096, "contenido": "Default Value", "correcta": false, "explicacion": "INCORRECTO: Solo valor inicial."}
    ]
  },
  {
    "id": 696,
    "contenido": "Which CDT feature is useful for integrations with external systems?",
    "multiple": true,
    "respuestas": [
      {"id": 2097, "contenido": "ToJSON conversion", "correcta": true, "explicacion": "CORRECTO: Permite enviar datos a APIs externas en formato JSON."},
      {"id": 2098, "contenido": "FromJSON", "correcta": true, "explicacion": "CORRECTO: Permite recibir datos JSON y mapearlos a CDT."},
      {"id": 2099, "contenido": "Local Variables", "correcta": false, "explicacion": "INCORRECTO: Solo en interfaces."},
      {"id": 2100, "contenido": "SaveInto", "correcta": false, "explicacion": "INCORRECTO: Solo guarda valores locales."}
    ]
  },
  {
    "id": 697,
    "contenido": "Which property defines a fixed set of values for a CDT field?",
    "multiple": false,
    "respuestas": [
      {"id": 2101, "contenido": "Constraint", "correcta": true, "explicacion": "CORRECTO: Limita los valores posibles a un conjunto definido."},
      {"id": 2102, "contenido": "Required", "correcta": false, "explicacion": "INCORRECTO: Solo obliga a que exista valor."},
      {"id": 2103, "contenido": "Default Value", "correcta": false, "explicacion": "INCORRECTO: Solo valor inicial."},
      {"id": 2104, "contenido": "Unique", "correcta": false, "explicacion": "INCORRECTO: No restringe valores, solo garantiza no repetición."}
    ]
  },
  {
    "id": 698,
    "contenido": "Which field type stores decimal numbers in a CDT?",
    "multiple": false,
    "respuestas": [
      {"id": 2105, "contenido": "Decimal", "correcta": true, "explicacion": "CORRECTO: Se usa para valores decimales."},
      {"id": 2106, "contenido": "Integer", "correcta": false, "explicacion": "INCORRECTO: Solo números enteros."},
      {"id": 2107, "contenido": "Text", "correcta": false, "explicacion": "INCORRECTO: Solo texto."},
      {"id": 2108, "contenido": "Boolean", "correcta": false, "explicacion": "INCORRECTO: Solo true/false."}
    ]
  },
  {
    "id": 699,
    "contenido": "Which feature allows a CDT to evolve without breaking existing interfaces?",
    "multiple": true,
    "respuestas": [
      {"id": 2109, "contenido": "Optional Fields", "correcta": true, "explicacion": "CORRECTO: Hacer campos opcionales permite mantener compatibilidad."},
      {"id": 2110, "contenido": "Required Fields", "correcta": false, "explicacion": "INCORRECTO: Cambiarlos puede romper interfaces."},
      {"id": 2111, "contenido": "Default Values", "correcta": true, "explicacion": "CORRECTO: Asignar valores por defecto mantiene compatibilidad."},
      {"id": 2112, "contenido": "Unique", "correcta": false, "explicacion": "INCORRECTO: No afecta compatibilidad de interfaces."}
    ]
  },



  // SECURITY
  {
    "id": 700,
    "contenido": "Which type of security in Appian restricts access based on user role?",
    "multiple": false,
    "respuestas": [
      {"id": 2113, "contenido": "Role-based security", "correcta": true, "explicacion": "CORRECTO: Permite limitar el acceso según los roles asignados a los usuarios."},
      {"id": 2114, "contenido": "User-based security", "correcta": false, "explicacion": "INCORRECTO: Esto es más específico, pero no aplica a roles generales."},
      {"id": 2115, "contenido": "Local variable security", "correcta": false, "explicacion": "INCORRECTO: No controla acceso global, solo variables locales."},
      {"id": 2116, "contenido": "Process-based security", "correcta": false, "explicacion": "INCORRECTO: Se aplica a procesos, no a roles de acceso."}
    ]
  },
  {
    "id": 701,
    "contenido": "Which security setting controls who can view or edit a Record Type?",
    "multiple": false,
    "respuestas": [
      {"id": 2117, "contenido": "Record Type Security", "correcta": true, "explicacion": "CORRECTO: Permite definir quién puede acceder y qué acciones realizar sobre un record type."},
      {"id": 2118, "contenido": "Interface Security", "correcta": false, "explicacion": "INCORRECTO: Solo controla el acceso a interfaces, no a record types."},
      {"id": 2119, "contenido": "Process Model Security", "correcta": false, "explicacion": "INCORRECTO: Controla acceso a procesos, no records."},
      {"id": 2120, "contenido": "CDT Security", "correcta": false, "explicacion": "INCORRECTO: CDTs no tienen seguridad propia."}
    ]
  },
  {
    "id": 702,
    "contenido": "Which type of user can execute actions in a Record Type?",
    "multiple": false,
    "respuestas": [
      {"id": 2121, "contenido": "Users with Action Assignments", "correcta": true, "explicacion": "CORRECTO: Solo los usuarios asignados a una acción pueden ejecutarla."},
      {"id": 2122, "contenido": "All users", "correcta": false, "explicacion": "INCORRECTO: No todos los usuarios tienen permisos por defecto."},
      {"id": 2123, "contenido": "Administrators only", "correcta": false, "explicacion": "INCORRECTO: No necesariamente, depende de la asignación."},
      {"id": 2124, "contenido": "Record Creator only", "correcta": false, "explicacion": "INCORRECTO: No solo el creador puede ejecutar acciones."}
    ]
  },
  {
    "id": 703,
    "contenido": "Which function is used to check a user’s group membership?",
    "multiple": false,
    "respuestas": [
      {"id": 2125, "contenido": "a!isUserMemberOfGroup()", "correcta": true, "explicacion": "CORRECTO: Permite verificar si un usuario pertenece a un grupo determinado."},
      {"id": 2126, "contenido": "a!userRoles()", "correcta": false, "explicacion": "INCORRECTO: No existe esa función en Appian."},
      {"id": 2127, "contenido": "a!hasAccess()", "correcta": false, "explicacion": "INCORRECTO: Controla acceso a interfaces o reglas, no grupos."},
      {"id": 2128, "contenido": "a!queryUser()", "correcta": false, "explicacion": "INCORRECTO: Solo devuelve datos de usuario, no su grupo."}
    ]
  },
  {
    "id": 704,
    "contenido": "Which security type is applied to interfaces?",
    "multiple": false,
    "respuestas": [
      {"id": 2129, "contenido": "Interface Security", "correcta": true, "explicacion": "CORRECTO: Permite controlar quién puede abrir o ejecutar una interfaz."},
      {"id": 2130, "contenido": "Record Security", "correcta": false, "explicacion": "INCORRECTO: Solo aplica a record types."},
      {"id": 2131, "contenido": "Process Security", "correcta": false, "explicacion": "INCORRECTO: Solo aplica a procesos."},
      {"id": 2132, "contenido": "CDT Security", "correcta": false, "explicacion": "INCORRECTO: Los CDTs no tienen seguridad propia."}
    ]
  },
  {
    "id": 705,
    "contenido": "Which permission is required to modify a Record Type schema?",
    "multiple": false,
    "respuestas": [
      {"id": 2133, "contenido": "Designer", "correcta": true, "explicacion": "CORRECTO: Solo los usuarios con rol Designer pueden modificar la estructura de un record type."},
      {"id": 2134, "contenido": "Viewer", "correcta": false, "explicacion": "INCORRECTO: Viewer solo puede ver información, no modificarla."},
      {"id": 2135, "contenido": "Administrator", "correcta": false, "explicacion": "INCORRECTO: Puede gestionar seguridad, pero no necesariamente modificar schema de records."},
      {"id": 2136, "contenido": "Contributor", "correcta": false, "explicacion": "INCORRECTO: Contribuidor puede editar contenido de procesos, pero no el schema de record type."}
    ]
  },
  {
    "id": 706,
    "contenido": "Who can define security for an Interface in Appian?",
    "multiple": false,
    "respuestas": [
      {"id": 2137, "contenido": "Interface Designer", "correcta": true, "explicacion": "CORRECTO: Solo los diseñadores de interfaz pueden establecer reglas de acceso a la misma."},
      {"id": 2138, "contenido": "Record Type Designer", "correcta": false, "explicacion": "INCORRECTO: No controla seguridad de interfaces."},
      {"id": 2139, "contenido": "Process Modeler", "correcta": false, "explicacion": "INCORRECTO: Solo diseña procesos, no seguridad de interfaces."},
      {"id": 2140, "contenido": "End User", "correcta": false, "explicacion": "INCORRECTO: El usuario final no puede definir seguridad."}
    ]
  },
  {
    "id": 707,
    "contenido": "Which function verifies if the logged-in user can execute a specific action?",
    "multiple": false,
    "respuestas": [
      {"id": 2141, "contenido": "a!isUserAuthorized()", "correcta": true, "explicacion": "CORRECTO: Permite verificar permisos de un usuario para ejecutar acciones definidas en seguridad."},
      {"id": 2142, "contenido": "a!canExecute()", "correcta": false, "explicacion": "INCORRECTO: No existe esta función en Appian."},
      {"id": 2143, "contenido": "a!hasRole()", "correcta": false, "explicacion": "INCORRECTO: Devuelve roles, no permisos específicos."},
      {"id": 2144, "contenido": "a!validateUser()", "correcta": false, "explicacion": "INCORRECTO: No existe para validar permisos de acciones."}
    ]
  },
  {
    "id": 708,
    "contenido": "What is the purpose of 'Record Type Security'?",
    "multiple": false,
    "respuestas": [
      {"id": 2145, "contenido": "To control which users can view or modify records", "correcta": true, "explicacion": "CORRECTO: Permite asignar permisos de lectura, edición o acciones sobre registros específicos."},
      {"id": 2146, "contenido": "To manage interface visibility", "correcta": false, "explicacion": "INCORRECTO: Esto lo hace Interface Security."},
      {"id": 2147, "contenido": "To define CDT structures", "correcta": false, "explicacion": "INCORRECTO: No gestiona la estructura de datos."},
      {"id": 2148, "contenido": "To set process start permissions", "correcta": false, "explicacion": "INCORRECTO: Esto es parte de Process Security."}
    ]
  },
  {
    "id": 709,
    "contenido": "Which Appian security type allows controlling access to process models?",
    "multiple": false,
    "respuestas": [
      {"id": 2149, "contenido": "Process Security", "correcta": true, "explicacion": "CORRECTO: Permite asignar quién puede ver, modificar o ejecutar procesos."},
      {"id": 2150, "contenido": "Interface Security", "correcta": false, "explicacion": "INCORRECTO: Solo aplica a interfaces."},
      {"id": 2151, "contenido": "Record Type Security", "correcta": false, "explicacion": "INCORRECTO: Solo controla acceso a records."},
      {"id": 2152, "contenido": "CDT Security", "correcta": false, "explicacion": "INCORRECTO: Los CDTs no tienen seguridad propia."}
    ]
  },
  {
    "id": 710,
    "contenido": "Which permission allows a user to delete a record?",
    "multiple": false,
    "respuestas": [
      {"id": 2153, "contenido": "Delete", "correcta": true, "explicacion": "CORRECTO: El permiso Delete permite que un usuario elimine registros."},
      {"id": 2154, "contenido": "Edit", "correcta": false, "explicacion": "INCORRECTO: Solo permite modificar, no eliminar."},
      {"id": 2155, "contenido": "View", "correcta": false, "explicacion": "INCORRECTO: Solo permite visualizar registros."},
      {"id": 2156, "contenido": "Execute", "correcta": false, "explicacion": "INCORRECTO: Ejecutar acciones no incluye borrar registros."}
    ]
  },
  {
    "id": 711,
    "contenido": "Which security type ensures only specific users can start a process?",
    "multiple": false,
    "respuestas": [
      {"id": 2157, "contenido": "Process Security", "correcta": true, "explicacion": "CORRECTO: Define quién puede iniciar o ejecutar procesos."},
      {"id": 2158, "contenido": "Record Security", "correcta": false, "explicacion": "INCORRECTO: Controla acceso a records, no a procesos."},
      {"id": 2159, "contenido": "Interface Security", "correcta": false, "explicacion": "INCORRECTO: Solo controla interfaces."},
      {"id": 2160, "contenido": "CDT Security", "correcta": false, "explicacion": "INCORRECTO: Los CDTs no tienen seguridad."}
    ]
  },
  {
    "id": 712,
    "contenido": "Which function checks if the current user can edit a specific record?",
    "multiple": false,
    "respuestas": [
      {"id": 2161, "contenido": "a!isUserAuthorized()", "correcta": true, "explicacion": "CORRECTO: Permite verificar permisos para acciones específicas, como editar registros."},
      {"id": 2162, "contenido": "a!canEdit()", "correcta": false, "explicacion": "INCORRECTO: No existe esta función en Appian."},
      {"id": 2163, "contenido": "a!hasRole()", "correcta": false, "explicacion": "INCORRECTO: Devuelve roles pero no permisos concretos."},
      {"id": 2164, "contenido": "a!checkAccess()", "correcta": false, "explicacion": "INCORRECTO: No existe en Appian."}
    ]
  },
  {
    "id": 713,
    "contenido": "Which security type allows hiding a record type from certain users?",
    "multiple": false,
    "respuestas": [
      {"id": 2165, "contenido": "Record Type Security", "correcta": true, "explicacion": "CORRECTO: Permite controlar la visibilidad de registros a grupos o usuarios."},
      {"id": 2166, "contenido": "Interface Security", "correcta": false, "explicacion": "INCORRECTO: Solo aplica a interfaces."},
      {"id": 2167, "contenido": "Process Security", "correcta": false, "explicacion": "INCORRECTO: Solo a procesos."},
      {"id": 2168, "contenido": "CDT Security", "correcta": false, "explicacion": "INCORRECTO: Los CDTs no tienen seguridad propia."}
    ]
  },
  {
    "id": 714,
    "contenido": "Who can manage security roles in Appian?",
    "multiple": false,
    "respuestas": [
      {"id": 2169, "contenido": "Administrators", "correcta": true, "explicacion": "CORRECTO: Los administradores pueden definir roles y asignarlos a usuarios."},
      {"id": 2170, "contenido": "Designers", "correcta": false, "explicacion": "INCORRECTO: No pueden gestionar roles globales."},
      {"id": 2171, "contenido": "End Users", "correcta": false, "explicacion": "INCORRECTO: No tienen permisos para gestionar roles."},
      {"id": 2172, "contenido": "Record Creators", "correcta": false, "explicacion": "INCORRECTO: Solo crean registros, no roles."}
    ]
  },
  {
    "id": 715,
    "contenido": "Which permission type allows a user to perform all actions on a record?",
    "multiple": false,
    "respuestas": [
      {"id": 2173, "contenido": "Full Control", "correcta": true, "explicacion": "CORRECTO: Permite leer, modificar, borrar y ejecutar acciones."},
      {"id": 2174, "contenido": "Read Only", "correcta": false, "explicacion": "INCORRECTO: Solo permite visualizar."},
      {"id": 2175, "contenido": "Execute Only", "correcta": false, "explicacion": "INCORRECTO: Solo ejecutar acciones, no modificar ni borrar."},
      {"id": 2176, "contenido": "Custom", "correcta": false, "explicacion": "INCORRECTO: Depende de la configuración, no otorga todo automáticamente."}
    ]
  },
  {
    "id": 716,
    "contenido": "Which Appian feature allows temporary delegation of security permissions?",
    "multiple": false,
    "respuestas": [
      {"id": 2177, "contenido": "Delegation", "correcta": true, "explicacion": "CORRECTO: Permite que un usuario temporalmente actúe con los permisos de otro."},
      {"id": 2178, "contenido": "Assignment", "correcta": false, "explicacion": "INCORRECTO: Asigna tareas, no seguridad."},
      {"id": 2179, "contenido": "Role Override", "correcta": false, "explicacion": "INCORRECTO: No existe esa función exacta en Appian."},
      {"id": 2180, "contenido": "Temporary Access", "correcta": false, "explicacion": "INCORRECTO: No es la funcionalidad formal de Appian."}
    ]
  },
  {
    "id": 717,
    "contenido": "Which security type is applied to actions defined in Record Types?",
    "multiple": false,
    "respuestas": [
      {"id": 2181, "contenido": "Action Security", "correcta": true, "explicacion": "CORRECTO: Permite definir quién puede ejecutar acciones específicas de un record type."},
      {"id": 2182, "contenido": "Record Security", "correcta": false, "explicacion": "INCORRECTO: Controla visibilidad y acceso general, no acciones individuales."},
      {"id": 2183, "contenido": "Interface Security", "correcta": false, "explicacion": "INCORRECTO: Solo para interfaces."},
      {"id": 2184, "contenido": "Process Security", "correcta": false, "explicacion": "INCORRECTO: Solo aplica a procesos."}
    ]
  },
  {
    "id": 718,
    "contenido": "Which function checks if a user has permission to start a process?",
    "multiple": false,
    "respuestas": [
      {"id": 2185, "contenido": "a!isUserAuthorized()", "correcta": true, "explicacion": "CORRECTO: Permite verificar si el usuario tiene permisos para iniciar un proceso específico."},
      {"id": 2186, "contenido": "a!canStartProcess()", "correcta": false, "explicacion": "INCORRECTO: No existe esa función en Appian."},
      {"id": 2187, "contenido": "a!hasRole()", "correcta": false, "explicacion": "INCORRECTO: Solo devuelve roles, no permisos de inicio."},
      {"id": 2188, "contenido": "a!checkAccess()", "correcta": false, "explicacion": "INCORRECTO: No existe en Appian."}
    ]
  },
  {
    "id": 719,
    "contenido": "Who can override permissions temporarily in Appian?",
    "multiple": false,
    "respuestas": [
      {"id": 2189, "contenido": "Administrators", "correcta": true, "explicacion": "CORRECTO: Solo los administradores pueden delegar temporalmente permisos a otros usuarios."},
      {"id": 2190, "contenido": "Designers", "correcta": false, "explicacion": "INCORRECTO: No pueden delegar permisos globales."},
      {"id": 2191, "contenido": "End Users", "correcta": false, "explicacion": "INCORRECTO: No tienen esa capacidad."},
      {"id": 2192, "contenido": "Contributors", "correcta": false, "explicacion": "INCORRECTO: Solo participan en procesos, no gestionan permisos."}
    ]
  },


  // PROCESS MODEL
  {
    "id": 720,
    "contenido": "Which object in Appian defines the flow of tasks and decisions?",
    "multiple": false,
    "respuestas": [
      {"id": 2193, "contenido": "Process Model", "correcta": true, "explicacion": "CORRECTO: Los modelos de proceso definen el flujo de tareas, decisiones y eventos."},
      {"id": 2194, "contenido": "Record Type", "correcta": false, "explicacion": "INCORRECTO: Solo gestiona datos de entidades, no flujo de tareas."},
      {"id": 2195, "contenido": "Interface", "correcta": false, "explicacion": "INCORRECTO: Solo define pantallas, no flujos."},
      {"id": 2196, "contenido": "CDT", "correcta": false, "explicacion": "INCORRECTO: Define estructuras de datos, no procesos."}
    ]
  },
  {
    "id": 721,
    "contenido": "Which type of security controls who can start a process?",
    "multiple": false,
    "respuestas": [
      {"id": 2197, "contenido": "Process Security", "correcta": true, "explicacion": "CORRECTO: Define qué usuarios o grupos pueden iniciar o ejecutar un proceso."},
      {"id": 2198, "contenido": "Interface Security", "correcta": false, "explicacion": "INCORRECTO: Solo controla acceso a interfaces."},
      {"id": 2199, "contenido": "Record Security", "correcta": false, "explicacion": "INCORRECTO: Solo aplica a records."},
      {"id": 2200, "contenido": "CDT Security", "correcta": false, "explicacion": "INCORRECTO: Los CDTs no tienen seguridad propia."}
    ]
  },
  {
    "id": 722,
    "contenido": "Which object defines automated actions within a process?",
    "multiple": false,
    "respuestas": [
      {"id": 2201, "contenido": "Service Task", "correcta": true, "explicacion": "CORRECTO: Permite ejecutar acciones automáticas sin intervención de usuario."},
      {"id": 2202, "contenido": "User Task", "correcta": false, "explicacion": "INCORRECTO: Requiere interacción del usuario."},
      {"id": 2203, "contenido": "Start Event", "correcta": false, "explicacion": "INCORRECTO: Solo inicia un proceso, no realiza acciones automáticas."},
      {"id": 2204, "contenido": "Gateway", "correcta": false, "explicacion": "INCORRECTO: Solo decide flujo, no ejecuta acciones."}
    ]
  },
  {
    "id": 723,
    "contenido": "Which object in a process model requires a user to complete a task?",
    "multiple": false,
    "respuestas": [
      {"id": 2205, "contenido": "User Task", "correcta": true, "explicacion": "CORRECTO: Tarea que debe ser completada por un usuario asignado."},
      {"id": 2206, "contenido": "Service Task", "correcta": false, "explicacion": "INCORRECTO: Es automático, no requiere usuario."},
      {"id": 2207, "contenido": "Start Event", "correcta": false, "explicacion": "INCORRECTO: Solo inicia el proceso."},
      {"id": 2208, "contenido": "Gateway", "correcta": false, "explicacion": "INCORRECTO: Solo define rutas de flujo."}
    ]
  },
  {
    "id": 724,
    "contenido": "Which type of gateway routes a process based on a condition?",
    "multiple": false,
    "respuestas": [
      {"id": 2209, "contenido": "Exclusive Gateway", "correcta": true, "explicacion": "CORRECTO: Solo una ruta se toma según la condición evaluada."},
      {"id": 2210, "contenido": "Parallel Gateway", "correcta": false, "explicacion": "INCORRECTO: Ejecuta múltiples rutas simultáneamente, no condicionalmente."},
      {"id": 2211, "contenido": "Inclusive Gateway", "correcta": false, "explicacion": "INCORRECTO: Puede tomar múltiples rutas, no solo una."},
      {"id": 2212, "contenido": "Start Event", "correcta": false, "explicacion": "INCORRECTO: Solo inicia procesos, no enruta."}
    ]
  },
  {
    "id": 725,
    "contenido": "Which feature ensures a process is only executed by authorized users?",
    "multiple": false,
    "respuestas": [
      {"id": 2213, "contenido": "Process Security", "correcta": true, "explicacion": "CORRECTO: Permite definir qué usuarios pueden iniciar o ejecutar un proceso."},
      {"id": 2214, "contenido": "Interface Security", "correcta": false, "explicacion": "INCORRECTO: Solo protege la interfaz, no el flujo del proceso."},
      {"id": 2215, "contenido": "Record Security", "correcta": false, "explicacion": "INCORRECTO: Solo protege registros."},
      {"id": 2216, "contenido": "CDT Security", "correcta": false, "explicacion": "INCORRECTO: Los CDTs no tienen seguridad."}
    ]
  },
  {
    "id": 726,
    "contenido": "Which type of start event triggers a process based on external input?",
    "multiple": false,
    "respuestas": [
      {"id": 2217, "contenido": "Message Start Event", "correcta": true, "explicacion": "CORRECTO: Inicia un proceso cuando recibe un mensaje o input externo."},
      {"id": 2218, "contenido": "Timer Start Event", "correcta": false, "explicacion": "INCORRECTO: Inicia basado en tiempo, no input externo."},
      {"id": 2219, "contenido": "User Start Event", "correcta": false, "explicacion": "INCORRECTO: Solo inicia un usuario manualmente."},
      {"id": 2220, "contenido": "Conditional Start Event", "correcta": false, "explicacion": "INCORRECTO: No existe en Appian como tipo de evento inicial."}
    ]
  },
  {
    "id": 727,
    "contenido": "Which task type allows integration with external systems?",
    "multiple": false,
    "respuestas": [
      {"id": 2221, "contenido": "Service Task", "correcta": true, "explicacion": "CORRECTO: Permite llamar servicios externos como APIs o web services."},
      {"id": 2222, "contenido": "User Task", "correcta": false, "explicacion": "INCORRECTO: Solo requiere acción de usuario."},
      {"id": 2223, "contenido": "Gateway", "correcta": false, "explicacion": "INCORRECTO: Solo enruta flujo."},
      {"id": 2224, "contenido": "Start Event", "correcta": false, "explicacion": "INCORRECTO: Solo inicia procesos."}
    ]
  },
  {
    "id": 728,
    "contenido": "Which property defines who can be assigned to a User Task?",
    "multiple": false,
    "respuestas": [
      {"id": 2225, "contenido": "Task Assignment", "correcta": true, "explicacion": "CORRECTO: Permite asignar usuarios o grupos responsables de completar la tarea."},
      {"id": 2226, "contenido": "Process Security", "correcta": false, "explicacion": "INCORRECTO: Controla inicio y ejecución de procesos, no tareas específicas."},
      {"id": 2227, "contenido": "Interface Security", "correcta": false, "explicacion": "INCORRECTO: Protege interfaces, no tareas."},
      {"id": 2228, "contenido": "Record Security", "correcta": false, "explicacion": "INCORRECTO: Solo aplica a registros."}
    ]
  },
  {
    "id": 729,
    "contenido": "Which feature allows automatic notification when a task is assigned?",
    "multiple": false,
    "respuestas": [
      {"id": 2229, "contenido": "Task Notification", "correcta": true, "explicacion": "CORRECTO: Configura alertas automáticas cuando se asigna una tarea."},
      {"id": 2230, "contenido": "Process Security", "correcta": false, "explicacion": "INCORRECTO: Solo controla permisos, no notificaciones."},
      {"id": 2231, "contenido": "Interface Rule", "correcta": false, "explicacion": "INCORRECTO: Solo controla comportamiento de interfaz."},
      {"id": 2232, "contenido": "CDT Constraint", "correcta": false, "explicacion": "INCORRECTO: Solo aplica a datos, no tareas."}
    ]
  },
  {
    "id": 730,
    "contenido": "Which gateway allows multiple paths to be executed simultaneously?",
    "multiple": false,
    "respuestas": [
      {"id": 2233, "contenido": "Parallel Gateway", "correcta": true, "explicacion": "CORRECTO: Permite que varias rutas se ejecuten al mismo tiempo."},
      {"id": 2234, "contenido": "Exclusive Gateway", "correcta": false, "explicacion": "INCORRECTO: Solo toma una ruta según la condición."},
      {"id": 2235, "contenido": "Inclusive Gateway", "correcta": false, "explicacion": "INCORRECTO: Puede ejecutar múltiples rutas, pero depende de condiciones, no simultáneamente siempre."},
      {"id": 2236, "contenido": "Start Event", "correcta": false, "explicacion": "INCORRECTO: Solo inicia procesos, no enruta múltiples flujos."}
    ]
  },
  {
    "id": 731,
    "contenido": "Which object defines a conditional split in a process?",
    "multiple": false,
    "respuestas": [
      {"id": 2237, "contenido": "Gateway", "correcta": true, "explicacion": "CORRECTO: Las gateways permiten enrutar el flujo según condiciones."},
      {"id": 2238, "contenido": "User Task", "correcta": false, "explicacion": "INCORRECTO: Solo requiere acción de usuario."},
      {"id": 2239, "contenido": "Service Task", "correcta": false, "explicacion": "INCORRECTO: Solo ejecuta acciones automáticas."},
      {"id": 2240, "contenido": "End Event", "correcta": false, "explicacion": "INCORRECTO: Solo termina el proceso."}
    ]
  },
  {
    "id": 732,
    "contenido": "Which type of task can call an integration or web service?",
    "multiple": false,
    "respuestas": [
      {"id": 2241, "contenido": "Service Task", "correcta": true, "explicacion": "CORRECTO: Permite interactuar con sistemas externos automáticamente."},
      {"id": 2242, "contenido": "User Task", "correcta": false, "explicacion": "INCORRECTO: Solo ejecutada por un usuario."},
      {"id": 2243, "contenido": "Gateway", "correcta": false, "explicacion": "INCORRECTO: Solo define flujo."},
      {"id": 2244, "contenido": "Start Event", "correcta": false, "explicacion": "INCORRECTO: Solo inicia procesos."}
    ]
  },
  {
    "id": 733,
    "contenido": "Which property defines who receives a task assignment?",
    "multiple": false,
    "respuestas": [
      {"id": 2245, "contenido": "Task Assignment", "correcta": true, "explicacion": "CORRECTO: Determina los usuarios o grupos asignados a la tarea."},
      {"id": 2246, "contenido": "Process Security", "correcta": false, "explicacion": "INCORRECTO: Solo controla inicio y ejecución de procesos."},
      {"id": 2247, "contenido": "Interface Security", "correcta": false, "explicacion": "INCORRECTO: Solo protege interfaces."},
      {"id": 2248, "contenido": "Record Security", "correcta": false, "explicacion": "INCORRECTO: Solo aplica a records."}
    ]
  },
  {
    "id": 734,
    "contenido": "Which event signals the completion of a process?",
    "multiple": false,
    "respuestas": [
      {"id": 2249, "contenido": "End Event", "correcta": true, "explicacion": "CORRECTO: Marca el final de un proceso."},
      {"id": 2250, "contenido": "Start Event", "correcta": false, "explicacion": "INCORRECTO: Solo inicia procesos."},
      {"id": 2251, "contenido": "Gateway", "correcta": false, "explicacion": "INCORRECTO: Solo enruta flujo."},
      {"id": 2252, "contenido": "User Task", "correcta": false, "explicacion": "INCORRECTO: Solo requiere acción de usuario."}
    ]
  },
  {
    "id": 735,
    "contenido": "Which property defines a timer to trigger process events?",
    "multiple": false,
    "respuestas": [
      {"id": 2253, "contenido": "Timer", "correcta": true, "explicacion": "CORRECTO: Permite iniciar o ejecutar acciones basadas en tiempo."},
      {"id": 2254, "contenido": "Gateway", "correcta": false, "explicacion": "INCORRECTO: Solo enruta flujo."},
      {"id": 2255, "contenido": "User Task", "correcta": false, "explicacion": "INCORRECTO: Solo requiere acción de usuario."},
      {"id": 2256, "contenido": "Service Task", "correcta": false, "explicacion": "INCORRECTO: Ejecuta acciones automáticas, no dispara según tiempo."}
    ]
  },
  {
    "id": 736,
    "contenido": "Which object can generate multiple tasks simultaneously?",
    "multiple": false,
    "respuestas": [
      {"id": 2257, "contenido": "Parallel Gateway", "correcta": true, "explicacion": "CORRECTO: Permite generar múltiples rutas y tareas en paralelo."},
      {"id": 2258, "contenido": "Exclusive Gateway", "correcta": false, "explicacion": "INCORRECTO: Solo toma una ruta."},
      {"id": 2259, "contenido": "User Task", "correcta": false, "explicacion": "INCORRECTO: Solo una tarea por asignación."},
      {"id": 2260, "contenido": "End Event", "correcta": false, "explicacion": "INCORRECTO: Termina el proceso, no genera tareas."}
    ]
  },
  {
    "id": 737,
    "contenido": "Which type of gateway can route to multiple paths based on conditions?",
    "multiple": false,
    "respuestas": [
      {"id": 2261, "contenido": "Inclusive Gateway", "correcta": true, "explicacion": "CORRECTO: Puede tomar múltiples rutas según las condiciones evaluadas."},
      {"id": 2262, "contenido": "Exclusive Gateway", "correcta": false, "explicacion": "INCORRECTO: Solo permite una ruta por condición."},
      {"id": 2263, "contenido": "Parallel Gateway", "correcta": false, "explicacion": "INCORRECTO: Ejecuta todas las rutas simultáneamente sin condicionales."},
      {"id": 2264, "contenido": "User Task", "correcta": false, "explicacion": "INCORRECTO: No enruta flujos."}
    ]
  },
  {
    "id": 738,
    "contenido": "Which task type requires a user to approve or complete it?",
    "multiple": false,
    "respuestas": [
      {"id": 2265, "contenido": "User Task", "correcta": true, "explicacion": "CORRECTO: Requiere intervención humana para completar la tarea."},
      {"id": 2266, "contenido": "Service Task", "correcta": false, "explicacion": "INCORRECTO: Es automático, no requiere usuario."},
      {"id": 2267, "contenido": "Gateway", "correcta": false, "explicacion": "INCORRECTO: Solo define flujo."},
      {"id": 2268, "contenido": "Start Event", "correcta": false, "explicacion": "INCORRECTO: Solo inicia procesos."}
    ]
  },
  {
    "id": 739,
    "contenido": "Which object in a process ensures tasks are assigned according to rules?",
    "multiple": false,
    "respuestas": [
      {"id": 2269, "contenido": "Task Assignment Rules", "correcta": true, "explicacion": "CORRECTO: Permiten asignar tareas automáticamente según criterios definidos."},
      {"id": 2270, "contenido": "Process Security", "correcta": false, "explicacion": "INCORRECTO: Controla acceso al proceso, no asignación de tareas."},
      {"id": 2271, "contenido": "Gateway", "correcta": false, "explicacion": "INCORRECTO: Solo enruta flujo."},
      {"id": 2272, "contenido": "Service Task", "correcta": false, "explicacion": "INCORRECTO: Ejecuta acciones automáticas, no asigna tareas según reglas."}
    ]
  },


  // REPORTS
  {
    "id": 740,
    "contenido": "Which object allows you to create a visual representation of record data?",
    "multiple": false,
    "respuestas": [
      {"id": 2273, "contenido": "Report", "correcta": true, "explicacion": "CORRECTO: Los reports permiten visualizar datos de records en gráficos o tablas."},
      {"id": 2274, "contenido": "Record Type", "correcta": false, "explicacion": "INCORRECTO: Solo define la estructura de los datos, no los muestra visualmente."},
      {"id": 2275, "contenido": "Interface", "correcta": false, "explicacion": "INCORRECTO: Una interfaz puede mostrar reportes, pero el objeto report es específico para datos."},
      {"id": 2276, "contenido": "Process Model", "correcta": false, "explicacion": "INCORRECTO: Los procesos gestionan flujos, no reportes."}
    ]
  },
  {
    "id": 741,
    "contenido": "Which component is used to filter data in a report?",
    "multiple": false,
    "respuestas": [
      {"id": 2277, "contenido": "Filter", "correcta": true, "explicacion": "CORRECTO: Permite restringir qué datos se muestran según criterios definidos."},
      {"id": 2278, "contenido": "Column", "correcta": false, "explicacion": "INCORRECTO: Solo muestra un atributo de los datos, no filtra."},
      {"id": 2279, "contenido": "Chart", "correcta": false, "explicacion": "INCORRECTO: Solo representa datos gráficamente, no filtra."},
      {"id": 2280, "contenido": "Record Type", "correcta": false, "explicacion": "INCORRECTO: Define datos, no filtra visualizaciones."}
    ]
  },
  {
    "id": 742,
    "contenido": "Which type of report displays data as rows and columns?",
    "multiple": false,
    "respuestas": [
      {"id": 2281, "contenido": "Grid Report", "correcta": true, "explicacion": "CORRECTO: Permite visualizar datos tabulados en filas y columnas."},
      {"id": 2282, "contenido": "Chart Report", "correcta": false, "explicacion": "INCORRECTO: Solo muestra gráficos, no filas y columnas."},
      {"id": 2283, "contenido": "Record Report", "correcta": false, "explicacion": "INCORRECTO: No es un tipo de reporte, solo un objeto de datos."},
      {"id": 2284, "contenido": "Interface", "correcta": false, "explicacion": "INCORRECTO: Puede mostrar un reporte, pero no es un tipo en sí."}
    ]
  },
  {
    "id": 743,
    "contenido": "Which type of report visualizes trends over time?",
    "multiple": false,
    "respuestas": [
      {"id": 2285, "contenido": "Line Chart", "correcta": true, "explicacion": "CORRECTO: Un line chart muestra la evolución de datos a lo largo del tiempo."},
      {"id": 2286, "contenido": "Pie Chart", "correcta": false, "explicacion": "INCORRECTO: Solo muestra proporciones, no tendencias temporales."},
      {"id": 2287, "contenido": "Grid Report", "correcta": false, "explicacion": "INCORRECTO: Tabula datos, no muestra tendencias gráficas."},
      {"id": 2288, "contenido": "Gauge", "correcta": false, "explicacion": "INCORRECTO: Solo indica valor puntual, no evolución temporal."}
    ]
  },
  {
    "id": 744,
    "contenido": "Which function allows you to retrieve records for a report?",
    "multiple": false,
    "respuestas": [
      {"id": 2289, "contenido": "a!queryRecordType()", "correcta": true, "explicacion": "CORRECTO: Permite consultar los datos de un record type para mostrarlos en un report."},
      {"id": 2290, "contenido": "a!getRecords()", "correcta": false, "explicacion": "INCORRECTO: No existe esa función exacta en Appian."},
      {"id": 2291, "contenido": "a!readData()", "correcta": false, "explicacion": "INCORRECTO: No es la función para reportes de records."},
      {"id": 2292, "contenido": "a!fetch()", "correcta": false, "explicacion": "INCORRECTO: No existe en Appian."}
    ]
  },
  {
    "id": 745,
    "contenido": "Which report type shows parts of a whole as slices?",
    "multiple": false,
    "respuestas": [
      {"id": 2293, "contenido": "Pie Chart", "correcta": true, "explicacion": "CORRECTO: Representa proporciones de un total como porciones de un círculo."},
      {"id": 2294, "contenido": "Line Chart", "correcta": false, "explicacion": "INCORRECTO: Muestra evolución de datos, no proporciones."},
      {"id": 2295, "contenido": "Grid Report", "correcta": false, "explicacion": "INCORRECTO: Solo muestra datos tabulados."},
      {"id": 2296, "contenido": "Gauge", "correcta": false, "explicacion": "INCORRECTO: Solo indica un valor puntual."}
    ]
  },
  {
    "id": 746,
    "contenido": "Which report element allows sorting data by a column?",
    "multiple": false,
    "respuestas": [
      {"id": 2297, "contenido": "Sortable Column", "correcta": true, "explicacion": "CORRECTO: Permite ordenar los datos de la columna ascendente o descendente."},
      {"id": 2298, "contenido": "Filter", "correcta": false, "explicacion": "INCORRECTO: Solo restringe los datos mostrados."},
      {"id": 2299, "contenido": "Chart", "correcta": false, "explicacion": "INCORRECTO: No permite ordenar datos."},
      {"id": 2300, "contenido": "CDT", "correcta": false, "explicacion": "INCORRECTO: Es solo estructura de datos, no interfaz de reportes."}
    ]
  },
  {
    "id": 747,
    "contenido": "Which property in a report controls which fields are visible?",
    "multiple": false,
    "respuestas": [
      {"id": 2301, "contenido": "Columns", "correcta": true, "explicacion": "CORRECTO: Determina qué campos de los datos se muestran en el reporte."},
      {"id": 2302, "contenido": "Filter", "correcta": false, "explicacion": "INCORRECTO: Solo restringe registros, no campos."},
      {"id": 2303, "contenido": "Sort", "correcta": false, "explicacion": "INCORRECTO: Solo ordena registros, no controla visibilidad de columnas."},
      {"id": 2304, "contenido": "Row", "correcta": false, "explicacion": "INCORRECTO: Se refiere a los registros, no a los campos visibles."}
    ]
  },
  {
    "id": 748,
    "contenido": "Which type of chart is best for comparing categories?",
    "multiple": false,
    "respuestas": [
      {"id": 2305, "contenido": "Bar Chart", "correcta": true, "explicacion": "CORRECTO: Ideal para comparar cantidades entre distintas categorías."},
      {"id": 2306, "contenido": "Line Chart", "correcta": false, "explicacion": "INCORRECTO: Muestra tendencias, no comparaciones de categorías."},
      {"id": 2307, "contenido": "Pie Chart", "correcta": false, "explicacion": "INCORRECTO: Muestra proporciones de un total, no comparación directa."},
      {"id": 2308, "contenido": "Gauge", "correcta": false, "explicacion": "INCORRECTO: Indica valor puntual, no compara categorías."}
    ]
  },
  {
    "id": 749,
    "contenido": "Which function aggregates record data for reporting purposes?",
    "multiple": false,
    "respuestas": [
      {"id": 2309, "contenido": "a!queryRecordType()", "correcta": true, "explicacion": "CORRECTO: Permite consultar y agregar datos para reportes."},
      {"id": 2310, "contenido": "a!getRecords()", "correcta": false, "explicacion": "INCORRECTO: No existe esta función en Appian."},
      {"id": 2311, "contenido": "a!aggregateData()", "correcta": false, "explicacion": "INCORRECTO: No es función válida de Appian."},
      {"id": 2312, "contenido": "a!readReport()", "correcta": false, "explicacion": "INCORRECTO: No existe en Appian."}
    ]
  },
  {
    "id": 750,
    "contenido": "Which feature allows exporting report data to Excel?",
    "multiple": false,
    "respuestas": [
      {"id": 2313, "contenido": "Export", "correcta": true, "explicacion": "CORRECTO: Permite que los usuarios descarguen los datos mostrados en Excel."},
      {"id": 2314, "contenido": "Filter", "correcta": false, "explicacion": "INCORRECTO: Solo restringe datos, no exporta."},
      {"id": 2315, "contenido": "Sort", "correcta": false, "explicacion": "INCORRECTO: Solo ordena, no exporta."},
      {"id": 2316, "contenido": "Chart", "correcta": false, "explicacion": "INCORRECTO: Solo visualiza gráficamente."}
    ]
  },
  {
    "id": 751,
    "contenido": "Which report element summarizes data visually in a single value?",
    "multiple": false,
    "respuestas": [
      {"id": 2317, "contenido": "KPI / Gauge", "correcta": true, "explicacion": "CORRECTO: Muestra un valor clave de manera visual y destacada."},
      {"id": 2318, "contenido": "Grid", "correcta": false, "explicacion": "INCORRECTO: Muestra datos tabulados, no un único valor destacado."},
      {"id": 2319, "contenido": "Chart", "correcta": false, "explicacion": "INCORRECTO: Muestra datos, no un valor resumido único."},
      {"id": 2320, "contenido": "Filter", "correcta": false, "explicacion": "INCORRECTO: Solo restringe datos, no muestra resumen."}
    ]
  },
  {
    "id": 752,
    "contenido": "Which component allows users to drill down into report data?",
    "multiple": false,
    "respuestas": [
      {"id": 2321, "contenido": "Drill Down / Detail Link", "correcta": true, "explicacion": "CORRECTO: Permite acceder a más detalles de un dato desde un reporte."},
      {"id": 2322, "contenido": "Filter", "correcta": false, "explicacion": "INCORRECTO: Solo restringe datos, no permite navegación detallada."},
      {"id": 2323, "contenido": "Sort", "correcta": false, "explicacion": "INCORRECTO: Solo ordena datos."},
      {"id": 2324, "contenido": "CDT", "correcta": false, "explicacion": "INCORRECTO: Solo define estructura de datos."}
    ]
  },
  {
    "id": 753,
    "contenido": "Which report type best shows proportions between categories?",
    "multiple": false,
    "respuestas": [
      {"id": 2325, "contenido": "Pie Chart", "correcta": true, "explicacion": "CORRECTO: Muestra cada categoría como porcentaje del total."},
      {"id": 2326, "contenido": "Bar Chart", "correcta": false, "explicacion": "INCORRECTO: Compara cantidades, no proporciones de un total."},
      {"id": 2327, "contenido": "Line Chart", "correcta": false, "explicacion": "INCORRECTO: Muestra tendencias temporales."},
      {"id": 2328, "contenido": "Grid", "correcta": false, "explicacion": "INCORRECTO: Muestra datos tabulados, no proporciones gráficas."}
    ]
  },
  {
    "id": 754,
    "contenido": "Which property allows grouping data in a report?",
    "multiple": false,
    "respuestas": [
      {"id": 2329, "contenido": "Group By", "correcta": true, "explicacion": "CORRECTO: Agrupa registros por un campo para análisis resumido."},
      {"id": 2330, "contenido": "Sort", "correcta": false, "explicacion": "INCORRECTO: Solo ordena, no agrupa."},
      {"id": 2331, "contenido": "Filter", "correcta": false, "explicacion": "INCORRECTO: Solo restringe registros."},
      {"id": 2332, "contenido": "CDT", "correcta": false, "explicacion": "INCORRECTO: Solo estructura datos, no agrupa."}
    ]
  },
  {
    "id": 755,
    "contenido": "Which feature allows users to refresh report data in real-time?",
    "multiple": false,
    "respuestas": [
      {"id": 2333, "contenido": "Refresh / Auto-refresh", "correcta": true, "explicacion": "CORRECTO: Permite que el reporte se actualice con los datos más recientes."},
      {"id": 2334, "contenido": "Filter", "correcta": false, "explicacion": "INCORRECTO: Solo restringe datos, no actualiza automáticamente."},
      {"id": 2335, "contenido": "Sort", "correcta": false, "explicacion": "INCORRECTO: Solo ordena datos, no actualiza."},
      {"id": 2336, "contenido": "Chart", "correcta": false, "explicacion": "INCORRECTO: Solo visualiza, no refresca automáticamente."}
    ]
  },
  {
    "id": 756,
    "contenido": "Which type of report element can visualize trends for multiple categories over time?",
    "multiple": false,
    "respuestas": [
      {"id": 2337, "contenido": "Line Chart", "correcta": true, "explicacion": "CORRECTO: Muestra series de datos para múltiples categorías a lo largo del tiempo."},
      {"id": 2338, "contenido": "Pie Chart", "correcta": false, "explicacion": "INCORRECTO: Solo muestra proporciones estáticas."},
      {"id": 2339, "contenido": "Grid", "correcta": false, "explicacion": "INCORRECTO: Solo tabula datos, no muestra tendencias gráficas."},
      {"id": 2340, "contenido": "Gauge", "correcta": false, "explicacion": "INCORRECTO: Solo un valor puntual."}
    ]
  },
  {
    "id": 757,
    "contenido": "Which function supports pagination in a report?",
    "multiple": false,
    "respuestas": [
      {"id": 2341, "contenido": "pagingInfo in a!queryRecordType()", "correcta": true, "explicacion": "CORRECTO: Permite limitar y paginar resultados en reportes de records."},
      {"id": 2342, "contenido": "a!paginate()", "correcta": false, "explicacion": "INCORRECTO: No existe esa función."},
      {"id": 2343, "contenido": "a!pageRecords()", "correcta": false, "explicacion": "INCORRECTO: No existe en Appian."},
      {"id": 2344, "contenido": "pagingData()", "correcta": false, "explicacion": "INCORRECTO: No existe en Appian."}
    ]
  },
  {
    "id": 758,
    "contenido": "Which report type is best to display the completion rate of a process?",
    "multiple": false,
    "respuestas": [
      {"id": 2345, "contenido": "Gauge / KPI", "correcta": true, "explicacion": "CORRECTO: Permite mostrar un valor resumen, como porcentaje completado de un proceso."},
      {"id": 2346, "contenido": "Grid", "correcta": false, "explicacion": "INCORRECTO: Solo tabula datos, no muestra un indicador visual resumido."},
      {"id": 2347, "contenido": "Line Chart", "correcta": false, "explicacion": "INCORRECTO: Muestra evolución temporal, no un valor puntual resumido."},
      {"id": 2348, "contenido": "Pie Chart", "correcta": false, "explicacion": "INCORRECTO: Solo muestra proporciones de un total, no porcentaje de completado."}
    ]
  },
  {
    "id": 759,
    "contenido": "Which feature allows exporting filtered data from a report?",
    "multiple": false,
    "respuestas": [
      {"id": 2349, "contenido": "Export", "correcta": true, "explicacion": "CORRECTO: Permite descargar los datos mostrados en el reporte, incluyendo filtros aplicados."},
      {"id": 2350, "contenido": "Sort", "correcta": false, "explicacion": "INCORRECTO: Solo ordena, no exporta."},
      {"id": 2351, "contenido": "Filter", "correcta": false, "explicacion": "INCORRECTO: Solo restringe, no exporta."},
      {"id": 2352, "contenido": "Chart", "correcta": false, "explicacion": "INCORRECTO: Solo visualiza datos gráficamente."}
    ]
  },


  // INTEGRATIONS
  {
    "id": 760,
    "contenido": "Which object allows Appian to connect to external systems via APIs?",
    "multiple": false,
    "respuestas": [
      {"id": 2353, "contenido": "Integration", "correcta": true, "explicacion": "CORRECTO: Las integraciones permiten conectar Appian con sistemas externos usando APIs."},
      {"id": 2354, "contenido": "Process Model", "correcta": false, "explicacion": "INCORRECTO: Los procesos controlan flujos, no conexiones externas directas."},
      {"id": 2355, "contenido": "Record Type", "correcta": false, "explicacion": "INCORRECTO: Solo maneja datos de registros internos."},
      {"id": 2356, "contenido": "Interface", "correcta": false, "explicacion": "INCORRECTO: Solo muestra datos, no conecta sistemas externos."}
    ]
  },
  {
    "id": 761,
    "contenido": "Which function is used to call an integration in Appian expressions?",
    "multiple": false,
    "respuestas": [
      {"id": 2357, "contenido": "a!integration()", "correcta": true, "explicacion": "CORRECTO: Permite invocar integraciones desde expresiones en Appian."},
      {"id": 2358, "contenido": "a!callAPI()", "correcta": false, "explicacion": "INCORRECTO: No existe esta función exacta en Appian."},
      {"id": 2359, "contenido": "a!executeIntegration()", "correcta": false, "explicacion": "INCORRECTO: No es la sintaxis válida."},
      {"id": 2360, "contenido": "a!runIntegration()", "correcta": false, "explicacion": "INCORRECTO: No existe en Appian."}
    ]
  },
  {
    "id": 762,
    "contenido": "Which object stores reusable expressions in Appian?",
    "multiple": false,
    "respuestas": [
      {"id": 2361, "contenido": "Expression Rule", "correcta": true, "explicacion": "CORRECTO: Las Expression Rules permiten almacenar funciones o cálculos reutilizables."},
      {"id": 2362, "contenido": "Process Model", "correcta": false, "explicacion": "INCORRECTO: No almacena expresiones reutilizables."},
      {"id": 2363, "contenido": "Interface", "correcta": false, "explicacion": "INCORRECTO: Solo define pantallas y visualización."},
      {"id": 2364, "contenido": "CDT", "correcta": false, "explicacion": "INCORRECTO: Solo estructura datos, no expresiones."}
    ]
  },
  {
    "id": 763,
    "contenido": "Which integration type retrieves data from external systems?",
    "multiple": false,
    "respuestas": [
      {"id": 2365, "contenido": "Read / GET", "correcta": true, "explicacion": "CORRECTO: Permite obtener datos de sistemas externos."},
      {"id": 2366, "contenido": "Write / POST", "correcta": false, "explicacion": "INCORRECTO: Envía datos, no los recupera."},
      {"id": 2367, "contenido": "Update / PUT", "correcta": false, "explicacion": "INCORRECTO: Modifica datos existentes, no los lee."},
      {"id": 2368, "contenido": "Delete / DELETE", "correcta": false, "explicacion": "INCORRECTO: Solo elimina datos, no los lee."}
    ]
  },
  {
    "id": 764,
    "contenido": "Which integration type sends data to external systems?",
    "multiple": false,
    "respuestas": [
      {"id": 2369, "contenido": "Write / POST", "correcta": true, "explicacion": "CORRECTO: Permite enviar datos a sistemas externos."},
      {"id": 2370, "contenido": "Read / GET", "correcta": false, "explicacion": "INCORRECTO: Solo obtiene datos."},
      {"id": 2371, "contenido": "Query / SELECT", "correcta": false, "explicacion": "INCORRECTO: No es un tipo de integración en Appian."},
      {"id": 2372, "contenido": "Delete / DELETE", "correcta": false, "explicacion": "INCORRECTO: Solo elimina datos."}
    ]
  },
  {
    "id": 765,
    "contenido": "Which object allows storing credentials securely for an integration?",
    "multiple": false,
    "respuestas": [
      {"id": 2373, "contenido": "Connected System", "correcta": true, "explicacion": "CORRECTO: Los Connected Systems guardan credenciales y configuraciones para integraciones externas."},
      {"id": 2374, "contenido": "Expression Rule", "correcta": false, "explicacion": "INCORRECTO: No almacena credenciales."},
      {"id": 2375, "contenido": "CDT", "correcta": false, "explicacion": "INCORRECTO: Solo estructura datos."},
      {"id": 2376, "contenido": "Interface", "correcta": false, "explicacion": "INCORRECTO: No almacena información de conexión."}
    ]
  },
  {
    "id": 766,
    "contenido": "Which function invokes a process via integration?",
    "multiple": false,
    "respuestas": [
      {"id": 2377, "contenido": "a!startProcess()", "correcta": true, "explicacion": "CORRECTO: Permite iniciar un proceso desde una integración o expresión."},
      {"id": 2378, "contenido": "a!callProcess()", "correcta": false, "explicacion": "INCORRECTO: No existe en Appian."},
      {"id": 2379, "contenido": "a!runProcess()", "correcta": false, "explicacion": "INCORRECTO: No es función válida."},
      {"id": 2380, "contenido": "a!invokeProcess()", "correcta": false, "explicacion": "INCORRECTO: No existe en Appian."}
    ]
  },
  {
    "id": 767,
    "contenido": "Which object allows mapping data between Appian and external systems?",
    "multiple": false,
    "respuestas": [
      {"id": 2381, "contenido": "Integration Mapping / Input & Output", "correcta": true, "explicacion": "CORRECTO: Permite definir cómo los datos se transfieren hacia y desde Appian."},
      {"id": 2382, "contenido": "Record Type", "correcta": false, "explicacion": "INCORRECTO: Solo define estructura de datos."},
      {"id": 2383, "contenido": "Process Model", "correcta": false, "explicacion": "INCORRECTO: Controla flujos, no mapea datos externos."},
      {"id": 2384, "contenido": "Interface", "correcta": false, "explicacion": "INCORRECTO: Solo muestra datos, no mapea integraciones."}
    ]
  },
  {
    "id": 768,
    "contenido": "Which type of integration can update data in an external system?",
    "multiple": false,
    "respuestas": [
      {"id": 2385, "contenido": "Write / PUT", "correcta": true, "explicacion": "CORRECTO: Permite modificar o actualizar datos existentes en sistemas externos."},
      {"id": 2386, "contenido": "Read / GET", "correcta": false, "explicacion": "INCORRECTO: Solo obtiene datos."},
      {"id": 2387, "contenido": "Delete / DELETE", "correcta": false, "explicacion": "INCORRECTO: Solo elimina datos, no actualiza."},
      {"id": 2388, "contenido": "Query / SELECT", "correcta": false, "explicacion": "INCORRECTO: No es tipo de integración en Appian."}
    ]
  },
  {
    "id": 769,
    "contenido": "Which object defines reusable logic for multiple processes or interfaces?",
    "multiple": false,
    "respuestas": [
      {"id": 2389, "contenido": "Expression Rule", "correcta": true, "explicacion": "CORRECTO: Permite centralizar cálculos y lógica reutilizable en varias partes de la aplicación."},
      {"id": 2390, "contenido": "Integration", "correcta": false, "explicacion": "INCORRECTO: Solo conecta con sistemas externos, no almacena lógica reutilizable general."},
      {"id": 2391, "contenido": "CDT", "correcta": false, "explicacion": "INCORRECTO: Solo define estructura de datos."},
      {"id": 2392, "contenido": "Interface", "correcta": false, "explicacion": "INCORRECTO: Solo define visualización."}
    ]
  },
  {
    "id": 770,
    "contenido": "Which function retrieves a specific record via integration?",
    "multiple": false,
    "respuestas": [
      {"id": 2393, "contenido": "a!queryRecordType()", "correcta": true, "explicacion": "CORRECTO: Permite obtener registros específicos para mostrar o procesar."},
      {"id": 2394, "contenido": "a!getRecord()", "correcta": false, "explicacion": "INCORRECTO: No existe esta función exacta."},
      {"id": 2395, "contenido": "a!readRecord()", "correcta": false, "explicacion": "INCORRECTO: No existe en Appian."},
      {"id": 2396, "contenido": "a!fetchRecord()", "correcta": false, "explicacion": "INCORRECTO: No es función válida."}
    ]
  },
  {
    "id": 771,
    "contenido": "Which type of integration deletes data in an external system?",
    "multiple": false,
    "respuestas": [
      {"id": 2397, "contenido": "Delete / DELETE", "correcta": true, "explicacion": "CORRECTO: Permite eliminar datos en sistemas externos."},
      {"id": 2398, "contenido": "Write / POST", "correcta": false, "explicacion": "INCORRECTO: Solo agrega datos, no elimina."},
      {"id": 2399, "contenido": "Update / PUT", "correcta": false, "explicacion": "INCORRECTO: Modifica datos, no los elimina."},
      {"id": 2400, "contenido": "Read / GET", "correcta": false, "explicacion": "INCORRECTO: Solo obtiene datos."}
    ]
  },
  {
    "id": 772,
    "contenido": "Which object allows defining authentication for external services?",
    "multiple": false,
    "respuestas": [
      {"id": 2401, "contenido": "Connected System", "correcta": true, "explicacion": "CORRECTO: Almacena credenciales y configura autenticación para integraciones."},
      {"id": 2402, "contenido": "Integration", "correcta": false, "explicacion": "INCORRECTO: Solo define la llamada al servicio, no la autenticación en sí."},
      {"id": 2403, "contenido": "Expression Rule", "correcta": false, "explicacion": "INCORRECTO: No gestiona autenticación externa."},
      {"id": 2404, "contenido": "Interface", "correcta": false, "explicacion": "INCORRECTO: Solo visualiza datos."}
    ]
  },
  {
    "id": 773,
    "contenido": "Which type of integration sends a single record to an external system?",
    "multiple": false,
    "respuestas": [
      {"id": 2405, "contenido": "Write / POST Single Record", "correcta": true, "explicacion": "CORRECTO: Permite enviar un solo registro al sistema externo."},
      {"id": 2406, "contenido": "Read / GET Single Record", "correcta": false, "explicacion": "INCORRECTO: Solo obtiene datos, no envía."},
      {"id": 2407, "contenido": "Update / PUT Multiple Records", "correcta": false, "explicacion": "INCORRECTO: Modifica múltiples registros, no envía uno solo."},
      {"id": 2408, "contenido": "Delete / DELETE Multiple", "correcta": false, "explicacion": "INCORRECTO: Solo elimina registros, no envía datos."}
    ]
  },
  {
    "id": 774,
    "contenido": "Which feature allows testing an integration before using it in a process?",
    "multiple": false,
    "respuestas": [
      {"id": 2409, "contenido": "Test Integration / Run Test", "correcta": true, "explicacion": "CORRECTO: Permite verificar que la integración funciona correctamente antes de usarla."},
      {"id": 2410, "contenido": "Validate Rule", "correcta": false, "explicacion": "INCORRECTO: Solo valida expresiones, no integraciones."},
      {"id": 2411, "contenido": "Run Process", "correcta": false, "explicacion": "INCORRECTO: Ejecuta procesos, no prueba integraciones."},
      {"id": 2412, "contenido": "Execute Interface", "correcta": false, "explicacion": "INCORRECTO: No prueba integraciones directamente."}
    ]
  },
  {
    "id": 775,
    "contenido": "Which object allows reusing an integration in multiple processes?",
    "multiple": false,
    "respuestas": [
      {"id": 2413, "contenido": "Integration Object", "correcta": true, "explicacion": "CORRECTO: Permite definir la integración una sola vez y reutilizarla en diferentes procesos."},
      {"id": 2414, "contenido": "Expression Rule", "correcta": false, "explicacion": "INCORRECTO: Reutiliza lógica, no llamadas externas."},
      {"id": 2415, "contenido": "Process Model", "correcta": false, "explicacion": "INCORRECTO: Solo gestiona el flujo de procesos."},
      {"id": 2416, "contenido": "Interface", "correcta": false, "explicacion": "INCORRECTO: Solo muestra datos, no integra sistemas."}
    ]
  },
  {
    "id": 776,
    "contenido": "Which property defines the endpoint URL in an integration?",
    "multiple": false,
    "respuestas": [
      {"id": 2417, "contenido": "Endpoint", "correcta": true, "explicacion": "CORRECTO: Es la URL a la que se envían o de la que se obtienen datos."},
      {"id": 2418, "contenido": "Base URL", "correcta": false, "explicacion": "INCORRECTO: No siempre define el endpoint exacto."},
      {"id": 2419, "contenido": "Target", "correcta": false, "explicacion": "INCORRECTO: No es propiedad estándar de Appian."},
      {"id": 2420, "contenido": "Source", "correcta": false, "explicacion": "INCORRECTO: Solo indica origen de datos, no endpoint."}
    ]
  },
  {
    "id": 777,
    "contenido": "Which object defines input and output parameters for an integration?",
    "multiple": false,
    "respuestas": [
      {"id": 2421, "contenido": "Integration Inputs & Outputs", "correcta": true, "explicacion": "CORRECTO: Permite mapear los datos que entran y salen de la integración."},
      {"id": 2422, "contenido": "Expression Rule Parameters", "correcta": false, "explicacion": "INCORRECTO: Solo aplica a reglas, no integraciones."},
      {"id": 2423, "contenido": "CDT Fields", "correcta": false, "explicacion": "INCORRECTO: Solo define estructura de datos, no parámetros de integración."},
      {"id": 2424, "contenido": "Interface Inputs", "correcta": false, "explicacion": "INCORRECTO: Solo para pantallas, no integraciones."}
    ]
  },
  {
    "id": 778,
    "contenido": "Which type of integration requires authentication credentials?",
    "multiple": false,
    "respuestas": [
      {"id": 2425, "contenido": "All Connected Integrations", "correcta": true, "explicacion": "CORRECTO: Todas las integraciones que acceden a sistemas externos necesitan credenciales seguras."},
      {"id": 2426, "contenido": "Public Integrations", "correcta": false, "explicacion": "INCORRECTO: Las integraciones públicas no existen como tal en Appian."},
      {"id": 2427, "contenido": "Expression Rule", "correcta": false, "explicacion": "INCORRECTO: No se conectan a sistemas externos."},
      {"id": 2428, "contenido": "Interface", "correcta": false, "explicacion": "INCORRECTO: No necesita autenticación para mostrar datos locales."}
    ]
  },
  {
    "id": 779,
    "contenido": "Which object allows scheduling an integration to run automatically?",
    "multiple": false,
    "respuestas": [
      {"id": 2429, "contenido": "Process Model + Timer Event", "correcta": true, "explicacion": "CORRECTO: Combinando un proceso y un evento temporizador, la integración puede ejecutarse automáticamente."},
      {"id": 2430, "contenido": "Expression Rule", "correcta": false, "explicacion": "INCORRECTO: No permite ejecución automática por tiempo."},
      {"id": 2431, "contenido": "Interface", "correcta": false, "explicacion": "INCORRECTO: Solo muestra datos, no programa integraciones."},
      {"id": 2432, "contenido": "Record Type", "correcta": false, "explicacion": "INCORRECTO: Solo define datos, no ejecución automática."}
    ]
  },

  // AGILE
  {
    "id": 780,
    "contenido": "Which Agile principle emphasizes delivering working software frequently?",
    "multiple": false,
    "respuestas": [
      {"id": 2433, "contenido": "Deliver working software frequently", "correcta": true, "explicacion": "CORRECTO: Una de las principales prácticas ágiles es entregar software funcional en iteraciones cortas."},
      {"id": 2434, "contenido": "Document everything upfront", "correcta": false, "explicacion": "INCORRECTO: Agile valora la documentación suficiente, no exhaustiva upfront."},
      {"id": 2435, "contenido": "Follow a strict plan", "correcta": false, "explicacion": "INCORRECTO: Agile permite adaptarse a cambios, no seguir planes rígidos."},
      {"id": 2436, "contenido": "Avoid customer feedback", "correcta": false, "explicacion": "INCORRECTO: Agile valora mucho el feedback del cliente."}
    ]
  },
  {
    "id": 781,
    "contenido": "Which role is responsible for managing the product backlog in Agile?",
    "multiple": false,
    "respuestas": [
      {"id": 2437, "contenido": "Product Owner", "correcta": true, "explicacion": "CORRECTO: El Product Owner prioriza y mantiene actualizado el backlog del producto."},
      {"id": 2438, "contenido": "Scrum Master", "correcta": false, "explicacion": "INCORRECTO: Facilita el proceso, no gestiona el backlog."},
      {"id": 2439, "contenido": "Developer", "correcta": false, "explicacion": "INCORRECTO: Los desarrolladores implementan, pero no gestionan el backlog."},
      {"id": 2440, "contenido": "Stakeholder", "correcta": false, "explicacion": "INCORRECTO: Puede dar feedback, pero no gestiona el backlog."}
    ]
  },
  {
    "id": 782,
    "contenido": "Which Agile ceremony focuses on reviewing completed work and planning next steps?",
    "multiple": false,
    "respuestas": [
      {"id": 2441, "contenido": "Sprint Review", "correcta": true, "explicacion": "CORRECTO: La Sprint Review permite mostrar el trabajo completado y ajustar el plan según feedback."},
      {"id": 2442, "contenido": "Daily Standup", "correcta": false, "explicacion": "INCORRECTO: Es para coordinación diaria, no revisión de entregables."},
      {"id": 2443, "contenido": "Sprint Retrospective", "correcta": false, "explicacion": "INCORRECTO: Se centra en mejorar procesos, no en revisar entregables."},
      {"id": 2444, "contenido": "Backlog Refinement", "correcta": false, "explicacion": "INCORRECTO: Ajusta backlog, no revisa entregables completados."}
    ]
  },
  {
    "id": 783,
    "contenido": "Which Agile role removes impediments for the team?",
    "multiple": false,
    "respuestas": [
      {"id": 2445, "contenido": "Scrum Master", "correcta": true, "explicacion": "CORRECTO: El Scrum Master facilita y elimina obstáculos que afectan al equipo."},
      {"id": 2446, "contenido": "Product Owner", "correcta": false, "explicacion": "INCORRECTO: Prioriza el backlog, no elimina impedimentos diarios."},
      {"id": 2447, "contenido": "Developer", "correcta": false, "explicacion": "INCORRECTO: Implementa, pero no facilita procesos ni quita impedimentos."},
      {"id": 2448, "contenido": "Stakeholder", "correcta": false, "explicacion": "INCORRECTO: Solo proporciona feedback o requerimientos."}
    ]
  },
  {
    "id": 784,
    "contenido": "Which Agile artifact lists all work items prioritized for development?",
    "multiple": false,
    "respuestas": [
      {"id": 2449, "contenido": "Product Backlog", "correcta": true, "explicacion": "CORRECTO: Contiene todas las historias de usuario, priorizadas por valor para el negocio."},
      {"id": 2450, "contenido": "Sprint Backlog", "correcta": false, "explicacion": "INCORRECTO: Contiene solo el trabajo seleccionado para un sprint."},
      {"id": 2451, "contenido": "Burndown Chart", "correcta": false, "explicacion": "INCORRECTO: Solo muestra progreso, no lista trabajo pendiente."},
      {"id": 2452, "contenido": "Definition of Done", "correcta": false, "explicacion": "INCORRECTO: Define criterios de completitud, no lista tareas."}
    ]
  },
  {
    "id": 785,
    "contenido": "Which Agile ceremony is used to plan tasks for the upcoming sprint?",
    "multiple": false,
    "respuestas": [
      {"id": 2453, "contenido": "Sprint Planning", "correcta": true, "explicacion": "CORRECTO: En Sprint Planning el equipo decide qué trabajo se realizará en el próximo sprint."},
      {"id": 2454, "contenido": "Daily Standup", "correcta": false, "explicacion": "INCORRECTO: Solo coordina el trabajo diario, no planifica sprint."},
      {"id": 2455, "contenido": "Sprint Review", "correcta": false, "explicacion": "INCORRECTO: Revisa trabajo ya completado, no planifica próximo sprint."},
      {"id": 2456, "contenido": "Retrospective", "correcta": false, "explicacion": "INCORRECTO: Busca mejorar procesos, no planifica tareas."}
    ]
  },
  {
    "id": 786,
    "contenido": "Which metric shows remaining work in a sprint?",
    "multiple": false,
    "respuestas": [
      {"id": 2457, "contenido": "Burndown Chart", "correcta": true, "explicacion": "CORRECTO: Visualiza cuánto trabajo queda en el sprint."},
      {"id": 2458, "contenido": "Velocity Chart", "correcta": false, "explicacion": "INCORRECTO: Muestra capacidad del equipo, no trabajo pendiente en el sprint actual."},
      {"id": 2459, "contenido": "Product Backlog", "correcta": false, "explicacion": "INCORRECTO: Contiene todas las historias del producto, no el progreso de sprint."},
      {"id": 2460, "contenido": "Definition of Done", "correcta": false, "explicacion": "INCORRECTO: Es un criterio de completitud, no métrica de progreso."}
    ]
  },
  {
    "id": 787,
    "contenido": "Which Agile principle emphasizes collaboration with customers?",
    "multiple": false,
    "respuestas": [
      {"id": 2461, "contenido": "Customer collaboration over contract negotiation", "correcta": true, "explicacion": "CORRECTO: Agile prioriza la interacción continua con clientes para asegurar valor."},
      {"id": 2462, "contenido": "Following a plan strictly", "correcta": false, "explicacion": "INCORRECTO: Agile permite adaptarse a cambios, no seguir un plan rígido."},
      {"id": 2463, "contenido": "Contract negotiation first", "correcta": false, "explicacion": "INCORRECTO: Agile valora colaboración sobre contratos estrictos."},
      {"id": 2464, "contenido": "Individual processes over teams", "correcta": false, "explicacion": "INCORRECTO: Agile prioriza equipos colaborativos."}
    ]
  },
  {
    "id": 788,
    "contenido": "Which Agile practice encourages regular reflection to improve processes?",
    "multiple": false,
    "respuestas": [
      {"id": 2465, "contenido": "Retrospective", "correcta": true, "explicacion": "CORRECTO: Permite al equipo analizar qué funcionó y qué mejorar en el proceso."},
      {"id": 2466, "contenido": "Daily Standup", "correcta": false, "explicacion": "INCORRECTO: Solo coordina tareas diarias, no reflexiona sobre procesos."},
      {"id": 2467, "contenido": "Sprint Review", "correcta": false, "explicacion": "INCORRECTO: Solo revisa entregables."},
      {"id": 2468, "contenido": "Product Backlog Refinement", "correcta": false, "explicacion": "INCORRECTO: Mejora el backlog, no la retrospectiva del proceso."}
    ]
  },
  {
    "id": 789,
    "contenido": "Which term describes small, incremental releases in Agile?",
    "multiple": false,
    "respuestas": [
      {"id": 2469, "contenido": "Iterations / Sprints", "correcta": true, "explicacion": "CORRECTO: Agile entrega software en ciclos cortos y manejables llamados sprints o iteraciones."},
      {"id": 2470, "contenido": "Milestones", "correcta": false, "explicacion": "INCORRECTO: Son hitos de proyecto, no ciclos de entrega ágil."},
      {"id": 2471, "contenido": "Waterfall Phases", "correcta": false, "explicacion": "INCORRECTO: Pertenece a metodologías tradicionales, no ágiles."},
      {"id": 2472, "contenido": "Releases only at end", "correcta": false, "explicacion": "INCORRECTO: Agile entrega continuamente, no solo al final."}
    ]
  },
  {
    "id": 790,
    "contenido": "Which Agile artifact is used to visualize team workload during a sprint?",
    "multiple": false,
    "respuestas": [
      {"id": 2473, "contenido": "Task Board / Kanban Board", "correcta": true, "explicacion": "CORRECTO: Muestra las tareas asignadas y su estado durante el sprint."},
      {"id": 2474, "contenido": "Product Backlog", "correcta": false, "explicacion": "INCORRECTO: Contiene todas las historias, no visualiza estado diario del sprint."},
      {"id": 2475, "contenido": "Burndown Chart", "correcta": false, "explicacion": "INCORRECTO: Muestra progreso, pero no detalle de cada tarea visualmente."},
      {"id": 2476, "contenido": "Definition of Done", "correcta": false, "explicacion": "INCORRECTO: Solo define criterios de completitud, no estado de tareas."}
    ]
  },
  {
    "id": 791,
    "contenido": "Which Agile practice ensures continuous integration and testing?",
    "multiple": false,
    "respuestas": [
      {"id": 2477, "contenido": "Continuous Integration / CI", "correcta": true, "explicacion": "CORRECTO: Permite integrar cambios frecuentemente y ejecutar pruebas automáticas para garantizar calidad."},
      {"id": 2478, "contenido": "Sprint Planning", "correcta": false, "explicacion": "INCORRECTO: Planifica tareas, no integra ni prueba continuamente."},
      {"id": 2479, "contenido": "Daily Standup", "correcta": false, "explicacion": "INCORRECTO: Coordina equipo, no integra cambios automáticamente."},
      {"id": 2480, "contenido": "Product Backlog Refinement", "correcta": false, "explicacion": "INCORRECTO: Mejora backlog, no integración continua."}
    ]
  },
  {
    "id": 792,
    "contenido": "Which term refers to a cross-functional team that delivers increments in Agile?",
    "multiple": false,
    "respuestas": [
      {"id": 2481, "contenido": "Scrum Team", "correcta": true, "explicacion": "CORRECTO: Equipo multidisciplinar responsable de entregar incrementos de producto."},
      {"id": 2482, "contenido": "Stakeholders", "correcta": false, "explicacion": "INCORRECTO: Solo proporcionan feedback, no entregan incrementos."},
      {"id": 2483, "contenido": "Project Manager", "correcta": false, "explicacion": "INCORRECTO: Coordina, no entrega incrementos directamente."},
      {"id": 2484, "contenido": "Product Owner", "correcta": false, "explicacion": "INCORRECTO: Gestiona backlog, no entrega incrementos."}
    ]
  },
  {
    "id": 793,
    "contenido": "Which Agile principle encourages welcoming changing requirements?",
    "multiple": false,
    "respuestas": [
      {"id": 2485, "contenido": "Responding to change over following a plan", "correcta": true, "explicacion": "CORRECTO: Agile prioriza adaptarse a cambios en lugar de seguir planes rígidos."},
      {"id": 2486, "contenido": "Following a strict project plan", "correcta": false, "explicacion": "INCORRECTO: Agile permite flexibilidad ante cambios."},
      {"id": 2487, "contenido": "Contract negotiation over collaboration", "correcta": false, "explicacion": "INCORRECTO: Agile valora la colaboración con el cliente."},
      {"id": 2488, "contenido": "Deliver everything at the end", "correcta": false, "explicacion": "INCORRECTO: Agile entrega incrementos frecuentes, no al final."}
    ]
  },
  {
    "id": 794,
    "contenido": "Which Agile metric helps estimate team capacity for future sprints?",
    "multiple": false,
    "respuestas": [
      {"id": 2489, "contenido": "Velocity", "correcta": true, "explicacion": "CORRECTO: Mide la cantidad de trabajo completado en sprints anteriores para estimar capacidad futura."},
      {"id": 2490, "contenido": "Burndown Chart", "correcta": false, "explicacion": "INCORRECTO: Muestra trabajo restante, no capacidad futura."},
      {"id": 2491, "contenido": "Product Backlog", "correcta": false, "explicacion": "INCORRECTO: Contiene historias, no capacidad estimada."},
      {"id": 2492, "contenido": "Definition of Done", "correcta": false, "explicacion": "INCORRECTO: Solo define completitud, no capacidad del equipo."}
    ]
  },
  {
    "id": 795,
    "contenido": "Which ceremony allows the team to synchronize daily?",
    "multiple": false,
    "respuestas": [
      {"id": 2493, "contenido": "Daily Standup", "correcta": true, "explicacion": "CORRECTO: Reunión diaria breve para coordinar tareas y resolver bloqueos."},
      {"id": 2494, "contenido": "Sprint Review", "correcta": false, "explicacion": "INCORRECTO: Solo revisa entregables, no sincroniza equipo diariamente."},
      {"id": 2495, "contenido": "Sprint Retrospective", "correcta": false, "explicacion": "INCORRECTO: Reflexiona sobre proceso, no sincroniza tareas diarias."},
      {"id": 2496, "contenido": "Backlog Refinement", "correcta": false, "explicacion": "INCORRECTO: Ajusta backlog, no sincroniza equipo."}
    ]
  },
  {
    "id": 796,
    "contenido": "Which Agile artifact defines completion criteria for work items?",
    "multiple": false,
    "respuestas": [
      {"id": 2497, "contenido": "Definition of Done", "correcta": true, "explicacion": "CORRECTO: Establece condiciones necesarias para considerar una tarea completada."},
      {"id": 2498, "contenido": "Burndown Chart", "correcta": false, "explicacion": "INCORRECTO: Muestra progreso, no criterios de completitud."},
      {"id": 2499, "contenido": "Product Backlog", "correcta": false, "explicacion": "INCORRECTO: Lista trabajo pendiente, no define completitud."},
      {"id": 2500, "contenido": "Task Board", "correcta": false, "explicacion": "INCORRECTO: Visualiza tareas, no define criterios de completitud."}
    ]
  },
  {
    "id": 797,
    "contenido": "Which practice involves delivering small increments to get early feedback?",
    "multiple": false,
    "respuestas": [
      {"id": 2501, "contenido": "Incremental Delivery", "correcta": true, "explicacion": "CORRECTO: Permite obtener feedback temprano y ajustar el producto."},
      {"id": 2502, "contenido": "Big Bang Delivery", "correcta": false, "explicacion": "INCORRECTO: Entrega todo al final, contrario a Agile."},
      {"id": 2503, "contenido": "Waterfall Phase", "correcta": false, "explicacion": "INCORRECTO: No es una práctica ágil."},
      {"id": 2504, "contenido": "Documentation Only", "correcta": false, "explicacion": "INCORRECTO: Agile valora software funcional sobre documentación exhaustiva."}
    ]
  },
  {
    "id": 798,
    "contenido": "Which role ensures the team follows Agile principles?",
    "multiple": false,
    "respuestas": [
      {"id": 2505, "contenido": "Scrum Master", "correcta": true, "explicacion": "CORRECTO: Facilita que el equipo cumpla prácticas y principios ágiles."},
      {"id": 2506, "contenido": "Product Owner", "correcta": false, "explicacion": "INCORRECTO: Gestiona backlog y prioridades, no supervisa cumplimiento de principios."},
      {"id": 2507, "contenido": "Developer", "correcta": false, "explicacion": "INCORRECTO: Implementa, no asegura adherencia a Agile."},
      {"id": 2508, "contenido": "Stakeholder", "correcta": false, "explicacion": "INCORRECTO: Solo provee feedback."}
    ]
  },
  {
    "id": 799,
    "contenido": "Which term describes Agile work broken into small, manageable units?",
    "multiple": false,
    "respuestas": [
      {"id": 2509, "contenido": "User Stories", "correcta": true, "explicacion": "CORRECTO: Historias de usuario representan trabajo pequeño y comprensible dentro de Agile."},
      {"id": 2510, "contenido": "Milestones", "correcta": false, "explicacion": "INCORRECTO: Son hitos de proyecto, no unidades de trabajo pequeñas."},
      {"id": 2511, "contenido": "Phases", "correcta": false, "explicacion": "INCORRECTO: Típico de Waterfall, no Agile."},
      {"id": 2512, "contenido": "Tasks Only", "correcta": false, "explicacion": "INCORRECTO: Una historia puede contener varias tareas, no solo tasks."}
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
