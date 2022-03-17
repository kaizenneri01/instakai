import React, { useEffect, useState } from "react";
import Postcards from "./components/Postcards";
import "./App.css";
import SignupModal from "./components/SignupModal";
import { database } from "./Firebase";
import UploadPhotos from "./components/UploadPhotos";

function App() {
  const [postData, setPostData] = useState([]);
  const headerImage =
    "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png";
  const [user, setUser] = useState("");

  const [pass, setPass] = useState("");

  const [email, setEmail] = useState("");

  useEffect(() => {
    database.collection("postData").onSnapshot((snapshot) => {
      setPostData(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="App">
      <div className="app__header">
        <img src={headerImage} alt="header" />
        <UploadPhotos />
        <SignupModal
          changeUser={(e) => setUser(e.target.value)}
          changePass={(e) => setPass(e.target.value)}
          changeEmail={(e) => setEmail(e.target.value)}
          user={user}
          pass={pass}
          email={email}
        />
      </div>
      <div className="app__container">
        {postData.map((x) => (
          <Postcards
            username={x.username}
            image={x.image}
            comment={x.comment}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
