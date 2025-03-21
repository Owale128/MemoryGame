import { ICategory } from "../model/ICategory";

interface IDisplayCategory {
    categories: ICategory[];
    handleCategory: (categoryId: number) => void
}

const DisplayCategory = ({categories, handleCategory}: IDisplayCategory) => {
  return (
    <div>
    {categories.map((c) =>(
        <div key={c.id} onClick={() => handleCategory(c.id)}>
            <img src={c.imgUrl} alt={c.name} />
            <h2>{c.name}</h2>
        </div>
    ))}
    </div>
  )
}

export default DisplayCategory
