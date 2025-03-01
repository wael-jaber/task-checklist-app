import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PageLayout } from '@components/layout/PageLayout';
import { useUserStore } from '@store/userStore';

export interface AppLayoutContainerProps {
  children: React.ReactNode;
  title?: string;
}

export const AppLayoutContainer: React.FC<AppLayoutContainerProps> = ({
  children,
  title = 'Task Checklist App',
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, logout } = useUserStore();

  // Determine which navigation item is selected based on the current path
  const getSelectedNavigationItem = () => {
    const path = location.pathname;
    if (path.includes('/tasks')) return 'tasks';
    if (path.includes('/completed')) return 'completed';
    return 'home';
  };

  const handleNavigationItemClick = (itemId: string) => {
    switch (itemId) {
      case 'home':
        navigate('/');
        break;
      case 'tasks':
        navigate('/tasks');
        break;

      default:
        navigate('/');
        break;
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <PageLayout
      userName={currentUser?.name}
      title={title}
      onLogout={handleLogout}
      selectedNavigationItemId={getSelectedNavigationItem()}
      onNavigationItemClick={handleNavigationItemClick}
    >
      {children}
    </PageLayout>
  );
};
