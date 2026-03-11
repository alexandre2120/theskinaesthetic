import type { MetadataRoute } from 'next';

const SITE_URL = 'https://theskinaesthetic.pt';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'pt-PT': SITE_URL,
          en: SITE_URL,
          es: SITE_URL,
        },
      },
    },
  ];
}
