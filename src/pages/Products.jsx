import { products } from "../mock-data/products";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-teal-800">
        My 2026 Sketches
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title || product.name}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white p-4 text-center">
              <h2 className="text-2xl font-bold">
                {product.title || product.name}
              </h2>
              <p className="text-sm mb-4">{product.category}</p>
              <button
                onClick={() => navigate(`/products/${product.id}`)}
                className="px-6 py-2 bg-teal-500 rounded-full hover:bg-teal-400 transition-colors"
              >
                View Process
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
