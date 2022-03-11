import axios from "axios";

class ProductService {
    findAll() {
        return axios.get('http://localhost:8080/api/products').then(value => value.data).catch(e => console.log(e))
    }
    findByCategories(categoryName) {
        return axios.get(`http://localhost:8080/api/category/${categoryName}/products`).then(value => value.data).catch(e => console.log(e))       
    }
}
export default new ProductService();