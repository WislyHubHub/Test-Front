import { Link } from "react-router-dom";

export default function ProfileUser() {
    return (
      <>
        <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto w-full md:h-screen lg:py-0">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 sm:p-8">
              <h2 className="mb-6 text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white text-center">
                Your Profile
              </h2>
              {/* Profile Image */}
              <div className="relative mt-4 mb-6">
                <div className="flex justify-center">
                  <img
                    alt="User Profile"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    className="w-32 h-32 rounded-full shadow-lg object-cover"
                  />
                </div>
              </div>
  
              {/* Form */}
              <form className="mt-8 space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Rachapruek Ariyapruek"
                    required
                  />
                </div>
  
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="rachapruek@example.com"
                    required
                  />
                </div>
  
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Write something about yourself..."
                    rows="3"
                  ></textarea>
                </div>
  
                {/* Buttons */}
                <div className="flex justify-between items-center">
                  <Link to="/homepage"
                    type="button"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  >
                    Save Changes
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
  