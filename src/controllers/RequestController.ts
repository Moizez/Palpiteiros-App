/*Class RequestController util para reutilizar as requisições http*/

import Host from "../util/Host";
import ResponseController from "./ResponseController";

class RequestController {
    public onGet = async (uri: string, success: Function, error: Function) => {
        return await this.get(await this.onGetFetch(uri), success, error);
    }

    public onGetToken = async (uri: string, token: string, success: Function, error: Function) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + token);

        const data = {
            method: 'GET',
            headers: headers,
        };

        await this.get(await this.onGetFetchData(uri, data), success, error)
    }

    public onPost = async (uri: string, objectReq: object, success: Function, error: Function) => {
        const data = {
            method: 'POST',
            body: JSON.stringify(objectReq),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        await this.get(await this.onGetFetchData(uri, data), success, error)
    }

    public onPostToken = async (uri: string, objectReq: object, token: string, success: Function, error: Function) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + token);
        headers.append("Accept", 'application/json');

        const data = {
            method: 'POST',
            body: JSON.stringify(objectReq),
            headers: headers,
        };

        await this.get(await this.onGetFetchData(uri, data), success, error)
    }

    public onPut = async (uri: string, objectReq: object, success: Function, error: Function) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", 'application/json');

        const data = {
            method: 'PUT',
            body: JSON.stringify(objectReq),
            headers: headers,
        };

        await this.get(await this.onGetFetchData(uri, data), success, error)
    }

    public onPutJSONToken = async (uri: string, objectReq: object, token: string, success: Function, error: Function) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + token);
        headers.append("Accept", 'application/json');

        const data = {
            method: 'PUT',
            body: JSON.stringify(objectReq),
            headers: headers,
        };

        await this.get(await this.onGetFetchData(uri, data), success, error)
    };

    private onGetFetchData = async (url: string, data: object) => {
        let res = fetch(Host.get + url, data)
        return await res;
    }

    private onGetFetch = async (url: string) => {
        let res = fetch(Host.get + url)
        return await res;
    }

    private get = async (resp: Response, success: Function, error: Function) =>{
        await ResponseController.get(resp, success, error)
    }
}

export default new RequestController();
