import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '8ea513fce93b43a9be65b1dadce6fb0f', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
