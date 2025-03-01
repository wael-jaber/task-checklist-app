import { AppLayoutContainer } from '@containers/AppLayoutContainer';
import { DashboardContainer } from '@containers/DashboardContainer';
import { LoginContainer } from '@containers/LoginContainer';
import { TaskDetailContainer } from '@containers/TaskDetailContainer';
import { TaskFormContainer } from '@containers/TaskFormContainer';
import { TaskListContainer } from '@containers/TaskListContainer';
import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
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
