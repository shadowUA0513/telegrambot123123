import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.expand(); // Expand to full screen
    tg.ready();
  }, []);

  return (
    <div>
      <h1>Welcome to My Pizza Bot! 🍕</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
        ea, illum excepturi accusamus vel sunt. Explicabo quisquam blanditiis
        ratione amet voluptas nesciunt magnam voluptatum eaque. Adipisci aperiam
        distinctio, nam hic tenetur architecto! Eaque tempora, odio cumque nam
        delectus facilis nemo doloribus similique libero cum quis iure est eos
        velit nostrum.
      </p>
      <button onClick={() => window.Telegram.WebApp.close()}>
        Close WebApp
      </button>
    </div>
  );
}

export default App;
