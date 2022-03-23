import axios from 'axios'

class CategoryService {
    async findAllCategories() {
        try {
            const value = await axios.get("http://localhost:8080/api/categories")
            return value.data.data
        } catch (e) {
            return console.log(e)
        }
    }
    async findCategoryById(id) {
        try {
            const value = await axios.get(`http://localhost:8080/api/categories/${id}`)
            return value.data
        } catch (e) {
            return console.log(e)
        }
    }
    deleteCategoryById(id) {
        return axios.delete(`http://localhost:8080/api/categories/${id}`);
    }
    saveCategory(category) {
        const formData = new FormData();
        formData.append('name', category.name)
        formData.append('file', category.file)
        console.log(formData)

        axios.post('http://localhost:8080/api/category', 
        formData,
        {headers: { 
                'content-type': 'multipart/form-data' 
            }
        }).then(value => console.log(value))
    }
}
export default new CategoryService()