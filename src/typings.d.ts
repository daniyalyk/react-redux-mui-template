type Route = Array<{ path: string; component: React.FC; }>;
type RouteType = 'public' | 'auth' | 'unAuth';

type IRoutes = {
    [key in RouteType]: Route;
};
type AllowedPaths = 'home' | 'login'