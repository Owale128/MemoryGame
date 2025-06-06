import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ICategory } from "../model/ICategory";
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom";

interface IDisplayCategory {
  categories: ICategory[]
  handleCategory: (categoryId: string, categoryName: string) => void
}

const DisplayCategory = ({categories, handleCategory}: IDisplayCategory) => {
  const location = useLocation()
  const {theme} = useContext(ThemeContext)
  sessionStorage.setItem('categories', JSON.stringify (categories))

  return (
    <motion.main
    key={location.key}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    className="grid grid-cols-2 gap-5 p-5 md:grid-cols-3 md:p-10 lg:grid-cols-4 lg:p-10 lg:gap-10 "
    >

    {categories.map((c) =>(
      <div 
      key={c.id} 
      onClick={() => handleCategory(c.id, c.name)} 
      className="flex justify-center items-center place-items-center"
      role="button"
      tabIndex={0}
      aria-label={`Select category ${c.name}`}
      >

        <img 
        src={`${c.imgUrl}`} 
        alt={`Category image for ${c.name}`}
        className="cursor-pointer h-full rounded-2xl transition-all duration-300 transform hover:scale-105"
        style={{border: `2px solid ${theme.border}`}}
        />
        
        </div>
    ))}
    </motion.main>
  )
}

export default DisplayCategory
