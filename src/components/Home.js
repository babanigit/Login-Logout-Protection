import React from "react"
import { useNavigate } from 'react-router-dom';

// import firebase
import { signOut } from "firebase/auth";
import { database } from "../FirebaseConfig";

function Home() {
  // const location = useLocation()
  const history = useNavigate()

  const handleClick = () => {
    signOut(database).then(val=>{
      console.log(val)
      history('/')
    })
  }

  return (  
    <div className="homepage">
      <p>hello home here</p>
      {/* <h1>Hello {location.state.id} and welcome to the home</h1> */}

      <div>
        <button onClick={handleClick}>
          Signout
        </button>
      </div>

    </div>
  )
}

export default Home