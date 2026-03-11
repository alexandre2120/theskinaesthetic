/**
 * StructuredData — JSON-LD schema markup for AI SEO
 *
 * Injects comprehensive structured data that helps AI systems
 * (Google AI Overviews, ChatGPT, Perplexity, Claude, Gemini)
 * understand, extract, and cite our content.
 *
 * Schemas included:
 * - LocalBusiness (with services, pricing, area served)
 * - FAQPage (all FAQ items)
 * - Person (Jessica Jaques credentials)
 * - Service (each treatment with pricing)
 * - AggregateRating + Reviews
 * - HowTo (booking process)
 * - WebSite + WebPage
 * - BreadcrumbList
 */

const SITE_URL = 'https://theskinaesthetic.pt';
const BUSINESS_NAME = 'The Skin Aesthetic';
const PHONE = '+351931943608';
const EMAIL = 'info@theskinaesthetic.pt';

// --- LocalBusiness Schema ---
const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  '@id': `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  alternateName: 'The Skin Aesthetic by Jessica Jaques',
  description:
    'Massagens terapêuticas e tratamentos corporais ao domicílio em Lisboa e Setúbal. Massagem relaxante, terapêutica, drenagem linfática, redutora/modeladora, gestantes e tratamento de estrias com microderme regenerativa. Consulta de avaliação gratuita.',
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  image: `${SITE_URL}/jessica-jaques.png`,
  logo: `${SITE_URL}/logoastheric.png`,
  priceRange: '€30-€70',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, MB Way',
  foundingDate: '2018',
  founder: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#jessica`,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Lisboa',
      '@id': 'https://www.wikidata.org/wiki/Q597',
    },
    {
      '@type': 'City',
      name: 'Setúbal',
      '@id': 'https://www.wikidata.org/wiki/Q163041',
    },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 38.7223,
      longitude: -9.1393,
    },
    geoRadius: '50000',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.7223,
    longitude: -9.1393,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lisboa',
    addressRegion: 'Lisboa',
    addressCountry: 'PT',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/_theskinaesthetic_',
    'https://www.facebook.com/profile.php?id=61553877294814',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Maria Santos' },
      datePublished: '2025-09-15',
      reviewBody:
        'A Jessica é extraordinária. Depois das sessões de massagem terapêutica, as tensões que sentia nas costas desapareceram por completo. Sinto-me outra pessoa.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ana Ferreira' },
      datePublished: '2025-10-03',
      reviewBody:
        'Procurei a Jessica para drenagem linfática e o resultado superou todas as expectativas. O inchaço diminuiu notavelmente e sinto-me muito mais leve.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sofia Oliveira' },
      datePublished: '2025-11-20',
      reviewBody:
        'O tratamento de estrias fez maravilhas pela minha pele. Após várias sessões, as marcas suavizaram significativamente e a pele está muito mais firme.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Massagens e Tratamentos Corporais',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Massagens',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Massagem Relaxante',
              description:
                'Indicada para aliviar o stress, reduzir tensões musculares e promover o relaxamento profundo do corpo e da mente.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Massagem Terapêutica',
              description:
                'Focada no alívio de dores musculares, tensões e desconfortos acumulados no corpo.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Drenagem Linfática',
              description:
                'Estimula o sistema linfático, ajudando na redução de retenção de líquidos, inchaço e melhorando a circulação.',
            },
          },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Tratamento de Estrias',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Microderme Regenerativa',
              description:
                'Tratamento que estimula a produção natural de colagénio para suavizar estrias e melhorar a textura da pele.',
            },
          },
        ],
      },
    ],
  },
};

// --- Person Schema (Jessica Jaques) ---
const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#jessica`,
  name: 'Jessica Jaques',
  jobTitle: 'Esteticista & Massoterapeuta',
  description:
    'Esteticista e massoterapeuta com mais de 8 anos de experiência em massagens terapêuticas e tratamentos corporais. Licenciada em Estética e Cosmética, com especializações em massoterapia, drenagem linfática e tratamentos corporais. Membro da Associação Portuguesa de Estética.',
  image: `${SITE_URL}/jessica-jaques.png`,
  url: SITE_URL,
  worksFor: {
    '@type': 'BeautySalon',
    '@id': `${SITE_URL}/#business`,
  },
  knowsAbout: [
    'Massagem Relaxante',
    'Massagem Terapêutica',
    'Drenagem Linfática',
    'Massagem Redutora e Modeladora',
    'Massagem para Gestantes',
    'Tratamento de Estrias',
    'Microderme Regenerativa',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Licenciatura em Estética e Cosmética',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Especialização em Massoterapia',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Certificação em Drenagem Linfática',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Formação em Tratamentos Corporais',
    },
  ],
  memberOf: {
    '@type': 'Organization',
    name: 'Associação Portuguesa de Estética',
  },
};

// --- Service schemas (individual services with pricing) ---
const services = [
  {
    name: 'Massagem Relaxante',
    description:
      'Indicada para aliviar o stress, reduzir tensões musculares e promover o relaxamento profundo do corpo e da mente. Sessão de 30 ou 60 minutos.',
    price: '30',
    duration: 'PT60M',
  },
  {
    name: 'Massagem Terapêutica',
    description:
      'Focada no alívio de dores musculares, tensões e desconfortos acumulados no corpo. Sessão de 30 ou 60 minutos.',
    price: '35',
    duration: 'PT60M',
  },
  {
    name: 'Drenagem Linfática',
    description:
      'Estimula o sistema linfático, ajudando na redução de retenção de líquidos, inchaço e melhorando a circulação. Sessão de 45 ou 60 minutos.',
    price: '45',
    duration: 'PT60M',
  },
  {
    name: 'Massagem Redutora / Modeladora',
    description:
      'Técnica focada na ativação da circulação e auxílio na redução de medidas e melhoria da textura da pele. Sessão de 45 ou 60 minutos.',
    price: '40',
    duration: 'PT60M',
  },
  {
    name: 'Massagem para Gestantes',
    description:
      'Massagem suave e segura que ajuda a aliviar tensões, dores lombares e inchaço durante a gravidez. Sessão de 45 minutos.',
    price: '40',
    duration: 'PT45M',
  },
  {
    name: 'Tratamento de Estrias — Microderme Regenerativa',
    description:
      'Tratamento que estimula a produção natural de colagénio para suavizar estrias e melhorar a textura da pele. Zona pequena, média ou grande.',
    price: '35',
    duration: 'PT45M',
  },
];

