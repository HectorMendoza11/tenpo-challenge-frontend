# React Auth App (TypeScript + MUI)

Una aplicación React que implementa autenticación simulada, navegación con contextos público/privado, y consumo de una API pública para mostrar una lista de datos. Incluye un diseño responsivo con Material UI y preparado para escalar con nuevas secciones.

---

## ✅ Características principales

- Login simulado con email y contraseña
- Persistencia de token en `sessionStorage`
- Routing con React Router
- Contexto de autenticación global
- Sidebar con navegación y logout
- Home con datos desde una API pública (2000 elementos)
- UI responsiva con Material UI
- Arquitectura lista para escalar (módulos públicos y privados)
- Token incluido como parámetro en los requests (aunque no sea requerido)

---

## 🚀 Instalación y uso

### 1. Requisitos

- Node.js >= 18
- npm >= 9

### 2. Clonar y configurar

```bash
git clone https://github.com/tu_usuario/tenpo-challenge-frontend.git
cd react-auth-app
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

---

## 🧱 Estructura del proyecto

```
src/
├── api/               # Configuración global de Axios
│   └── axios.ts
├── auth/              # Contexto de autenticación
│   └── AuthContext.tsx
├── components/        # Componentes compartidos
│   └── Sidebar.tsx
├── pages/             # Páginas principales
│   ├── Login.tsx
│   └── Home.tsx
├── App.tsx            # Enrutamiento
└── index.tsx          # Entry point
```

---

## 🔒 Autenticación y Context

- El contexto `AuthContext` administra el token simulado.
- Si el login es exitoso (cualquier email/password), se almacena un `fake-token` en `sessionStorage`.
- El logout limpia el token y redirige al login.

---

## 🗺️ Navegación

- Rutas protegidas: `Home` requiere un token.
- Rutas públicas: `Login`.
- Redirección automática si el usuario no está autenticado.
- Sidebar permanente en secciones privadas, con la opción seleccionada destacada.

---

## 🌐 Home + API pública

- Se consumen datos desde `https://jsonplaceholder.typicode.com/photos?token=${token}`
- Se muestran 2000 elementos (aunque el endpoint devuelve 5000).
- Cada elemento se renderiza centrado, en una única columna, con diseño responsivo.

---

## ⚙️ Axios configurado

Archivo: `src/api/axios.ts`

- Se interceptan los requests para agregar el token como `Authorization: Bearer <token>`.
- En Home, el token también se pasa como parámetro para simular su uso:  
  `...?token=fake-token`.

---

## 📦 Tecnologías usadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Material UI](https://mui.com/)
- [Axios](https://axios-http.com/)

---

## 🔁 Estrategias de mejora (rendimiento)

Actualmente se renderizan 2000 elementos. Para mejorar eficiencia:

- Usar **paginado** (dividir en páginas de 50, 100, etc.).
- Implementar **scroll virtual** (`react-window`, `react-virtualized`) para renderizar solo los elementos visibles.
- Cache de resultados si se recorre varias veces.

---