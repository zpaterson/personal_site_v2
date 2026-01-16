import profileImg from "../assets/profile_img.png";

export const ProfileImage = () => {
  return (
    <div className="relative w-72 h-72 mb-12 group">
      {/* rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-300/40 to-purple-300/40 animate-pulse" />
      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-200/30 to-teal-200/30 animate-spin-slow" />
      <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm" />
      <div className="absolute inset-5 rounded-full bg-gradient-to-br from-teal-100/60 to-purple-100/60" />

      {/* floating dots */}
      <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-teal-400 opacity-60 animate-float" />
      <div
        className="absolute -bottom-3 -left-3 w-3 h-3 rounded-full bg-purple-400 opacity-50 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/4 -right-4 w-2 h-2 rounded-full bg-teal-300 opacity-70 animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* profile image */}
      <img
        src={profileImg}
        alt="Profile"
        className="absolute inset-8 w-56 h-56 rounded-full object-cover shadow-2xl ring-4 ring-white/60 group-hover:ring-rose-200/60 transition-all duration-500"
      />
    </div>
  );
};
