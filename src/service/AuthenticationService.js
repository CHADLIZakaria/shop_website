import axios from "axios"

class AuthentificationService {
    login(username, password) {
    
        axios.post('http://localhost:8080/api/login')
        .then(value => console.log(value.data))
        .catch(e => console.log(e))
    }
}
export default new AuthentificationService()