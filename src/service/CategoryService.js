import axios from 'axios'

class CategoryService {
    async findAllCategories() {
        try {
            const value = await axios.get("http://localhost:8080/api/categories")
            return value.data
        } catch (e) {
            return console.log(e)
        }
    }
    async findCategoryById(id) {
        try {
            const value = await axios.get(`http://localhost:8080/api/categories/${id}`)
            console.log(value.data)
            return value.data
        } catch (e) {
            return console.log(e)
        }
    }
    deleteCategoryById(id) {
        return axios.delete(`http://localhost:8080/api/categories/${id}`);
    }
}
export default new CategoryService()