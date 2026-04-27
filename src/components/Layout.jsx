import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-teal-600 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Asha</div>

          <div className="flex gap-6">
            <Link to="/" className="hover:text-teal-200 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-teal-200 transition">
              About
            </Link>
            <Link to="/products" className="hover:text-teal-200 transition">
              Gallery
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
