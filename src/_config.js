export const process = {
    div:true,
};

export const site = {
    home: process.div ? "http://localhost:8080" : "http://tocode.ru"
};

export const app = {
    title: 'Notes'
};

export const  links = [
    {
        title:'Home',
        alias: 'home',
        link:'/',
    },

    {
        title:'About',
        alias: 'about',
        link:'about',
    },
];