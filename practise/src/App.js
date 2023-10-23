import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import User from "./Components/User";
import { users } from "../src/data";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <div className="user-container">
        {/* <Card>
          <h1>Welcome to React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            et debitis hic veniam. Nam, aspernatur qui. Beatae in eaque eligendi
            minima tempora odio nulla inventore dolor tempore maxime, laudantium
            id!
          </p>
        </Card>
        <User name="prasad" age="20" />
        <User />
        <User name="khabir" age="28" /> */}
        {users.map((user, index) => {
          return (
            <Card key={index}>
              <User key={index} name={user.name} job={user.job} />
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;
