import React from "react"

import { tools } from "@/services/constants"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"


import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Convertor Tools",
  description: "Unlock Your Text's Potential: Free Online Conversion Tools",
  keywords: "online converter, free converter, file converter, document converter, image converter, audio converter, video converter, unit converter, data converter, online tool, free tool, easy to use, fast conversion, batch conversion",
};

export default function Dashboard() {
  return (
    <div>
      <div className="text-center  p-4 lg:gap-6 lg:p-6">
        <h1 className="text-lg font-semibold md:text-2xl">Convertor Tools</h1>
        <div className="p-2 text-sm">
        {'Unlock Your Text\'s Potential: Free Online Conversion Tools'}
        </div>
      </div>

      <div className="grid gap-3 px-4 md:grid-cols-4">
        {tools.map((component) => {
          return (
            <Link key={component.heading} href={component.url}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-md" >{component.heading}</CardTitle>
                  <CardDescription className="text-xs line-clamp-3">{component.subHeading}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
