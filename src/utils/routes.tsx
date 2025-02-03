import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { AuthLayout, UnAuthLayout } from '@components';
import { routes } from '@utils';
import { useAppSelector } from '@store';

export const AppRoutes = () => {
    const { isAuthenticated } = useAppSelector((state) => state.login);
    console.log({ isAuthenticated });
    return (
        <BrowserRouter>
            <Routes>
                {routes.unAuth.map(({ path, component: Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<UnAuthLayout component={Component} />}
                    />
                ))}
                {routes.auth.map(({ path, component: Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={isAuthenticated ? <AuthLayout component={Component} /> : <Navigate replace to="/login" />}
                    />
                ))}
                {routes.public.map(({ path, component: Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<Component />}
                    />
                ))}
                {/* Redirect from `/` based on authentication */}
                <Route path="/" element={<Navigate replace to={isAuthenticated ? "/home" : "/login"} />} />

                {/* Catch-all route for unknown paths */}
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};
