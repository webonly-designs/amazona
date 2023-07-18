import { sampleProducts } from "./data"

function App() {
  return (
   <div>
      <header>
        Ts Amazona
      </header>
      <main>
        {sampleProducts.map((product) =>(
          <h2 key={product.slug}>{product.name}</h2>
        ))}
      </main>
      <footer>
        All rights reserved
      </footer>
   </div>
  )
}

export default App
