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
},

  {
    "id": 106,
    "contenido": "A customer wants to display a small toolbar with three icons - a 'sad face,' a 'face with neutral expression,' and a 'happy face' - on the bottom of every page in their application. Users will be instructed to use the icon that best expresses their current experience using the application. This will allow the customer to collect valuable data about users. Which object type should be called from each page to implement this feature?",
    "multiple": false,
    "respuestas": [
      {
        "id": 453,
        "contenido": "An interface, because the component must render user interface elements.",
        "correcta": true,
        "explicacion": "CORRECTO: La funcionalidad descrita es un componente de interfaz de usuario reutilizable que debe mostrarse en múltiples páginas. En Appian, la forma de crear y reutilizar un fragmento de interfaz de usuario es precisamente mediante un objeto de tipo 'Interface' que luego se puede invocar desde otras interfaces."
      },
      {
        "id": 454,
        "contenido": "An expression rule, because the component captures expressions of user sentiment for analysis.",
        "correcta": false,
        "explicacion": "INCORRECTO: Una Expression Rule se utiliza principalmente para cálculos y lógica de negocio que devuelven un valor. No es el objeto estándar para definir y renderizar componentes visuales reutilizables en una página, que es el requisito principal aquí."
      },
      {
        "id": 455,
        "contenido": "A decision, because the component captures a choice that users select from an array of custom selection components, rather than a standard dropdown or radio button.",
        "correcta": false,
        "explicacion": "INCORRECTO: Un objeto 'Decision' automatiza la toma de decisiones basada en reglas, pero no está diseñado para ser el contenedor de componentes visuales interactivos (como iconos) que se integran directamente en la interfaz de usuario de una aplicación."
      }
    ]
  },
  {
    "id": 107,
    "contenido": "You select the 'Generate groups and folders to secure and organize objects' option while creating a new application, Acme, with the prefix ACM. By default, which two groups are generated by Appian? (Choose two.)",
    "multiple": true,
    "respuestas": [
      {
        "id": 456,
        "contenido": "ACM Administrators",
        "correcta": true,
        "explicacion": "CORRECTO: Al habilitar la generación automática de grupos, Appian crea un grupo de administradores por defecto para la nueva aplicación. Este grupo suele tener los máximos privilegios dentro del ámbito de la aplicación."
      },
      {
        "id": 457,
        "contenido": "ACM Designers",
        "correcta": false,
        "explicacion": "INCORRECTO: Appian no genera automáticamente un grupo de 'Designers' por defecto cuando se crea una aplicación con esta opción. Los grupos por defecto están más orientados a roles de administración y uso general."
      },
      {
        "id": 458,
        "contenido": "ACM Viewers",
        "correcta": false,
        "explicacion": "INCORRECTO: El grupo 'Viewers' no es uno de los grupos generados automáticamente por Appian al crear una aplicación con el prefijo especificado. Los grupos por defecto suelen ser 'Administrators' y 'Users'."
      },
      {
        "id": 459,
        "contenido": "ACM Users",
        "correcta": true,
        "explicacion": "CORRECTO: Junto con el grupo de administradores, Appian genera automáticamente un grupo de usuarios estándar ('Users') al activar la opción de generación de grupos. Este grupo está pensado para los usuarios finales que interactuarán con la aplicación."
      }
    ]
  },
  {
    "id": 108,
    "contenido": "You need to remove an unused field from an existing record type Product, which has data sync enabled and is backed by a database table. What should you do?",
    "multiple": false,
    "respuestas": [
      {
        "id": 460,
        "contenido": "Delete the field from the record type and optionally delete the column from the database table.",
        "correcta": true,
        "explicacion": "CORRECTO: El procedimiento correcto es eliminar primero el campo desde el diseño del Record Type en Appian Designer. Esto rompe el mapeo con la columna de la base de datos. La eliminación de la columna física en la base de datos es un paso posterior y opcional que debe realizarse con cuidado, ya que puede afectar a otros sistemas."
      },
      {
        "id": 461,
        "contenido": "Delete the field from the product Custom Data Type (CDT) and perform a full resync of the record type.",
        "correcta": false,
        "explicacion": "INCORRECTO: Para un Record Type con sincronización de datos habilitada, los campos se gestionan directamente en la definición del Record Type, no en el CDT subyacente. Modificar solo el CDT no actualizaría correctamente la estructura del Record Type y podría causar errores de sincronización."
      },
      {
        "id": 462,
        "contenido": "Delete the column from the database table and perform a full resync of the record type.",
        "correcta": false,
        "explicacion": "INCORRECTO: Eliminar primero la columna de la base de datos causaría un error en la sincronización de datos, ya que el Record Type seguiría esperando encontrar ese campo. El orden correcto es desacoplar el campo en Appian primero."
      }
    ]
  },
  {
    "id": 109,
    "contenido": "You have a record action that should only be visible to certain users under conditions specified by an expression. How should you configure this?",
    "multiple": false,
    "respuestas": [
      {
        "id": 463,
        "contenido": "Set security on the process model.",
        "correcta": false,
        "explicacion": "INCORRECTO: La seguridad del proceso modelo controla quién puede iniciar o ver el proceso, pero no determina la visibilidad de una acción específica dentro de un registro (record action). La visibilidad de la acción en la interfaz debe configurarse en el propio objeto de la acción."
      },
      {
        "id": 464,
        "contenido": "Set permissions directly on the user object.",
        "correcta": false,
        "explicacion": "INCORRECTO: Los permisos en Appian no se gestionan asignándolos directamente a objetos de usuario individuales para casos de uso específicos como la visibilidad de una acción. Este control se configura en el objeto que se está protegiendo, utilizando expresiones que pueden evaluar atributos del usuario."
      },
      {
        "id": 465,
        "contenido": "Set security on the record action.",
        "correcta": true,
        "explicacion": "CORRECTO: La configuración de seguridad y visibilidad condicional para una 'Record Action' se define en las propiedades de la propia acción. Allí se puede establecer una expresión de seguridad que determine, en tiempo de ejecución y basándose en el usuario y el contexto, si la acción debe mostrarse o estar disponible."
      }
    ]
  },
  {
    "id": 110,
    "contenido": "Which Appian feature is used to automate repetitive manual tasks such as extracting data from a system for which there is no API?",
    "multiple": false,
    "respuestas": [
      {
        "id": 466,
        "contenido": "RPA",
        "correcta": true,
        "explicacion": "CORRECTO: RPA (Robotic Process Automation) es la funcionalidad de Appian diseñada específicamente para automatizar tareas manuales y repetitivas que se realizan en la interfaz de usuario de otros sistemas, como extraer datos de aplicaciones legadas que carecen de API."
      },
      {
        "id": 467,
        "contenido": "Process Mining",
        "correcta": false,
        "explicacion": "INCORRECTO: Process Mining es una herramienta de análisis que ayuda a descubrir, monitorear y mejorar procesos reales extrayendo conocimiento de los logs de los sistemas de información. No está diseñada para realizar la automatización de tareas de interfaz de usuario."
      },
      {
        "id": 468,
        "contenido": "Connected Systems",
        "correcta": false,
        "explicacion": "INCORRECTO: Los Connected Systems en Appian son conectores que permiten la integración mediante APIs con sistemas externos (como SAP, Salesforce, etc.). No se utilizan para interactuar con sistemas que carecen de API; para ese caso se usa RPA."
      }
    ]
  },
  {
    "id": 111,
    "contenido": "Review the following expression rule: union(ri!fruit, ri!vegetables) The rule inputs are configured as text arrays. What is the expected output?",
    "multiple": false,
    "respuestas": [
      {
        "id": 469,
        "contenido": "All items in ri!fruit followed by items in ri!vegetables, including duplicate values.",
        "correcta": false,
        "explicacion": "INCORRECTO: La función `union()` en Appian no simplemente concatena arrays. Su propósito específico es combinar conjuntos eliminando duplicados."
      },
      {
        "id": 470,
        "contenido": "Only items that are in both ri!fruit and ri!vegetables.",
        "correcta": false,
        "explicacion": "INCORRECTO: Obtener solo los elementos comunes a ambos arrays es la función de `intersection()`, no de `union()`."
      },
      {
        "id": 471,
        "contenido": "All items in ri!fruit and ri!vegetables combined, with duplicates removed.",
        "correcta": true,
        "explicacion": "CORRECTO: La función `union()` toma dos o más arrays y devuelve un solo array que contiene todos los elementos únicos presentes en cualquiera de los arrays de entrada, eliminando cualquier valor duplicado."
      }
    ]
  },
  {
    "id": 112,
    "contenido": "You need to pass data into a process from other parts of your Appian application. Which configuration is required in your process model?",
    "multiple": false,
    "respuestas": [
      {
        "id": 472,
        "contenido": "Toggle the Parameter field to 'True' on the configuration of a process variable.",
        "correcta": true,
        "explicacion": "CORRECTO: Para que un proceso pueda recibir datos de entrada al ser iniciado, se debe configurar una o más variables de proceso como parámetros. Esto se hace estableciendo la propiedad 'Parameter' de esa variable de proceso en 'True' en la pestaña de Data Management del modelo de proceso."
      },
      {
        "id": 473,
        "contenido": "Create process variables on the Data Management tab of Process Model Properties.",
        "correcta": false,
        "explicacion": "INCORRECTO: Aunque las variables de proceso se crean en la pestaña Data Management, solo crearlas no las hace parámetros de entrada. Para que sean parámetros, se debe marcar explícitamente el campo 'Parameter' como 'True' para cada variable que se desee usar como entrada."
      },
      {
        "id": 474,
        "contenido": "Add an interface as a Process Start Form.",
        "correcta": false,
        "explicacion": "INCORRECTO: Un Process Start Form es una interfaz para que los usuarios inicien un proceso manualmente, pero no es el mecanismo requerido para pasar datos desde otras partes de la aplicación (como desde una regla de expresión o desde otro proceso). El mecanismo estándar para ese flujo es usar variables de proceso configuradas como parámetros."
      }
    ]
  },
  {
    "id": 113,
    "contenido": "Which three objects can be a valid page in a Site? (Choose three.)",
    "multiple": true,
    "respuestas": [
      {
        "id": 475,
        "contenido": "Data store",
        "correcta": false,
        "explicacion": "INCORRECTO: Un Data Store Entity es una capa de abstracción sobre una base de datos para operaciones CRUD, pero no es un tipo de objeto que pueda configurarse directamente como una página en un Site de Appian."
      },
      {
        "id": 476,
        "contenido": "Report",
        "correcta": true,
        "explicacion": "CORRECTO: Un Report es uno de los tipos de objeto principales que pueden configurarse como una página dentro de un Site en Appian, permitiendo a los usuarios visualizar datos agregados."
      },
      {
        "id": 477,
        "contenido": "News Feed",
        "correcta": false,
        "explicacion": "INCORRECTO: Un 'News Feed' no es un tipo de objeto de aplicación independiente en Appian que pueda asignarse como página de un Site. Es una funcionalidad de Tempo."
      },
      {
        "id": 478,
        "contenido": "Process models with a start form",
        "correcta": true,
        "explicacion": "CORRECTO: Un modelo de proceso (Process Model) que tiene configurado un formulario de inicio (Start Form) puede publicarse como una página en un Site, permitiendo a los usuarios iniciar nuevos casos desde allí."
      },
      {
        "id": 479,
        "contenido": "Record type",
        "correcta": true,
        "explicacion": "CORRECTO: Un Record Type puede configurarse para tener una vista (View) que luego se publique como una página en un Site, permitiendo a los usuarios interactuar con los registros."
      }
    ]
  },
  {
    "id": 114,
    "contenido": "You cannot restrict access to Tempo.",
    "multiple": false,
    "respuestas": [
      {
        "id": 480,
        "contenido": "Change the user type from System Administrator to Basic.",
        "correcta": false,
        "explicacion": "INCORRECTO: Cambiar el tipo de usuario puede afectar a los permisos globales, pero no es el método específico para gestionar el acceso a Tempo. El acceso a Tempo se controla principalmente a través de la pertenencia a grupos, no del tipo de usuario básico."
      },
      {
        "id": 481,
        "contenido": "Remove the user from all application groups.",
        "correcta": false,
        "explicacion": "INCORRECTO: Esto podría afectar el acceso a aplicaciones específicas, pero el acceso a la funcionalidad central de Tempo está gobernado por un grupo de sistema específico, no por grupos de aplicaciones."
      },
      {
        "id": 482,
        "contenido": "You cannot restrict access to Tempo.",
        "correcta": false,
        "explicacion": "INCORRECTO: Esta afirmación es falsa. El acceso a Tempo SÍ puede restringirse mediante la configuración de seguridad del grupo de sistema 'Tempo Users'."
      },
      {
        "id": 483,
        "contenido": "Update the members and/or membership rules of the Tempo Users Group.",
        "correcta": true,
        "explicacion": "CORRECTO: El acceso a Tempo está controlado por el grupo de sistema llamado 'Tempo Users'. Para restringir o conceder acceso, un administrador debe modificar los miembros o las reglas de membresía de este grupo específico."
      }
    ]
  },
  {
    "id": 115,
    "contenido": "Appian held a Product Announcement Webinar yesterday, but you had a conflicting client meeting and could not attend. Your team lead asks you to review the newest release notes. Where is the best place to keep up with the latest release notes?",
    "multiple": false,
    "respuestas": [
      {
        "id": 484,
        "contenido": "Discussions Board",
        "correcta": false,
        "explicacion": "INCORRECTO: El Discussions Board dentro de la Appian Community es un foro para preguntas y debates entre usuarios, no el canal oficial y centralizado donde Appian publica las notas de versión de sus productos."
      },
      {
        "id": 485,
        "contenido": "The Appian Community",
        "correcta": true,
        "explicacion": "CORRECTO: La Appian Community (community.appian.com) es el centro oficial para todos los recursos de Appian, incluidas las notas de versión (release notes), documentación, blogs, y anuncios de productos. Es el primer lugar donde se publica esta información oficial."
      },
      {
        "id": 486,
        "contenido": "The Appian Developer Playbook",
        "correcta": false,
        "explicacion": "INCORRECTO: El Appian Playbook es una guía de mejores prácticas para el diseño y la arquitectura, no es una fuente para mantenerse al día con anuncios específicos de productos o notas de versión."
      },
      {
        "id": 487,
        "contenido": "Solutions Support Guide",
        "correcta": false,
        "explicacion": "INCORRECTO: El Solutions Support Guide es un recurso de documentación para la resolución de problemas y soporte, no el canal para anuncios de nuevas funciones o notas de versión."
      }
    ]
  },
  {
    "id": 116,
    "contenido": "Every business process, whether inside or outside of Appian, requires which of the following?",
    "multiple": false,
    "respuestas": [
      {
        "id": 488,
        "contenido": "Human interaction",
        "correcta": false,
        "explicacion": "INCORRECTO: Muchos procesos de negocio pueden estar completamente automatizados (por ejemplo, un flujo de aprobación basado en reglas) y no requieren interacción humana en cada instancia."
      },
      {
        "id": 489,
        "contenido": "Defined steps",
        "correcta": true,
        "explicacion": "CORRECTO: Por definición, un proceso de negocio es una serie de pasos o actividades estructuradas realizadas para lograr un objetivo específico. Por lo tanto, tener pasos definidos es el elemento fundamental y requerido para cualquier proceso."
      },
      {
        "id": 490,
        "contenido": "Reporting",
        "correcta": false,
        "explicacion": "INCORRECTO: Aunque la generación de informes es una práctica recomendada para monitorear y mejorar los procesos, no es un requisito intrínseco para que exista un proceso de negocio. Un proceso puede ejecutarse sin un componente de informe."
      },
      {
        "id": 491,
        "contenido": "Automation",
        "correcta": false,
        "explicacion": "INCORRECTO: La automatización es una forma de ejecutar procesos de manera eficiente, pero no es un requisito. Los procesos de negocio pueden ser ejecutados manualmente (como procesos en papel o tareas ad-hoc)."
      }
    ]
  },
  {
    "id": 117,
    "contenido": "A client requested a feature that is exceptionally specific and uncommon. You begin by gathering research to help determine how such a feature could be implemented, but no documentation is available. What should you do next?",
    "multiple": false,
    "respuestas": [
      {
        "id": 492,
        "contenido": "Create a Support Case.",
        "correcta": true,
        "explicacion": "CORRECTO: Cuando te enfrentas a un requisito complejo y sin documentación clara, y has agotado la investigación inicial, el siguiente paso apropiado es crear un caso de soporte con el equipo de Soporte de Appian. Ellos tienen acceso a recursos internos y experiencia para guiarte en escenarios complejos o poco comunes."
      },
      {
        "id": 493,
        "contenido": "Check The Appian Academy.",
        "correcta": false,
        "explicacion": "INCORRECTO: Appian Academy ofrece cursos de formación generales y de certificación. Es poco probable que cubra características 'excepcionalmente específicas y poco comunes' para las que no existe documentación pública."
      },
      {
        "id": 494,
        "contenido": "Review the Appian Playbook.",
        "correcta": false,
        "explicacion": "INCORRECTO: El Appian Playbook es excelente para las mejores prácticas de diseño y arquitectura, pero no es una guía de resolución de problemas para casos de uso específicos y no documentados."
      },
      {
        "id": 495,
        "contenido": "Ask the Appian Community.",
        "correcta": false,
        "explicacion": "INCORRECTO: Si bien la comunidad es un gran recurso, para un problema muy específico y no documentado, el camino oficial y más eficiente es contactar al soporte directo de Appian, que puede investigar más a fondo y proporcionar una respuesta autorizada."
      }
    ]
  },
  {
    "id": 118,
    "contenido": "At what stage are you most likely to regularly refine the backlog?",
    "multiple": false,
    "respuestas": [
      {
        "id": 496,
        "contenido": "Optimize",
        "correcta": false,
        "explicacion": "INCORRECTO: La fase 'Optimize' de la metodología de entrega de Appian se centra en mejorar un proceso en ejecución, no en la planificación continua del trabajo futuro (refinamiento del backlog)."
      },
      {
        "id": 497,
        "contenido": "Release",
        "correcta": false,
        "explicacion": "INCORRECTO: La fase 'Release' se centra en llevar la solución a producción y realizar pruebas de aceptación. El refinamiento activo del backlog de desarrollo generalmente disminuye en esta etapa."
      },
      {
        "id": 498,
        "contenido": "Build",
        "correcta": true,
        "explicacion": "CORRECTO: La fase 'Build' es cuando el equipo de desarrollo trabaja en sprints. El refinamiento regular del backlog (grooming) es una ceremonia ágil clave durante esta fase para priorizar, aclarar y estimar los elementos del backlog para los próximos sprints."
      },
      {
        "id": 499,
        "contenido": "Initiate",
        "correcta": false,
        "explicacion": "INCORRECTO: La fase 'Initiate' se trata de definir la visión, el alcance y el backlog inicial de alto nivel. El 'refinamiento regular' es una actividad continua que ocurre una vez que el desarrollo está en marcha, típicamente en la fase 'Build'."
      }
    ]
  },
  {
    "id": 119,
    "contenido": "A feature is being deployed to the test environment. In which environment is unit testing performed for the feature?",
    "multiple": false,
    "respuestas": [
      {
        "id": 500,
        "contenido": "Upgrade",
        "correcta": false,
        "explicacion": "INCORRECTO: Un entorno 'Upgrade' se utiliza para probar actualizaciones de versiones del software Appian, no para realizar pruebas unitarias del código de una característica específica desarrollada por un equipo."
      },
      {
        "id": 501,
        "contenido": "Development",
        "correcta": true,
        "explicacion": "CORRECTO: Las pruebas unitarias son realizadas por los desarrolladores para verificar la funcionalidad individual de sus componentes de código. Esta actividad se realiza en el entorno de 'Development', antes de que el código se integre y promueva a entornos superiores como Test o Staging."
      },
      {
        "id": 502,
        "contenido": "Production",
        "correcta": false,
        "explicacion": "INCORRECTO: El entorno de 'Production' es el entorno en vivo utilizado por los usuarios finales. Nunca se realizan pruebas unitarias en producción; este entorno es para el código probado y aprobado."
      },
      {
        "id": 503,
        "contenido": "Staging",
        "correcta": false,
        "explicacion": "INCORRECTO: El entorno de 'Staging' se utiliza para pruebas de integración, rendimiento y aceptación que imitan de cerca la producción. Las pruebas unitarias, que son más granulares, ya deberían haberse completado en fases anteriores (Desarrollo)."
      }
    ]
  },
  {
    "id": 120,
    "contenido": "Who is responsible for estimating the level of effort for Product Backlog items?",
    "multiple": false,
    "respuestas": [
      {
        "id": 504,
        "contenido": "Product Owner",
        "correcta": false,
        "explicacion": "INCORRECTO: El Product Owner es responsable de priorizar el backlog y definir el 'qué' (el valor/necesidad), pero no de estimar el 'cómo' o el esfuerzo técnico. Ellos pueden proporcionar claridad sobre los requisitos para ayudar en la estimación."
      },
      {
        "id": 505,
        "contenido": "Testers",
        "correcta": false,
        "explicacion": "INCORRECTO: Los testers pueden estimar el esfuerzo de las actividades de prueba, pero la estimación del nivel de esfuerzo general para desarrollar un ítem del backlog recae principalmente en quienes lo construirán."
      },
      {
        "id": 506,
        "contenido": "Developers",
        "correcta": true,
        "explicacion": "CORRECTO: En Scrum y metodologías ágiles similares, los desarrolladores (el equipo de desarrollo) son los responsables de estimar el esfuerzo requerido para completar los ítems del Product Backlog, ya que ellos tienen el mejor conocimiento técnico para juzgar la complejidad del trabajo."
      },
      {
        "id": 507,
        "contenido": "Scrum Master",
        "correcta": false,
        "explicacion": "INCORRECTO: El Scrum Master facilita el proceso de estimación (como la planificación de poker), pero no estima el trabajo. Su rol es asegurar que la ceremonia se lleve a cabo de manera efectiva, no proporcionar estimaciones."
      }
    ]
  },
  {
    "id": 121,
    "contenido": "During what stage of the Appian Delivery Methodology does story-pointing regularly occur?",
    "multiple": false,
    "respuestas": [
      {
        "id": 508,
        "contenido": "Build",
        "correcta": true,
        "explicacion": "CORRECTO: El 'story-pointing' es una actividad de planificación ágil que ocurre regularmente durante los ciclos de desarrollo activo, es decir, en la fase 'Build' de la metodología Appian. Aquí es donde el equipo refina y estima las historias de usuario para los sprints."
      },
      {
        "id": 509,
        "contenido": "Optimize",
        "correcta": false,
        "explicacion": "INCORRECTO: La fase 'Optimize' se centra en mejorar un proceso existente, no en el desarrollo de nuevas funcionalidades donde se realizaría la estimación (story-pointing) de nuevas historias."
      },
      {
        "id": 510,
        "contenido": "Release",
        "correcta": false,
        "explicacion": "INCORRECTO: La fase 'Release' se centra en actividades de preparación para producción y pruebas de aceptación. La estimación de historias nuevas (story-pointing) no es una actividad regular en esta fase."
      },
      {
        "id": 511,
        "contenido": "Initiate",
        "correcta": false,
        "explicacion": "INCORRECTO: En la fase 'Initiate', se define un backlog de alto nivel y se pueden realizar estimaciones iniciales muy aproximadas (como T-shirt sizing), pero el 'story-pointing' regular y detallado ocurre durante la ejecución en la fase 'Build'."
      }
    ]
  },
  {
    "id": 122,
    "contenido": "In the scrum lifecycle of a project, when should the team agree on the requirements for the Definition of Done?",
    "multiple": false,
    "respuestas": [
      {
        "id": 512,
        "contenido": "Before getting started on the project",
        "correcta": false,
        "explicacion": "INCORRECTO: La Definición de Terminado (DoD) puede ser refinada a lo largo del proyecto. Si bien es útil tener una idea inicial, el equipo necesita experiencia en los sprints para acordar criterios realistas y específicos, lo que suele ocurrir durante la retrospectiva."
      },
      {
        "id": 513,
        "contenido": "During the sprint retrospective",
        "correcta": true,
        "explicacion": "CORRECTO: La retrospectiva del sprint es la ceremonia ágil dedicada a reflexionar y mejorar el proceso. Es el momento ideal para que el equipo discuta y acuerde ajustes a los criterios de la Definición de Terminado (DoD) basándose en lo aprendido en el sprint anterior."
      },
      {
        "id": 514,
        "contenido": "During the backlog refinement",
        "correcta": false,
        "explicacion": "INCORRECTO: El refinamiento del backlog (grooming) se centra en clarificar y estimar elementos futuros del backlog, no en revisar o acordar los criterios de proceso del equipo como la Definición de Terminado."
      },
      {
        "id": 515,
        "contenido": "After the sprint planning",
        "correcta": false,
        "explicacion": "INCORRECTO: La planificación del sprint determina 'qué' se hará. La Definición de Terminado es un estándar de 'cómo' se hará el trabajo y su calidad. Debe estar acordada *antes* de que comience el trabajo del sprint, no después de planificarlo."
      }
    ]
  },
  {
    "id": 123,
    "contenido": "You need to query some data from the database using more than one filter. Which parameter for a!query() should you use to define your filters?",
    "multiple": false,
    "respuestas": [
      {
        "id": 516,
        "contenido": "filter",
        "correcta": false,
        "explicacion": "INCORRECTO: El parámetro 'filter' de `a!query()` se utiliza para un *único* criterio de filtro. Para aplicar múltiples filtros combinados con operadores lógicos (AND, OR), se necesita una estructura más compleja."
      },
      {
        "id": 517,
        "contenido": "logicalExpression",
        "correcta": true,
        "explicacion": "CORRECTO: El parámetro 'logicalExpression' de `a!query()` está diseñado específicamente para construir expresiones de filtro complejas que combinan múltiples condiciones utilizando operadores lógicos como `and()`, `or()`, y `not()`."
      },
      {
        "id": 518,
        "contenido": "aggregation",
        "correcta": false,
        "explicacion": "INCORRECTO: El parámetro 'aggregation' se utiliza para realizar operaciones como SUM, COUNT, AVG sobre los datos consultados, no para definir filtros."
      },
      {
        "id": 519,
        "contenido": "selection",
        "correcta": false,
        "explicacion": "INCORRECTO: El parámetro 'selection' se utiliza para especificar qué campos o columnas se devolverán en los resultados de la consulta, no para filtrar qué filas se incluyen."
      }
    ]
  },
  {
    "id": 124,
    "contenido": "A client asks you to store work location information for their employees. The client mentions that multiple employees may be assigned to multiple work locations. Which type of database relationship is the client describing?",
    "multiple": false,
    "respuestas": [
      {
        "id": 520,
        "contenido": "One-to-Many (1:N)",
        "correcta": false,
        "explicacion": "INCORRECTO: Una relación Uno-a-Muitos significaría que un empleado puede tener muchas ubicaciones, pero una ubicación pertenece a un solo empleado. El escenario describe una interconexión más compleja."
      },
      {
        "id": 521,
        "contenido": "Many-to-One (N:1)",
        "correcta": false,
        "explicacion": "INCORRECTO: Esto es esencialmente lo mismo que Uno-a-Muitos, visto desde el otro lado (Muchos empleados en una ubicación). No captura la idea de que *ambos* lados puedan tener múltiples asociaciones."
      },
      {
        "id": 522,
        "contenido": "Many-to-Many (M:N)",
        "correcta": true,
        "explicacion": "CORRECTO: El cliente describe una relación Muchos-a-Muchos: múltiples empleados pueden estar asignados a múltiples ubicaciones, y cada ubicación puede tener múltiples empleados. Esto normalmente se implementa en una base de datos con una tabla de unión (junction table)."
      },
      {
        "id": 523,
        "contenido": "One-to-One (1:1)",
        "correcta": false,
        "explicacion": "INCORRECTO: Una relación Uno-a-Uno significaría que cada empleado está vinculado a exactamente una ubicación, y cada ubicación a exactamente un empleado, lo que no coincide con la descripción de 'múltiples... a múltiples'."
      }
    ]
  },
  {
    "id": 125,
    "contenido": "You need to update the table structure in the database, and then update the related CDT in Appian to publish the data store entity. Column names in the database and the CDT are implemented using different naming conventions. Which statement is appropriate in this scenario?",
    "multiple": false,
    "respuestas": [
      {
        "id": 524,
        "contenido": "You can update the CDT columns in Appian Designer, or update the CDT-related XSD and create a new version from that.",
        "correcta": false,
        "explicacion": "INCORRECTO: Esta opción describe métodos para actualizar un CDT, pero no aborda el problema central de tener convenciones de nombres diferentes entre la base de datos y el CDT. Simplemente actualizar el CDT no resuelve el desajuste de nombres."
      },
      {
        "id": 525,
        "contenido": "You must update the CDT columns in Appian Designer.",
        "correcta": false,
        "explicacion": "INCORRECTO: Actualizar manualmente los nombres de las columnas en el CDT para que coincidan con la base de datos es una posibilidad, pero no es el *único* método, como sugiere la palabra 'must'."
      },
      {
        "id": 526,
        "contenido": "You don’t need to make any manual changes. Appian automatically updates the CDT according to database changes.",
        "correcta": false,
        "explicacion": "INCORRECTO: Appian no sincroniza automáticamente los cambios de estructura de la base de datos con los CDTs existentes. Los CDTs deben actualizarse manualmente para reflejar los cambios en la base de datos, especialmente si los nombres son diferentes."
      },
      {
        "id": 527,
        "contenido": "You must update the CDT-related XSD and create a new version from that.",
        "correcta": true,
        "explicacion": "CORRECTO: Cuando los nombres de las columnas en la base de datos y el CDT no coinciden, el método apropiado es actualizar el archivo XSD (esquema XML) que define la estructura del CDT para que refleje con precisión los nombres de las columnas de la base de datos, y luego importar ese XSD para crear una nueva versión del CDT en Appian. Esto asegura el mapeo correcto."
      }
    ]
  },
  {
    "id": 126,
    "contenido": "During User Acceptance Testing (UAT), a tester operating in the test environment asks you to change a data point in one of the tables. In the development environment, you navigate to the database and adjust the data point that the tester described. What is the issue with the steps taken?",
    "multiple": false,
    "respuestas": [
      {
        "id": 528,
        "contenido": "According to Appian best practices, changes should not be made directly in a database.",
        "correcta": true,
        "explicacion": "CORRECTO: Las mejores prácticas de Appian desaconsejan hacer cambios directos en las bases de datos subyacentes porque elude el control de versiones, la auditoría y los flujos de proceso establecidos. Los cambios en los datos deben realizarse a través de la aplicación (interfaces, procesos) o, si es necesario, con gran precaución y siguiendo procedimientos controlados."
      },
      {
        "id": 529,
        "contenido": "The change to the database was made in the wrong environment.",
        "correcta": false,
        "explicacion": "INCORRECTO: Aunque el cambio se solicitó para el entorno de prueba, el problema principal no es el entorno, sino el *método*. Incluso si se hiciera en el entorno correcto, modificar directamente la base de datos no sigue las mejores prácticas de Appian."
      },
      {
        "id": 530,
        "contenido": "As an associate, you should not be communicating or coordinating directly with testers.",
        "correcta": false,
        "explicacion": "INCORRECTO: La comunicación directa entre desarrolladores y testers es común y a menudo necesaria durante las pruebas para aclarar requisitos o informar de errores. No es el problema principal en este escenario."
      },
      {
        "id": 531,
        "contenido": "The change was made without formally seeking approval from DevOps.",
        "correcta": false,
        "explicacion": "INCORRECTO: Si bien la aprobación puede ser parte de un proceso controlado, el problema fundamental es la violación de las mejores prácticas al manipular la base de datos directamente, independientemente de la aprobación."
      }
    ]
  },
  {
    "id": 127,
    "contenido": "What is a Foreign Key?",
    "multiple": false,
    "respuestas": [
      {
        "id": 532,
        "contenido": "The key that cannot be used in any other table.",
        "correcta": false,
        "explicacion": "INCORRECTO: Esta descripción se asemeja más a la de una clave única o primaria que tiene que ser única en su tabla, pero no define una Foreign Key (clave foránea)."
      },
      {
        "id": 533,
        "contenido": "The key that joins two tables together.",
        "correcta": true,
        "explicacion": "CORRECTO: Una Foreign Key (clave foránea) es un campo (o conjunto de campos) en una tabla que hace referencia a la Primary Key (clave primaria) en otra tabla. Esta referencia es lo que crea la relación o 'join' entre las dos tablas en una base de datos relacional."
      },
      {
        "id": 534,
        "contenido": "The key that uniquely identifies a record.",
        "correcta": false,
        "explicacion": "INCORRECTO: Esto describe una Primary Key (clave primaria), no una Foreign Key. La Foreign Key hace referencia a esa identificación única en otra tabla."
      },
      {
        "id": 535,
        "contenido": "The key that uniquely identifies a record when joined with another column.",
        "correcta": false,
        "explicacion": "INCORRECTO: Esto describe una clave compuesta (composite key), no necesariamente una Foreign Key. Una Foreign Key puede ser parte de una clave compuesta, pero su propósito principal es establecer la relación, no la identificación única por sí misma."
      }
    ]
  },
  {
    "id": 128,
    "contenido": "You need to edit data in a table. You are currently using the following statement: INSERT INTO product (productId, productName) VALUES (3, \"App1e\"); What is the issue?",
    "multiple": false,
    "respuestas": [
      {
        "id": 536,
        "contenido": "You should be using an UPDATE statement.",
        "correcta": true,
        "explicacion": "CORRECTO: El comando `INSERT` agrega una nueva fila a la tabla. Para modificar una fila existente (editar datos), se debe utilizar el comando `UPDATE`, especificando qué fila(s) cambiar con una cláusula `WHERE` y qué nuevos valores asignar."
      },
      {
        "id": 537,
        "contenido": "You forgot the WHERE clause in your statement.",
        "correcta": false,
        "explicacion": "INCORRECTO: Aunque una cláusula `WHERE` es crucial para un `UPDATE`, el problema principal aquí es que se está usando el comando SQL incorrecto por completo (`INSERT` en lugar de `UPDATE`)."
      },
      {
        "id": 538,
        "contenido": "You should be using a CREATE statement.",
        "correcta": false,
        "explicacion": "INCORRECTO: `CREATE` se utiliza para crear nuevas estructuras de base de datos (como tablas), no para editar datos dentro de una tabla existente."
      },
      {
        "id": 539,
        "contenido": "You should be using an EDIT statement.",
        "correcta": false,
        "explicacion": "INCORRECTO: No existe un comando SQL estándar llamado `EDIT`. Los comandos estándar para manipulación de datos son `INSERT`, `UPDATE`, y `DELETE`."
      }
    ]
  },
  {
    "id": 129,
    "contenido": "When using \"a!pagingInfo()\" within \"a!queryEntity()\", which batch size value will return all items?",
    "multiple": false,
    "respuestas": [
      {
        "id": 540,
        "contenido": "-1",
        "correcta": true,
        "explicacion": "CORRECTO: En la función `a!queryEntity()` de Appian, establecer el parámetro `batchSize` dentro de `a!pagingInfo()` en `-1` es una convención especial que indica a la consulta que devuelva *todos* los elementos que coincidan con los filtros, sin aplicar paginación por lotes."
      },
      {
        "id": 541,
        "contenido": "0",
        "correcta": false,
        "explicacion": "INCORRECTO: Un valor de `0` para el tamaño de lote (`batchSize`) generalmente no es válido o podría interpretarse como 'sin elementos'. No es la forma estándar de solicitar todos los elementos en Appian."
      },
      {
        "id": 542,
        "contenido": "null",
        "correcta": false,
        "explicacion": "INCORRECTO: Dejar el valor como `null` o no especificarlo hará que la consulta utilice el tamaño de lote por defecto, que es un número finito (p. ej., 50). No devolverá necesariamente todos los elementos a la vez."
      },
      {
        "id": 543,
        "contenido": "500",
        "correcta": false,
        "explicacion": "INCORRECTO: Un valor como `500` limitará los resultados a 500 elementos por lote. Si hay más de 500 elementos, la consulta necesitaría paginación para recuperarlos todos, por lo que no devuelve 'todos' los elementos en una sola llamada si se supera ese número."
      }
    ]
  },
  {
    "id": 130,
    "contenido": "You have data from two unrelated tables. Which Appian objects can easily relate data from these two tables?",
    "multiple": false,
    "respuestas": [
      {
        "id": 544,
        "contenido": "Process Models",
        "correcta": false,
        "explicacion": "INCORRECTO: Los Process Models orquestan flujos de trabajo y tareas, pero no están diseñados específicamente para definir relaciones de datos entre tablas de base de datos no relacionadas."
      },
      {
        "id": 545,
        "contenido": "Expression Rules",
        "correcta": false,
        "explicacion": "INCORRECTO: Las Expression Rules pueden contener lógica para manipular datos, incluida la combinación de conjuntos de datos, pero no son 'objetos' que definan estructuralmente una relación persistente entre tablas."
      },
      {
        "id": 546,
        "contenido": "Custom Data Types",
        "correcta": true,
        "explicacion": "CORRECTO: Un Custom Data Type (CDT) puede modelar datos complejos. Puedes crear un CDT que incluya campos que hagan referencia a otros CDTs o tipos integrados, definiendo así una relación de datos. Este CDT puede entonces ser utilizado por Record Types o Expression Rules para trabajar con los datos relacionados de las dos tablas de manera unificada."
      },
      {
        "id": 547,
        "contenido": "Record Types",
        "correcta": false,
        "explicacion": "INCORRECTO: Un Record Type está típicamente vinculado a una sola fuente de datos principal (una tabla, un proceso, etc.). Aunque puede incluir datos de relaciones, la definición estructural de la relación en sí a menudo se modela mejor en el CDT subyacente."
      }
    ]
  },
  {
    "id": 131,
    "contenido": "What is a way to start a process from an interface?",
    "multiple": false,
    "respuestas": [
      {
        "id": 548,
        "contenido": "Start Process Smart Service",
        "correcta": false,
        "explicacion": "INCORRECTO: El 'Start Process Smart Service' es un nodo que se utiliza *dentro* de un modelo de proceso para iniciar otro proceso como subproceso. No es un componente de interfaz de usuario."
      },
      {
        "id": 549,
        "contenido": "Process Start Event",
        "correcta": false,
        "explicacion": "INCORRECTO: Un 'Process Start Event' es un nodo dentro de un modelo de proceso BPMN que marca el inicio del flujo del proceso. No es algo que se coloque o configure en una interfaz de usuario (SAIL)."
      },
      {
        "id": 550,
        "contenido": "Process Messaging",
        "correcta": false,
        "explicacion": "INCORRECTO: 'Process Messaging' se refiere a un mecanismo para la comunicación entre procesos mediante mensajes (intermediate events). No es un método directo para que un usuario inicie un proceso desde una interfaz."
      },
      {
        "id": 551,
        "contenido": "Start Process Link",
        "correcta": true,
        "explicacion": "CORRECTO: Un 'Start Process Link' es un componente de interfaz SAIL (`a!startProcessLink`) que proporciona un enlace o botón en una interfaz. Cuando un usuario hace clic en él, inicia un nuevo proceso modelo con los parámetros configurados."
      }
    ]
  },
  {
    "id": 132,
    "contenido": "An end-user needs to trigger a process model and act on the user task assigned to them. What is the minimum security permission needed?",
    "multiple": false,
    "respuestas": [
      {
        "id": 552,
        "contenido": "Viewer",
        "correcta": false,
        "explicacion": "INCORRECTO: El permiso 'Viewer' en un proceso modelo generalmente solo permite ver instancias del proceso, pero no iniciar nuevas instancias ni actuar sobre tareas de usuario asignadas."
      },
      {
        "id": 553,
        "contenido": "Initiator",
        "correcta": true,
        "explicacion": "CORRECTO: El permiso 'Initiator' es el permiso mínimo necesario para que un usuario pueda *iniciar* (trigger) un nuevo proceso modelo. Este permiso también suele ser suficiente para actuar sobre las tareas de usuario que les son asignadas dentro de las instancias que iniciaron o en las que están involucrados."
      },
      {
        "id": 554,
        "contenido": "Editor",
        "correcta": false,
        "explicacion": "INCORRECTO: 'Editor' es un permiso más alto que 'Initiator'. Aunque también permitiría al usuario realizar las acciones, no es el *mínimo* requerido. 'Initiator' es suficiente para el caso de uso descrito."
      },
      {
        "id": 555,
        "contenido": "Manager",
        "correcta": false,
        "explicacion": "INCORRECTO: 'Manager' es un permiso administrativo que incluye la capacidad de cancelar procesos, etc. Es mucho más de lo necesario para simplemente iniciar un proceso y trabajar en una tarea asignada."
      }
    ]
  },
  {
    "id": 133,
    "contenido": "Which scenario would most commonly use a related action?",
    "multiple": false,
    "respuestas": [
      {
        "id": 556,
        "contenido": "Running a process every Friday morning that sends a reminder email to employees who haven’t submitted their timesheet",
        "correcta": false,
        "explicacion": "INCORRECTO: Este es un escenario de automatización programada (usando un timer event en un proceso). No requiere una acción específica relacionada con un registro individual iniciada por un usuario, que es el propósito de un 'related action'."
      },
      {
        "id": 557,
        "contenido": "Starting a company-wide annual performance review process that tasks every employee to fill out a self-assessment",
        "correcta": false,
        "explicacion": "INCORRECTO: Este es un proceso masivo iniciado a gran escala (posiblemente desde una interfaz administrativa o mediante integración). No es una acción contextual específica para un registro individual."
      },
      {
        "id": 558,
        "contenido": "Resetting the password on an employee who has forgotten their login credential",
        "correcta": false,
        "explicacion": "INCORRECTO: Restablecer una contraseña suele ser una función administrativa gestionada a través de configuraciones de sistema o interfaces de administración de usuarios, no típicamente un 'related action' en un registro de negocio estándar."
      },
      {
        "id": 559,
        "contenido": "Updating the status of an IT service request to \"Closed\", because an IT response is not necessary",
        "correcta": true,
        "explicacion": "CORRECTO: Este es un caso de uso clásico para un 'related action'. Un usuario (por ejemplo, el solicitante o un administrador) está viendo un registro específico (una solicitud de servicio de TI) y necesita realizar una acción contextual sobre ese registro en particular (cerrarlo). Los 'related actions' están diseñados exactamente para esto: exponer procesos o funciones específicas en el contexto de un objeto de registro."
      }
    ]
  },
  {
    "id": 134,
    "contenido": "Your team lead mentions that the environment has been performing very slow lately, and the reason is unclear. A process model is consuming a lot of memory, and this could be causing the slowness in the environment. What are two valid solutions to this issue? (Choose two.)",
    "multiple": true,
    "respuestas": [
      {
        "id": 560,
        "contenido": "Manually delete processes that have already been completed or cancelled so it does not cause further performance issues.",
        "correcta": false,
        "explicacion": "INCORRECTO: La eliminación manual de instancias de proceso es una solución reactiva, temporal y que no escala. No es una 'solución válida' de mejores prácticas. Appian proporciona mecanismos automatizados y configurables para esto."
      },
      {
        "id": 561,
        "contenido": "Configure the automatic process clean up so that it does not automatically clean-up processes.",
        "correcta": false,
        "explicacion": "INCORRECTO: Deshabilitar la limpieza automática de procesos *empeoraría* el problema de rendimiento, ya que permitiría que las instancias completadas se acumularan indefinidamente, consumiendo más memoria y recursos."
      },
      {
        "id": 562,
        "contenido": "Delete processes after completion or cancellation by configuring the Data Management tab in the Process Model Properties.",
        "correcta": true,
        "explicacion": "CORRECTO: Esta es una solución válida. En las propiedades del modelo de proceso, en la pestaña 'Data Management', se puede configurar la opción 'Process Cleanup' para eliminar automáticamente las instancias después de que se completen o cancelen, evitando su acumulación."
      },
      {
        "id": 563,
        "contenido": "Archive processes after completion or cancellation by configuring the Data Management tab in the Process Model Properties.",
        "correcta": true,
        "explicacion": "CORRECTO: Esta es otra solución válida y a menudo preferida. La archivación (en lugar de la eliminación) mueve los datos de las instancias de proceso completadas fuera de las tablas operativas principales a tablas de archivado, reduciendo la carga en la base de datos en vivo mientras se conservan los datos para posibles auditorías o informes."
      }
    ]
  },
  {
    "id": 135,
    "contenido": "When setting the assignment of a User Input task, you need the task to be assigned to the person who started the process. Which option is appropriate to use to accomplish this goal?",
    "multiple": false,
    "respuestas": [
      {
        "id": 564,
        "contenido": "pp!name",
        "correcta": false,
        "explicacion": "INCORRECTO: `pp!name` hace referencia al nombre del participante actual de la tarea, no al iniciador del proceso. No es una variable que almacene quién inició el proceso."
      },
      {
        "id": 565,
        "contenido": "pm!creator",
        "correcta": false,
        "explicacion": "INCORRECTO: `pm!creator` no es una variable estándar disponible en Appian para referirse al iniciador del proceso dentro del contexto de un modelo de proceso."
      },
      {
        "id": 566,
        "contenido": "pp!initiator",
        "correcta": true,
        "explicacion": "CORRECTO: `pp!initiator` es una variable de proceso predefinida en Appian que almacena el usuario que inició la instancia actual del proceso. Es la variable correcta para usar cuando se necesita asignar una tarea a la persona que inició el proceso."
      },
      {
        "id": 567,
        "contenido": "pm!name",
        "correcta": false,
        "explicacion": "INCORRECTO: `pm!name` probablemente se refiere al nombre del modelo de proceso en sí, no a un usuario. No contiene información sobre quién inició una instancia específica."
      }
    ]
  },
  {
    "id": 136,
    "contenido": "In a process model, you want all outgoing flows to start once all incoming flows have reached the node. Which gateway is most appropriate to use?",
    "multiple": false,
    "respuestas": [
      {
        "id": 568,
        "contenido": "NAND",
        "correcta": false,
        "explicacion": "INCORRECTO: 'NAND' (Not AND) es un operador lógico, no un tipo de gateway estandarizado en la notación BPMN utilizada en Appian para modelar procesos."
      },
      {
        "id": 569,
        "contenido": "OR",
        "correcta": false,
        "explicacion": "INCORRECTO: Un gateway 'OR' (inclusivo) activa un flujo saliente cuando se cumple *al menos una* de las condiciones de las secuencias entrantes. No requiere que *todas* las entradas hayan llegado."
      },
      {
        "id": 570,
        "contenido": "XOR",
        "correcta": false,
        "explicacion": "INCORRECTO: Un gateway 'XOR' (exclusivo) dirige el flujo por *exactamente una* de las rutas salientes basándose en una condición. No está diseñado para sincronizar múltiples flujos entrantes."
      },
      {
        "id": 571,
        "contenido": "AND",
        "correcta": true,
        "explicacion": "CORRECTO: Un gateway 'AND' (también llamado 'Parallel Gateway') se utiliza para sincronización. Cuando se usa para unir flujos (como un merge), espera a que *todas* las secuencias entrantes lleguen antes de continuar por el flujo saliente único. Esto es exactamente lo que describe el requisito."
      }
    ]
  },
  {
    "id": 137,
    "contenido": "In addition to initiating the process model, what other permission is required to execute the Write to Data Store Entity smart service?",
    "multiple": false,
    "respuestas": [
      {
        "id": 572,
        "contenido": "Viewer permission to the data store",
        "correcta": false,
        "explicacion": "INCORRECTO: El permiso 'Viewer' en un Data Store Entity solo permite leer datos, no escribir en ellos. Para ejecutar el Write to Data Store Entity smart service se necesita un permiso de nivel superior."
      },
      {
        "id": 573,
        "contenido": "Viewer permission to a constant that points to the data store entity",
        "correcta": false,
        "explicacion": "INCORRECTO: Los permisos sobre una constante que contiene una referencia al Data Store Entity no afectan a los permisos sobre el Data Store Entity en sí. Los permisos se verifican en el objeto de destino (el Data Store)."
      },
      {
        "id": 574,
        "contenido": "Admin permission to the CDT",
        "correcta": false,
        "explicacion": "INCORRECTO: Los permisos sobre el Custom Data Type (CDT) subyacente no controlan la capacidad de escribir en el Data Store Entity. La seguridad se gestiona a nivel del Data Store Entity en sí."
      },
      {
        "id": 575,
        "contenido": "Editor permission to the data store",
        "correcta": true,
        "explicacion": "CORRECTO: Para que un proceso (o un usuario a través de un proceso) pueda escribir datos en un Data Store Entity utilizando el smart service correspondiente, el contexto de seguridad del proceso debe tener permisos de 'Editor' (o superior) sobre ese Data Store Entity específico."
      }
    ]
  },
  {
    "id": 138,
    "contenido": "When creating a process model, you need an incoming path to continue down one or more paths based on the logic you set. Which gateway node should you use?",
    "multiple": false,
    "respuestas": [
      {
        "id": 576,
        "contenido": "XOR",
        "correcta": false,
        "explicacion": "INCORRECTO: Un gateway 'XOR' (exclusivo) dirige el flujo por *exactamente una* de las rutas salientes. No permite que el flujo continúe por 'una o más' rutas simultáneamente."
      },
      {
        "id": 577,
        "contenido": "AND",
        "correcta": false,
        "explicacion": "INCORRECTO: Un gateway 'AND' (paralelo) dirige el flujo por *todas* las rutas salientes de manera simultánea, sin basarse en una lógica evaluada. No elige rutas basadas en condiciones."
      },
      {
        "id": 578,
        "contenido": "XAND",
        "correcta": false,
        "explicacion": "INCORRECTO: 'XAND' no es un tipo de gateway estandarizado en la notación BPMN utilizada por Appian."
      },
      {
        "id": 579,
        "contenido": "OR",
        "correcta": true,
        "explicacion": "CORRECTO: Un gateway 'OR' (inclusivo) es el apropiado. Evalúa las condiciones en cada ruta saliente y permite que el flujo continúe por *cualquier* ruta cuya condición sea verdadera (una o más), basándose en la lógica que configures."
      }
    ]
  },
  {
    "id": 139,
    "contenido": "In a process model, a user input task is configured as a Quick Task. What happens when the process is started?",
    "multiple": false,
    "respuestas": [
      {
        "id": 580,
        "contenido": "Assignees can reassign the task to someone else.",
        "correcta": false,
        "explicacion": "INCORRECTO: La capacidad de reasignar una tarea está controlada por la configuración de 'Task Actions' de la tarea (como 'Reassign'), no por el hecho de que sea una 'Quick Task'."
      },
      {
        "id": 581,
        "contenido": "The task automatically has priority over other active tasks.",
        "correcta": true,
        "explicacion": "CORRECTO: Una característica clave de una 'Quick Task' en Appian es que, cuando se configura, se le da prioridad en la bandeja de entrada del usuario (como en Tempo). Está diseñada para tareas que requieren atención inmediata y se mostrará por encima de las tareas estándar."
      },
      {
        "id": 582,
        "contenido": "The user only has one hour to complete the task form.",
        "correcta": false,
        "explicacion": "INCORRECTO: Las Quick Tasks no tienen un límite de tiempo predefinido de una hora. Los plazos se configuran mediante 'Timers' en el modelo de proceso, no por el tipo de tarea 'Quick'."
      },
      {
        "id": 583,
        "contenido": "The task will not show up on Tempo.",
        "correcta": false,
        "explicacion": "INCORRECTO: Por el contrario, las Quick Tasks están diseñadas específicamente para mostrarse prominentemente en Tempo (y en otras bandejas de entrada) para llamar la atención del usuario."
      }
    ]
  },
  {
    "id": 140,
    "contenido": "A form has 5 rule inputs, as follows: 1 CDT variable, 3 Text variables, 1 Integer variable. According to best practices, how many process variables are required in the process model’s user input task?",
    "multiple": false,
    "respuestas": [
      {
        "id": 584,
        "contenido": "1",
        "correcta": false,
        "explicacion": "INCORRECTO: Usar una sola variable de proceso para almacenar múltiples entradas de un formulario no sigue las mejores prácticas, ya que mezcla datos de diferentes tipos y propósitos, haciéndolo difícil de mantener y depurar."
      },
      {
        "id": 585,
        "contenido": "3",
        "correcta": false,
        "explicacion": "INCORRECTO: Esto no coincide con el número de entradas del formulario. Las mejores prácticas generalmente dictan un mapeo claro entre las entradas del formulario y las variables del proceso para mantener la claridad y la trazabilidad de los datos."
      },
      {
        "id": 586,
        "contenido": "5",
        "correcta": true,
        "explicacion": "CORRECTO: Según las mejores prácticas de Appian, es recomendable crear una variable de proceso por cada dato distinto que necesite ser pasado desde un formulario (interfaz) al proceso. Esto crea un mapeo claro, mejora la legibilidad y facilita el mantenimiento. Por lo tanto, para 5 entradas de regla (rule inputs), se deben crear 5 variables de proceso correspondientes."
      },
      {
        "id": 587,
        "contenido": "6",
        "correcta": false,
        "explicacion": "INCORRECTO: No hay una razón en las mejores prácticas para crear una variable de proceso adicional más allá de las necesarias para mapear las entradas del formulario. Seis sería excesivo e innecesario."
      }
    ]
  },
  {
    "id": 141,
    "contenido": "What is a correct representation of a dynamic process display name?",
    "multiple": false,
    "respuestas": [
      {
        "id": 588,
        "contenido": "\"Create or Update Record; \" & pv!recordName",
        "correcta": false,
        "explicacion": "INCORRECTO: El separador utilizado es un punto y coma (`;`) seguido de un espacio. En las expresiones de Appian, el operador de concatenación de texto es el 'ampersand' (`&`) o el signo más (`+`). Este formato es incorrecto."
      },
      {
        "id": 589,
        "contenido": "\"Create or Update Record: \" + pp!initiator",
        "correcta": false,
        "explicacion": "INCORRECTO: Si bien la sintaxis de concatenación es correcta (`+`), `pp!initiator` es una variable de tipo 'Usuario'. Concatenar texto con un objeto de usuario directamente puede no producir el nombre legible esperado; normalmente se usaría una función como `loggedinuser()` o se accedería a un atributo como `pp!initiator.username`."
      },
      {
        "id": 590,
        "contenido": "\"Create or Update Record \" + ac!recordName",
        "correcta": false,
        "explicacion": "INCORRECTO: `ac!recordName` no es una variable estándar en el contexto de nombres para mostrar de procesos. Los nombres dinámicos de procesos suelen basarse en variables de proceso (`pv!`) o variables del proceso principal (`pp!`)."
      },
      {
        "id": 591,
        "contenido": "\"Create or Update Record: \" & pv!recordName",
        "correcta": true,
        "explicacion": "CORRECTO: Esta es una representación correcta. Utiliza el operador de concatenación estándar de Appian (`&`) para combinar un texto literal con el valor de una variable de proceso (`pv!recordName`). Este es el patrón típico para crear un nombre para mostrar de proceso dinámico y legible."
      }
    ]
  },
  {
    "id": 142,
    "contenido": "You are creating a new interface. You need to arrange the primary, top-level contents of the interface across the width of the page. According to best practices, which layout should be used in order to accomplish this?",
    "multiple": false,
    "respuestas": [
      {
        "id": 592,
        "contenido": "Columns",
        "correcta": true,
        "explicacion": "CORRECTO: El layout 'Columns' está diseñado específicamente para organizar componentes en columnas a lo ancho de un contenedor o página. Es la opción estándar y de mejores prácticas para estructurar el contenido principal a nivel horizontal."
      },
      {
        "id": 593,
        "contenido": "Card",
        "correcta": false,
        "explicacion": "INCORRECTO: Un layout 'Card' es un contenedor visual con borde y relleno que agrupa componentes relacionados. No es un layout de nivel superior para organizar toda la página; normalmente se coloca *dentro* de un layout de columnas o sección."
      },
      {
        "id": 594,
        "contenido": "Side by Side Layout",
        "correcta": false,
        "explicacion": "INCORRECTO: 'Side by Side Layout' no es un componente o patrón de layout básico reconocido en las mejores prácticas de interfaz de Appian SAIL."
      },
      {
        "id": 595,
        "contenido": "Section",
        "correcta": false,
        "explicacion": "INCORRECTO: Un layout 'Section' agrupa componentes bajo un encabezado y es excelente para organizar contenido verticalmente dentro de una página. Para la disposición *principal* a lo ancho de la página, 'Columns' es más apropiado, y las 'Sections' a menudo se colocan dentro de las columnas."
      }
    ]
  },
  {
    "id": 143,
    "contenido": "You are creating an interface and need to pass data out to its parent interface. What type of variable is required to achieve this?",
    "multiple": false,
    "respuestas": [
      {
        "id": 596,
        "contenido": "Parameterised process variable",
        "correcta": false,
        "explicacion": "INCORRECTO: Una 'Parameterised process variable' es una variable de un proceso modelo configurada como parámetro de entrada. No es relevante para la comunicación de datos entre una interfaz secundaria y su interfaz principal dentro de SAIL."
      },
      {
        "id": 597,
        "contenido": "Refresh variable",
        "correcta": false,
        "explicacion": "INCORRECTO: Una 'Refresh variable' se utiliza para forzar la actualización de componentes en una interfaz cuando cambia su valor. No es el mecanismo para pasar datos hacia arriba a una interfaz principal."
      },
      {
        "id": 598,
        "contenido": "Rule inputs",
        "correcta": true,
        "explicacion": "CORRECTO: Para pasar datos desde un componente de interfaz secundario (como un formulario dentro de una sección) hacia la interfaz principal que lo contiene, se utilizan 'Rule Inputs' en el componente secundario. La interfaz principal proporciona los valores a estos rule inputs, y el componente secundario puede guardar datos en ellos (si están configurados como saveInto), permitiendo así el flujo de datos hacia arriba."
      },
      {
        "id": 599,
        "contenido": "Local variables",
        "correcta": false,
        "explicacion": "INCORRECTO: Las 'Local variables' (definidas con `a!localVariables()`) tienen un alcance limitado a la expresión donde se definen. No pueden ser utilizadas para pasar datos fuera de su contexto inmediato a una interfaz principal."
      }
    ]
  },
  {
    "id": 144,
    "contenido": "When designing a new interface, you have to create a table populated with record data. The table needs to link to the relevant record. Which component should you use?",
    "multiple": false,
    "respuestas": [
      {
        "id": 600,
        "contenido": "Rich Text Display",
        "correcta": false,
        "explicacion": "INCORRECTO: Un 'Rich Text Display' muestra texto formateado, pero no es interactivo y no puede mostrar datos tabulares o proporcionar enlaces a registros de manera estructurada."
      },
      {
        "id": 601,
        "contenido": "Editable Grid",
        "correcta": false,
        "explicacion": "INCORRECTO: Un 'Editable Grid' está diseñado para que los usuarios editen datos directamente en la cuadrícula. Aunque puede contener enlaces, no es el componente específico recomendado para una vista de solo lectura con enlaces a registros, que es un caso de uso común para las listas de registros."
      },
      {
        "id": 602,
        "contenido": "Read-Only Grid",
        "correcta": true,
        "explicacion": "CORRECTO: Un 'Read-Only Grid' es el componente estándar en Appian para mostrar datos tabulares de solo lectura. Se integra fácilmente con Record Data y se puede configurar para que las celdas (como el identificador o nombre de un registro) sean enlaces que lleven al usuario a la vista de ese registro específico."
      },
      {
        "id": 603,
        "contenido": "Text Layout",
        "correcta": false,
        "explicacion": "INCORRECTO: 'Text Layout' no es un componente de cuadrícula o tabla. Es un componente de presentación para organizar etiquetas y valores de texto, pero no para mostrar conjuntos de datos tabulares con funcionalidad de enlace integrada."
      }
    ]
  },
  {
    "id": 145,
    "contenido": "Which statement is true about the default behavior of local variables?",
    "multiple": false,
    "respuestas": [
      {
        "id": 604,
        "contenido": "Their type is Integer.",
        "correcta": false,
        "explicacion": "INCORRECTO: Las variables locales en `a!localVariables()` pueden ser de cualquier tipo (Texto, Entero, Booleano, CDT, etc.). No hay un tipo por defecto fijo; el tipo se infiere del valor asignado."
      },
      {
        "id": 605,
        "contenido": "Their type is Text.",
        "correcta": false,
        "explicacion": "INCORRECTO: No hay un tipo de texto por defecto. El tipo es dinámico basado en el valor proporcionado."
      },
      {
        "id": 606,
        "contenido": "Their value is False.",
        "correcta": false,
        "explicacion": "INCORRECTO: 'False' es un valor booleano. Las variables locales no tienen un valor booleano por defecto. Si no se asigna un valor inicial, su valor predeterminado es diferente."
      },
      {
        "id": 607,
        "contenido": "Their value is Null.",
        "correcta": true,
        "explicacion": "CORRECTO: Si una variable local en `a!localVariables()` se declara pero no se le asigna un valor inicial, su valor predeterminado es `null`. Es responsabilidad del desarrollador inicializarla con un valor apropiado."
      }
    ]
  },
  {
    "id": 146,
    "contenido": "By default, when is a local variable refreshed when using a!localVariables( )?",
    "multiple": false,
    "respuestas": [
      {
        "id": 608,
        "contenido": "After every user interaction",
        "correcta": false,
        "explicacion": "INCORRECTO: Las variables locales no se refrescan automáticamente después de cada interacción del usuario. Se evalúan cuando la expresión que las contiene se evalúa, lo cual está controlado por los mecanismos de actualización (refresh) de la interfaz."
      },
      {
        "id": 609,
        "contenido": "After a record action event completes",
        "correcta": false,
        "explicacion": "INCORRECTO: La finalización de una acción de registro no desencadena automáticamente la actualización de todas las variables locales en una interfaz. Puede actualizar la interfaz en general, pero no es el comportamiento 'por defecto' específico de `a!localVariables()`."
      },
      {
        "id": 610,
        "contenido": "When any referenced variable changes",
        "correcta": true,
        "explicacion": "CORRECTO: Por defecto, una expresión `a!localVariables()` (y sus variables locales internas) se vuelve a evaluar (se 'refresca') cuando cambia el valor de *cualquier* variable a la que haga referencia dentro de su bloque. Esto es parte del modelo de evaluación reactiva de Appian SAIL."
      },
      {
        "id": 611,
        "contenido": "It never refreshes.",
        "correcta": false,
        "explicacion": "INCORRECTO: Las variables locales se pueden refrescar. Su evaluación depende de las dependencias de las variables de la interfaz. Si las variables de las que dependen cambian, la expresión `a!localVariables()` se vuelve a evaluar, recalculando potencialmente los valores locales."
      }
    ]
  },
  {
    "id": 147,
    "contenido": "What is the most appropriate interface component to display tabular data?",
    "multiple": false,
    "respuestas": [
      {
        "id": 612,
        "contenido": "Rich Text",
        "correcta": false,
        "explicacion": "INCORRECTO: 'Rich Text' es para texto formateado, no para estructurar datos en filas y columnas como una tabla. No es apropiado para datos tabulares."
      },
      {
        "id": 613,
        "contenido": "Column Layout",
        "correcta": false,
        "explicacion": "INCORRECTO: 'Column Layout' es un contenedor para organizar otros componentes en columnas en la página. No es un componente para mostrar conjuntos de datos; es un layout para la estructura de la página."
      },
      {
        "id": 614,
        "contenido": "Editable Grid",
        "correcta": false,
        "explicacion": "INCORRECTO: Un 'Editable Grid' es apropiado para datos tabulares, pero está diseñado específicamente para la edición. La pregunta pregunta por el más apropiado para *mostrar* (display) datos, lo que implica una vista de solo lectura."
      },
      {
        "id": 615,
        "contenido": "Read-only Grid",
        "correcta": true,
        "explicacion": "CORRECTO: Un 'Read-only Grid' es el componente de interfaz Appian diseñado específicamente para *mostrar* datos en un formato tabular (filas y columnas) sin capacidades de edición. Es la opción más apropiada para este propósito."
      }
    ]
  },
  {
    "id": 148,
    "contenido": "What type of variable can only be used within the context of a particular expression, and can only be accessed within the function that defines them?",
    "multiple": false,
    "respuestas": [
      {
        "id": 616,
        "contenido": "Local Variable",
        "correcta": true,
        "explicacion": "CORRECTO: Una 'Local Variable', definida usando la función `a!localVariables()`, tiene un alcance estrictamente limitado al bloque de esa expresión. Solo puede ser accedida por otras funciones dentro del mismo bloque `a!localVariables()` y no es visible fuera de él."
      },
      {
        "id": 617,
        "contenido": "Process Variable",
        "correcta": false,
        "explicacion": "INCORRECTO: Una 'Process Variable' (`pv!`) tiene un alcance en toda la instancia del proceso modelo y puede ser accedida por diferentes nodos dentro del mismo proceso, no solo por una función particular."
      },
      {
        "id": 618,
        "contenido": "Rule Input Variable",
        "correcta": false,
        "explicacion": "INCORRECTO: Una 'Rule Input Variable' (`ri!`) tiene un alcance en toda la regla de expresión o interfaz donde se define. Puede ser utilizada en múltiples lugares dentro de esa regla, no solo dentro de una única función."
      },
      {
        "id": 619,
        "contenido": "CDT Variable",
        "correcta": false,
        "explicacion": "INCORRECTO: Un 'CDT Variable' es simplemente una variable cuyo tipo de datos es un Custom Data Type. Su alcance depende de dónde se declare (como variable local, de proceso o de regla), no está inherentemente restringido a una sola función."
      }
    ]
  },
  {
    "id": 149,
    "contenido": "You are designing an interface and selecting colors for the application. What is the Appian-recommended best practice?",
    "multiple": false,
    "respuestas": [
      {
        "id": 620,
        "contenido": "Use blocks of color to highlight sections that are not on the perimeter of the page.",
        "correcta": false,
        "explicacion": "INCORRECTO: Esta es una guía de diseño visual específica, pero no es la recomendación de mejores prácticas *principal* de Appian respecto a la selección general de colores. Appian enfatiza más la simplicidad y consistencia."
      },
      {
        "id": 621,
        "contenido": "Use many different shades of the same color.",
        "correcta": false,
        "explicacion": "INCORRECTO: Usar muchos tonos diferentes puede crear inconsistencia y hacer que la interfaz parezca desordenada. Las mejores prácticas recomiendan limitar la variación para mantener un diseño limpio."
      },
      {
        "id": 622,
        "contenido": "Use a diverse range of colors and shades.",
        "correcta": false,
        "explicacion": "INCORRECTO: Una amplia gama de colores y tonos va en contra de las mejores prácticas de Appian para un diseño de interfaz limpio y profesional. Puede distraer y dificultar la usabilidad."
      },
      {
        "id": 623,
        "contenido": "Use a small, consistent color palette.",
        "correcta": true,
        "explicacion": "CORRECTO: Las mejores prácticas de diseño de Appian recomiendan enfáticamente usar una paleta de colores pequeña y consistente. Esto mejora la accesibilidad, mantiene una identidad visual coherente en la aplicación y hace que la interfaz sea más fácil de usar y profesional."
      }
    ]
  },
  {
    "id": 150,
    "contenido": "You need to ensure that your interface is readable on different devices. How is this most commonly checked?",
    "multiple": false,
    "respuestas": [
      {
        "id": 624,
        "contenido": "Download Appian on each device and test.",
        "correcta": false,
        "explicacion": "INCORRECTO: Aunque probar en dispositivos reales es valioso, no es el método 'más común' o práctico durante el desarrollo. Es intensivo en recursos y tiempo. Los desarrolladores confían en herramientas más ágiles."
      },
      {
        "id": 625,
        "contenido": "Use your web browser to change sizing.",
        "correcta": false,
        "explicacion": "INCORRECTO: Redimensionar manualmente la ventana del navegador es una forma básica de verificar la capacidad de respuesta, pero no es el método específico o integrado que Appian proporciona para verificar diseños en diferentes anchos de pantalla."
      },
      {
        "id": 626,
        "contenido": "Click on the different preview options in the Interface Designer.",
        "correcta": false,
        "explicacion": "INCORRECTO: El Interface Designer de Appian no tiene opciones de vista previa preestablecidas para diferentes tamaños de dispositivo (como teléfono, tableta)."
      },
      {
        "id": 627,
        "contenido": "Wrap SAIL code in a!isPageWidth().",
        "correcta": true,
        "explicacion": "CORRECTO: La función `a!isPageWidth()` es el mecanismo principal en Appian SAIL para crear interfaces responsivas. Permite a los desarrolladores mostrar u ocultar componentes, o cambiar su disposición, basándose en el ancho actual de la página, asegurando así la legibilidad en diferentes dispositivos. Esta es la práctica estándar."
      }
    ]
  },
  {
    "id": 151,
    "contenido": "A related action was created in a record. A Related Action Shortcut needs to be added in order to call this action. Where is this configured?",
    "multiple": false,
    "respuestas": [
      {
        "id": 628,
        "contenido": "In the View Interface",
        "correcta": false,
        "explicacion": "INCORRECTO: La 'View Interface' muestra los datos del registro. No es donde se configura el acceso a las acciones; es donde se muestran los resultados de esa configuración."
      },
      {
        "id": 629,
        "contenido": "On the Record View",
        "correcta": true,
        "explicacion": "CORRECTO: El 'Related Action Shortcut' se configura en la definición del 'Record View' (la vista de un Record Type). Específicamente, en la configuración de la vista, se puede agregar un atajo (shortcut) que apunte a una acción relacionada existente, determinando cómo y dónde se mostrará para los usuarios."
      },
      {
        "id": 630,
        "contenido": "In the Action Process Model",
        "correcta": false,
        "explicacion": "INCORRECTO: El modelo de proceso que impulsa la acción contiene la lógica de la acción, pero no controla cómo se expone esa acción en la interfaz del registro. Eso se hace en la configuración del Record View."
      },
      {
        "id": 631,
        "contenido": "On the Record Action",
        "correcta": false,
        "explicacion": "INCORRECTO: El objeto 'Record Action' define la acción en sí (su proceso, seguridad, etc.). Sin embargo, para que aparezca como un atajo fácilmente accesible para los usuarios, debe ser agregado al diseño de un 'Record View' específico mediante un Related Action Shortcut."
      }
    ]
  },
  {
    "id": 152,
    "contenido": "A record type is using a process as its data source. Which statement is true?",
    "multiple": false,
    "respuestas": [
      {
        "id": 632,
        "contenido": "Archived process instances are accessible with process-backed records.",
        "correcta": false,
        "explicacion": "INCORRECTO: Una vez que una instancia de proceso está archivada, sus datos generalmente ya no están disponibles para consultas operativas. Los record types respaldados por procesos normalmente acceden a instancias activas o completadas (no archivadas)."
      },
      {
        "id": 633,
        "contenido": "The record has access to current values of process variables within process instances.",
        "correcta": true,
        "explicacion": "CORRECTO: Un record type respaldado por un proceso (process-backed) se basa en un proceso modelo como su origen de datos. Puede exponer variables de proceso específicas como campos en el registro, mostrando sus valores *actuales* desde las instancias de proceso en ejecución o completadas."
      },
      {
        "id": 634,
        "contenido": "Process-backed records derive information from a data store entity.",
        "correcta": false,
        "explicacion": "INCORRECTO: Si el registro derivara información de un data store entity, estaría utilizando una base de datos como fuente de datos, no un proceso. Esta afirmación describe un record type respaldado por base de datos, no por proceso."
      },
      {
        "id": 635,
        "contenido": "Process-backed records can only access process variable values when a process instance completes.",
        "correcta": false,
        "explicacion": "INCORRECTO: Los record types respaldados por procesos pueden acceder a los valores de las variables de proceso de instancias que están en curso (en ejecución), no solo de las que se han completado."
      }
    ]
  },
  {
    "id": 153,
    "contenido": "What are the different data sources for Appian record types?",
    "multiple": false,
    "respuestas": [
      {
        "id": 636,
        "contenido": "Database and Process only",
        "correcta": false,
        "explicacion": "INCORRECTO: Appian admite más fuentes de datos para record types además de Base de datos y Proceso."
      },
      {
        "id": 637,
        "contenido": "Database, Process, and Other Web Service",
        "correcta": false,
        "explicacion": "INCORRECTO: Esta opción se acerca, pero falta una fuente de datos específica y común: Salesforce."
      },
      {
        "id": 638,
        "contenido": "Database, Process, Salesforce, and Other Web Service",
        "correcta": true,
        "explicacion": "CORRECTO: Los Record Types en Appian pueden integrarse con varios orígenes de datos: **Base de datos** (a través de Data Sync), **Proceso** (process-backed), **Salesforce** (a través del conector), y **Otro Web Service** (cualquier servicio web compatible)."
      },
      {
        "id": 639,
        "contenido": "Process and Other Web Service only",
        "correcta": false,
        "explicacion": "INCORRECTO: Esta opción omite dos fuentes de datos principales: Base de datos y Salesforce, las cuales son muy comunes."
      }
    ]
  },
  {
    "id": 154,
    "contenido": "You are configuring a record type and utilizing data sync. Appian does NOT have write access to the source database table, and will not make updates. Which data sync option is most appropriate for your situation?",
    "multiple": false,
    "respuestas": [
      {
        "id": 640,
        "contenido": "Hourly Sync",
        "correcta": false,
        "explicacion": "INCORRECTO: 'Hourly Sync' se refiere a la frecuencia de sincronización, no al modo de acceso (lectura/escritura). El problema es sobre permisos de escritura, no sobre la frecuencia."
      },
      {
        "id": 641,
        "contenido": "Manual Sync",
        "correcta": false,
        "explicacion": "INCORRECTO: 'Manual Sync' significa que un administrador debe activar manualmente la sincronización, pero no aborda el modo de acceso fundamental. Un record type con sincronización manual aún podría intentar escribir si estuviera configurado para ello."
      },
      {
        "id": 642,
        "contenido": "Daily Sync",
        "correcta": false,
        "explicacion": "INCORRECTO: Al igual que 'Hourly Sync', 'Daily Sync' define la frecuencia, no el modo de acceso de solo lectura."
      },
      {
        "id": 643,
        "contenido": "Immediate Sync",
        "correcta": true,
        "explicacion": "CORRECTO: 'Immediate Sync' es el modo de sincronización de datos diseñado para escenarios de **solo lectura**. Cuando se selecciona este modo, Appian sincroniza automáticamente los datos desde la base de datos de origen (lectura), pero **no** intentará escribir los cambios realizados en Appian de vuelta a la base de datos fuente, lo que coincide perfectamente con la restricción de no tener acceso de escritura."
      }
    ]
  },
  {
    "id": 155,
    "contenido": "An Appian user needs to update information for a case in the record list. Which three security or visibility settings will impact the visibility of a related action? (Choose three.)",
    "multiple": true,
    "respuestas": [
      {
        "id": 644,
        "contenido": "Record type security",
        "correcta": true,
        "explicacion": "CORRECTO: Si un usuario no tiene al menos permisos de 'Viewer' en el record type, no podrá ver ningún registro de ese tipo, y por lo tanto, tampoco las acciones relacionadas asociadas a esos registros."
      },
      {
        "id": 645,
        "contenido": "Related action visibility",
        "correcta": true,
        "explicacion": "CORRECTO: Cada 'Related Action' (acción relacionada) tiene su propia configuración de seguridad (por ejemplo, una expresión de seguridad). Esta expresión determina, en el momento de la ejecución y para el usuario específico, si la acción debe mostrarse."
      },
      {
        "id": 646,
        "contenido": "Record view visibility",
        "correcta": false,
        "explicacion": "INCORRECTO: La 'visibilidad de la vista de registro' se refiere a si una vista específica de un record type está disponible, pero no controla directamente la visibilidad de una acción individual dentro de una vista que ya es visible. La seguridad de la acción se maneja a nivel de la acción o del record type."
      },
      {
        "id": 647,
        "contenido": "Process model security",
        "correcta": true,
        "explicacion": "CORRECTO: Dado que una 'Related Action' normalmente inicia un proceso modelo, el usuario debe tener los permisos necesarios (generalmente 'Initiator') en ese proceso modelo específico para que la acción sea visible y ejecutable."
      },
      {
        "id": 648,
        "contenido": "Application security",
        "correcta": false,
        "explicacion": "INCORRECTO: La seguridad a nivel de aplicación controla el acceso a la aplicación en su conjunto. Si un usuario puede acceder a la aplicación, las reglas de visibilidad más específicas (record type, acción, proceso) toman el control. No es uno de los tres factores directos para la visibilidad de una acción específica."
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
