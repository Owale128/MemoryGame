import { useContext } from "react";
import { ICategory } from "../model/ICategory";
import { BASE_URL } from "../utils/baseUrl";
import { ThemeContext } from "../context/ThemeContext";

interface IDisplayCategory {
    categories: ICategory[];
    handleCategory: (categoryId: number, categoryName: string) => void
}

const DisplayCategory = ({categories, handleCategory}: IDisplayCategory) => {
  const theme = useContext(ThemeContext)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-14">
    {categories.map((c) =>(
        <div 
        key={c.id} onClick={() => handleCategory(c.id, c.name)} className="flex justify-center items-center">
            <img 
            src={`${BASE_URL}${c.imgUrl}`} 
            alt={c.name}
            className="cursor-pointer h-12/12 rounded-2xl transition-all duration-300 transform hover:scale-110"
            style={{border: `2px solid ${theme.border}`}}
            />
        </div>
    ))}
    </div>
  )
}

export default DisplayCategory
