interface IResponse {
    status: number,
    data: object | string | null,
}

class ResponseController {
    public async get (response: Response, success: Function, error: Function){
        return new Promise(async resolve =>{
            const resp = await this.getData(response)
            if (resp.status >= 200 && resp.status <= 299){
                resolve(
                    success(resp)
                )
            } else {
                resolve(
                    error(resp)
                )
            }
        })
    }

    protected async getData(response: Response): Promise<IResponse>{
        try {
            const json = await response.json()
            if (json){
                return {
                    status: response.status,
                    data: json
                };
            } else  {
                const text = await response.text()
                if (text){
                    return {
                        status: response.status,
                        data: text,
                    }
                }
                return {
                    status: response.status,
                    data: null,
                }
            }
        } catch (e) {
        }
        return {
            status: response.status,
            data: null,
        }
    }
}

export default new ResponseController();
