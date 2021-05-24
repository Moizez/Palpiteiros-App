import UserService from "../services/UserService";
import Validation from "../util/Validation";
/*Poderiamos utilizar o redux para separar a lógica dos demais*/
class UserController {
    public async onSignIn(email: string, password: string, success: Function, error: Function): Promise<void>{
        if (!Validation.valid(email, password)){
            return;
        }
        await UserService.onSignIn(email, password, success, error)
    }

    public async onSignUp(name: string, email: string, phone: string, password: string, cpf: string,
                          success: Function, error: Function): Promise<void>{
        if (!Validation.valid(name, email, phone, password, cpf)){
            return;
        }
        await UserService.onSignUp(name, email, phone, password, cpf, success, error)
    }
}

export default new UserController();
