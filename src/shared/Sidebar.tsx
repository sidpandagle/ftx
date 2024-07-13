'use client'
import { tools } from '@/services/constants'
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";
export default function Sidebar() {

    const pathname = usePathname();

    return (
        <div className="hidden border-r col-span-1 bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex-1">
                    <nav className="grid items-start py-4 px-2 text-sm font-medium lg:px-4">
                        <div className="flex items-center gap-3 text-lg rounded-lg px-3 py-1 transition-all text-primary">
                            Converter
                        </div>
                        {tools.map((r, i) => {
                            return (
                                <Link key={i} href={r.url} className={`flex items-center gap-3 rounded-lg px-3 py-1 text-muted-foreground hover:text-slate-900 transition-all ${pathname === r.url && 'text-slate-900 bg-slate-100'}`}>
                                    {r.heading}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </div>
    )
}