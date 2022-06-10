import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Paper from "../../components/Paper";
import useAuth from "../../context/Auth/useAuth";
import imagePlaceholder from "../../images/Placeholder.png";
import "./style.css";

const Profile = () => {
  const { user, logout } = useAuth();
  const veryfied = user?.isVeryfied ? "verified" : "not verified";
  const userImage = user?.imageUrl ? user?.imageUrl : imagePlaceholder;
  let navigate = useNavigate();
  return (
    <Paper className="user-profile">
      <div className="left-side">
        <img className="user-image" src={userImage} alt={imagePlaceholder}/>
        <div className="button-section">
          <Button >Edit Profile</Button>
          <Button className="logout" onClick={() => {logout(); navigate("/")}} >Log Out</Button>
        </div>
      </div>
      <div className="verticalLine"></div>
      <div className="right-side">
        <div className="greeting">
          <span>Wellcome back! {user?.username}</span>
        </div>
        <div className="greeting">
          <span>
            Your email: {user?.email} is {veryfied}
          </span>
        </div>
      </div>
    </Paper>
  );
};

export { Profile };
