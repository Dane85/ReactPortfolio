import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Lottie from "lottie-react";
import animation404 from "../assets/animations/404.json"; // Assuming the animation file is named 404.json

export default function NotFound() {
  return (
    <div>
      <Lottie animationData={animation404} />
      <Footer />
    </div>
  );
}
