import useAuth from "../../hooks/useAuth";
import imagePlaceholder from "../../images/Placeholder.png"
import "./style.css" 

const Profile = () => {
const user = useAuth();
const veryfied = user.isVeryfied ? "verified" : "not verified";
const userImage = user.imageUrl ? user.imageUrl : imagePlaceholder
    return (
        <div className="user-profile">
            <div className="left-side">
                <img className="user-image" src={userImage} />
                <button className="button">Edit Profile</button>
                <button className="button">Log Out</button>
            </div>
            <div className="verticalLine"></div>
            <div className="right-side">
                <div className="greeting"><span>Wellcome back! {user.username}</span></div>
                <div className="greeting"><span>Your email: {user.email} is {veryfied}</span></div> 
                </div>
        </div>
    )
}

export {Profile};