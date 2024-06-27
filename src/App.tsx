import "./App.css";
import SignupForm from "./component/SignupForm";

import AccountType from "./component/AccountType";
import BusinnessName from "./component/BusinnessName";
import { useSelector } from "./machine/SignUpMachine";

function App() {
  const state = useSelector((state) => state);
  console.log(state.context);

  return (
    <>
      <header className="App-header">
        <div>
          <h2>Sign Up</h2>
          {state.matches("fillingForm") && <SignupForm />}
          {state.matches("choosingAccountType") && <AccountType />}
          {state.matches("fillingBusinessName") && <BusinnessName />}
        </div>
      </header>
    </>
  );
}

export default App;
