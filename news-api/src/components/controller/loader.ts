import { DataLoaded, IData } from "./data";

interface IRequest {
    endpoint: string,
    options?: Options
}

type Options = Partial<{
    sources: string,
    apiKey: string,
    [key: string]: string
}>

enum Method {
    Get = 'GET'
}

class Loader {
    baseLink: string;
    options: Options;
    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: IRequest,
        callback: DataLoaded = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load(Method.Get, endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options, endpoint: string): string {
        const urlOptions: Options = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string): void => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: Method, endpoint: string, callback: DataLoaded, options: Options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response): Promise<IData> => res.json())
            .then((data: IData): void => callback(data))
            .catch((err: Error | string): void => console.error(err));
    }
}

export default Loader;
