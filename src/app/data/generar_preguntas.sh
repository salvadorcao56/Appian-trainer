#!/bin/bash

# =================================================================
# CONFIGURACIÓN - ¡MODIFICA ESTOS VALORES CADA VEZ!
# =================================================================
# Obtén estos números revisando el final de tu archivo questions.model.ts
ULTIMO_ID_PREGUNTA=590        # El último 'id' de pregunta en tu archivo
ULTIMO_ID_RESPUESTA=1785      # El último 'id' dentro de 'respuestas' en tu archivo
CANTIDAD_A_GENERAR=25         # ¿Cuántas preguntas nuevas quieres?
ARCHIVO_SALIDA="questions.model.ts" # Tu archivo de preguntas

# =================================================================
# CÁLCULO DE IDs (No modificar manualmente)
# =================================================================
INICIO_PREGUNTAS=$((ULTIMO_ID_PREGUNTA + 1))
FIN_PREGUNTAS=$((ULTIMO_ID_PREGUNTA + CANTIDAD_A_GENERAR))
INICIO_RESPUESTAS=$((ULTIMO_ID_RESPUESTA + 1))
# Estimación: ~4 respuestas por pregunta
FIN_RESPUESTAS_EST=$((ULTIMO_ID_RESPUESTA + (CANTIDAD_A_GENERAR * 4)))

echo "================================================"
echo "GENERADOR DE PREGUNTAS PARA APP"
echo "================================================"
echo "IDs calculados para esta ejecución:"
echo "  Preguntas: desde $INICIO_PREGUNTAS hasta $FIN_PREGUNTAS"
echo "  Respuestas: desde $INICIO_RESPUESTAS (estimado hasta ~$FIN_RESPUESTAS_EST)"
echo "================================================"

# 1. Generar el prompt dinámico actualizando la plantilla
echo "Generando prompt para la IA..."
sed -e "s/\"ultimo_id_pregunta_usado\": [0-9]*,/\"ultimo_id_pregunta_usado\": $ULTIMO_ID_PREGUNTA,/" \
    -e "s/\"ultimo_id_respuesta_usado\": [0-9]*,/\"ultimo_id_respuesta_usado\": $ULTIMO_ID_RESPUESTA,/" \
    -e "s/\"nuevas_preguntas_solicitadas\": [0-9]*,/\"nuevas_preguntas_solicitadas\": $CANTIDAD_A_GENERAR,/" \
    -e "s/\"inicio_preguntas\": [0-9]*,/\"inicio_preguntas\": $INICIO_PREGUNTAS,/" \
    -e "s/\"fin_preguntas\": [0-9]*,/\"fin_preguntas\": $FIN_PREGUNTAS,/" \
    -e "s/\"inicio_respuestas\": [0-9]*,/\"inicio_respuestas\": $INICIO_RESPUESTAS,/" \
    -e "s/\"fin_respuestas_estimado\": [0-9]*/\"fin_respuestas_estimado\": $FIN_RESPUESTAS_EST/" \
    prompt_plantilla.json > prompt_actual.json

echo "✅ Prompt generado en 'prompt_actual.json'"

# 2. Mostrar instrucciones para el usuario
echo ""
echo "⚠️  INSTRUCCIONES MANUALES (Paso 1 de 2):"
echo "----------------------------------------"
echo "1. Copia el CONTENDO COMPLETO del archivo 'prompt_actual.json'."
echo "2. Envíalo a tu asistente de IA (como ChatGPT, Claude, etc.)."
echo "3. Recibe el JSON con las preguntas y GUÁRDALO en un nuevo archivo"
echo "   llamado 'preguntas_nuevas.json' en este mismo directorio."
echo ""
echo "El prompt ya incluye los IDs con los que debe empezar la IA."
echo ""
read -p "¿Has guardado el archivo 'preguntas_nuevas.json'? (s/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Ss]$ ]]; then
    echo "Operación cancelada. Ejecuta el script de nuevo cuando tengas el archivo."
    exit 1
fi

# 3. Verificar que el archivo generado por la IA existe
if [ ! -f "preguntas_nuevas.json" ]; then
    echo "❌ Error: No se encontró 'preguntas_nuevas.json'."
    echo "   Asegúrate de guardar la respuesta de la IA con ese nombre."
    exit 1
fi

# 4. (Opcional) Validar formato básico del JSON con 'jq' si está instalado
echo "Validando formato del JSON recibido..."
if command -v jq &> /dev/null; then
    if jq empty preguntas_nuevas.json 2>/dev/null; then
        echo "✅ El archivo JSON tiene un formato válido."
    else
        echo "⚠️  Advertencia: El archivo podría no ser JSON válido."
        echo "   Continuando de todos modos. Verifica manualmente."
    fi
else
    echo "ℹ️  'jq' no está instalado. Omitiendo validación JSON."
fi

# 5. Insertar las nuevas preguntas en el archivo TypeScript
echo ""
echo "⚠️  INSTRUCCIONES MANUALES (Paso 2 de 2):"
echo "----------------------------------------"
echo "Se va a MODIFICAR tu archivo '$ARCHIVO_SALIDA'."
echo "Se insertarán las nuevas preguntas ANTES de la línea que dice:"
echo "   '// ===================================================='"
echo ""
echo "Antes de continuar, por favor:"
echo "1. Haz una COPIA DE SEGURIDAD de '$ARCHIVO_SALIDA'."
echo "2. Abre el archivo y verifica la línea exacta donde termina el array."
echo ""
read -p "¿Tienes una copia de seguridad y quieres proceder? (s/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Ss]$ ]]; then
    echo "Operación cancelada por el usuario."
    exit 0
fi

echo "Insertando preguntas en el archivo TypeScript..."
# Esta línea encuentra el comentario del final y realiza la inserción
sed -i.bak "/\/\/ ====================================================/i \\
  $(cat preguntas_nuevas.json | sed 's/^/  /')" "$ARCHIVO_SALIDA"

# 6. Verificación final
if [ $? -eq 0 ]; then
    echo "✅ ¡Proceso completado con éxito!"
    echo ""
    echo "Resumen:"
    echo "  - Se generó el prompt con los IDs $INICIO_PREGUNTAS a $FIN_PREGUNTAS."
    echo "  - Se modificó '$ARCHIVO_SALIDA'."
    echo "  - Se creó una copia de seguridad automática: '$ARCHIVO_SALIDA.bak'."
    echo ""
    echo "⚠️  VERIFICACIÓN FINAL RECOMENDADA:"
    echo "  1. Abre '$ARCHIVO_SALIDA' y revisa que las preguntas estén bien insertadas."
    echo "  2. Asegúrate de que no haya comas faltantes o sobrantes en el array."
    echo "  3. Si algo salió mal, usa el archivo '$ARCHIVO_SALIDA.bak' para restaurar."
else
    echo "❌ Ocurrió un error al modificar el archivo."
fi