const serviceSchemas = services.map((svc) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Massagem e Tratamento Corporal',
  name: svc.name,
  description: svc.description,
  provider: {
    '@type': 'BeautySalon',
    '@id': `${SITE_URL}/#business`,
  },
  areaServed: ['Lisboa', 'Setúbal'],
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceType: 'Ao domicílio',
    serviceLocation: {
      '@type': 'Place',
      name: 'Ao domicílio do cliente',
    },
  },
  offers: {
    '@type': 'Offer',
    price: svc.price,
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: svc.price,
      priceCurrency: 'EUR',
      unitText: 'sessão',
    },
    availability: 'https://schema.org/InStock',
    validFrom: '2025-01-01',
  },
  estimatedDuration: svc.duration,
}));

// --- FAQPage Schema ---
const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Que tipos de massagem oferecem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oferecemos massagem relaxante, terapêutica, drenagem linfática, redutora/modeladora e para gestantes. Cada uma é adaptada às suas necessidades específicas.',
      },
    },
    {
      '@type': 'Question',
      name: 'O tratamento de estrias dói?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. A microderme regenerativa é confortável e indolor. Pode sentir uma ligeira sensação na pele, mas a maioria das clientes considera a experiência relaxante.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quantas sessões são necessárias para as estrias?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os resultados são progressivos e o número de sessões varia conforme cada caso. Na consulta de avaliação gratuita, definimos o plano ideal para si.',
      },
    },
    {
      '@type': 'Question',
      name: 'As massagens são seguras durante a gravidez?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim! Temos uma massagem específica para gestantes, suave e segura, que ajuda a aliviar tensões, dores lombares e inchaço durante a gravidez.',
      },
    },
    {
      '@type': 'Question',
      name: 'Com que frequência devo fazer massagem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende dos seus objetivos. Para manutenção do bem-estar, recomendamos sessões semanais ou quinzenais. Na consulta, definimos a frequência ideal para si.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funciona o serviço ao domicílio em Lisboa e Setúbal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Levamos todo o equipamento profissional e produtos à sua casa. Apenas precisamos de um espaço confortável. Atendemos zonas selecionadas de Lisboa e Setúbal — contacte-nos para confirmar disponibilidade na sua zona.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso de alguma preparação antes da massagem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recomendamos vestir roupa confortável e manter-se hidratada. Evite refeições pesadas antes da sessão. Levamos tudo o que é necessário — só precisa de relaxar.',
      },
    },
  ],
};

// --- HowTo Schema ---
const howTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como Agendar uma Massagem ou Tratamento Corporal ao Domicílio',
  description:
    'Processo simples em 3 passos para agendar massagens terapêuticas e tratamentos corporais personalizados ao domicílio em Lisboa e Setúbal com The Skin Aesthetic.',
  totalTime: 'P1D',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'EUR',
    value: '0',
    name: 'Consulta de avaliação gratuita',
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Consulta',
      text: 'Avaliação das suas necessidades corporais, historial e objetivos para definir um plano personalizado de massagens ou tratamentos. A consulta de avaliação é gratuita.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Sessão',
      text: 'Sessões realizadas na sua casa com técnicas profissionais. Levamos todo o equipamento e produtos — apenas precisa de relaxar.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Resultados',
      text: 'Corpo renovado, menos tensões e mais bem-estar. Acompanhamento contínuo para manter e potenciar os resultados obtidos.',
    },
  ],
};

// --- WebSite Schema ---
const webSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BUSINESS_NAME,
  description:
    'Massagens terapêuticas e tratamentos corporais ao domicílio em Lisboa e Setúbal por Jessica Jaques. Massagem relaxante, terapêutica, drenagem linfática e tratamento de estrias.',
  publisher: {
    '@type': 'BeautySalon',
    '@id': `${SITE_URL}/#business`,
  },
  inLanguage: ['pt-PT', 'en', 'es'],
};

// --- WebPage Schema ---
const webPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: 'The Skin Aesthetic | Jessica Jaques — Massagens e Tratamentos Corporais em Lisboa e Setúbal',
  description:
    'Massagens terapêuticas e tratamentos corporais especializados ao domicílio. Relaxamento, bem-estar e cuidados personalizados. Lisboa e Setúbal. Consulta de avaliação gratuita.',
  isPartOf: {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
  },
  about: {
    '@type': 'BeautySalon',
    '@id': `${SITE_URL}/#business`,
  },
  datePublished: '2025-01-01',
  dateModified: new Date().toISOString().split('T')[0],
  inLanguage: 'pt-PT',
};

// --- BreadcrumbList Schema ---
const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
  ],
};

// Combine all schemas
const allSchemas = [
  localBusiness,
  person,
  ...serviceSchemas,
  faqPage,
  howTo,
  webSite,
  webPage,
  breadcrumb,
];

export default function StructuredData() {
  return (
    <>
      {allSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
