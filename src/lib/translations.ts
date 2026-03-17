export type Language = 'pt' | 'en' | 'es';

export interface Translations {
  nav: {
    services: string;
    about: string;
    results: string;
    testimonials: string;
    pricing: string;
    faq: string;
    contact: string;
    book: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    cta: string;
    ctaSecondary: string;
    imageAlt: string;
  };
  trust: {
    years: string;
    clients: string;
    certifications: string;
    satisfaction: string;
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    cta: string;
    items: Array<{
      name: string;
      description: string;
      duration: string;
    }>;
  };
  whyUs: {
    label: string;
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  beforeAfter: {
    label: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    beforeLabel: string;
    afterLabel: string;
    items: string[];
  };
  testimonials: {
    label: string;
    title: string;
    items: Array<{
      name: string;
      location: string;
      text: string;
      treatment: string;
    }>;
  };
  team: {
    label: string;
    title: string;
    name: string;
    role: string;
    bio: string;
    qualifications: string[];
    locations: string;
  };
  howItWorks: {
    label: string;
    title: string;
    subtitle: string;
    steps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
  };
  pricing: {
    label: string;
    title: string;
    subtitle: string;
    from: string;
    perSession: string;
    bookNow: string;
    categories: Array<{
      name: string;
      description?: string;
      items: Array<{
        name: string;
        description: string;
        options: Array<{
          duration: string;
          price: string;
        }>;
      }>;
    }>;
    note: string;
  };
  faq: {
    label: string;
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  booking: {
    label: string;
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    treatment: string;
    treatmentOptions: string[];
    message: string;
    submit: string;
    sending: string;
    success: string;
    successDetail: string;
    error: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    schedule: string;
    scheduleItems: string[];
    lisbon: string;
    setubal: string;
    lisbonAddress: string;
    setubalAddress: string;
    phone: string;
    email: string;
    privacy: string;
    terms: string;
    rights: string;
  };
  whatsapp: {
    tooltip: string;
  };
  womensDay: {
    badge: string;
    headline: string;
    subheadline: string;
    discount: string;
    discountDetail: string;
    ctaWhatsApp: string;
    ctaForm: string;
    close: string;
  };
}

const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      services: 'Serviços',
      about: 'Sobre',
      results: 'Resultados',
      testimonials: 'Testemunhos',
      pricing: 'Preços',
      faq: 'FAQ',
      contact: 'Contacto',
      book: 'Agendar Consulta',
    },
    hero: {
      badge: 'Ao Domicílio · Lisboa & Setúbal',
      headline: 'Cuide do Seu Corpo e Bem-Estar',
      subheadline: 'Massagens terapêuticas e tratamentos estéticos personalizados ao domicílio em Lisboa e Setúbal. Relaxamento, alívio de tensões e cuidados especializados no conforto da sua casa.',
      cta: 'Agendar Consulta Gratuita',
      ctaSecondary: 'Conhecer Serviços',
      imageAlt: 'Jessica Jaques — Massoterapeuta e Esteticista em Lisboa e Setúbal',
    },
    trust: {
      years: 'Anos de Experiência',
      clients: 'Clientes Satisfeitas',
      certifications: 'Certificações',
      satisfaction: 'Taxa de Satisfação',
    },
    services: {
      label: 'Serviços',
      title: 'Os Nossos Serviços',
      subtitle: 'Massagens terapêuticas e tratamentos corporais personalizados, com técnicas profissionais ao domicílio.',
      cta: 'Saber Mais',
      items: [
        {
          name: 'Massagem Relaxante',
          description: 'Indicada para aliviar o stress, reduzir tensões musculares e promover relaxamento profundo do corpo e da mente.',
          duration: '30-60 min',
        },
        {
          name: 'Massagem Terapêutica',
          description: 'Focada em aliviar dores musculares, tensões e desconfortos acumulados no corpo.',
          duration: '30-60 min',
        },
        {
          name: 'Drenagem Linfática',
          description: 'Estimula o sistema linfático, ajudando na redução de retenção de líquidos, inchaço e melhorando a circulação.',
          duration: '45-60 min',
        },
        {
          name: 'Massagem Redutora',
          description: 'Técnica focada na ativação da circulação e auxílio na redução de medidas e melhora da textura da pele.',
          duration: '45-60 min',
        },
        {
          name: 'Massagem para Gestantes',
          description: 'Massagem suave e segura que ajuda a aliviar tensões, dores lombares e inchaços durante a gestação.',
          duration: '45 min',
        },
        {
          name: 'Tratamento de Estrias',
          description: 'Microderme regenerativa que estimula a produção natural de colagénio para suavizar estrias e melhorar a textura da pele.',
          duration: '30-45 min',
        },
      ],
    },
    whyUs: {
      label: 'Porquê Nós',
      title: 'Porque Nos Escolher',
      items: [
        {
          title: 'Profissional Certificada',
          description: 'Formação especializada em estética avançada com certificações reconhecidas internacionalmente.',
        },
        {
          title: 'Tratamentos Personalizados',
          description: 'Cada protocolo é desenhado especificamente para o seu tipo de pele e objetivos pessoais.',
        },
        {
          title: 'Resultados Naturais',
          description: 'Abordagem que valoriza a beleza natural, com resultados visíveis e harmoniosos.',
        },
        {
          title: 'Tecnologia Avançada',
          description: 'Equipamentos de última geração e produtos premium para garantir os melhores resultados.',
        },
        {
          title: 'Serviço ao Domicílio',
          description: 'Tratamentos realizados no conforto da sua casa, em zonas selecionadas de Lisboa e Setúbal. Sem deslocações, sem stress.',
        },
      ],
    },
    beforeAfter: {
      label: 'Resultados',
      title: 'Antes & Depois',
      subtitle: 'Resultados reais das nossas clientes. Cada transformação é única e personalizada.',
      disclaimer: 'Os resultados podem variar de pessoa para pessoa. Todas as imagens são publicadas com o consentimento expresso das clientes.',
      beforeLabel: 'Antes',
      afterLabel: 'Depois',
      items: ['Drenagem Linfática', 'Tratamento de Estrias', 'Massagem Redutora'],
    },
    testimonials: {
      label: 'Testemunhos',
      title: 'O Que Dizem as Nossas Clientes',
      items: [
        {
          name: 'Maria Santos',
          location: 'Lisboa',
          text: 'A Jessica é extraordinária. As massagens terapêuticas aliviaram completamente as minhas dores nas costas. Sinto-me renovada após cada sessão.',
          treatment: 'Massagem Terapêutica',
        },
        {
          name: 'Ana Ferreira',
          location: 'Setúbal',
          text: 'Fiz o tratamento de estrias após a gravidez e o resultado superou as expectativas. A pele ficou muito mais suave e firme. Profissional atenciosa e competente.',
          treatment: 'Tratamento de Estrias',
        },
        {
          name: 'Sofia Oliveira',
          location: 'Lisboa',
          text: 'A drenagem linfática fez maravilhas pelo meu corpo. A retenção de líquidos reduziu significativamente e sinto-me muito mais leve e com mais energia.',
          treatment: 'Drenagem Linfática',
        },
      ],
    },
    team: {
      label: 'A Profissional',
      title: 'Conheça a Jessica',
      name: 'Jessica Jaques',
      role: 'Esteticista & Massoterapeuta',
      bio: 'Com mais de 3 anos de experiência em estética e massoterapia, a Jessica é especialista em massagens terapêuticas e tratamentos corporais. A sua abordagem combina técnicas profissionais com atenção personalizada, garantindo bem-estar e resultados visíveis para cada cliente. Leva os tratamentos diretamente à sua casa em zonas de Lisboa e Setúbal, proporcionando uma experiência exclusiva e relaxante no seu ambiente mais confortável.',
      qualifications: [],
      locations: 'Ao domicílio em Lisboa e Setúbal',
    },
    howItWorks: {
      label: 'Como Funciona',
      title: 'O Seu Percurso Para o Bem-Estar',
      subtitle: 'Um processo simples e acolhedor, pensado para si.',
      steps: [
        {
          step: '01',
          title: 'Consulta',
          description: 'Avaliação das suas necessidades, análise corporal e definição do plano de tratamento ou massagem mais adequado para si.',
        },
        {
          step: '02',
          title: 'Tratamento',
          description: 'Sessões realizadas na sua casa com técnicas profissionais. Levamos todo o equipamento e produtos — apenas precisa de relaxar.',
        },
        {
          step: '03',
          title: 'Resultados',
          description: 'Corpo renovado, tensões aliviadas e bem-estar restaurado. Acompanhamento contínuo para manter os resultados obtidos.',
        },
      ],
    },
    pricing: {
      label: 'Preços',
      title: 'Investimento na Sua Pele',
      subtitle: 'Preços transparentes para tratamentos de excelência. Atendimento personalizado e técnicas profissionais.',
      from: 'A partir de',
      perSession: 'por sessão',
      bookNow: 'Agendar',
      categories: [
        {
          name: 'Massagens',
          description: 'Cuidar do corpo também é cuidar da mente. As nossas massagens são pensadas para proporcionar relaxamento, alívio de tensões e melhora do bem-estar geral.',
          items: [
            {
              name: 'Massagem Relaxante — 2 Zonas',
              description: 'Indicada para aliviar o stress, reduzir tensões musculares e promover relaxamento profundo do corpo e da mente.',
              options: [
                { duration: '30 min', price: '€30' },
                { duration: '60 min', price: '€45' },
              ],
            },
            {
              name: 'Massagem Terapêutica — 2 Zonas',
              description: 'Focada em aliviar dores musculares, tensões e desconfortos acumulados no corpo.',
              options: [
                { duration: '30 min', price: '€35' },
                { duration: '60 min', price: '€45' },
              ],
            },
            {
              name: 'Drenagem Linfática — Corpo Inteiro',
              description: 'Estimula o sistema linfático, ajudando na redução de retenção de líquidos, inchaço e melhorando a circulação.',
              options: [
                { duration: '45 min', price: '€45' },
                { duration: '60 min', price: '€60' },
              ],
            },
            {
              name: 'Massagem Redutora / Modeladora — 2 Zonas',
              description: 'Técnica focada na ativação da circulação e auxílio na redução de medidas e melhora da textura da pele.',
              options: [
                { duration: '45 min', price: '€40' },
                { duration: '60 min', price: '€65' },
              ],
            },
            {
              name: 'Massagem para Gestantes',
              description: 'Massagem suave e segura que ajuda a aliviar tensões, dores lombares e inchaços durante a gestação.',
              options: [
                { duration: '45 min', price: '€40' },
              ],
            },
          ],
        },
        {
          name: 'Tratamento de Estrias — Microderme Regenerativa',
          description: 'O tratamento atua através da microestimulação da pele, estimulando a produção natural de colagénio para melhorar a textura, suavizar as estrias e promover mais firmeza na área tratada. Avaliação gratuita para definir o plano ideal.',
          items: [
            {
              name: 'Zona Pequena',
              description: 'Indicado para áreas menores e localizadas. Exemplos: parte do glúteo, parte do abdómen, pequena área da coxa, braços.',
              options: [
                { duration: 'Sessão', price: '€35' },
              ],
            },
            {
              name: 'Zona Média',
              description: 'Áreas com maior extensão de estrias. Exemplos: abdómen completo, glúteos completo, parte frontal da coxa.',
              options: [
                { duration: 'Sessão', price: '€50' },
              ],
            },
            {
              name: 'Zona Grande',
              description: 'Áreas mais extensas ou múltiplas regiões. Exemplos: coxas completas, abdómen + flancos, glúteos + posterior da coxa.',
              options: [
                { duration: 'Sessão', price: '€70' },
              ],
            },
          ],
        },
      ],
      note: 'Consulta de avaliação gratuita. Os resultados são progressivos e o número de sessões varia de acordo com cada caso.',
    },
    faq: {
      label: 'FAQ',
      title: 'Perguntas Frequentes',
      items: [
        {
          question: 'Que tipos de massagem oferecem?',
          answer: 'Oferecemos massagem relaxante, terapêutica, drenagem linfática, massagem redutora/modeladora e massagem para gestantes. Cada uma é adaptada às suas necessidades específicas.',
        },
        {
          question: 'O tratamento de estrias dói?',
          answer: 'Não. A microderme regenerativa é confortável e indolor. Poderá sentir uma ligeira sensação na pele, mas a maioria das clientes considera a experiência relaxante.',
        },
        {
          question: 'Quantas sessões são necessárias para as estrias?',
          answer: 'Os resultados são progressivos e o número de sessões varia de acordo com cada caso. Na consulta de avaliação gratuita, definimos o plano ideal para si.',
        },
        {
          question: 'As massagens são seguras durante a gravidez?',
          answer: 'Sim! Temos uma massagem específica para gestantes, suave e segura, que ajuda a aliviar tensões, dores lombares e inchaços durante a gestação.',
        },
        {
          question: 'Com que frequência devo fazer massagem?',
          answer: 'Depende dos seus objetivos. Para manutenção do bem-estar, recomendamos sessões semanais ou quinzenais. Na consulta, definimos a frequência ideal para si.',
        },
        {
          question: 'Como funciona o serviço ao domicílio?',
          answer: 'Levamos todo o equipamento profissional e produtos à sua casa. Apenas precisamos de um espaço confortável. Atendemos zonas selecionadas de Lisboa e Setúbal — consulte-nos para confirmar disponibilidade na sua área.',
        },
        {
          question: 'Preciso de alguma preparação antes da massagem?',
          answer: 'Recomendamos usar roupa confortável e estar hidratada. Evite refeições pesadas antes da sessão. Nós levamos tudo o que é necessário — apenas precisa de relaxar.',
        },
      ],
    },
    booking: {
      label: 'Agendar',
      title: 'Agende a Sua Consulta Gratuita',
      subtitle: 'Dê o primeiro passo para o seu bem-estar. Preencha o formulário e entraremos em contacto consigo brevemente.',
      name: 'Nome Completo',
      email: 'Email',
      phone: 'Telefone',
      treatment: 'Serviço de Interesse',
      treatmentOptions: [
        'Massagem Relaxante',
        'Massagem Terapêutica',
        'Drenagem Linfática',
        'Massagem Redutora / Modeladora',
        'Massagem para Gestantes',
        'Tratamento de Estrias',
        'Outro / Não sei ainda',
      ],
      message: 'Mensagem (opcional)',
      submit: 'Agendar Consulta Gratuita',
      sending: 'A enviar...',
      success: 'Mensagem enviada com sucesso!',
      successDetail: 'Obrigada! Entraremos em contacto consigo em breve.',
      error: 'Ocorreu um erro ao enviar. Por favor, tente novamente.',
    },
    footer: {
      description: 'Massagens terapêuticas e tratamentos corporais de excelência ao domicílio, especializados em bem-estar e cuidados personalizados.',
      quickLinks: 'Links Rápidos',
      schedule: 'Horário',
      scheduleItems: [
        'Segunda a Sexta: 9h - 19h',
        'Sábado: 9h - 14h',
        'Domingo: Encerrado',
      ],
      lisbon: 'Zona de Lisboa',
      setubal: 'Zona de Setúbal',
      lisbonAddress: 'Ao domicílio em Lisboa e arredores',
      setubalAddress: 'Ao domicílio em Setúbal e arredores',
      phone: '+351 920 534 489',
      email: 'info@theskinaesthetic.pt',
      privacy: 'Política de Privacidade',
      terms: 'Termos e Condições',
      rights: 'Todos os direitos reservados.',
    },
    whatsapp: {
      tooltip: 'Fale connosco no WhatsApp',
    },
    womensDay: {
      badge: '🌸 Mês da Mulher · Março',
      headline: 'Não é só uma data,\né um mês inteiro de auto cuidado',
      subheadline: 'Porque você merece cuidado todos os dias. Celebre março com um presente para a sua pele.',
      discount: '50% OFF',
      discountDetail: 'na 1.ª sessão de Microderme',
      ctaWhatsApp: 'Agendar pelo WhatsApp',
      ctaForm: 'Preencher Formulário',
      close: 'Fechar',
    },
  },

  en: {
    nav: {
      services: 'Services',
      about: 'About',
      results: 'Results',
      testimonials: 'Testimonials',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      book: 'Book Consultation',
    },
    hero: {
      badge: 'Home Service · Lisbon & Setúbal',
      headline: 'Care for Your Body & Well-Being',
      subheadline: 'Therapeutic massages and personalized body treatments at your home in Lisbon and Setúbal. Relaxation, tension relief, and specialized care in the comfort of your own space.',
      cta: 'Book a Free Consultation',
      ctaSecondary: 'View Services',
      imageAlt: 'Jessica Jaques — Massage Therapist & Aesthetician in Lisbon and Setúbal',
    },
    trust: {
      years: 'Years of Experience',
      clients: 'Happy Clients',
      certifications: 'Certifications',
      satisfaction: 'Satisfaction Rate',
    },
    services: {
      label: 'Services',
      title: 'Our Services',
      subtitle: 'Therapeutic massages and personalized body treatments with professional techniques, at your home.',
      cta: 'Learn More',
      items: [
        {
          name: 'Relaxing Massage',
          description: 'Ideal for relieving stress, reducing muscle tension, and promoting deep relaxation of body and mind.',
          duration: '30-60 min',
        },
        {
          name: 'Therapeutic Massage',
          description: 'Focused on relieving muscle pain, tension, and accumulated discomfort in the body.',
          duration: '30-60 min',
        },
        {
          name: 'Lymphatic Drainage',
          description: 'Stimulates the lymphatic system, helping reduce fluid retention, swelling, and improving circulation.',
          duration: '45-60 min',
        },
        {
          name: 'Sculpting Massage',
          description: 'Technique focused on activating circulation and aiding in measurement reduction and skin texture improvement.',
          duration: '45-60 min',
        },
        {
          name: 'Prenatal Massage',
          description: 'Gentle and safe massage that helps relieve tension, lower back pain, and swelling during pregnancy.',
          duration: '45 min',
        },
        {
          name: 'Stretch Mark Treatment',
          description: 'Regenerative microderm that stimulates natural collagen production to smooth stretch marks and improve skin texture.',
          duration: '30-45 min',
        },
      ],
    },
    whyUs: {
      label: 'Why Us',
      title: 'Why Choose Us',
      items: [
        {
          title: 'Certified Professional',
          description: 'Specialized training in advanced aesthetics with internationally recognized certifications.',
        },
        {
          title: 'Personalized Treatments',
          description: 'Each protocol is specifically designed for your skin type and personal goals.',
        },
        {
          title: 'Natural Results',
          description: 'An approach that values natural beauty, with visible and harmonious results.',
        },
        {
          title: 'Advanced Technology',
          description: 'State-of-the-art equipment and premium products to ensure the best results.',
        },
        {
          title: 'At-Home Service',
          description: 'Treatments done in the comfort of your home, across selected areas in Lisbon and Setúbal. No travel, no stress.',
        },
      ],
    },
    beforeAfter: {
      label: 'Results',
      title: 'Before & After',
      subtitle: 'Real results from our clients. Every transformation is unique and personalized.',
      disclaimer: 'Results may vary from person to person. All images are published with express consent from clients.',
      beforeLabel: 'Before',
      afterLabel: 'After',
      items: ['Lymphatic Drainage', 'Stretch Mark Treatment', 'Sculpting Massage'],
    },
    testimonials: {
      label: 'Testimonials',
      title: 'What Our Clients Say',
      items: [
        {
          name: 'Maria Santos',
          location: 'Lisbon',
          text: 'Jessica is extraordinary. The therapeutic massages completely relieved my back pain. I feel renewed after every session.',
          treatment: 'Therapeutic Massage',
        },
        {
          name: 'Ana Ferreira',
          location: 'Setúbal',
          text: 'I did the stretch mark treatment after pregnancy and the result exceeded expectations. My skin is much smoother and firmer. Very attentive and competent professional.',
          treatment: 'Stretch Mark Treatment',
        },
        {
          name: 'Sofia Oliveira',
          location: 'Lisbon',
          text: 'Lymphatic drainage worked wonders for my body. Fluid retention reduced significantly and I feel much lighter and more energized.',
          treatment: 'Lymphatic Drainage',
        },
      ],
    },
    team: {
      label: 'The Professional',
      title: 'Meet Jessica',
      name: 'Jessica Jaques',
      role: 'Aesthetician & Massage Therapist',
      bio: 'With over 3 years of experience in aesthetics and massage therapy, Jessica is a specialist in therapeutic massages and body treatments. Her approach combines professional techniques with personalized attention, ensuring well-being and visible results for every client. She brings treatments directly to your home across Lisbon and Setúbal, providing an exclusive and relaxing experience in your most comfortable environment.',
      qualifications: [],
      locations: 'At-home service in Lisbon and Setúbal',
    },
    howItWorks: {
      label: 'How It Works',
      title: 'Your Path to Well-Being',
      subtitle: 'A simple and welcoming process, designed for you.',
      steps: [
        {
          step: '01',
          title: 'Consultation',
          description: 'Assessment of your needs, body analysis, and definition of the most suitable treatment or massage plan for you.',
        },
        {
          step: '02',
          title: 'Treatment',
          description: 'Sessions performed at your home with professional techniques. We bring all equipment and products — you just need to relax.',
        },
        {
          step: '03',
          title: 'Results',
          description: 'Renewed body, relieved tension, and restored well-being. Ongoing follow-up to maintain the results achieved.',
        },
      ],
    },
    pricing: {
      label: 'Pricing',
      title: 'Investment in Your Skin',
      subtitle: 'Transparent pricing for excellent treatments. Personalized care with professional techniques.',
      from: 'Starting at',
      perSession: 'per session',
      bookNow: 'Book Now',
      categories: [
        {
          name: 'Massages',
          description: 'Taking care of your body is also taking care of your mind. Our massages are designed to provide relaxation, tension relief, and overall well-being improvement.',
          items: [
            {
              name: 'Relaxing Massage — 2 Zones',
              description: 'Ideal for relieving stress, reducing muscle tension, and promoting deep relaxation of body and mind.',
              options: [
                { duration: '30 min', price: '€30' },
                { duration: '60 min', price: '€45' },
              ],
            },
            {
              name: 'Therapeutic Massage — 2 Zones',
              description: 'Focused on relieving muscle pain, tension, and accumulated discomfort in the body.',
              options: [
                { duration: '30 min', price: '€35' },
                { duration: '60 min', price: '€45' },
              ],
            },
            {
              name: 'Lymphatic Drainage — Full Body',
              description: 'Stimulates the lymphatic system, helping reduce fluid retention, swelling, and improving circulation.',
              options: [
                { duration: '45 min', price: '€45' },
                { duration: '60 min', price: '€60' },
              ],
            },
            {
              name: 'Reducing / Sculpting Massage — 2 Zones',
              description: 'Technique focused on activating circulation and aiding in measurement reduction and skin texture improvement.',
              options: [
                { duration: '45 min', price: '€40' },
                { duration: '60 min', price: '€65' },
              ],
            },
            {
              name: 'Prenatal Massage',
              description: 'Gentle and safe massage that helps relieve tension, lower back pain, and swelling during pregnancy.',
              options: [
                { duration: '45 min', price: '€40' },
              ],
            },
          ],
        },
        {
          name: 'Stretch Mark Treatment — Regenerative Microderm',
          description: 'The treatment works through skin microstimulation, encouraging natural collagen production to improve texture, smooth stretch marks, and promote firmness. Free evaluation to define the ideal plan.',
          items: [
            {
              name: 'Small Zone',
              description: 'For smaller, localized areas. Examples: part of the buttocks, part of the abdomen, small thigh area, arms.',
              options: [
                { duration: 'Session', price: '€35' },
              ],
            },
            {
              name: 'Medium Zone',
              description: 'Areas with greater stretch mark coverage. Examples: full abdomen, full buttocks, front of the thigh.',
              options: [
                { duration: 'Session', price: '€50' },
              ],
            },
            {
              name: 'Large Zone',
              description: 'Larger areas or multiple regions. Examples: full thighs, abdomen + flanks, buttocks + back of the thigh.',
              options: [
                { duration: 'Session', price: '€70' },
              ],
            },
          ],
        },
      ],
      note: 'Free evaluation consultation. Results are progressive and the number of sessions varies according to each case.',
    },
    faq: {
      label: 'FAQ',
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What types of massage do you offer?',
          answer: 'We offer relaxing, therapeutic, lymphatic drainage, sculpting/reducing, and prenatal massages. Each is adapted to your specific needs.',
        },
        {
          question: 'Does the stretch mark treatment hurt?',
          answer: 'No. Regenerative microderm is comfortable and painless. You may feel a slight sensation on the skin, but most clients find the experience relaxing.',
        },
        {
          question: 'How many sessions are needed for stretch marks?',
          answer: 'Results are progressive and the number of sessions varies according to each case. During the free evaluation consultation, we define the ideal plan for you.',
        },
        {
          question: 'Are massages safe during pregnancy?',
          answer: 'Yes! We have a specific prenatal massage, gentle and safe, that helps relieve tension, lower back pain, and swelling during pregnancy.',
        },
        {
          question: 'How often should I get a massage?',
          answer: 'It depends on your goals. For well-being maintenance, we recommend weekly or biweekly sessions. During the consultation, we define the ideal frequency for you.',
        },
        {
          question: 'How does the at-home service work?',
          answer: 'We bring all professional equipment and products to your home. We just need a comfortable space. We serve selected areas of Lisbon and Setúbal — contact us to confirm availability in your area.',
        },
        {
          question: 'Do I need any preparation before the massage?',
          answer: 'We recommend wearing comfortable clothing and staying hydrated. Avoid heavy meals before the session. We bring everything needed — you just need to relax.',
        },
      ],
    },
    booking: {
      label: 'Book',
      title: 'Book Your Free Consultation',
      subtitle: 'Take the first step towards your well-being. Fill in the form and we will contact you shortly.',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      treatment: 'Service of Interest',
      treatmentOptions: [
        'Relaxing Massage',
        'Therapeutic Massage',
        'Lymphatic Drainage',
        'Sculpting / Reducing Massage',
        'Prenatal Massage',
        'Stretch Mark Treatment',
        'Other / Not sure yet',
      ],
      message: 'Message (optional)',
      submit: 'Book Free Consultation',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      successDetail: 'Thank you! We will contact you shortly.',
      error: 'An error occurred while sending. Please try again.',
    },
    footer: {
      description: 'At-home therapeutic massages and body treatments specializing in well-being and personalized care.',
      quickLinks: 'Quick Links',
      schedule: 'Hours',
      scheduleItems: [
        'Monday to Friday: 9am - 7pm',
        'Saturday: 9am - 2pm',
        'Sunday: Closed',
      ],
      lisbon: 'Lisbon Area',
      setubal: 'Setúbal Area',
      lisbonAddress: 'At-home service in Lisbon and surroundings',
      setubalAddress: 'At-home service in Setúbal and surroundings',
      phone: '+351 920 534 489',
      email: 'info@theskinaesthetic.pt',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      rights: 'All rights reserved.',
    },
    whatsapp: {
      tooltip: 'Chat with us on WhatsApp',
    },
    womensDay: {
      badge: '🌸 Women\'s Month · March',
      headline: 'It\'s not just a date,\nit\'s a whole month of self-care',
      subheadline: 'Because you deserve care every day. Celebrate March with a gift for your skin.',
      discount: '50% OFF',
      discountDetail: 'on your 1st Microderme session',
      ctaWhatsApp: 'Book on WhatsApp',
      ctaForm: 'Fill the Form',
      close: 'Close',
    },
  },

  es: {
    nav: {
      services: 'Servicios',
      about: 'Sobre',
      results: 'Resultados',
      testimonials: 'Testimonios',
      pricing: 'Precios',
      faq: 'FAQ',
      contact: 'Contacto',
      book: 'Reservar Cita',
    },
    hero: {
      badge: 'A Domicilio · Lisboa y Setúbal',
      headline: 'Cuida Tu Cuerpo y Bienestar',
      subheadline: 'Masajes terapéuticos y tratamientos corporales personalizados a domicilio en Lisboa y Setúbal. Relajación, alivio de tensiones y cuidados especializados en la comodidad de tu hogar.',
      cta: 'Reservar Consulta Gratuita',
      ctaSecondary: 'Ver Servicios',
      imageAlt: 'Jessica Jaques — Masajista y Esteticista en Lisboa y Setúbal',
    },
    trust: {
      years: 'Años de Experiencia',
      clients: 'Clientas Satisfechas',
      certifications: 'Certificaciones',
      satisfaction: 'Tasa de Satisfacción',
    },
    services: {
      label: 'Servicios',
      title: 'Nuestros Servicios',
      subtitle: 'Masajes terapéuticos y tratamientos corporales personalizados, con técnicas profesionales a domicilio.',
      cta: 'Saber Más',
      items: [
        {
          name: 'Masaje Relajante',
          description: 'Indicado para aliviar el estrés, reducir tensiones musculares y promover la relajación profunda del cuerpo y la mente.',
          duration: '30-60 min',
        },
        {
          name: 'Masaje Terapéutico',
          description: 'Enfocado en aliviar dolores musculares, tensiones y molestias acumuladas en el cuerpo.',
          duration: '30-60 min',
        },
        {
          name: 'Drenaje Linfático',
          description: 'Estimula el sistema linfático, ayudando en la reducción de retención de líquidos, hinchazón y mejorando la circulación.',
          duration: '45-60 min',
        },
        {
          name: 'Masaje Reductor',
          description: 'Técnica enfocada en la activación de la circulación y ayuda en la reducción de medidas y mejora de la textura de la piel.',
          duration: '45-60 min',
        },
        {
          name: 'Masaje para Embarazadas',
          description: 'Masaje suave y seguro que ayuda a aliviar tensiones, dolores lumbares e hinchazón durante el embarazo.',
          duration: '45 min',
        },
        {
          name: 'Tratamiento de Estrías',
          description: 'Microderme regenerativa que estimula la producción natural de colágeno para suavizar estrías y mejorar la textura de la piel.',
          duration: '30-45 min',
        },
      ],
    },
    whyUs: {
      label: 'Por Qué Nosotros',
      title: 'Por Qué Elegirnos',
      items: [
        {
          title: 'Profesional Certificada',
          description: 'Formación especializada en masoterapia y estética corporal con certificaciones reconocidas.',
        },
        {
          title: 'Cuidados Personalizados',
          description: 'Cada sesión se adapta a tus necesidades, objetivos y condición corporal específica.',
        },
        {
          title: 'Bienestar Real',
          description: 'Un enfoque que valora tu confort y salud, con resultados tangibles para cuerpo y mente.',
        },
        {
          title: 'Técnicas Profesionales',
          description: 'Productos de calidad y técnicas especializadas para garantizar los mejores resultados.',
        },
        {
          title: 'Servicio a Domicilio',
          description: 'Sesiones en la comodidad de tu hogar, en zonas seleccionadas de Lisboa y Setúbal. Sin desplazamientos, sin estrés.',
        },
      ],
    },
    beforeAfter: {
      label: 'Resultados',
      title: 'Antes y Después',
      subtitle: 'Resultados reales de nuestras clientas. Cada transformación es única y personalizada.',
      disclaimer: 'Los resultados pueden variar de persona a persona. Todas las imágenes se publican con el consentimiento expreso de las clientas.',
      beforeLabel: 'Antes',
      afterLabel: 'Después',
      items: ['Drenaje Linfático', 'Tratamiento de Estrías', 'Masaje Reductor'],
    },
    testimonials: {
      label: 'Testimonios',
      title: 'Lo Que Dicen Nuestras Clientas',
      items: [
        {
          name: 'Maria Santos',
          location: 'Lisboa',
          text: 'Jessica es extraordinaria. Después de las sesiones de masaje terapéutico, las tensiones que sentía en la espalda desaparecieron por completo. Me siento otra persona.',
          treatment: 'Masaje Terapéutico',
        },
        {
          name: 'Ana Ferreira',
          location: 'Setúbal',
          text: 'Busqué a Jessica para el drenaje linfático y el resultado superó todas las expectativas. La hinchazón disminuyó notablemente y me siento mucho más ligera.',
          treatment: 'Drenaje Linfático',
        },
        {
          name: 'Sofia Oliveira',
          location: 'Lisboa',
          text: 'El tratamiento de estrías hizo maravillas por mi piel. Después de varias sesiones, las marcas se suavizaron significativamente y mi piel está mucho más firme.',
          treatment: 'Tratamiento de Estrías',
        },
      ],
    },
    team: {
      label: 'La Profesional',
      title: 'Conoce a Jessica',
      name: 'Jessica Jaques',
      role: 'Esteticista y Masoterapeuta',
      bio: 'Con más de 3 años de experiencia en estética y masoterapia, Jessica es especialista en masajes terapéuticos y tratamientos corporales. Su enfoque combina conocimiento científico con sensibilidad y cuidado, garantizando bienestar y resultados visibles para cada clienta. Lleva los tratamientos directamente a tu hogar en zonas de Lisboa y Setúbal, proporcionando una experiencia exclusiva y personalizada.',
      qualifications: [],
      locations: 'A domicilio en Lisboa y Setúbal',
    },
    howItWorks: {
      label: 'Cómo Funciona',
      title: 'Tu Camino Hacia el Bienestar',
      subtitle: 'Un proceso sencillo y acogedor, pensado para ti.',
      steps: [
        {
          step: '01',
          title: 'Consulta',
          description: 'Evaluación de tus necesidades corporales, historial y objetivos para definir un plan personalizado de masajes o tratamientos.',
        },
        {
          step: '02',
          title: 'Sesión',
          description: 'Sesiones realizadas en tu hogar con técnicas profesionales. Llevamos todo el equipamiento y productos — solo necesitas relajarte.',
        },
        {
          step: '03',
          title: 'Resultados',
          description: 'Cuerpo renovado, menos tensiones y más bienestar. Seguimiento continuo para mantener y potenciar los resultados obtenidos.',
        },
      ],
    },
    pricing: {
      label: 'Precios',
      title: 'Inversión en Tu Bienestar',
      subtitle: 'Precios transparentes para servicios de excelencia. Atención personalizada y técnicas profesionales.',
      from: 'Desde',
      perSession: 'por sesión',
      bookNow: 'Reservar',
      categories: [
        {
          name: 'Masajes',
          description: 'Cuidar del cuerpo también es cuidar de la mente. Nuestros masajes están pensados para proporcionar relajación, alivio de tensiones y mejora del bienestar general.',
          items: [
            {
              name: 'Masaje Relajante — 2 Zonas',
              description: 'Indicado para aliviar el estrés, reducir tensiones musculares y promover la relajación profunda del cuerpo y la mente.',
              options: [
                { duration: '30 min', price: '€30' },
                { duration: '60 min', price: '€45' },
              ],
            },
            {
              name: 'Masaje Terapéutico — 2 Zonas',
              description: 'Enfocado en aliviar dolores musculares, tensiones y molestias acumuladas en el cuerpo.',
              options: [
                { duration: '30 min', price: '€35' },
                { duration: '60 min', price: '€45' },
              ],
            },
            {
              name: 'Drenaje Linfático — Cuerpo Entero',
              description: 'Estimula el sistema linfático, ayudando en la reducción de retención de líquidos, hinchazón y mejorando la circulación.',
              options: [
                { duration: '45 min', price: '€45' },
                { duration: '60 min', price: '€60' },
              ],
            },
            {
              name: 'Masaje Reductor / Modelador — 2 Zonas',
              description: 'Técnica enfocada en la activación de la circulación y ayuda en la reducción de medidas y mejora de la textura de la piel.',
              options: [
                { duration: '45 min', price: '€40' },
                { duration: '60 min', price: '€65' },
              ],
            },
            {
              name: 'Masaje para Embarazadas',
              description: 'Masaje suave y seguro que ayuda a aliviar tensiones, dolores lumbares e hinchazón durante el embarazo.',
              options: [
                { duration: '45 min', price: '€40' },
              ],
            },
          ],
        },
        {
          name: 'Tratamiento de Estrías — Microderme Regenerativa',
          description: 'El tratamiento actúa a través de la microestimulación de la piel, estimulando la producción natural de colágeno para mejorar la textura, suavizar las estrías y promover más firmeza. Evaluación gratuita para definir el plan ideal.',
          items: [
            {
              name: 'Zona Pequeña',
              description: 'Indicado para áreas menores y localizadas. Ejemplos: parte del glúteo, parte del abdomen, pequeña área del muslo, brazos.',
              options: [
                { duration: 'Sesión', price: '€35' },
              ],
            },
            {
              name: 'Zona Media',
              description: 'Áreas con mayor extensión de estrías. Ejemplos: abdomen completo, glúteos completo, parte frontal del muslo.',
              options: [
                { duration: 'Sesión', price: '€50' },
              ],
            },
            {
              name: 'Zona Grande',
              description: 'Áreas más extensas o múltiples regiones. Ejemplos: muslos completos, abdomen + flancos, glúteos + posterior del muslo.',
              options: [
                { duration: 'Sesión', price: '€70' },
              ],
            },
          ],
        },
      ],
      note: 'Consulta de evaluación gratuita. Los resultados son progresivos y el número de sesiones varía según cada caso.',
    },
    faq: {
      label: 'FAQ',
      title: 'Preguntas Frecuentes',
      items: [
        {
          question: '¿Qué tipos de masaje ofrecen?',
          answer: 'Ofrecemos masaje relajante, terapéutico, drenaje linfático, reductor/modelador y para embarazadas. Cada uno se adapta a tus necesidades específicas.',
        },
        {
          question: '¿El tratamiento de estrías duele?',
          answer: 'No. La microderme regenerativa es cómoda e indolora. Puedes sentir una ligera sensación en la piel, pero la mayoría de las clientas consideran la experiencia relajante.',
        },
        {
          question: '¿Cuántas sesiones se necesitan para las estrías?',
          answer: 'Los resultados son progresivos y el número de sesiones varía según cada caso. Durante la consulta gratuita de evaluación, definimos el plan ideal para ti.',
        },
        {
          question: '¿Los masajes son seguros durante el embarazo?',
          answer: '¡Sí! Tenemos un masaje específico para embarazadas, suave y seguro, que ayuda a aliviar tensiones, dolores lumbares e hinchazón durante el embarazo.',
        },
        {
          question: '¿Con qué frecuencia debo hacerme un masaje?',
          answer: 'Depende de tus objetivos. Para mantenimiento del bienestar, recomendamos sesiones semanales o quincenales. Durante la consulta, definimos la frecuencia ideal para ti.',
        },
        {
          question: '¿Cómo funciona el servicio a domicilio?',
          answer: 'Llevamos todo el equipamiento profesional y productos a tu hogar. Solo necesitamos un espacio cómodo. Atendemos zonas seleccionadas de Lisboa y Setúbal — consúltanos para confirmar disponibilidad en tu área.',
        },
        {
          question: '¿Necesito alguna preparación antes del masaje?',
          answer: 'Recomendamos vestir ropa cómoda y mantenerse hidratada. Evita comidas pesadas antes de la sesión. Llevamos todo lo necesario — solo necesitas relajarte.',
        },
      ],
    },
    booking: {
      label: 'Reservar',
      title: 'Reserva Tu Consulta Gratuita',
      subtitle: 'Da el primer paso hacia tu bienestar. Rellena el formulario y nos pondremos en contacto contigo en breve.',
      name: 'Nombre Completo',
      email: 'Email',
      phone: 'Teléfono',
      treatment: 'Servicio de Interés',
      treatmentOptions: [
        'Masaje Relajante',
        'Masaje Terapéutico',
        'Drenaje Linfático',
        'Masaje Reductor / Modelador',
        'Masaje para Embarazadas',
        'Tratamiento de Estrías',
        'Otro / Aún no lo sé',
      ],
      message: 'Mensaje (opcional)',
      submit: 'Reservar Consulta Gratuita',
      sending: 'Enviando...',
      success: '¡Mensaje enviado con éxito!',
      successDetail: '¡Gracias! Nos pondremos en contacto contigo en breve.',
      error: 'Ocurrió un error al enviar. Por favor, inténtalo de nuevo.',
    },
    footer: {
      description: 'Masajes terapéuticos y tratamientos corporales a domicilio, especializados en bienestar y cuidados personalizados.',
      quickLinks: 'Enlaces Rápidos',
      schedule: 'Horario',
      scheduleItems: [
        'Lunes a Viernes: 9h - 19h',
        'Sábado: 9h - 14h',
        'Domingo: Cerrado',
      ],
      lisbon: 'Zona de Lisboa',
      setubal: 'Zona de Setúbal',
      lisbonAddress: 'A domicilio en Lisboa y alrededores',
      setubalAddress: 'A domicilio en Setúbal y alrededores',
      phone: '+351 920 534 489',
      email: 'info@theskinaesthetic.pt',
      privacy: 'Política de Privacidad',
      terms: 'Términos y Condiciones',
      rights: 'Todos los derechos reservados.',
    },
    whatsapp: {
      tooltip: 'Habla con nosotros en WhatsApp',
    },
    womensDay: {
      badge: '🌸 Mes de la Mujer · Marzo',
      headline: 'No es solo una fecha,\nes un mes entero de autocuidado',
      subheadline: 'Porque mereces cuidado todos los días. Celebra marzo con un regalo para tu piel.',
      discount: '50% OFF',
      discountDetail: 'en tu 1.ª sesión de Microderme',
      ctaWhatsApp: 'Reservar por WhatsApp',
      ctaForm: 'Rellenar Formulario',
      close: 'Cerrar',
    },
  },
};

export default translations;
