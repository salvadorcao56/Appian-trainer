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
