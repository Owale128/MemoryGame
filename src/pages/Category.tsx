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
    const [error, setError] = useState<string | null>(null)
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
                setError('Something went wrong while loading categories')
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

        if(error) {
            return(
                <div className="flex flex-col justify-center items-center mt-52">
                    <p className="text-red-500 text-4xl mb-10">{error}</p>
                    <QuitBtn navigateTo="/" />
                </div>
            )
        }
        
  return (
    <div className="relative">
        <div className="flex justify-center -mt-24 absolute left-8">
        <QuitBtn navigateTo="/" />
        </div>
      <h1 style={{color: theme.color}} className="text-center text-3xl mt-8">Select Category</h1>
        <DisplayCategory 
        categories={categories}
        handleCategory={handleCategory}
        />
    </div>
  )
}

export default Category
