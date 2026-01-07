import { useNavigate } from "react-router-dom";
import { getUser, logoutUser } from "../utils/auth";

const Profile = () => {
  const navigate = useNavigate();
  const user = getUser();

  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="border p-8 max-w-sm w-full text-center space-y-4">
        <h1 className="text-lg font-semibold">My Profile</h1>

        <p className="text-sm">
          <strong>Name:</strong> {user?.name}
        </p>
        <p className="text-sm">
          <strong>Email:</strong> {user?.email}
        </p>

        <button
          onClick={() => {
            logoutUser();
            navigate("/");
          }}
          className="w-full py-2 border hover:bg-gray-100 text-sm"
        >
          Logout
        </button>
      </div>
    </section>
  );
};

export default Profile;
