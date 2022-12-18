import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gnhjhbkavtvnvwzqgiru.supabase.co";
const supabaseKey = process.env.REACT_APP_SUP_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
    window.addEventListener('hashchange', function() {
      checkUser();
    });
  }, []);
  function checkUser() {
    const user = supabase.auth.user();
    setUser(user);
  }
  async function handleClick() {
    await supabase.auth
      .signIn(
        {
          provider: "google"
        },
      )
  }
  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }
  if (user) {
    return (
      <div className="App">
        <h1>Hello, {user.email}</h1>
        <button onClick={signOut}>Sign out</button>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Hello, please sign in!</h1>
      <button onClick={handleClick}>Sign In</button>
    </div>
  );
}

export default App;
