import { useContext, useEffect, useState } from "react"
import DisplayCategory from "../components/DisplayCategory";
import { ICategory } from "../model/ICategory";
import Spinner from "../components/Spinner";
import { ThemeContext } from "../context/ThemeContext";
import QuitBtn from "../components/QuitBtn";
import { getCategories } from "../services/cardService";
import useNavigation from "../hooks/useNavigation";
import NotFound from "../components/NotFound";

const Category = () => {
    const [categories, setCategories] = useState<ICategory[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const {theme} = useContext(ThemeContext)
    const { goTo } = useNavigation()

    useEffect(() => {
        const fetchCategories = async () => {
        try {
                const fetchedCategories = await getCategories()
                setCategories(fetchedCategories)
                sessionStorage.setItem('categories', JSON.stringify(fetchedCategories))
                setLoading(false)
            } catch (error) {
                console.error('Failed to load categories')
                setLoading(false)
                setError('An error occurred while fetching categories')
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
                <div className="text-center">
                    <NotFound errorTxt={error} />
                    <QuitBtn navigateTo="/" />
                </div>
            )
        }
        
  return (
    <div>
        <div className="absolute top-8 left-8 md:left-12 md:top-12">
        <QuitBtn navigateTo="/" aria-label='Quit the game' />
        </div>
        <div className="landscape:my-22">
      <h1 
      style={{color: theme.color}} 
      className="text-center font-mono text-3xl mt-28 md:mt-0 lg:text-4xl"
      aria-label="Select Category"
      >
        Select Category
      </h1>
        <DisplayCategory 
        categories={categories}
        handleCategory={handleCategory}
        />
        </div>
    </div>
  )
}

export default Category
