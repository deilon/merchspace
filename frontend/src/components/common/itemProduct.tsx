import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";

export default function ItemProduct() {
  return (
    <Link to="/" className="item">
      <Card>
        <CardContent className="p-5">
          <img
            className="mb-2 dark:brightness-[0.2] dark:grayscale rounded"
            src="/placeholder.svg"
            alt="Product image"
          />
          <p className="font-normal mb-2 line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            officia optio fugiat accusamus.
          </p>
          <p className="text-lg font-semibold">
            $50.00 <span className="text-sm text-gray-400 ml-2">-50%</span>
          </p>
          <div className="rating text-gray-500">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star-half"></i>
            <span className="text-sm text-gray-400 ml-2">(1203)</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
