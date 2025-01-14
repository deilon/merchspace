import { Link } from "react-router-dom"

export default function Category() {
  return (
    <Link to="/">
        <div className="category p-5 border">
            <img src="/placeholder.svg" alt="category image " />
            <p className="text-sm my-3 text-center line-clamp-2">Category name</p>
        </div>
    </Link>
  )
}