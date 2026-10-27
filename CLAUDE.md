# fuertes-gym-hub — web vieja de FUERTES (servicio `fuertes-web_web` en EasyPanel)

> 🔐 **PENDIENTE DE SEGURIDAD (identificado el 27 oct 2026) — se ejecuta desde una sesión abierta en `seguridad-albert` (cola `PLAN-EJECUCION.md`, con su protocolo y puntos de control). Si esta sesión es de otro tema, no lo corrijas por fuera de la cola:**
> - 3 alertas críticas en `vitest`/`tinypool` (**herramientas de pruebas, no producción**) y 30 altas (H-046). Revisar primero las de dependencias de producción
> - Dependabot está activo (alertas en GitHub → *Security → Dependabot*). Corregir = actualizar el paquete a la versión que indica la alerta, `npm install`, compilar, probar y volver a implementar en EasyPanel. Verificar después que el sitio responda.
> - `Dockerfile` con `node:20` para compilar y **`nginx:1.25` (2023) sirviendo el sitio**: pasar a `node:22` y a un `nginx` actual.
> - Antes de invertir aquí: decidir si esta web vieja se sigue usando o se apaga (el producto del gym es `fomup/saas-gym-functional`).
> Detalle: repo privado `albertbarrerog/seguridad-albert` (`HALLAZGOS.md`, `PLAN-EJECUCION.md`); antes, plan maestro en
> `fomup/seguridad/PLAN-MAESTRO.md`. **Al terminar, anotarlo en `seguridad-albert/HALLAZGOS.md` y borrar o tachar este bloque.**

