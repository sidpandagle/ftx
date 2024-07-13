import React from "react"
import Converter from "./Converter"

import type { Metadata, ResolvingMetadata } from 'next'
import { tools } from "@/services/constants"

type Props = {
  params: { type: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const type = params.type
  const tool = tools.find((r: any) => r.url == params.type)
  return {
    title: tool?.heading,
    description: tool?.subHeading,
    keywords: tool?.metaKeywords,
  }
}
export default function Dashboard({ params }: { params: { type: string } }) {
  return (
    <Converter params={params} />
  )
}
