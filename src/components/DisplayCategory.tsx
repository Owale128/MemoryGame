import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { categories } from "../utils/categoriesData";

interface IDisplayCategory {
    handleCategory: (categoryId: number, categoryName: string) => void
}

const DisplayCategory = ({handleCategory}: IDisplayCategory) => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-14">
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
            className="cursor-pointer h-full rounded-2xl transition-all duration-300 transform hover:scale-110"
            style={{border: `2px solid ${theme.border}`}}
            />
        </div>
    ))}
    </div>
  )
}

export default DisplayCategory
