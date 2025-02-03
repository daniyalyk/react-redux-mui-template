import { Home, Login } from "@pages";

export const navigation = { "Home": Home }
export const baseUrl = {
    aws: {
        addUser: "https://ipu2ln88fc.execute-api.us-east-2.amazonaws.com/Dev/user",
        userExists: "https://ipu2ln88fc.execute-api.us-east-2.amazonaws.com/Dev/user",
        presignedUrl: "https://ipu2ln88fc.execute-api.us-east-2.amazonaws.com/Dev/user/presigned-url",
        prize: "https://ipu2ln88fc.execute-api.us-east-2.amazonaws.com/Dev/user/prizes",
    },
    ecopon: "https://www.e-copon.com/uatapi/api/value/JsonRequest",
    userIP: 'https://api.ipify.org/?format=json',
};


export const paths: { [key in AllowedPaths]: string } = {

    home: '/',
    login: '/login',
};
export const routes: IRoutes = {
    public: [
    ],
    auth: [
        { path: paths.home, component: Home },
    ],
    unAuth: [
        { path: paths.login, component: Login },
    ],
};
