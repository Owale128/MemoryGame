import { ICategory } from "../model/ICategory";
import { BASE_URL } from "../utils/baseUrl";

interface IDisplayCategory {
    categories: ICategory[];
    handleCategory: (categoryId: number) => void
}

const DisplayCategory = ({categories, handleCategory}: IDisplayCategory) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-14">
    {categories.map((c) =>(
        <div key={c.id} onClick={() => handleCategory(c.id)}>
            <img 
            src={`${BASE_URL}${c.imgUrl}`} 
            alt={c.name}
            className="cursor-pointer h-12/12 rounded-2xl"
            />
        </div>
    ))}
    </div>
  )
}

export default DisplayCategory
