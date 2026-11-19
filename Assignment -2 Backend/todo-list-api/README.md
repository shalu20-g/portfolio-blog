# To-Do List REST API

A beginner-friendly REST API for adding, updating, and deleting tasks. Built with Node.js, Express.js, MongoDB, and Mongoose.

This project implements only Assignment 2: To-Do List REST API. It does not include user authentication, notes, or GET endpoints.

## Requirements

- Node.js 20.19.0 or newer
- npm
- MongoDB running locally, or a MongoDB Atlas connection string

## Installation

Open a terminal in this folder:

```powershell
cd "Assignment -2 Backend\todo-list-api"
```

Install dependencies:

```powershell
npm install
```

Create your local environment file:

```powershell
copy .env.example .env
```

On macOS/Linux, use:

```bash
cp .env.example .env
```

Update `.env` if needed:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/todo-list-api
```

For MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string.

## Run the server

Development mode with automatic restart:

```powershell
npm run dev
```

Normal mode:

```powershell
npm start
```

Expected startup output:

```text
MongoDB connected
Server is running on http://localhost:5000
```

## Available endpoints

Base URL: `http://localhost:5000`

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/tasks` | Add a new task |
| `PUT` | `/api/tasks/:id` | Update an existing task |
| `DELETE` | `/api/tasks/:id` | Delete a task |

All requests and responses use JSON. Send `Content-Type: application/json` in Postman.

### 1. Add a task

`POST /api/tasks`

Request body:

```json
{
  "title": "Buy groceries",
  "description": "Milk and bread",
  "completed": false
}
```

`description` and `completed` are optional. Defaults are `""` and `false`.

Success response — `201 Created`:

```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "_id": "65a1b2c3d4e5f60718293a4b",
    "title": "Buy groceries",
    "description": "Milk and bread",
    "completed": false,
    "createdAt": "2026-11-19T10:00:00.000Z",
    "updatedAt": "2026-11-19T10:00:00.000Z",
    "__v": 0
  }
}
```

Copy the returned `_id` for the update and delete requests.

### 2. Update a task

`PUT /api/tasks/:id`

You can update `title`, `description`, `completed`, or any combination of them. `completed` may be sent by itself.

Example — mark only `completed`:

```json
{
  "completed": true
}
```

Example — rename the task:

```json
{
  "title": "Buy groceries and cook dinner"
}
```

Success response — `200 OK`:

```json
{
  "success": true,
  "message": "Task updated successfully",
  "data": {
    "_id": "65a1b2c3d4e5f60718293a4b",
    "title": "Buy groceries and cook dinner",
    "description": "Milk and bread",
    "completed": true,
    "createdAt": "2026-11-19T10:00:00.000Z",
    "updatedAt": "2026-11-19T10:15:00.000Z",
    "__v": 0
  }
}
```

### 3. Delete a task

`DELETE /api/tasks/:id`

No request body is needed.

Success response — `200 OK`:

```json
{
  "success": true,
  "message": "Task deleted successfully"
}
```

## Error responses

Invalid input — `400 Bad Request`:

```json
{
  "success": false,
  "message": "Invalid task data",
  "errors": [
    "title must be a non-empty string"
  ]
}
```

Invalid task ID — `400 Bad Request`:

```json
{
  "success": false,
  "message": "Invalid task ID"
}
```

Task not found — `404 Not Found`:

```json
{
  "success": false,
  "message": "Task not found"
}
```

Server error — `500 Internal Server Error`:

```json
{
  "success": false,
  "message": "Internal server error"
}
```

## Testing with Postman

1. Start MongoDB and start this API with `npm run dev`.
2. Open Postman and create a new request.
3. Set the method to `POST` and the URL to `http://localhost:5000/api/tasks`.
4. Open **Body** → **raw** → **JSON**, paste the add-task JSON above, and click **Send**.
5. Confirm status `201 Created` and copy `_id` from the response.
6. Change the method to `PUT` and the URL to `http://localhost:5000/api/tasks/<your-id>`.
7. Send `{ "completed": true }` to confirm `completed` can be updated independently.
8. Send another `PUT` with `{ "title": "Updated task title" }` and confirm the response.
9. Change the method to `DELETE` using the same URL and click **Send**.
10. Confirm status `200 OK` and the deletion message.

Optional validation checks:

- Send `POST` with `{}` and expect `400`.
- Send `PUT` with `{}` and expect `400`.
- Use an invalid ID such as `abc` and expect `400`.
- Delete the same task twice and expect `404` the second time.
