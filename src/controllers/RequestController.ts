
/*Class RequestController util para reutilizar as requisições http*/

import Host from "../util/Host";

class RequestController {
    public onGet = async (uri: string) => {
        return await this.onGetFetch(uri);
    }

    public onGetToken = async (uri: string, token: string) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + token);

        const data = {
            method: 'GET',
            headers: headers,
        };

        return await this.onGetFetchData(uri, data);
    }

    public onPost = async (uri: string, objectReq: object) => {
        const data = {
            method: 'POST',
            body: JSON.stringify(objectReq),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        return await this.onGetFetchData(uri, data);
    }

    public onPostToken = async (uri: string, objectReq: object, token: string) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + token);
        headers.append("Accept", 'application/json');

        const data = {
            method: 'POST',
            body: JSON.stringify(objectReq),
            headers: headers,
        };

        return await this.onGetFetchData(uri, data);
    }

    public onPut = async (uri: string, objectReq: object) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", 'application/json');

        const data = {
            method: 'PUT',
            body: JSON.stringify(objectReq),
            headers: headers,
        };

        return await this.onGetFetchData(uri, data);
    }

    public onPutJSONToken = async (uri: string, objectReq: object, token: string) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + token);
        headers.append("Accept", 'application/json');

        const data = {
            method: 'PUT',
            body: JSON.stringify(objectReq),
            headers: headers,
        };

        return await this.onGetFetchData(uri, data);
    };

    private onGetFetchData = async (url: string, data: object) => {
        let res = fetch(Host.get + url, data)
        return await res;
    }

    private onGetFetch = async (url: string) => {
        let res = fetch(Host.get + url)
        return await res;
    }
}

export default new RequestController();
