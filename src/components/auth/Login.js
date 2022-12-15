import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [email, set] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    <style>

    </style>

    return fetch(`http://localhost:8088/users?email=${email}`)
      .then((res) => res.json())
      .then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0];
          localStorage.setItem(
            "capstone_user",
            JSON.stringify({
              id: user.id,
            })
          );

          navigate("/home");
        } else {
          window.alert("Invalid login");
        }
      });
  };

  return (
    <main className="container--login">
      <section>
        
         
         
       
        <form className="form--login" onSubmit={handleLogin}>
            <img className="image" src={require("../views/shelf-indulgence-01.png")}></img>
          {/* <h1>Shelf Indulgence</h1> */}
          <h1 className="PleaseSignIn">Please Sign In</h1>
          <fieldset>
            <label className="email" htmlFor="inputEmail"> Email address </label>
            <input
              type="email"
              value={email}
              onChange={(evt) => set(evt.target.value)}
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <button className="sign-in" type="submit">Sign In</button>
          </fieldset>
        </form>
      </section>
      <section className="link--register">
        <Link to="/register">Not a member yet?</Link>
      </section>

      <div id="all">
   <div id="page-flip">
      <div id="r1">
         <div id="p1">
            <div>
               <div></div>
            </div>
         </div>
      </div>
      <div id="p2">
         <div></div>
      </div>
      <div id="r3">
         <div id="p3">
            <div>
               <div></div>
            </div>
         </div>
      </div>
      <div class="s">
         <div id="s3">
            <div id="sp3"></div>
         </div>
      </div>
      <div class="s" id="s4">
         <div id="s2">
            <div id="sp2"></div>
         </div>
      </div>
      <a id="coke" href="#" title="Pure CSS Coke Can"></a>
      <a id="meninas" href="#" title="CSS 3D Meninas"></a>
   </div>
</div>




    </main>
  );
};
