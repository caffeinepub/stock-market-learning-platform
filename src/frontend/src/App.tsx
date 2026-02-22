import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import HomePage from './pages/HomePage';
import BeginnerPage from './pages/BeginnerPage';
import IntermediatePage from './pages/IntermediatePage';
import AdvancedPage from './pages/AdvancedPage';
import GlossaryPage from './pages/GlossaryPage';
import Layout from './components/layout/Layout';

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const beginnerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/beginner',
  component: BeginnerPage,
});

const intermediateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/intermediate',
  component: IntermediatePage,
});

const advancedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/advanced',
  component: AdvancedPage,
});

const glossaryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/glossary',
  component: GlossaryPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  beginnerRoute,
  intermediateRoute,
  advancedRoute,
  glossaryRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
