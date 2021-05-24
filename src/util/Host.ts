/*Class Util para reutilizar o Host default do consumo*/

class Host {

    //private _get = "http://192.168.1.10:8080" //IP Antônio
    private _get = "http://192.168.1.128:8080" //IP Moisés

    /*getters and setters*/

    get get(): string {
        return this._get;
    }

    set get(value: string) {
        this._get = value;
    }
}

export default new Host();
