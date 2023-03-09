import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "./pages";
import { RequireAuth } from "./middleware/RequireAuth";
import { AdminLayout } from "./components/layouts/admin/AdminLayout";
import { PublicLayout } from "./components/layouts/public/PublicLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserListPage } from "./pages/admin/users/UserList";
import { TodoListPage } from "./pages/admin/todos/TodoList";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route
            index
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route
            path="/utilisateurs"
            element={
              <RequireAuth>
                <UserListPage />
              </RequireAuth>
            }
          />
          <Route
            path="/taches"
            element={
              <RequireAuth>
                <TodoListPage />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/enregistrement" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
