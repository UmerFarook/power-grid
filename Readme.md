# Power Grid Management – Next.js App Router Demo

This project is a **Power Grid Management demo application** built with **Next.js App Router**. It showcases how grid-related data (power output, downtime, grid metadata) can be collected, processed, and served using **Server Actions**, **dynamic routing**, and **API routes**.

The app is designed as a conceptual system where administrators can submit and retrieve **power grid information** in a clean, scalable frontend architecture.

---

## Tech Stack

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Server Actions (`useActionState`)**
- **Fetch API**

---

## Power Grid Domain Concept

The application models a simplified **power grid domain**, focusing on:

- **Grid Name** – Identifier for a power grid or substation
- **Maximum Power Output (kW)** – Peak generation capacity
- **Downtime (hours)** – Maintenance or outage duration
- **Users / Operators** – Consumers or operators associated with grids

This setup can be extended to real-world use cases like:
- Energy monitoring dashboards
- Grid reliability tracking
- Maintenance scheduling systems

---

## Project Structure

```
.next/
node_modules/
public/
src/
 └── app/
     ├── abouts/
     ├── api/
     │   ├── griddata/           # Power grid data APIs
     │   │   └── route.ts
     │   └── users/              # Grid users / operators
     │       ├── [id]/
     │       │   └── route.ts
     │       └── route.ts
     ├── form/
     │   ├── Form.tsx            # Power grid input form UI
     │   ├── GridFormSubmit.tsx  # Server Action for grid submission
     │   └── page.tsx
     ├── users/
     │   ├── [userid]/           # User-specific grid views
     │   │   └── page.tsx
     │   ├── layout.tsx
     │   ├── loading.tsx
     │   ├── not-found.tsx
     │   ├── page.tsx
     │   └── UserFormSubmit.tsx
     ├── favicon.ico
     ├── globals.css
     ├── layout.tsx
     └── page.tsx

.env.local
.eslint.config.mjs
next.config.ts
package.json
```

---

## Power Grid Form Flow

1. User enters grid details:
   - Grid name
   - Maximum power output (kW)
   - Downtime (hours)
2. Form submits via **Server Action**
3. Server processes and forwards data to `/api/griddata`
4. API returns a structured response
5. UI updates without client-side state management

---

## Server Actions (Grid Submission)

Server Actions handle grid data submission directly from the form:

```tsx
const [state, formAction] = useActionState(action, [])

<form action={formAction}>
  ...
</form>
```

Benefits:
- No explicit `onSubmit`
- No client-side API calls
- Cleaner separation of UI and business logic

---

## API Routes – Power Grid Data

API routes follow the App Router convention:

```
app/api/<route>/route.ts
```

### Implemented Endpoints

- `POST /api/griddata`  
  Stores or processes power grid information

- `GET /api/users`  
  Fetches grid users or operators

- `GET /api/users/:id`  
  Fetches a specific user and their grid context

---

## Dynamic Routing

Dynamic routes are used for grid users and operators:

```
/users/[userid]
/api/users/[id]
```

This enables per-user or per-operator grid views.

---

## Loading & Error Handling

The `users` route demonstrates route-level UX handling:

- `loading.tsx` → Grid data loading state
- `not-found.tsx` → Invalid user or grid
- `layout.tsx` → Consistent layout for grid users

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## Environment Variables

Create an `.env.local` file if required:

```
NEXT_PUBLIC_API_BASE_URL=...
```

---

## Future Enhancements

- Grid performance analytics
- Historical downtime tracking
- Role-based access (Admin / Operator)
- Database integration (PostgreSQL / MongoDB)
- Real-time grid status updates

---

## Purpose

This project demonstrates how modern **Next.js App Router patterns** can be applied to a **power grid management domain**, keeping code scalable, readable, and production-friendly.

---

## License

This project is intended for learning and architectural reference.

