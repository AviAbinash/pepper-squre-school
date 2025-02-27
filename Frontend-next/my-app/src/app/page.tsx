"use client";

import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tabsections from "./components/Tabsections";

export default function Home() {
  return (
    <>
      <Header />
      <Dashboard />
      <Tabsections />
      <Footer />
    </>
  );
}
