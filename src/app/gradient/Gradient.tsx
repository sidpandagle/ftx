'use client'
import React, { useState } from "react"
import { pallets } from "@/services/constants"
import { Check, ClipboardCopy, Cone, Minus, Radius } from "lucide-react";
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Gradient() {

  const { toast } = useToast();
  const [type, setType] = useState('linear');
  return (
    <div className="container mx-auto">
      <div className="text-center relative p-4 lg:gap-6 lg:p-6">
        <h1 className="text-lg font-semibold md:text-2xl">Gradients</h1>
        <div className="flex justify-between flex-col md:flex-row items-center">
          <div className="md:w-1/3">
            
          </div>
          <div className="p-2 text-sm md:w-1/3">
            Level Up Your Design: Unleash the Power of Gradients
          </div>
          <div className="flex gap-2 p-4 md:w-1/3 justify-end">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div onClick={() => { setType('linear') }} className={`p-2  border  hover:border-slate-600 rounded-md ${type == 'linear' && 'border-slate-600'}`}>
                    <Minus className="h-4" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Linear</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div onClick={() => { setType('radial') }} className={`p-2  border  hover:border-slate-600 rounded-md ${type == 'radial' && 'border-slate-600'}`}>
                    <Radius className="h-4" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Radial</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div onClick={() => { setType('conic') }} className={`p-2  border  hover:border-slate-600 rounded-md ${type == 'conic' && 'border-slate-600'}`}>
                    <Cone className="h-4" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Conical</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      <div className="grid gap-3 px-4 md:grid-cols-4 py-4">
        {pallets.map((component) => {
          let gradient = '';
          if (type == 'radial') {
            gradient = `radial-gradient(#${component.slice(0, 6)}, #${component.slice(6, 12)}, #${component.slice(12, 18)}, #${component.slice(18, 24)})`
          }
          if (type == 'conic') {
            gradient = `conic-gradient(#${component.slice(0, 6)} 0deg, #${component.slice(6, 12)} 90deg, #${component.slice(12, 18)} 180deg, #${component.slice(18, 24)} 270deg, #${component.slice(0, 6)} 360deg)`
          }
          if (type == 'linear') {
            gradient = `linear-gradient(to bottom right, #${component.slice(0, 6)}, #${component.slice(6, 12)}, #${component.slice(12, 18)}, #${component.slice(18, 24)})`
          }
          return (
            <div key={component} className="h-40 rounded-2xl relative" style={{ background: gradient }}>
              <div className="absolute group duration-300 z-10 top-3 right-2 rounded-lg" >
                <ClipboardCopy className="h-4 w-4 group-hover:text-slate-100 duration-300 text-slate-800" onClick={() => {
                  toast({
                    title: "Copied",
                    description: "Code copied to clipboard",
                    action: (
                      <Check />
                    ),
                  });
                  navigator.clipboard.writeText(gradient);
                }} />
              </div>
              {/* <div className="absolute group duration-300 z-10 top-3 right-8 rounded-lg" >
                <ClipboardCopy className="h-4 w-4 group-hover:text-slate-100 duration-300 text-slate-800" onClick={() => {
                  toast({
                    title: "Copied",
                    description: "Code copied to clipboard",
                    action: (
                      <Check />
                    ),
                  });
                  navigator.clipboard.writeText(gradient);
                }} />
              </div> */}
            </div>
          )
        })}
      </div>
      <Toaster />
    </div >
  )
}
