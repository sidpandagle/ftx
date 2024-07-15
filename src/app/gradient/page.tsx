import React from "react"
import type { Metadata } from "next";
import Gradient from "./Gradient";

export const metadata: Metadata = {
  title: "Gradients",
  description: "Ditch the color wheel struggle! We've got thousands of awesome color gradients, always fresh and updated daily. Snag the perfect one for your next design and bookmark your faves!",
  keywords: "color gradients, design gradients, trendy gradients, gradient library, gradient tool, color palette generator, web design inspiration, graphic design tools, UI/UX design, color inspiration, download free color gradients, create custom color gradients, how to use color gradients in design, best color gradients for websites, find the perfect color gradient for your project, design trends, color theory, visual communication, user experience, user interface",
};

export default function Dashboard() {
  return <Gradient />
}
