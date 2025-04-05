import { useContext, useEffect, useState } from "react"
import DisplayCategory from "../components/DisplayCategory";
import { ThemeContext } from "../context/ThemeContext";
import QuitBtn from "../components/QuitBtn";
import useNavigation from "../hooks/useNavigation";
import Spinner from "../components/Spinner";
import { categoriesData } from "../data/categoriesData";
import { ICategory } from "../model/ICategory";

const Category = () => {
    const {theme} = useContext(ThemeContext)
    const { goTo } = useNavigation()
    const [categories, setCategories] = useState<ICategory[]>([])
    const [loading, setloading] = useState(true)

    const handleCategory = (categoryId: string, categoryName: string) => {
        sessionStorage.setItem('categoryId', categoryId)
        sessionStorage.setItem('categoryName', categoryName)
        goTo('/difficulty')
    }
        
      useEffect(() => {
        setCategories(categoriesData)
          setTimeout(() => {
            setloading(false)
          }, 2000);
      }, [])

      if(loading) return <Spinner />

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
