import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ChatBot from "../components/Chatbot";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white">

      <Navbar />

      <main>
        <Outlet />
      </main>

      <ChatBot />

      <Footer />

    </div>
  );
};