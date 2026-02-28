import React from "react";
const Login = () => {
  return (
    <section>
      <article>
        <div>
          <form>
            <div>
              <input type="text" id="Email" placeholder="Email ID *" required />
            </div>
            <div>
              <input
                type="password"
                id="password"
                placeholder="Password *"
                required
              />
            </div>
            <div>
              <button>submit</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};
export default Login;
