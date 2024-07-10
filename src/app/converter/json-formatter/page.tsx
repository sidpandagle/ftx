'use client'
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@radix-ui/react-dropdown-menu"

export default function Dashboard() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function process(input: any) {
    try {
      input = JSON.parse(input)
      return JSON.stringify(input, null, "\t")
    } catch (error) {
      return 'Invalid JSON'
    }
  }

  function clear() {
     setInput('');
     setOutput('');
  }

  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="text-center">
          <h1 className="text-lg font-semibold md:text-2xl">JSON Formatter</h1>
          <div className="p-2 text-sm">
            Level up your JSON! This free tool instantly creates PHP classes from your data. Upload JSON, get clean classes with variables. Save time, write cleaner code, and build awesome apps faster!
          </div>
        </div>
        <div className="flex gap-4">
          <div className="grid w-full gap-2">

            <Label>JSON String</Label>
            <Textarea value={input} onPaste={(e) => { setOutput(process(e.clipboardData.getData('Text'))) }} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => setInput(input)} className="resize-none h-72 focus-visible:ring-offset-0" />
          </div>
          <div className="grid w-full gap-2 relative">
            <Label>JSON</Label>
            <Textarea value={output} onChange={(e) => {}} className="text-black cursor-default caret-transparent resize-none h-72 focus-visible:ring-offset-0 focus-visible:ring-0" />
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Button className="w-48" onClick={() => { setOutput(process(input)) }}>Convert</Button>
          <Button className="w-48" onClick={() => { clear() }} variant={"outline"}>Clear</Button>
        </div>
      </main>
    </div>
  )
}
