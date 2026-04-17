import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F8FAFC] min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm px-10 py-12 max-w-md w-full text-center">
        <p className="text-8xl font-black text-[#E9E9E9] leading-none select-none mb-4">
          404
        </p>

        <h2 className="text-2xl font-bold text-[#244D3F] mb-2">
          Page Not Found
        </h2>

        <p className="text-sm text-gray-400 mb-8">
          Looks like this friendship doesn't exist yet. The page you're looking
          for has gone quiet.
        </p>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-[#244D3F] text-white font-semibold py-2.5 rounded-xl hover:bg-[#1a3a2e] transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
