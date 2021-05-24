class Validation {
    public isEmpty(value: string): boolean{
        return value.trim().length === 0
    }

    public valid(...values): boolean{
        let size = 0;

        for (let value of values){
            if (!this.isEmpty(value)){
                size++;
            }
        }

        return size === values.length;
    }
}

export default new Validation();
