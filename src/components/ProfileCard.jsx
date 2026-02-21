import profile from '../assets/logo/profile-1.jpeg'

const ProfileCard = () => {
    return (
      <div className="flex flex-col items-center text-center mb-8">
        <img
          src={profile}
          alt="profile"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="text-3xl font-bold mt-4 text-white">
          Subhash Sagar
        </h1>
        <p className="text-gray-300 mt-2">
          MERN Stack Developer
        </p>
      </div>
    );
  };
  
  export default ProfileCard;
  