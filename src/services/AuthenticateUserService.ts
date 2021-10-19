/*
* Receber code(string)
* Recuperar o access_token no github
* Verificar se o usuário existe no DB
* ---- SIM = Gera um token
* ---- NAO = Cria no DB, gera um token
* Retornar o token com as infos do user logado
*/

class AuthenticateUserService {
    async execute(code: string) {
        
    }

}

export { AuthenticateUserService }