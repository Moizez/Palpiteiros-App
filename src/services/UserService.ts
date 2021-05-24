import RequestController from "../controllers/RequestController";
const baseURL = '/api/users'

class UserService {
    public async onSignIn(email: string, password: string, success: Function, error: Function): Promise<void>{
        await RequestController.onPost(`${baseURL}/login`, {
            email, password
        }, success, error)
    }

    public async onSignUp(name: string, email: string, phone: string, password: string, cpf: string,
                          success: Function, error: Function): Promise<void>{
        await RequestController.onPost(`${baseURL}/login`, {
            name, email, phone, password
        }, success, error)
    }
}

export default new UserService();
