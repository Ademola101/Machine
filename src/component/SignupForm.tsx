import React from "react";
import SignUpContext from "../machine/SignUpMachine";

const SignupForm = () => {
  const { send } = SignUpContext.useActorRef();
  const state = SignUpContext.useSelector((state) => state);

  return (
    <div>
      <h2>Sign Up</h2>

      <input
        type="text"
        placeholder="Email"
        value={state.context.form.email ?? ""}
        onChange={(e) =>
          send({
            type: "ENTER_EMAIL",
            params: {
              email: e.target.value,
            },
          })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={state.context.form.password ?? ""}
        onChange={(e) =>
          send({
            type: "ENTER_PASSWORD",
            params: {
              password: e.target.value,
            },
          })
        }
      />
      <input
        type="text"
        placeholder="Name"
        value={state.context.form.name ?? ""}
        onChange={(e) =>
          send({
            type: "ENTER_NAME",
            params: {
              name: e.target.value,
            },
          })
        }
      />
      <button onClick={() => send({ type: "ON_NEXT" })}>Next

      </button>
    </div>
  );
};

export default SignupForm;
