---
title: "Chat Bot"
date: 2024-03-14T08:06:25+06:00
description: Implementación de un chatbot para la consulta al plan de gobierno

menu:
  sidebar:
    name: Chat Bot
    identifier: Chatbot
    weight: 30
author:
  name: Jhon Glidden
  image: #/images/author/jessica.png
math: true
---




## Desarrollo de PoliChatBot: Una Aplicación Interactiva para Analizar Planes de Gobierno

### Introducción
En la era de la información, la transparencia y la accesibilidad a los datos son cruciales para una ciudadanía informada y participativa. Con este objetivo en mente, desarrollé PoliChatBot, una aplicación interactiva diseñada para ayudar a los ciudadanos a descubrir, comparar y decidir sobre las propuestas de los candidatos presidenciales. Esta aplicación utiliza tecnologías avanzadas como Streamlit, la API de OpenAI y LangChain para proporcionar respuestas precisas y contextuales a preguntas sobre los planes de gobierno.

### Motivación y Objetivos

#### **Motivación**
La motivación principal detrás de PoliChatBot es empoderar a los ciudadanos con información accesible y relevante sobre los planes de gobierno de los candidatos presidenciales. En muchos casos, los votantes se enfrentan a una sobrecarga de información y pueden tener dificultades para encontrar respuestas claras y directas a sus preguntas específicas. Esta aplicación busca solucionar ese problema proporcionando una plataforma donde las respuestas se generan de manera rápida y precisa.

#### **Objetivos**
1. **Facilitar el Acceso a la Información**: Permitir que los ciudadanos encuentren rápidamente las propuestas de los candidatos sobre temas específicos.
2. **Promover la Transparencia**: Asegurar que las promesas de los candidatos sean claras y accesibles, ayudando a combatir la desinformación.
3. **Fomentar la Participación Ciudadana**: Proporcionar una herramienta que invite a los ciudadanos a involucrarse más en el proceso electoral, haciendo preguntas y comparando las propuestas de manera crítica.

### Tecnologías Utilizadas

#### **Streamlit**
Streamlit es una herramienta poderosa y fácil de usar para la creación de aplicaciones web interactivas. Su simplicidad y capacidad para integrarse con Python la hacen ideal para el desarrollo rápido de prototipos y aplicaciones completas. Utilicé Streamlit para construir la interfaz de usuario de PoliChatBot, proporcionando una plataforma limpia y accesible para los usuarios.

#### **API de OpenAI**
La API de OpenAI es una solución robusta para el procesamiento de lenguaje natural (PLN). Aproveché esta API para entender y responder las preguntas de los usuarios basadas en el contenido de los planes de gobierno. La capacidad de generar respuestas coherentes y contextuales es esencial para ofrecer una experiencia de usuario satisfactoria.

#### **LangChain**
LangChain es una herramienta que facilita la gestión de cadenas de preguntas y respuestas, mejorando la coherencia y relevancia de las respuestas generadas. La integración de LangChain con la API de OpenAI permite manejar el contexto de las interacciones prolongadas, asegurando que las respuestas sean pertinentes y útiles.

### Funcionalidades de PoliChatBot

#### **Búsqueda Instantánea**
PoliChatBot permite a los usuarios realizar preguntas específicas sobre los planes de gobierno y recibir respuestas instantáneas. Esta funcionalidad es crucial para aquellos que buscan información rápida y precisa sobre las propuestas de los candidatos.

#### **Comparador de Propuestas**
La aplicación ofrece una herramienta de comparación que permite a los usuarios situar lado a lado las ideas de sus candidatos favoritos. Esta funcionalidad es especialmente útil para los votantes indecisos que desean evaluar de manera crítica las propuestas antes de tomar una decisión.

#### **Interfaz Intuitiva**
La interfaz de PoliChatBot es sencilla y fácil de navegar. Los usuarios pueden escribir sus preguntas en una caja de texto y recibir respuestas detalladas. La simplicidad del diseño asegura que incluso aquellos con poca experiencia tecnológica puedan utilizar la aplicación eficazmente.

