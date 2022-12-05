import React, {useState, useEffect, useRef} from 'react';
import '../CSS/password.css';

export default function Homepage (){
    return (
        <div class="wrapper">

            <header>
              <h1>💽 Password Generator! 🔒</h1>
              <a class="nav-link" href="https://github.com/Lawhornmatt/Ch3_PasswordGenerator">Find GitHub Repo Here</a>
            </header>

            <div class="card">

              <div class="card-header">
                <h2>Generate a Password</h2>
              </div>

              <div class="card-body">
                <textarea
                  readonly
                  id="password"
                  placeholder="Your Secure Password"
                  aria-label="Generated Password"
                ></textarea>
              </div>

              <div class="card-footer">
                <button id="generate" class="btn">Generate Password</button>
              </div>

              <div class="pass-options">
                <h2>Options:</h2>
                <form action="/action_page.php">
                  <input type="checkbox" id="useLwrcase"/>
                  <label for="useLwrcase"> Use Lowercase Characters</label>
                  <input type="checkbox" id="useUprcase"/>
                  <label for="useUprcase"> Use Uppercase Characters</label>
                  <input type="checkbox" id="useNumbers"/>
                  <label for="useNumbers"> Use Number Characters</label>
                  <input type="checkbox" id="useSpecials"/>
                  <label for="useSpecials"> Use Special Characters</label>
                </form>
                <p>Number of characters in password:</p>
                <div class="slidecontainer">
                  <input type="range" min="8" max="128" value="10" class="slider" id="passLengthSlider"/>
                  <input type="number" value="10" id="passLengthText"></input>
                </div>
              </div>

            </div>
        </div>  
    )
};
