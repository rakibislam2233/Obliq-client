'use client';

import { ReactNode } from 'react';
import { usePermissions } from '@/lib/usePermissions';

interface PermissionGateProps {
  requiredAtom: string;
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Component-level permission gate
 * Only renders children if user has the required permission
 */
export function PermissionGate({
  requiredAtom,
  children,
  fallback = null,
}: PermissionGateProps) {
  const { hasPermission, isLoading } = usePermissions();

  if (isLoading) {
    return <>{fallback}</>;
  }

  if (hasPermission(requiredAtom)) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}

interface PermissionGateSafeProps {
  requiredAtoms: string[]; // All must be present
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Requires ALL permissions to render
 */
export function PermissionGateSafe({
  requiredAtoms,
  children,
  fallback = null,
}: PermissionGateSafeProps) {
  const { hasAllPermissions, isLoading } = usePermissions();

  if (isLoading) {
    return <>{fallback}</>;
  }

  if (hasAllPermissions(requiredAtoms)) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}

interface PermissionGateAnyProps {
  requiredAtoms: string[]; // ANY one is sufficient
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Requires ANY of the permissions to render
 */
export function PermissionGateAny({
  requiredAtoms,
  children,
  fallback = null,
}: PermissionGateAnyProps) {
  const { hasAnyPermission, isLoading } = usePermissions();

  if (isLoading) {
    return <>{fallback}</>;
  }

  if (hasAnyPermission(requiredAtoms)) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}
