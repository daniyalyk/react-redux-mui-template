import { AppHeader, Footer } from "@components";
import React, { ComponentType, } from "react";
interface UnAuthLayoutProps {
    component: ComponentType;
}

export const UnAuthLayout: React.FC<UnAuthLayoutProps> = ({ component: Component }) => {
    return (
        <React.Fragment>
            <AppHeader>
                <Component />
            </AppHeader>
            <Footer />
        </React.Fragment>
    );
};
export const AuthLayout: React.FC<UnAuthLayoutProps> = ({ component: Component }) => {
    return (
        <React.Fragment>
            <AppHeader>
                <Component />
            </AppHeader>
            <Footer />
        </React.Fragment>
    );
};

export const PublicLayout: React.FC<UnAuthLayoutProps> = ({ component: Component }) => {
    return (
        <React.Fragment>
            <Component />
        </React.Fragment>
    );
};