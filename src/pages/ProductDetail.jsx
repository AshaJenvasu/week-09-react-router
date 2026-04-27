import { useParams, useNavigate } from "react-router-dom";
import { products } from "../mock-data/products";

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => String(p.id) === productId);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-600">Product not found</h2>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 text-teal-500 underline cursor-pointer"
        >
          Go back to Gallery
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <button
        onClick={() => navigate("/products")}
        className="mb-6 text-gray-500 hover:text-teal-600 transition flex items-center gap-2 cursor-pointer"
      >
        ← Back to Gallery
      </button>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3 shadow-2xl rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-contain transition-all hover:scale-105 duration-700"
          />
        </div>

        <div className="lg:w-1/3 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
          <div className="mb-6">
            <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 mt-3 mb-2">
              {product.title}
            </h1>
            <p className="text-sm text-gray-400 italic">
              Artwork ID: {product.id}
            </p>
          </div>

          <div className="space-y-6 flex-grow">
            <div>
              <h3 className="text-sm font-bold text-gray-800 uppercase mb-2">
                Tools Used
              </h3>
              <p className="text-gray-600 bg-gray-50 p-3 rounded-lg border-l-4 border-teal-500">
                {product.tools || "Digital Painting Tools"}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-800 uppercase mb-2">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description || " Digital Art Sketching Manga style "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
