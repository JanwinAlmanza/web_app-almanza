import Navbar from "./components/Navbar";
import Features from "./components/Features";
import "./app2.css";
import "./index.css";

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <Features />

      <section id="about" className="py-32 text-center bg-white">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">About Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We are passionate developers creating modern and high-performance web solutions for everyone.
        </p>
      </section>

      <section id="contact" className="py-32 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact Us</h2>
        <p className="text-gray-600 text-lg">
          Send us a message and we’ll get back to you soon!
        </p>
      </section>
    </div>
  );
}

export default App;
