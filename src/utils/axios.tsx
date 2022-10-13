import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';


// ----------------------------------------------------------------------

const axiosInstance = axios.create({
    baseURL: 'http://www.fpci.org.in:8080',
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || "Something went wrong"
        )
);

// INTERCEPTOR FOR LANGUAGE
axiosInstance.interceptors.request.use(
    (config) => {
        if (!config?.headers) {
            throw new Error(
                `Expected 'config' and 'config.headers' not to be undefined`
            );
        }
        const languageValue = getCookie("language");
        if (languageValue) {
            config.headers.language = languageValue;
        }

        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

const getCookie = (name: string) => {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

export default axiosInstance;
