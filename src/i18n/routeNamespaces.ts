import {
  globalMessageModules,
  type MessageModule,
} from './messageModules';

/** Extra namespaces per pathname (App Router). */
const routeMessageModules: Record<string, readonly MessageModule[]> = {
  '/': ['home', 'hero', 'about', 'contact', 'techstack', 'career'],
  '/legal': ['legal'],
  '/privacy': ['privacy'],
  '/~offline': ['pwa'],
};

export function resolveMessageModules(pathname: string): MessageModule[] {
  const routeModules = routeMessageModules[pathname];

  if (routeModules) {
    return [...new Set([...globalMessageModules, ...routeModules])] as MessageModule[];
  }

  if (pathname === '/manifest.webmanifest') {
    return [
      ...new Set([...globalMessageModules, 'manifest' as const]),
    ] as MessageModule[];
  }

  return [
    ...new Set([...globalMessageModules, 'notFound' as const]),
  ] as MessageModule[];
}
