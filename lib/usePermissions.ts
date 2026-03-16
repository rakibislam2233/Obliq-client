'use client';

import { useCallback, useEffect, useState } from 'react';

// Custom hook to manage user permissions on the client side
export function usePermissions() {
  const [permissions, setPermissions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get permissions from cookie (set by middleware/auth)
    const permissionsCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('userPermissions='))
      ?.split('=')[1];

    if (permissionsCookie) {
      try {
        const parsed = JSON.parse(decodeURIComponent(permissionsCookie));
        setPermissions(Array.isArray(parsed) ? parsed : []);
      } catch {
        setPermissions([]);
      }
    }

    setIsLoading(false);
  }, []);

  const hasPermission = useCallback(
    (requiredAtom: string): boolean => {
      return permissions.includes(requiredAtom);
    },
    [permissions],
  );

  const hasAllPermissions = useCallback(
    (atoms: string[]): boolean => {
      return atoms.every(atom => permissions.includes(atom));
    },
    [permissions],
  );

  const hasAnyPermission = useCallback(
    (atoms: string[]): boolean => {
      return atoms.some(atom => permissions.includes(atom));
    },
    [permissions],
  );

  // Helper methods for common patterns
  const canView = useCallback(
    (module: string): boolean => {
      return hasPermission(`view:${module}`);
    },
    [hasPermission],
  );

  const canCreate = useCallback(
    (module: string): boolean => {
      return hasPermission(`create:${module}`);
    },
    [hasPermission],
  );

  const canManage = useCallback(
    (module: string): boolean => {
      return hasPermission(`manage:${module}`);
    },
    [hasPermission],
  );

  const canDelete = useCallback(
    (module: string): boolean => {
      return hasPermission(`delete:${module}`);
    },
    [hasPermission],
  );

  return {
    permissions,
    isLoading,
    hasPermission,
    hasAllPermissions,
    hasAnyPermission,
    canView,
    canCreate,
    canManage,
    canDelete,
  };
}
