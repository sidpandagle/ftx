import React from "react"
import Sidebar from "@/shared/Sidebar";
import { Navbar } from "@/shared/homepage/Navbar";
import { Footer } from "@/shared/homepage/Footer";
export default function Dashboard({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Navbar />
            {/* <div className="grid min-h-screen w-full md:grid-cols-6 lg:grid-cols-6"> */}
            {/* <Sidebar/> */}
            {/* <div className="col-span-5"> */}
            <div className="col-span-5">
                {children}
            </div>
            {/* <div className="hidden border-r bg-muted/40 md:block col-span-1">
                Ads
            </div> */}
            <Footer />
        </div>
    )
}
