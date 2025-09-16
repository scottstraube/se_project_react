import avatar from "../../assets/avatar.png";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="avatar image" className="sidebar__avatar" />
      <p className="sidebar__username">Terrence Tegegne</p>
    </div>
  );
}

export default SideBar;
