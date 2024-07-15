import React from "react"
import type { Metadata } from "next";
import Gradient from "./Gradient";

export const metadata: Metadata = {
  title: "Gradients",
  description: "Level Up Your Design: Unleash the Power of Gradients",
  keywords: "online converter, free converter, file converter, document converter, image converter, audio converter, video converter, unit converter, data converter, online tool, free tool, easy to use, fast conversion, batch conversion",
};

export default function Dashboard() {
  return <Gradient />
}
