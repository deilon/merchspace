import { Link } from 'react-router-dom'

export default function Item() {
  return (
    <Link to="/" className="item bg-white">
      <img className="mb-2" src="/placeholder.svg" alt="Product image" />
      <div className="p-5">
        <p className="font-normal mb-2 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia optio fugiat accusamus.</p>
        <p className="text-lg font-semibold">$50.00 <span className="text-sm text-gray-400 ml-2">-50%</span></p>
        <div className="rating text-gray-500">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star-half'></i>
            <span className="text-sm text-gray-400 ml-2">(1203)</span>
        </div>
      </div>
    </Link>
  )
}
