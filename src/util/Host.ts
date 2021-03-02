/*Class Util para reutilizar o Host default do consumo*/

// Carrega as variaveis de ambiente
require("dotenv").load();


class Host {

    private _get = process.env.HOST_ENV //IP Antônio
    //private _get = "http://192.168.1.127:8080" //IP Moisés

    /*getters and setters*/

    get get(): string {
        return this._get;
    }

    set get(value: string) {
        this._get = value;
    }
}

export default new Host();
