import { useContext, useEffect, useState } from "react"
import DisplayCategory from "../components/DisplayCategory";
import { ICategory } from "../model/ICategory";
import Spinner from "../components/Spinner";
import { ThemeContext } from "../context/ThemeContext";
import QuitBtn from "../components/QuitBtn";
import { getCategories } from "../services/cardService";
import useNavigation from "../hooks/useNavigation";

const Category = () => {
    const [categories, setCategories] = useState<ICategory[]>([])
    const [loading, setLoading] = useState(true)
    const theme = useContext(ThemeContext)
    const { goTo } = useNavigation()

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

    const handleCategory = (categoryId: number, categoryName: string) => {
        sessionStorage.setItem('categoryId', categoryId.toString())
        sessionStorage.setItem('categoryName', categoryName)
        goTo('/difficulty')
    }

        if(loading) return <Spinner />
        
  return (
    <div>
        <div className="flex justify-center -mt-20 mb-16">
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
