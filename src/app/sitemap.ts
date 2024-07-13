import { tools } from '@/services/constants'
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.swattch.co',
      lastModified: new Date(),
    },
    ...tools.map(r=>{
        return {
            url: 'https://www.swattch.co/converter/' + r.url,
            lastModified: new Date(),
        }
    })
  ]
}