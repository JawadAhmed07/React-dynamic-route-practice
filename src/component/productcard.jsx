import { Link } from "react-router-dom";


function ProductCard({item}){

    // console.log("Itmes=>",item);
    const {title, price, category, thumbnail,id,rating} = item;  // Destructuring properties from object.

    const renderStars = (rating) => {
      const fullStars = Math.floor(rating); // Number of full stars
      const halfStar = rating - fullStars >= 0.5; // Determine if there's a half star
      const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Empty stars
  
      return (
        <div className="flex text-yellow-500">
          {Array(fullStars)
            .fill(0)
            .map((_, index) => (
              <i key={index} className="fas fa-star"></i> // Full star
            ))}
          {halfStar && <i className="fas fa-star-half-alt"></i>} 
          {Array(emptyStars)
            .fill(0)
            .map((_, index) => (
              <i key={index} className="far fa-star"></i> // Empty star
            ))}
        </div>
      );
    };




    return(
        <Link to={`/products/${id}`} 
        className="lg:w-1/4 md:w-1/2 p-4 w-full shadow ">
        <div>
  <a className="block relative h-48 rounded overflow-hidden">
    <img
      alt="ecommerce"
      className="object-cover object-center w-full h-full block"
      src={thumbnail}
    />
  </a>
  <div className="mt-4">
    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
      {category}
    </h3>
    <h2 className="text-gray-900 title-font text-lg font-medium">
      {title}
    </h2>
    <div className="flex justify-between">
    <p className="mt-1">${price}</p>
    <p className="mt-1">Rating {rating} {renderStars(rating)} </p>
    
    </div>
  </div>
</div>
        </Link>

    )
}

export default ProductCard;