#### **Educación Ciudadana**
Además de proporcionar respuestas a preguntas específicas, PoliChatBot también educa a los usuarios sobre la importancia de cuestionar y entender las propuestas de los candidatos. La aplicación recuerda a los usuarios que el programa presentado por el candidato ganador es de obligatorio cumplimiento, como establece el Artículo 278 de la Constitución.

### Desarrollo y Despliegue

#### **Diseño de la Interfaz**
La interfaz de usuario fue diseñada para ser lo más intuitiva posible. Streamlit me permitió construir una interfaz funcional sin necesidad de profundos conocimientos en desarrollo web. La caja de preguntas y los botones interactivos son los elementos centrales que facilitan la interacción del usuario con la aplicación.

#### **Integración de OpenAI y LangChain**
La integración de la API de OpenAI fue un proceso directo gracias a su documentación clara y completa. LangChain fue implementado para gestionar el contexto de las interacciones, lo que mejoró significativamente la calidad de las respuestas generadas.

#### **Despliegue en la Nube**
La aplicación está desplegada en la nube, lo que facilita el acceso remoto y la escalabilidad. Esto asegura que la aplicación pueda manejar un gran número de usuarios simultáneamente sin comprometer el rendimiento.

### Desafíos y Soluciones

#### **Manejo del Contexto**
Uno de los mayores desafíos fue asegurar que las respuestas fueran coherentes y contextuales, especialmente en interacciones prolongadas. LangChain resultó ser una solución efectiva para este problema, permitiendo gestionar cadenas de preguntas y respuestas de manera eficiente.

#### **Escalabilidad**
Asegurar que la aplicación pudiera manejar un alto volumen de usuarios simultáneamente fue otro desafío. La utilización de Streamlit y la API de OpenAI en la nube permitió una escalabilidad adecuada, pero fue necesario implementar estrategias de monitoreo y optimización para mantener el rendimiento.

#### **Seguridad**
Proteger los datos de los usuarios y garantizar que las consultas sean seguras es una prioridad. Implementé medidas de seguridad para evitar abusos de la API, como límites de tasa y validación de entradas de usuarios.

### Conclusión

PoliChatBot es una herramienta poderosa para la educación y participación ciudadana. Al combinar las capacidades de Streamlit, la API de OpenAI y LangChain, he creado una aplicación que no solo proporciona respuestas precisas y contextuales, sino que también facilita la comparación de propuestas políticas. Este proyecto destaca cómo las tecnologías avanzadas pueden ser utilizadas para promover la transparencia y el acceso a la información, empoderando a los ciudadanos en su toma de decisiones.

Si deseas probar PoliChatBot, puedes acceder a la aplicación en el siguiente enlace: [PoliChatBot](https://politechbot.streamlit.app/).




### Futuras Mejoras

#### **Ampliación de Funcionalidades**
En el futuro, planeo ampliar las funcionalidades de PoliChatBot para incluir más candidatos y sus propuestas, así como la capacidad de generar reportes personalizados basados en las consultas realizadas.

#### **Optimización para Móviles**
Aunque la aplicación es accesible desde navegadores web, una versión optimizada para dispositivos móviles mejoraría aún más la accesibilidad y usabilidad de PoliChatBot.

#### **Integraciones Adicionales**
Considero integrar PoliChatBot con otras plataformas y servicios, como bases de datos públicas y redes sociales, para proporcionar una experiencia más rica y completa a los usuarios.

#### **Mejora Continua Basada en Feedback**
El feedback de los usuarios es crucial para la mejora continua de la aplicación. Implementaré un sistema de retroalimentación dentro de la aplicación para recoger opiniones y sugerencias de los usuarios, permitiéndome mejorar y adaptar PoliChatBot a las necesidades de su audiencia.

---

Espero que esta versión más extensa sea adecuada para tu portafolio y destaque tu trabajo y habilidades en el desarrollo de aplicaciones interactivas y basadas en inteligencia artificial. Si necesitas algún ajuste o información adicional, no dudes en decírmelo.
