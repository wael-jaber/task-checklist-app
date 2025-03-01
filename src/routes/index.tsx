// src/routes/index.tsx (updated)
import { AppLayoutContainer } from '@containers/AppLayoutContainer';
import { DashboardContainer } from '@containers/DashboardContainer';
import { LoginContainer } from '@containers/LoginContainer';
import { TaskDetailContainer } from '@containers/TaskDetailContainer';
import { TaskFormContainer } from '@containers/TaskFormContainer';
import { TaskListContainer } from '@containers/TaskListContainer';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginContainer />} />

        <Route element={<ProtectedRoute />}>
          <Route
            path="/"
            element={
              <AppLayoutContainer title="Dashboard">
                <DashboardContainer />
              </AppLayoutContainer>
            }
          />

          <Route
            path="/tasks"
            element={
              <AppLayoutContainer title="My Tasks">
                <TaskListContainer />
              </AppLayoutContainer>
            }
          />

          <Route
            path="/tasks/create"
            element={
              <AppLayoutContainer title="Create Task">
                <TaskFormContainer />
              </AppLayoutContainer>
            }
          />

          <Route
            path="/tasks/:taskId"
            element={
              <AppLayoutContainer title="Task Details">
                <TaskDetailContainer />
              </AppLayoutContainer>
            }
          />

          <Route
            path="/tasks/:taskId/edit"
            element={
              <AppLayoutContainer title="Edit Task">
                <TaskFormContainer />
              </AppLayoutContainer>
            }
          />

          <Route
            path="/completed"
            element={<AppLayoutContainer title="Completed Tasks">Coming soon</AppLayoutContainer>}
          />
        </Route>

        <Route
          path="/session-expired"
          element={<ProtectedRoute sessionExpiredReason="expired" />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
