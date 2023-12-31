import { Outlet } from "react-router-dom"

function App() {
  return (
   <div>
      <header>
        <nav className="bg-amazon_blue">
          <div className="px-5 py-4 max-w-7xl mx-auto flex items-center justify-between">
            <img
              src="https://links.papareact.com/f90"
              className="w-20 h-7 object-contain cursor-pointer"
            />
            <div className="flex items-center gap-4">
              <a href="/cart" className="text-white">Cart</a>
              <a href="/signin" className="text-white">Sign In</a>
            </div>
          </div>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto p-5">
       <Outlet/>
      </main>
      <footer className="bg-amazon_blue-light">
        <div className="text-center p-5">
            <p className="text-white">All rights reserved</p>
        </div>
      </footer>
   </div>
  )
}

export default App
