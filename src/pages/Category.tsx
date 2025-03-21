import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import DisplayCategory from "../components/DisplayCategory";
import { ICategory } from "../model/ICategory";

const Category = () => {
    const [categories, setCategories] = useState<ICategory[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:3000/categories')
                setCategories(response.data)
            } catch (error) {
                console.error('Failed to load categories')
            }
        }
        fetchCategories()
    }, [])

    const handleCategory = (categoryId: number) => {
        sessionStorage.setItem('category', categoryId.toString())
        navigate('/difficulty')
    }

  return (
    <div>
      <h1 className="text-center text-2xl">Select Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <DisplayCategory 
        categories={categories}
        handleCategory={handleCategory}
        />
    </div>
</div>
  )
}

export default Category
