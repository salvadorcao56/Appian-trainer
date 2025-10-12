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
