import { useNavigate, useParams } from "react-router-dom";

export const Profile = () => {
  let navigate = useNavigate();
  let { username } = useParams();

  return (
    <div>
      THIS IS PROFILE PAGE FOR {username}!
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Change to about page
      </button>
    </div>
  );
};
