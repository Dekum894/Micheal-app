import { BsEnvelope, BsBell } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
export default function TopNav(){
    return(
        <nav className="flex items-center justify-between px-6 py-2">
  <div className="flex items-center gap-2">
    <img src="/logo.png" alt="logo" className="w-14" />
    <div>
      <h4 className="text-green-800 font-semibold text-sm m-0">
        Grad<span className="text-pink-500">Guid</span>
      </h4>
      <p className="text-xs text-green-900 m-0">School Register</p>
    </div>
  </div>

  <div className="flex items-center gap-3 pr-2">
    <BsBell size={22} color="black" />
    <BsEnvelope size={22} color="black" />

    <div className="flex items-center gap-1 cursor-pointer">
      <img
        src="/profile_photo.png"
        alt="profile"
        className="w-9 h-9 rounded-full object-cover border-2 border-white/60"
      />
      <MdOutlineArrowDropDown size={22} color="black" />
    </div>
  </div>
</nav>
    )
}