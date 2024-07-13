import Link from "next/link"
import React from "react"
import { tools } from "@/services/constants";
export default function Dashboard({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="grid min-h-screen w-full md:grid-cols-6 lg:grid-cols-6">
            <div className="hidden border-r col-span-1 bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex-1">
                        <nav className="grid items-start py-4 px-2 text-sm font-medium lg:px-4">
                            <div className="flex items-center gap-3 text-lg rounded-lg px-3 py-1 text-muted-foreground transition-all text-primary">
                                Converter
                            </div>
                            {tools.map((r, i) => {
                                return (
                                    <Link key={i} href={r.url} className="flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground transition-all text-primary">
                                        {r.heading}
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="col-span-5">
                {children}
            </div>
            {/* <div className="hidden border-r bg-muted/40 md:block col-span-1">
                Ads
            </div> */}
        </div>
    )
}
