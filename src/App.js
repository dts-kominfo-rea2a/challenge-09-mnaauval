import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <Contact contacts={contacts[0]} />
      <Contact contacts={contacts[1]} />
      <Contact contacts={contacts[2]} />
      <Contact contacts={contacts[3]} />
      <Contact contacts={contacts[4]} />
      <Contact contacts={contacts[5]} />
    </div>
  );
};

export default App;
