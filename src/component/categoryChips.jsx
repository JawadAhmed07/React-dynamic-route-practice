

function CategoryChip({ category,isChosen,onClick }) {

    // console.log(isChosen)
    const { name } = category
    return (
        
        <div
        onClick={onClick}
        className={`${isChosen ? "bg-black text-white":"bg-white text-black"}
        p-2 px-3 cursor-pointer m-auto
        rounded-md border
        `}>
            <h1>{name}</h1>
        </div>
    )
}

export default CategoryChip;