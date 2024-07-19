'use client'
import React, { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@radix-ui/react-dropdown-menu"
import { tools } from "@/services/constants"
import { Check, ClipboardCopy } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function Converter({ params }: { params: { type: string } }) {

    const [convertor, setConvertor] = useState({} as any);
    const [showIcon, setShowIcon] = useState(false);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const textRef:any = useRef(null);

    useEffect(() => {
        setConvertor(tools.find((r: any) => r.url == '/converter/' + params.type));
    }, [params])

    useEffect(() => {
        setInput(convertor.sampleInput)
    }, [convertor])

    useEffect(() => {
        if (convertor && convertor.process) {
            setOutput(convertor.process(input))
        }
    }, [input])

    useEffect(() => {
        setTimeout(()=>{
            if (textRef.current) {
                textRef.current.focus();
            }
        })
    }, []);

    function clear() {
        setInput('');
        setOutput('');
    }
    const { toast } = useToast()

    return (
        convertor?.heading &&
        <div className="flex flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <div className="text-center">
                    <h1 className="text-lg font-semibold md:text-2xl">{convertor.heading}</h1>
                    <div className="p-2 text-sm">
                        {convertor.subHeading}
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="grid w-full gap-2">

                        <Label>{convertor.labelOne}</Label>
                        <Textarea ref={textRef} value={input} onPaste={(e) => { setOutput(convertor.process(e.clipboardData.getData('Text'))) }} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => setInput(input)} className="resize-none focus-visible:ring-1 focus-visible:ring-offset-0 h-72" />
                    </div>
                    <div className="grid w-full gap-2 relative" onMouseEnter={() => { setShowIcon(true) }} onMouseLeave={() => { setShowIcon(false) }}>
                        {output && showIcon &&
                            <div className="absolute border group border-slate-800 hover:bg-slate-800 p-1 z-10 top-10 right-4 rounded-lg" >
                                <ClipboardCopy className="h-4 w-4 group-hover:text-white text-slate-800" onClick={() => {
                                    toast({
                                        title: "Copied",
                                        description: "Code copied to clipboard",
                                        action: (
                                            <Check />
                                        ),
                                    });
                                    navigator.clipboard.writeText(output);
                                }} />
                            </div>}
                        <Label>{convertor.labelTwo}</Label>
                        <Textarea value={output} onChange={(e) => { }} className="text-black cursor-default caret-transparent resize-none h-72 focus-visible:ring-offset-0 focus-visible:ring-0" />
                    </div>
                </div>
                <div className="flex justify-center gap-4">
                    <Button className="w-48" onClick={() => { setOutput(convertor.process(input)) }}>Convert</Button>
                    <Button className="w-48" onClick={() => { clear() }} variant={"outline"}>Clear</Button>
                </div>
            </main>
            <Toaster />
        </div>
    )
}
