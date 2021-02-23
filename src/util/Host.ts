/*Class Util para reatilizar o Host default do consumo*/

class Host{
    private _get = "192.168.1.10:8080"

    /*getters and setters*/

    get get(): string {
        return this._get;
    }

    set get(value: string) {
        this._get = value;
    }
}

export default new Host();
