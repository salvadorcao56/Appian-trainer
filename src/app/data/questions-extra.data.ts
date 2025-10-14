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
},
{
  id: 82,
  contenido: 'Which code snippet calls the interface APP_RecordDashboard while following best practices for passing in values for "recordId" and "firstName"?',
  multiple: false,
  respuestas: [
    {
      id: 372,
      contenido: 'Option A',
      correcta: false,
      explicacion: 'INCORRECTO: Esta opción no sigue las mejores prácticas de Appian para pasar parámetros con nombres claros.'
    },
    {
      id: 373,
      contenido: 'Option B',
      correcta: true,
      explicacion: 'CORRECTO: La opción B sigue las mejores prácticas usando parámetros nombrados, haciendo el código más legible y mantenible.'
    },
    {
      id: 374,
      contenido: 'Option C',
      correcta: false,
      explicacion: 'INCORRECTO: Esta opción no utiliza la sintaxis correcta para pasar parámetros a interfaces en Appian.'
    }
  ]
},
{
  id: 83,
  contenido: 'You are developing an expression rule. You need to find information on employing an Appian function that you have not used before. For more information on the Appian function, what should you do first?',
  multiple: false,
  respuestas: [
    {
      id: 375,
      contenido: 'Look up the function in the Appian Documentation.',
      correcta: true,
      explicacion: 'CORRECTO: La documentación de Appian proporciona detalles completos sobre cada función, incluyendo sintaxis, parámetros y ejemplos de uso.'
    },
    {
      id: 376,
      contenido: 'Search the Appian Knowledge Base Articles.',
      correcta: false,
      explicacion: 'INCORRECTO: Aunque los artículos de Knowledge Base son útiles, la documentación oficial es el primer recurso para información específica de funciones.'
    },
    {
      id: 377,
      contenido: 'Post a question on Appian Community.',
      correcta: false,
      explicacion: 'INCORRECTO: La comunidad es útil para casos específicos, pero la documentación debe ser el primer recurso para información básica de funciones.'
    }
  ]
},
{
  id: 84,
  contenido: 'A user needs to navigate from a record summary to an external URL. Which interface component can be used to support this goal?',
  multiple: false,
  respuestas: [
    {
      id: 378,
      contenido: 'Button',
      correcta: true,
      explicacion: 'CORRECTO: Un componente Button configurado con una acción "Link" puede navegar a una URL externa desde un record summary.'
    },
    {
      id: 379,
      contenido: 'Record Link',
      correcta: false,
      explicacion: 'INCORRECTO: Los Record Links están diseñados para navegar entre records de Appian, no a URLs externas.'
    },
    {
      id: 380,
      contenido: 'Card Layout with a link',
      correcta: false,
      explicacion: 'INCORRECTO: Aunque Card Layout puede contener enlaces, no es el componente específico recomendado para esta funcionalidad.'
    }
  ]
},
{
  id: 85,
  contenido: 'You are creating a form used to order a pizza. You use a radio button component for the selection. The pizza selection labels include a list of toppings. You do not want the selection labels to be truncated. Which layout should you choose?',
  multiple: false,
  respuestas: [
    {
      id: 381,
      contenido: 'Compact',
      correcta: false,
      explicacion: 'INCORRECTO: El layout Compact puede truncar etiquetas largas para ahorrar espacio.'
    },
    {
      id: 382,
      contenido: 'Grid',
      correcta: false,
      explicacion: 'INCORRECTO: El layout Grid organiza opciones en cuadrícula pero puede no prevenir el truncamiento con texto muy largo.'
    },
    {
      id: 383,
      contenido: 'Stacked',
      correcta: true,
      explicacion: 'CORRECTO: El layout Stacked lista las opciones verticalmente, dando a cada etiqueta espacio adecuado y previniendo el truncamiento.'
    }
  ]
},
{
  id: 86,
  contenido: 'How can you prevent users from accessing Tempo?',
  multiple: false,
  respuestas: [
    {
      id: 384,
      contenido: 'Remove the users from the Tempo Users system group.',
      correcta: true,
      explicacion: 'CORRECTO: El grupo system "Tempo Users" controla el acceso a Tempo. Remover usuarios de este grupo previene su acceso.'
    },
    {
      id: 385,
      contenido: 'Change the default User Start Page.',
      correcta: false,
      explicacion: 'INCORRECTO: Cambiar la página de inicio no previene el acceso a Tempo, solo afecta la página inicial al iniciar sesión.'
    },
    {
      id: 386,
      contenido: 'Ensure the user is in the Application Users group, which by default does not have access to Tempo.',
      correcta: false,
      explicacion: 'INCORRECTO: Los Application Users pueden tener acceso a Tempo dependiendo de su configuración específica.'
    }
  ]
},
{
  id: 87,
  contenido: 'You need to add a new attribute to your database-backed synced Acme employee record. What should you do?',
  multiple: false,
  respuestas: [
    {
      id: 387,
      contenido: 'Add the new field manually to the ACME_Employee database table and run a database script to resync the Acme employee record.',
      correcta: false,
      explicacion: 'INCORRECTO: No es necesario hacer cambios manuales en la base de datos cuando se usa data sync en Appian.'
    },
    {
      id: 388,
      contenido: 'In the record data model, you add the new field in the ADD SOURCE FIELDS. Save the field with the Update Table checkbox active.',
      correcta: true,
      explicacion: 'CORRECTO: Al añadir el campo en "Add Source Fields" con "Update Table" activado, Appian actualiza automáticamente la tabla de base de datos y resincroniza el record type.'
    },
    {
      id: 389,
      contenido: 'In the record data model, you add the new field with ADD RELATIONSHIPS. Save the newly created relationship and use the field.',
      correcta: false,
      explicacion: 'INCORRECTO: ADD RELATIONSHIPS es para crear relaciones entre record types, no para añadir nuevos atributos.'
    }
  ]
},
{
  id: 88,
  contenido: 'You have two record types: ACME_Student and ACME_Class. You need to add a many-to-many relationship between these two record types. What should you do?',
  multiple: false,
  respuestas: [
    {
      id: 390,
      contenido: 'Create a new record type with data sync enabled, then add a one-to-many relationship from each record type (ACME_Student and ACME_Class) to the new mapping record type.',
      correcta: true,
      explicacion: 'CORRECTO: Para relaciones many-to-many se debe crear un record type de unión (junction) con relaciones one-to-many hacia ambos record types originales.'
    },
    {
      id: 391,
      contenido: 'This relationship cannot be modeled using record type relationships.',
      correcta: false,
      explicacion: 'INCORRECTO: Las relaciones many-to-many sí pueden modelarse en Appian usando el patrón de record type de unión.'
    },
    {
      id: 392,
      contenido: 'Add the relationship from either ACME_Student or ACME_Class, then select Many-to-Many under Relationship Type, and add the corresponding keys.',
      correcta: false,
      explicacion: 'INCORRECTO: No existe una opción directa "Many-to-Many" en la configuración de relaciones de record types en Appian.'
    }
  ]
},
{
  id: 89,
  contenido: 'What are three ways to trigger a process from a process model? (Choose three.)',
  multiple: true,
  respuestas: [
    {
      id: 393,
      contenido: 'Use a subprocess.',
      correcta: true,
      explicacion: 'CORRECTO: Un subprocess es un proceso modelo que se llama desde dentro de otro proceso modelo.'
    },
    {
      id: 394,
      contenido: 'Call a web API.',
      correcta: false,
      explicacion: 'INCORRECTO: Llamar a una web API no inicia un proceso modelo en Appian.'
    },
    {
      id: 395,
      contenido: 'Use a!recordActionItem().',
      correcta: false,
      explicacion: 'INCORRECTO: a!recordActionItem() es para crear acciones en records, no para iniciar procesos.'
    },
    {
      id: 396,
      contenido: 'Use a Start Process smart service.',
      correcta: true,
      explicacion: 'CORRECTO: El Start Process smart service es un elemento de flujo que inicia otro proceso.'
    },
    {
      id: 397,
      contenido: 'Run a!startProcess() from a script task.',
      correcta: true,
      explicacion: 'CORRECTO: La función a!startProcess() puede usarse en un script task para iniciar un proceso programáticamente.'
    }
  ]
},
{
  id: 90,
  contenido: 'You need to start a process using an email trigger. How should you configure this process model using the Process Model Properties dialog?',
  multiple: false,
  respuestas: [
    {
      id: 398,
      contenido: 'Go to File > Properties > Alerts. Configure the Custom Alert settings.',
      correcta: true,
      explicacion: 'CORRECTO: Los triggers de email se configuran en File > Properties > Alerts mediante Custom Alert settings.'
    },
    {
      id: 399,
      contenido: 'Go to File > Properties Set the proper Process Display Name',
      correcta: false,
      explicacion: 'INCORRECTO: El Process Display Name no está relacionado con la configuración de triggers de email.'
    },
    {
      id: 400,
      contenido: 'Go to File > Properties. Select the Public Events checkbox to allow anyone to fire triggers.',
      correcta: false,
      explicacion: 'INCORRECTO: Public Events no es para configurar triggers de email.'
    }
  ]
},
{
  id: 91,
  contenido: 'You are using a local variable in an expression rule to describe the height of an applicant. Which statement correctly describes the application of Appian best practices for naming your local variable?',
  multiple: false,
  respuestas: [
    {
      id: 401,
      contenido: 'local!hoaa - This employs the naming convention of abbreviating "Height of an applicant" to minimize both the typing required by developers and the length of code Appian is required to parse.',
      correcta: false,
      explicacion: 'INCORRECTO: Las abreviaturas extremas hacen el código menos legible y mantenible.'
    },
    {
      id: 402,
      contenido: 'local!applicantHeight - This employs the naming convention of specifically describing the value contained by the variable.',
      correcta: true,
      explicacion: 'CORRECTO: Los nombres descriptivos como "applicantHeight" hacen el código más legible y mantenible.'
    },
    {
      id: 403,
      contenido: 'local!x - This employs the naming convention of using algebraic variables for a value that may either change over time or be used by future developers for other purposes.',
      correcta: false,
      explicacion: 'INCORRECTO: Nombres genéricos como "x" no describen el propósito de la variable y son mala práctica.'
    }
  ]
},
{
  id: 92,
  contenido: 'You are configuring an employee onboarding User Input Task that will be assigned to the human resources group. Based on the default behavior for task assignments, which statement is valid?',
  multiple: false,
  respuestas: [
    {
      id: 404,
      contenido: 'Multiple users can accept the task at the same time up until the point that the first user completes it.',
      correcta: false,
      explicacion: 'INCORRECTO: Por defecto, cuando un usuario acepta una tarea, esta se bloquea para otros usuarios.'
    },
    {
      id: 405,
      contenido: 'For each user in the group, a task is generated and assigned to them to complete.',
      correcta: false,
      explicacion: 'INCORRECTO: No se genera una tarea individual para cada usuario del grupo.'
    },
    {
      id: 406,
      contenido: 'One user in the group can accept the task for themselves and complete it.',
      correcta: true,
      explicacion: 'CORRECTO: Cualquier miembro del grupo puede aceptar la tarea, y una vez aceptada, se bloquea para ese usuario específico.'
    }
  ]
},
{
  id: 93,
  contenido: 'You are configuring a Related Action for an entity-backed record type. What is the proper domain prefix to reference the record data that will be passed into the Process Model as context for the Record Action?',
  multiple: false,
  respuestas: [
    {
      id: 407,
      contenido: 'ac!',
      correcta: false,
      explicacion: 'INCORRECTO: "ac!" no es un prefijo de dominio válido en Appian para variables de proceso.'
    },
    {
      id: 408,
      contenido: 'pv!',
      correcta: true,
      explicacion: 'CORRECTO: "pv!" es el prefijo para process variables, que se usan para pasar datos al proceso modelo.'
    },
    {
      id: 409,
      contenido: 'rv!',
      correcta: false,
      explicacion: 'INCORRECTO: "rv!" no es un prefijo de dominio estándar en Appian.'
    }
  ]
},
  {
  id: 94,
  contenido: 'You need to create a record type with data sync enabled. What are the supported data sources?',
  multiple: false,
  respuestas: [
    {
      id: 410,
      contenido: 'Web Services, Salesforce, Database',
      correcta: true,
      explicacion: 'CORRECTO: Las fuentes de datos admitidas para data sync son Web Services, Salesforce y bases de datos. Los Process Models y Reports no son fuentes para data sync :cite[2]:cite[4].'
    },
    {
      id: 411,
      contenido: 'Web Services, Process Reports, Database',
      correcta: false,
      explicacion: 'INCORRECTO: Los Process Reports no son una fuente de datos válida para habilitar la sincronización de datos en un record type.'
    },
    {
      id: 412,
      contenido: 'Salesforce, Process Models, Database',
      correcta: false,
      explicacion: 'INCORRECTO: Los Process Models no son una fuente de datos válida para data sync.'
    }
  ]
},
{
  id: 95,
  contenido: 'You need to be able to define record type relationships. What is a required prerequisite in Appian?',
  multiple: false,
  respuestas: [
    {
      id: 413,
      contenido: 'The record types must have data sync enabled.',
      correcta: true,
      explicacion: 'CORRECTO: Para definir relaciones entre record types, es un requisito previo que ambos record types tengan data sync habilitado.'
    },
    {
      id: 414,
      contenido: 'The record types must be on a virtualized data source.',
      correcta: false,
      explicacion: 'INCORRECTO: No es necesario que la fuente de datos esté virtualizada.'
    },
    {
      id: 415,
      contenido: 'The record types must be stored in the local Appian business database.',
      correcta: false,
      explicacion: 'INCORRECTO: Los record types pueden conectarse a diversas fuentes de datos, no solo a la base de datos empresarial local de Appian.'
    }
  ]
},
{
  id: 96,
  contenido: 'An interface references an expression rule. What are the relationships between these objects?',
  multiple: false,
  respuestas: [
    {
      id: 416,
      contenido: 'Dependents and Reliants',
      correcta: false,
      explicacion: 'INCORRECTO: Esta no es la terminología estándar utilizada en Appian para describir las dependencias entre objetos.'
    },
    {
      id: 417,
      contenido: 'Dependents and Precedents',
      correcta: true,
      explicacion: 'CORRECTO: La interfaz es un "dependent" (dependiente) y la regla de expresión es un "precedent" (precedente).'
    },
    {
      id: 418,
      contenido: 'Inheritance and Association',
      correcta: false,
      explicacion: 'INCORRECTO: La relación no se basa en herencia, sino en dependencia.'
    }
  ]
},
{
  id: 97,
  contenido: 'News feed is part of Tempo. Whenever a process model has a start form, it can be added to a site.',
  multiple: false,
  respuestas: [
    {
      id: 419,
      contenido: 'True',
      correcta: true,
      explicacion: 'CORRECTO: News Feed es parte de Tempo y los process models con formularios de inicio pueden agregarse a sites.'
    },
    {
      id: 420,
      contenido: 'False',
      correcta: false,
      explicacion: 'INCORRECTO: Ambas afirmaciones son correctas según la documentación de Appian.'
    }
  ]
},
{
  id: 98,
  contenido: 'Where should a developer look for the latest Appian release notes?',
  multiple: false,
  respuestas: [
    {
      id: 421,
      contenido: 'Discussions Board',
      correcta: false,
      explicacion: 'INCORRECTO: Aunque puede haber discusiones, no es la fuente oficial.'
    },
    {
      id: 422,
      contenido: 'Appian Community',
      correcta: true,
      explicacion: 'CORRECTO: La Comunidad de Appian es el portal oficial donde se publican las release notes y anuncios.'
    },
    {
      id: 423,
      contenido: 'The Appian Developer Playbook',
      correcta: false,
      explicacion: 'INCORRECTO: Es una guía de mejores prácticas, no un repositorio de release notes.'
    },
    {
      id: 424,
      contenido: 'Solutions Support Guide',
      correcta: false,
      explicacion: 'INCORRECTO: Se enfoca en soporte para soluciones específicas, no en anuncios generales.'
    }
  ]
},
{
  id: 99,
  contenido: 'What is mandatory in every business process in Appian?',
  multiple: false,
  respuestas: [
    {
      id: 425,
      contenido: 'Defined steps for structured execution',
      correcta: true,
      explicacion: 'CORRECTO: Todo proceso de negocio necesita pasos definidos para ejecutarse de forma estructurada.'
    },
    {
      id: 426,
      contenido: 'Human interaction',
      correcta: false,
      explicacion: 'INCORRECTO: La interacción humana puede estar presente pero no es obligatoria.'
    },
    {
      id: 427,
      contenido: 'Reporting',
      correcta: false,
      explicacion: 'INCORRECTO: El reporting puede estar presente pero no es obligatorio.'
    },
    {
      id: 428,
      contenido: 'Automation',
      correcta: false,
      explicacion: 'INCORRECTO: La automatización puede estar presente pero no es obligatoria.'
    }
  ]
},
{
  id: 100,
  contenido: 'If you find specific undocumented functionality, what should you do?',
  multiple: false,
  respuestas: [
    {
      id: 429,
      contenido: 'Create a Support Case',
      correcta: true,
      explicacion: 'CORRECTO: Para funcionalidad muy específica no documentada, contactar con soporte oficial es lo más fiable.'
    },
    {
      id: 430,
      contenido: 'Search in Community',
      correcta: false,
      explicacion: 'INCORRECTO: Para casos no documentados, el soporte oficial es más confiable.'
    },
    {
      id: 431,
      contenido: 'Experiment on your own',
      correcta: false,
      explicacion: 'INCORRECTO: Puede ser riesgoso sin documentación adecuada.'
    },
    {
      id: 432,
      contenido: 'Ask colleagues',
      correcta: false,
      explicacion: 'INCORRECTO: El soporte oficial proporciona la respuesta más autoritativa.'
    }
  ]
},
{
  id: 101,
  contenido: 'In which phase is the project vision defined and the backlog regularly refined?',
  multiple: false,
  respuestas: [
    {
      id: 433,
      contenido: 'Build',
      correcta: false,
      explicacion: 'INCORRECTO: En Build se desarrolla, no se define la visión.'
    },
    {
      id: 434,
      contenido: 'Release',
      correcta: false,
      explicacion: 'INCORRECTO: En Release se despliega, no se define la visión.'
    },
    {
      id: 435,
      contenido: 'Optimize',
      correcta: false,
      explicacion: 'INCORRECTO: En Optimize se mejora, no se define la visión inicial.'
    },
    {
      id: 436,
      contenido: 'Initiate',
      correcta: true,
      explicacion: 'CORRECTO: En Initiate se define la visión del proyecto y se refina el backlog.'
    }
  ]
},
{
  id: 102,
  contenido: 'Who is responsible for estimating the effort of Product Backlog Items?',
  multiple: false,
  respuestas: [
    {
      id: 437,
      contenido: 'Product Owner',
      correcta: false,
      explicacion: 'INCORRECTO: El Product Owner prioriza por valor, no estima esfuerzo.'
    },
    {
      id: 438,
      contenido: 'Scrum Master',
      correcta: false,
      explicacion: 'INCORRECTO: El Scrum Master facilita el proceso, pero no estima.'
    },
    {
      id: 439,
      contenido: 'Developers',
      correcta: true,
      explicacion: 'CORRECTO: Los Developers estiman el esfuerzo porque son quienes realizan el trabajo.'
    },
    {
      id: 440,
      contenido: 'Stakeholders',
      correcta: false,
      explicacion: 'INCORRECTO: Los stakeholders no estiman el esfuerzo de desarrollo.'
    }
  ]
},
{
  id: 103,
  contenido: 'When is the Definition of Done (DoD) primarily agreed upon and refined?',
  multiple: false,
  respuestas: [
    {
      id: 441,
      contenido: 'Sprint Planning',
      correcta: false,
      explicacion: 'INCORRECTO: En Sprint Planning se planifica el trabajo, no se refina la DoD.'
    },
    {
      id: 442,
      contenido: 'Sprint Retrospective',
      correcta: true,
      explicacion: 'CORRECTO: La Retrospectiva es el momento formal para inspeccionar y adaptar estándares como la DoD.'
    },
    {
      id: 443,
      contenido: 'Daily Standup',
      correcta: false,
      explicacion: 'INCORRECTO: El Daily Standup es para sincronización, no para refinar la DoD.'
    },
    {
      id: 444,
      contenido: 'Sprint Review',
      correcta: false,
      explicacion: 'INCORRECTO: El Sprint Review es para demostrar el trabajo, no para refinar la DoD.'
    }
  ]
},
{
  id: 104,
  contenido: 'Multiple employees can be assigned to multiple work locations. What type of relationship does this describe?',
  multiple: false,
  respuestas: [
    {
      id: 445,
      contenido: 'One-to-One',
      correcta: false,
      explicacion: 'INCORRECTO: Esto limitaría un empleado a una ubicación y viceversa.'
    },
    {
      id: 446,
      contenido: 'One-to-Many',
      correcta: false,
      explicacion: 'INCORRECTO: Esto permitiría múltiples empleados en una ubicación, pero no múltiples ubicaciones por empleado.'
    },
    {
      id: 447,
      contenido: 'Many-to-Many',
      correcta: true,
      explicacion: 'CORRECTO: Un empleado puede estar en varias ubicaciones y una ubicación puede tener varios empleados.'
    },
    {
      id: 448,
      contenido: 'Many-to-One',
      correcta: false,
      explicacion: 'INCORRECTO: Esta sería la perspectiva desde ubicación hacia empleados.'
    }
  ]
},
{
  id: 105,
  contenido: 'Which SQL statement is used to edit existing data in a table?',
  multiple: false,
  respuestas: [
    {
      id: 449,
      contenido: 'INSERT',
      correcta: false,
      explicacion: 'INCORRECTO: INSERT se usa para agregar nuevas filas, no para editar existentes.'
    },
    {
      id: 450,
      contenido: 'UPDATE',
      correcta: true,
      explicacion: 'CORRECTO: UPDATE es el comando SQL estándar para modificar datos existentes en una tabla.'
    },
    {
      id: 451,
      contenido: 'CREATE',
      correcta: false,
      explicacion: 'INCORRECTO: CREATE se usa para crear nuevas tablas o estructuras.'
    },
    {
      id: 452,
      contenido: 'MODIFY',
      correcta: false,
      explicacion: 'INCORRECTO: MODIFY no es el comando SQL estándar para editar datos.'
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
