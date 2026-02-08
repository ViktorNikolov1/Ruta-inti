# Himalaya Rutero - Ruta Inti 2026

Web App educativa para clasificar a los expedicionarios de Ruta Inti 2026 en arquetipos temáticos y sugerir itinerarios personalizados.

## Objetivo
Ayudar a los participantes a encontrar su "rol" en la expedición (Corredor, Nación, Bon, Resiliencia, Arte, ODS) mediante un test de valores y preferencias, ofreciendo contenido educativo curado y mapas interactivos.

## Stack Tecnológico
- **Frontend**: React + Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Mapas**: MapLibre GL JS
- **PDF**: jsPDF

## Estructura de Datos
Todos los datos son estáticos (JSON/GeoJSON) para maximizar la privacidad y facilitar el despliegue estático.
- `/src/data/quiz`: Preguntas y lógica de puntuación.
- `/src/data/archetypes`: Definición de los 6 arquetipos.
- `/src/data/routes`: Itinerarios y capas recomendadas.
- `/src/data/microlessons`: Contenido educativo breve.

## Privacidad
La aplicación no almacena datos personales en ningún servidor.
- El progreso se guarda en `localStorage` del navegador.
- El identificador `Participant-XXXX` es genérico y configurable.

## Configuración Local

1.  **Clonar y entrar al directorio**:
    ```bash
    git clone <repo>
    cd himalaya-rutero
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Configurar entorno**:
    Clonar el archivo `.env.example` a `.env.local`:
    ```bash
    cp .env.example .env.local
    ```
    (Opcional: cambiar `NEXT_PUBLIC_PARTICIPANT_ID`).

4.  **Ejecutar servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    Visitar `http://localhost:3000`.

## Testing
Para ejecutar los tests unitarios del motor de arquetipos:
```bash
npm run test
# o
npx vitest run
```

## Despliegue
La aplicación está lista para desplegarse en Vercel o Netlify.
```bash
npm run build
npm start
```

## Licencia
Proyecto educativo para Ruta Inti.
Datos de mapa: © OpenStreetMap contributors.
Contenido educativo: Citas a UNESCO, NTB, USGS, etc.
