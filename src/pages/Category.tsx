import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import DisplayCategory from "../components/DisplayCategory";
import { ICategory } from "../model/ICategory";
import Spinner from "../components/Spinner";
import { ThemeContext } from "../context/ThemeContext";
import QuitBtn from "../components/QuitBtn";
import { getCategories } from "../services/cardService";

const Category = () => {
    const [categories, setCategories] = useState<ICategory[]>([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const theme = useContext(ThemeContext)

    useEffect(() => {
        const fetchCategories = async () => {
        try {
                const fetchedCategories = await getCategories()
                setCategories(fetchedCategories)
                setLoading(false)
            } catch (error) {
                console.error('Failed to load categories')
                setLoading(false)
            }
        }
        fetchCategories()
    }, [])

    const handleCategory = (categoryId: number) => {
        sessionStorage.setItem('category', categoryId.toString())
        navigate('/difficulty')
    }

        if(loading) return <Spinner />
        
  return (
    <div>
        <div className="flex justify-center -mt-16 mb-16">
        <QuitBtn navigateTo="/" />
        </div>
      <h1 style={{color: theme.color}} className="text-center text-3xl">Select Category</h1>
        <DisplayCategory 
        categories={categories}
        handleCategory={handleCategory}
        />
    </div>
  )
}

export default Category
