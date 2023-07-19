import { Link } from "react-router-dom"
import { sampleProducts } from "../data"

function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sampleProducts.map((product) =>(
            <Link to={'/product/' + product.slug}>
                <h2>{product.name}</h2>
            </Link>
        ))}
     </div>
  )
}

export default HomePage