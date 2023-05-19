export type Route = {
  path: string[];
  component: React.ComponentType<any>;
  redirectTo?: string;
};

export type Routes = Array<Route>;
