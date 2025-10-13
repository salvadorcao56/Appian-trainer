import { Question } from '../models/question.model';

export const QUESTIONS_EXTRA: Question[] = [
  {
    id: 61,
    contenido: 'Which Appian function is used to dynamically display a list of records based on a record type?',
    multiple: false,
    respuestas: [
      {
        id: 301,
        contenido: 'a!recordListView()',
        correcta: false,
        explicacion: 'INCORRECTO: No existe la función a!recordListView() en Appian.'
      },
      {
        id: 302,
        contenido: 'a!recordTypeField()',
        correcta: false,
        explicacion: 'INCORRECTO: a!recordTypeField() es para seleccionar un registro específico, no para mostrar listas.'
      },
      {
        id: 303,
        contenido: 'a!recordGrid()',
        correcta: false,
        explicacion: 'INCORRECTO: No existe la función a!recordGrid() en Appian.'
      },
      {
        id: 304,
        contenido: 'a!recordList()',
        correcta: true,
        explicacion: 'CORRECTO: a!recordList() muestra dinámicamente una lista de registros basada en un tipo de registro con capacidades de paginación y filtrado.'
      }
    ]
  },
  {
    id: 62,
    contenido: 'Select 2 that apply. What are two key advantages of using process models over expression rules for complex business logic?',
    multiple: true,
    respuestas: [
      {
        id: 305,
        contenido: 'Process models provide built-in audit trails and tracking.',
        correcta: true,
        explicacion: 'CORRECTO: Los modelos de proceso ofrecen seguimiento y auditoría incorporados del flujo de trabajo.'
      },
      {
        id: 306,
        contenido: 'Process models can handle human tasks and approvals.',
        correcta: true,
        explicacion: 'CORRECTO: Los modelos de proceso pueden gestionar tareas humanas, aprobaciones y flujos de trabajo colaborativos.'
      },
      {
        id: 307,
        contenido: 'Process models execute faster than expression rules.',
        correcta: false,
        explicacion: 'INCORRECTO: Las expression rules generalmente ejecutan más rápido para cálculos simples, ya que los process models tienen overhead de gestión de instancias.'
      },
      {
        id: 308,
        contenido: 'Process models require less configuration than expression rules.',
        correcta: false,
        explicacion: 'INCORRECTO: Los process models típicamente requieren más configuración que las expression rules para casos de uso equivalentes.'
      }
    ]
  },
  {
    id: 63,
    contenido: 'When configuring a record type with data sync enabled, which database operation does Appian automatically handle?',
    multiple: false,
    respuestas: [
      {
        id: 309,
        contenido: 'Appian automatically creates the database table schema.',
        correcta: true,
        explicacion: 'CORRECTO: Con data sync habilitado, Appian crea automáticamente el esquema de tabla en la base de datos basado en la definición del record type.'
      },
      {
        id: 310,
        contenido: 'Appian optimizes database indexes for all query patterns.',
        correcta: false,
        explicacion: 'INCORRECTO: Appian crea índices básicos, pero la optimización avanzada para patrones de consulta específicos puede requerir configuración manual.'
      },
      {
        id: 311,
        contenido: 'Appian handles database backup and recovery automatically.',
        correcta: false,
        explicacion: 'INCORRECTO: El backup y recovery de base de datos es responsabilidad del administrador de la base de datos, no de Appian automáticamente.'
      },
      {
        id: 312,
        contenido: 'Appian configures database replication across multiple regions.',
        correcta: false,
        explicacion: 'INCORRECTO: La replicación de base de datos entre regiones requiere configuración manual a nivel de infraestructura.'
      }
    ]
  },
  {
    id: 64,
    contenido: 'Which parameter in a!queryRecordType() function controls the number of records returned in a single request?',
    multiple: false,
    respuestas: [
      {
        id: 313,
        contenido: 'fetchTotal',
        correcta: false,
        explicacion: 'INCORRECTO: fetchTotal controla si contar el total de registros, no la cantidad devuelta.'
      },
      {
        id: 314,
        contenido: 'limit',
        correcta: false,
        explicacion: 'INCORRECTO: limit no es un parámetro directo de a!queryRecordType().'
      },
      {
        id: 315,
        contenido: 'pagingInfo',
        correcta: true,
        explicacion: 'CORRECTO: pagingInfo controla la paginación, incluyendo el número de registros por página mediante startIndex y batchSize.'
      },
      {
        id: 316,
        contenido: 'maxResults',
        correcta: false,
        explicacion: 'INCORRECTO: maxResults no es un parámetro válido en a!queryRecordType().'
      }
    ]
  },
  {
    id: 65,
    contenido: 'Select 2 that apply. Which two security features can be configured at the application level in Appian?',
    multiple: true,
    respuestas: [
      {
        id: 317,
        contenido: 'Object-level permissions for all design objects in the application.',
        correcta: true,
        explicacion: 'CORRECTO: Los permisos a nivel de objeto para todos los objetos de diseño pueden configurarse a nivel de aplicación.'
      },
      {
        id: 318,
        contenido: 'Data security policies for record types used in the application.',
        correcta: true,
        explicacion: 'CORRECTO: Las políticas de seguridad de datos para record types pueden configurarse a nivel de aplicación.'
      },
      {
        id: 319,
        contenido: 'User authentication methods and password policies.',
        correcta: false,
        explicacion: 'INCORRECTO: Los métodos de autenticación y políticas de contraseñas se configuran a nivel de entorno, no de aplicación.'
      },
      {
        id: 320,
        contenido: 'Database user permissions for data sync operations.',
        correcta: false,
        explicacion: 'INCORRECTO: Los permisos de usuario de base de datos se configuran a nivel de infraestructura, no de aplicación.'
      }
    ]
  },
  {
  id: 66,
  contenido: 'What is the Production environment used for?',
  multiple: false,
  respuestas: [
    {
      id: 321,
      contenido: 'Allowing business users to test the application.',
      correcta: false,
      explicacion: 'INCORRECTO: Los entornos de testing/desarrollo son para pruebas, no Production.'
    },
    {
      id: 322,
      contenido: 'Allowing developers to make updates to the application.',
      correcta: false,
      explicacion: 'INCORRECTO: Los desarrolladores actualizan en entornos de desarrollo/testing, no en Production.'
    },
    {
      id: 323,
      contenido: 'Allowing business users to use the final version of the application.',
      correcta: true,
      explicacion: 'CORRECTO: El entorno Production está destinado para que los usuarios finales utilicen la versión estable de la aplicación :cite[1].'
    }
  ]
},
{
  id: 67,
  contenido: 'You want to add a script task in between two User Input Tasks assigned to the same user. What needs to be configured so that the user sees the second form immediately after submitting the first?',
  multiple: false,
  respuestas: [
    {
      id: 324,
      contenido: 'Set all process variables as parameters.',
      correcta: false,
      explicacion: 'INCORRECTO: Esto no garantiza la transición inmediata entre formularios.'
    },
    {
      id: 325,
      contenido: 'Enable activity chaining.',
      correcta: true,
      explicacion: 'CORRECTO: Activity chaining permite la transición seamless entre tareas de usuario dentro de un proceso :cite[9].'
    },
    {
      id: 326,
      contenido: 'Run the script task as synchronous.',
      correcta: false,
      explicacion: 'INCORRECTO: La ejecución synchronous del script no afecta la visualización secuencial de formularios.'
    }
  ]
},
{
  id: 68,
  contenido: 'You received a support ticket where the user claims that nothing happens when they click the button to complete a task. You confirm that the user is assigned to the task. What is a possible reason for this problem?',
  multiple: false,
  respuestas: [
    {
      id: 327,
      contenido: 'The user was not in the user group configured for the process model security.',
      correcta: false,
      explicacion: 'INCORRECTO: Si el usuario está asignado a la tarea, esto normalmente no sería el problema.'
    },
    {
      id: 328,
      contenido: 'The process report that drives the runtime database does not have security set properly.',
      correcta: false,
      explicacion: 'INCORRECTO: Esto afectaría reportes, no la funcionalidad básica de botones.'
    },
    {
      id: 329,
      contenido: 'The button was not configured to submit the form.',
      correcta: true,
      explicacion: 'CORRECTO: Si el botón no tiene configurado submit: true, no ejecutará la acción de enviar el formulario :cite[5].'
    }
  ]
},
{
  id: 69,
  contenido: 'Which option best describes the primary purpose of the interface design object?',
  multiple: false,
  respuestas: [
    {
      id: 330,
      contenido: 'Provides a method for an Appian application to interact with an external application or service.',
      correcta: false,
      explicacion: 'INCORRECTO: Esa es la función de los connected systems o web services.'
    },
    {
      id: 331,
      contenido: 'Provides a method for end users to interact with an Appian application.',
      correcta: true,
      explicacion: 'CORRECTO: Las interfaces son los componentes user-facing que permiten la interacción con la aplicación.'
    },
    {
      id: 332,
      contenido: 'Provides a method for an Appian application to interact with a database.',
      correcta: false,
      explicacion: 'INCORRECTO: Esa función la realizan los record types o data store entities.'
    }
  ]
},
{
  id: 70,
  contenido: 'You are running a process instance and an error occurs on an unattended node. What happens to your process when this error occurs?',
  multiple: false,
  respuestas: [
    {
      id: 333,
      contenido: 'The process is not paused; Parallel paths continue; An alert is sent to admins; Nodes not included in num_problem_tasks',
      correcta: true,
      explicacion: 'CORRECTO: En nodos unattended, el proceso no se pausa, paths paralelos continúan, se alerta a admins, y no se cuentan en num_problem_tasks.'
    },
    {
      id: 334,
      contenido: 'The process is paused; Parallel paths are stopped; No alerts are sent; Nodes included in num_problem_tasks',
      correcta: false,
      explicacion: 'INCORRECTO: Este comportamiento aplicaría a nodos attended, no unattended.'
    },
    {
      id: 335,
      contenido: 'The process is paused; Parallel paths are stopped; An alert is sent to process initiator; Nodes included in num_problem_tasks',
      correcta: false,
      explicacion: 'INCORRECTO: Las alertas de errores en nodos unattended van a administradores, no al iniciador del proceso.'
    }
  ]
},
{
  id: 71,
  contenido: 'What is an Appian best practice for calling interface rules on your interface?',
  multiple: false,
  respuestas: [
    {
      id: 336,
      contenido: 'Call the interface rule on a rule input.',
      correcta: false,
      explicacion: 'INCORRECTO: Esto no es una best practice específica para llamar reglas de interfaz.'
    },
    {
      id: 337,
      contenido: 'Use keyword syntax.',
      correcta: false,
      explicacion: 'INCORRECTO: Mientras keyword syntax es buena práctica, no es la principal mencionada para interfaces.'
    },
    {
      id: 338,
      contenido: 'Always use consistent ordering of rule parameters.',
      correcta: true,
      explicacion: 'CORRECTO: El orden consistente de parámetros mejora la legibilidad y mantenibilidad de las interfaces.'
    }
  ]
},
{
  id: 72,
  contenido: 'Which two groups can be set within Application Properties? (Choose two.)',
  multiple: true,
  respuestas: [
    {
      id: 339,
      contenido: 'Administrators Groups',
      correcta: true,
      explicacion: 'CORRECTO: Los Administrators Groups pueden configurarse en Application Properties para gestionar la aplicación.'
    },
    {
      id: 340,
      contenido: 'Developers Groups',
      correcta: false,
      explicacion: 'INCORRECTO: Los desarrolladores se gestionan típicamente a nivel de entorno, no en Application Properties.'
    },
    {
      id: 341,
      contenido: 'Users Groups',
      correcta: true,
      explicacion: 'CORRECTO: Los Users Groups definen los usuarios finales que pueden interactuar con la aplicación.'
    },
    {
      id: 342,
      contenido: 'Designers Groups',
      correcta: false,
      explicacion: 'INCORRECTO: Los Designers Groups no son un tipo de grupo configurable en Application Properties.'
    }
  ]
},
{
  id: 73,
  contenido: 'How can you add test data into your rule inputs while editing an interface object?',
  multiple: false,
  respuestas: [
    {
      id: 343,
      contenido: 'Select the Performance tab and set test values.',
      correcta: false,
      explicacion: 'INCORRECTO: El Performance tab muestra métricas, no permite configurar datos de prueba.'
    },
    {
      id: 344,
      contenido: 'Select the Test button and set test values.',
      correcta: true,
      explicacion: 'CORRECTO: El botón Test permite simular el comportamiento de la interfaz con datos de prueba específicos.'
    },
    {
      id: 345,
      contenido: 'Select the Gear icon, select Properties, and set test values.',
      correcta: false,
      explicacion: 'INCORRECTO: Properties configura metadatos del objeto, no datos de prueba para rule inputs.'
    }
  ]
},
  {
  id: 74,
  contenido: 'You write an expression that checks the validity of an email address. Which three scenarios should you configure as test cases? (Choose three.)',
  multiple: true,
  respuestas: [
    {
      id: 346,
      contenido: 'An invalid email address that is missing the @-character: "john.doeexample.com".',
      correcta: true,
      explicacion: 'CORRECTO: Debes probar emails inválidos que carezcan del carácter @ para validar el formato.'
    },
    {
      id: 347,
      contenido: 'An invalid email address: null.',
      correcta: true,
      explicacion: 'CORRECTO: Es importante probar cómo maneja la expresión valores nulos.'
    },
    {
      id: 348,
      contenido: 'A valid email address: "jane.doe@example.com".',
      correcta: true,
      explicacion: 'CORRECTO: Debes verificar que un email correctamente formateado sea validado como válido.'
    },
    {
      id: 349,
      contenido: 'The mail server is unavailable.',
      correcta: false,
      explicacion: 'INCORRECTO: La disponibilidad del servidor de correo no es relevante para la validación de formato del email.'
    }
  ]
},
{
  id: 75,
  contenido: 'ACME Automobile uses Appian to manage their vehicle fleet. Vehicle records can have a status of either "active" or "inactive". Users are primarily concerned with active vehicles and want to see only those records by default when viewing the Vehicle records list. However, it is important for users to be able to see the unfiltered list of Vehicle records on demand to address occasional auditing requests from managers. Which configuration supports the desired Vehicle record list behavior?',
  multiple: false,
  respuestas: [
    {
      id: 350,
      contenido: 'Visibility on the Status column in the Vehicle record list set with conditional logic.',
      correcta: false,
      explicacion: 'INCORRECTO: La visibilidad de columnas no filtra registros, solo afecta qué columnas se muestran.'
    },
    {
      id: 351,
      contenido: 'A source filter set to exclude vehicles with status "inactive".',
      correcta: false,
      explicacion: 'INCORRECTO: Un source filter aplicaría permanentemente y los usuarios no podrían ver todos los registros cuando lo necesiten.'
    },
    {
      id: 352,
      contenido: 'A user filter for the status field with a default option corresponding to "active".',
      correcta: true,
      explicacion: 'CORRECTO: Los user filters permiten un valor por defecto ("active") pero dan flexibilidad a los usuarios para cambiar el filtro cuando necesiten ver todos los registros.'
    }
  ]
},
{
  id: 76,
  contenido: 'You receive a bug ticket that states "After selecting a value for the drop-down field, the value disappears." You investigate and notice that when you select the drop-down, the proper choice labels display. When you select an option, the value updates properly in the corresponding rule input. What is the issue and how can you fix this bug?',
  multiple: false,
  respuestas: [
    {
      id: 353,
      contenido: 'The value parameter is improperly configured on the drop-down component. You need to map the value to the proper rule input or variable.',
      correcta: true,
      explicacion: 'CORRECTO: Si el valor se actualiza en el rule input pero no se muestra, el problema está en el mapeo del parámetro value del dropdown.'
    },
    {
      id: 354,
      contenido: 'The user group for the lookup table is incorrect. You need to add the user to the proper group.',
      correcta: false,
      explicacion: 'INCORRECTO: Los problemas de grupos de usuarios afectarían la visualización de opciones, no la persistencia del valor seleccionado.'
    },
    {
      id: 355,
      contenido: 'The choice labels parameter of the drop-down field is not configured as a list. You need to wrap the value with curly brackets.',
      correcta: false,
      explicacion: 'INCORRECTO: Si las choice labels se muestran correctamente, este no es el problema.'
    }
  ]
},
{
  id: 77,
  contenido: 'Review the following code snippet: displayvalue(1, {0, 1, 2}, {"Low", "Medium", "High"}, "Unknown") - What does this code snippet return?',
  multiple: false,
  respuestas: [
    {
      id: 356,
      contenido: 'Low',
      correcta: false,
      explicacion: 'INCORRECTO: El valor 1 corresponde al índice 1 en el array de reemplazo, no al índice 0.'
    },
    {
      id: 357,
      contenido: 'Medium',
      correcta: true,
      explicacion: 'CORRECTO: displayvalue() busca el valor 1 en {0,1,2} (encontrado en índice 1) y retorna el valor en el mismo índice de {"Low","Medium","High"}, que es "Medium".'
    },
    {
      id: 358,
      contenido: 'High',
      correcta: false,
      explicacion: 'INCORRECTO: "High" está en el índice 2, pero el valor buscado (1) está en el índice 1.'
    }
  ]
},
{
  id: 78,
  contenido: 'Which Appian feature can help the implementation team analyze the event log data of an existing process?',
  multiple: false,
  respuestas: [
    {
      id: 359,
      contenido: 'RPA',
      correcta: false,
      explicacion: 'INCORRECTO: RPA (Robotic Process Automation) es para automatizar tareas, no para analizar logs de eventos.'
    },
    {
      id: 360,
      contenido: 'Process Mining',
      correcta: true,
      explicacion: 'CORRECTO: Process Mining analiza event logs para dar insights sobre rendimiento, cuellos de botella y cumplimiento de procesos.'
    },
    {
      id: 361,
      contenido: 'Workflow',
      correcta: false,
      explicacion: 'INCORRECTO: Workflow se refiere al diseño de procesos, no al análisis de datos de ejecución.'
    }
  ]
},
{
  id: 79,
  contenido: 'Which statement about local variables is valid?',
  multiple: false,
  respuestas: [
    {
      id: 362,
      contenido: 'The data type of a local variable is determined by its value.',
      correcta: true,
      explicacion: 'CORRECTO: En Appian, el tipo de dato de una variable local se infiere del valor que se le asigna, no necesita declaración explícita.'
    },
    {
      id: 363,
      contenido: 'Local variables can only store primitive data types, such as numbers and strings.',
      correcta: false,
      explicacion: 'INCORRECTO: Las variables locales pueden almacenar varios tipos de datos, incluyendo tipos complejos, no solo primitivos.'
    },
    {
      id: 364,
      contenido: 'Local variables must have an initial value set when defining them.',
      correcta: false,
      explicacion: 'INCORRECTO: Aunque es buena práctica, no es obligatorio establecer un valor inicial al definir variables locales.'
    }
  ]
},
{
  id: 80,
  contenido: 'Which set of out-of-the-box features is only available when data sync is enabled on a record type?',
  multiple: false,
  respuestas: [
    {
      id: 365,
      contenido: 'Generate record actions, Define record type object security, Add custom record fields',
      correcta: false,
      explicacion: 'INCORRECTO: Estas características están disponibles en record types sin data sync habilitado.'
    },
    {
      id: 366,
      contenido: 'Define record type relationships, Add custom record fields, Configure record-level security',
      correcta: false,
      explicacion: 'INCORRECTO: Las relaciones y campos custom están disponibles sin data sync.'
    },
    {
      id: 367,
      contenido: 'Define record type relationships, Add hidden record fields, Configure record-level security',
      correcta: true,
      explicacion: 'CORRECTO: Data sync habilita relaciones entre record types, campos hidden y record-level security como características adicionales.'
    }
  ]
},
{
  id: 81,
  contenido: 'Review the following code snippet: index({"a", "b", "c"}, 1, "x") - Which value is returned?',
  multiple: false,
  respuestas: [
    {
      id: 368,
      contenido: 'a',
      correcta: false,
      explicacion: 'INCORRECTO: La función index() reemplaza el elemento en la posición especificada, no retorna el elemento original.'
    },
    {
      id: 369,
      contenido: 'b',
      correcta: false,
      explicacion: 'INCORRECTO: "b" está en la posición 2, pero la función está modificando la posición 1.'
    },
    {
      id: 370,
      contenido: 'c',
      correcta: false,
      explicacion: 'INCORRECTO: "c" está en la posición 3 y no es afectado por esta operación.'
    },
    {
      id: 371,
      contenido: 'x',
      correcta: true,
      explicacion: 'CORRECTO: La función index() reemplaza el elemento en el índice 1 con "x" y retorna el nuevo valor en esa posición.'
    }
  ]
}

  // =====================================================
  // PRÓXIMAS PREGUNTAS EXTRA A AÑADIR (IDs 66 en adelante)
  // =====================================================
  // Para añadir más preguntas extra:
  // 1. Continuar desde ID 66
  // 2. Mantener preguntas en inglés
  // 3. Explicaciones en castellano
  // 4. IDs de respuestas consecutivos desde 321
  // =====================================================
];
