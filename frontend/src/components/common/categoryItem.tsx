import { Link } from "react-router-dom";

export default function CategoryItem() {
  return (
    <Link to="/">
      <div className="category bg-muted p-5 border">
        <img
          src="/placeholder.svg"
          alt="category image "
          className="dark:brightness-[0.2] dark:grayscale"
        />
        <p className="text-sm my-3 text-center line-clamp-2">Category name</p>
      </div>
    </Link>
  );
}
