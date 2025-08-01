// 콘텐츠 타입 정의
export interface NavigationItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface FooterSection {
  title: string;
  links: { text: string; href: string }[];
}

export interface CompanyStory {
  founder: string;
  background: string;
  problem: string;
  solution: string;
  vision: string;
  mission: string;
}

export interface CustomerPersona {
  name: string;
  age: number;
  role: string;
  company: string;
  painPoints: string[];
  goals: string[];
  whyTechFlow: string;
}

export interface ValueProposition {
  metric: string;
  value: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  metric: string;
  avatar: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormMessages {
  placeholders: {
    name: string;
    email: string;
    message: string;
  };
  errors: {
    nameRequired: string;
    nameMinLength: string;
    emailRequired: string;
    emailInvalid: string;
    messageRequired: string;
    messageMinLength: string;
  };
  success: string;
  submitButton: string;
  submitting: string;
}

export interface ContactSection {
  title: string;
  subtitle: string;
  form: FormMessages;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
  structuredData: {
    type: string;
    name: string;
    description: string;
    url: string;
    logo: string;
    founder: string;
    foundingDate: string;
  };
}

export interface Content {
  navigation: {
    brand: string;
    menu: NavigationItem[];
    ctaButton: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: PricingPlan[];
  };
  team: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  footer: {
    brand: {
      name: string;
      description: string;
    };
    sections: FooterSection[];
    newsletter: {
      title: string;
      placeholder: string;
      button: string;
      description: string;
    };
    copyright: string;
  };
  companyStory: CompanyStory;
  customerPersonas: CustomerPersona[];
  valueProposition: ValueProposition[];
  testimonials: Testimonial[];
  contact: ContactSection;
  seo: SEOMetadata;
}

// 콘텐츠 정의
export const content: Content = {
  navigation: {
    brand: "TechFlow",
    menu: [
      { label: "기능", href: "#features" },
      { label: "가격", href: "#pricing" },
      { label: "팀", href: "#team" },
      { label: "문의", href: "#contact" },
    ],
    ctaButton: "시작하기",
  },
  
  hero: {
    title: "AI로 업무를 자동화하고 시간을 되찾으세요",
    subtitle: "TechFlow는 복잡한 업무를 간단한 대화로 자동화합니다. 반복적인 작업에서 벗어나 더 중요한 일에 집중하세요.",
    primaryButton: "무료 체험 시작",
    secondaryButton: "데모 보기",
  },
  
  features: {
    title: "기능",
    subtitle: "더 나은 비즈니스를 위한 도구",
    items: [
      {
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
        title: "드래그 앤 드롭 워크플로우",
        description: "복잡한 업무 프로세스를 시각적으로 설계하고 즉시 자동화할 수 있습니다.",
      },
      {
        icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
        title: "AI 대화로 자동화 생성",
        description: "자연어로 원하는 작업을 설명하면 AI가 자동으로 워크플로우를 생성합니다.",
      },
      {
        icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
        title: "100+ 앱 연동",
        description: "Slack, Gmail, Notion 등 100개 이상의 인기 앱과 원클릭으로 연동됩니다.",
      },
      {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "실시간 모니터링",
        description: "자동화된 작업의 실행 상태를 실시간으로 모니터링하고 관리할 수 있습니다.",
      },
    ],
  },
  
  pricing: {
    title: "합리적인 가격, 강력한 기능",
    subtitle: "비즈니스 규모에 맞는 플랜을 선택하세요",
    plans: [
      {
        name: "Starter",
        description: "개인 프로젝트나 소규모 팀에 적합",
        price: "$29",
        period: "/월",
        features: [
          "월 1,000회 AI 요청",
          "기본 자동화 기능",
          "이메일 지원",
          "1GB 저장 공간",
        ],
        buttonText: "무료로 시작하기",
      },
      {
        name: "Pro",
        description: "성장하는 비즈니스를 위한 완벽한 솔루션",
        price: "$99",
        period: "/월",
        features: [
          "월 10,000회 AI 요청",
          "고급 자동화 기능",
          "우선 지원",
          "100GB 저장 공간",
          "API 접근 권한",
          "팀 협업 도구",
        ],
        buttonText: "Pro 시작하기",
        isPopular: true,
      },
      {
        name: "Enterprise",
        description: "대규모 조직을 위한 맞춤형 솔루션",
        price: "Contact",
        features: [
          "무제한 AI 요청",
          "전체 기능 접근",
          "전담 계정 관리자",
          "무제한 저장 공간",
          "온프레미스 설치 가능",
          "SLA 보장",
        ],
        buttonText: "영업팀 문의",
      },
    ],
  },
  
  team: {
    title: "팀",
    subtitle: "혁신을 이끄는 사람들",
    members: [
      {
        name: "김철수",
        role: "CEO & Co-founder",
        bio: "AI 기술 분야 15년 경력의 전문가",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "이영희",
        role: "CTO & Co-founder",
        bio: "구글 출신 머신러닝 엔지니어",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "박민수",
        role: "Head of Product",
        bio: "사용자 중심 제품 설계 전문가",
        image: "https://via.placeholder.com/300",
      },
      {
        name: "정수진",
        role: "Head of Engineering",
        bio: "대규모 시스템 아키텍처 전문가",
        image: "https://via.placeholder.com/300",
      },
    ],
  },
  
  footer: {
    brand: {
      name: "TechFlow",
      description: "AI 기술로 비즈니스를 혁신하는 스타트업",
    },
    sections: [
      {
        title: "제품",
        links: [
          { text: "기능", href: "#features" },
          { text: "가격", href: "#pricing" },
          { text: "API", href: "#" },
        ],
      },
      {
        title: "회사",
        links: [
          { text: "소개", href: "#" },
          { text: "팀", href: "#team" },
          { text: "채용", href: "#" },
        ],
      },
      {
        title: "지원",
        links: [
          { text: "문서", href: "#" },
          { text: "문의", href: "#contact" },
          { text: "상태", href: "#" },
        ],
      },
    ],
    newsletter: {
      title: "뉴스레터 구독",
      placeholder: "이메일 입력",
      button: "구독하기",
      description: "최신 소식과 업데이트를 받아보세요.",
    },
    copyright: "&copy; 2025 TechFlow. All rights reserved.",
  },
  
  companyStory: {
    founder: "박규하",
    background: "뷰컴즈 기술개발연구소 이사",
    problem: "매일 팀원들이 반복 업무에 3시간씩 소모하는 것을 보며 안타까웠습니다. 창의적인 일에 집중해야 할 우수한 인재들이 단순 작업에 묶여 있었죠.",
    solution: "AI가 이 문제를 해결할 수 있다고 확신했습니다. 자연어로 대화하듯 업무를 자동화할 수 있다면, 모든 직원이 본연의 가치 있는 일에 집중할 수 있을 거라 생각했습니다.",
    vision: "모든 직원이 창의적인 일에 집중할 수 있는 세상",
    mission: "AI 기술로 업무 자동화의 문턱을 낮추고, 누구나 쉽게 사용할 수 있는 솔루션을 제공합니다.",
  },
  
  customerPersonas: [
    {
      name: "김민수",
      age: 35,
      role: "CEO",
      company: "테크 스타트업",
      painPoints: [
        "제한된 예산으로 효율적인 운영 필요",
        "개발자 채용의 어려움",
        "반복 업무로 인한 핵심 업무 집중력 저하"
      ],
      goals: [
        "자동화로 운영 비용 30% 절감",
        "팀원들이 핵심 업무에 집중할 수 있는 환경 구축",
        "빠른 시장 대응력 확보"
      ],
      whyTechFlow: "개발자 없이도 복잡한 업무 프로세스를 자동화할 수 있어 시간과 비용을 대폭 절약할 수 있습니다."
    },
    {
      name: "이서연",
      age: 42,
      role: "마케팅 팀장",
      company: "대기업 IT 회사",
      painPoints: [
        "팀원들의 야근 과다",
        "단순 보고서 작성에 너무 많은 시간 소비",
        "타 부서와의 협업 비효율"
      ],
      goals: [
        "팀원들의 워라밸 개선",
        "데이터 기반 의사결정 체계 구축",
        "프로세스 표준화 및 효율화"
      ],
      whyTechFlow: "복잡한 마케팅 워크플로우를 자동화하여 팀의 생산성을 높이고 더 전략적인 업무에 집중할 수 있습니다."
    },
    {
      name: "박지훈",
      age: 28,
      role: "프리랜서 개발자",
      company: "개인 사업자",
      painPoints: [
        "클라이언트 관리에 너무 많은 시간 소요",
        "잡무 처리로 인한 개발 시간 부족",
        "혹자서 모든 업무를 처리하는 부담"
      ],
      goals: [
        "개발에만 집중할 수 있는 환경 구축",
        "프로젝트 관리 자동화",
        "월 수입 50% 증대"
      ],
      whyTechFlow: "견적서 작성, 일정 관리, 클라이언트 소통 등을 자동화하여 순수 개발 시간을 2배 이상 확보할 수 있습니다."
    }
  ],
  
  valueProposition: [
    {
      metric: "시간 절약",
      value: "하루 3시간",
      description: "평균적으로 직원 1명당 하루 3시간의 반복 업무 시간을 절약합니다."
    },
    {
      metric: "비용 절감",
      value: "월 150만원",
      description: "자동화로 인한 인건비 절감 효과로 월 평균 150만원을 절약합니다."
    },
    {
      metric: "생산성 향상",
      value: "40% 증가",
      description: "핵심 업무 집중 시간 증가로 팀 전체 생산성이 40% 향상됩니다."
    },
    {
      metric: "ROI",
      value: "3개월 내 회수",
      description: "TechFlow 도입 투자 비용을 평균 3개월 내에 회수할 수 있습니다."
    }
  ],
  
  testimonials: [
    {
      id: "testimonial-1",
      name: "김민수",
      role: "CEO",
      company: "테크 스타트업",
      content: "TechFlow 도입 후 개발자 채용 없이도 복잡한 업무 프로세스를 자동화할 수 있었습니다. 덕분에 원하던 'Lean Startup'을 진정으로 구현할 수 있게 되었죠.",
      metric: "월 운영 비용 30% 절감",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: "testimonial-2",
      name: "이서연",
      role: "마케팅 팀장",
      company: "대기업 IT 회사",
      content: "팀원들이 단순 보고서 작성에 쓰던 시간을 전략 기획에 투자할 수 있게 되었습니다. 개인적으로도 야근이 줄어들어 가족과 더 많은 시간을 보낼 수 있게 되었어요.",
      metric: "팀 생산성 40% 향상",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces"
    },
    {
      id: "testimonial-3",
      name: "박지훈",
      role: "프리랜서 개발자",
      company: "개인 사업자",
      content: "클라이언트 관리와 견적서 작성 등의 잡무가 자동화되니 순수 개발 시간이 2배 이상 늘었습니다. 덮부에 수입도 50% 이상 증가했고요!",
      metric: "월 수익 50% 증가",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
    }
  ],
  
  contact: {
    title: "문의하기",
    subtitle: "TechFlow에 대해 궁금한 점이 있으신가요? 언제든지 연락주세요.",
    form: {
      placeholders: {
        name: "이름을 입력해주세요",
        email: "이메일 주소를 입력해주세요",
        message: "문의 내용을 입력해주세요"
      },
      errors: {
        nameRequired: "이름을 입력해주세요",
        nameMinLength: "이름은 최소 2자 이상이어야 합니다",
        emailRequired: "이메일 주소를 입력해주세요",
        emailInvalid: "유효한 이메일 주소를 입력해주세요",
        messageRequired: "문의 내용을 입력해주세요",
        messageMinLength: "문의 내용은 최소 10자 이상이어야 합니다"
      },
      success: "문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다!",
      submitButton: "문의 전송",
      submitting: "전송 중..."
    }
  },
  
  seo: {
    title: "TechFlow - AI로 업무를 자동화하고 시간을 되찾으세요",
    description: "TechFlow는 복잡한 업무를 간단한 대화로 자동화하는 AI 솔루션입니다. 반복적인 작업에서 벗어나 더 중요한 일에 집중하세요.",
    keywords: [
      "AI 자동화",
      "업무 자동화",
      "AI 솔루션",
      "노코드 자동화",
      "테크플로우",
      "TechFlow",
      "RPA",
      "workflow automation"
    ],
    openGraph: {
      title: "TechFlow - AI로 업무를 자동화하고 시간을 되찾으세요",
      description: "하루 3시간 절약, 월 150만원 비용 절감. AI와의 대화로 복잡한 업무를 자동화하세요.",
      image: "/og-image.png",
      url: "https://techflow.kr"
    },
    structuredData: {
      type: "Organization",
      name: "TechFlow",
      description: "AI 기술로 업무 자동화의 문턱을 낮추는 스타트업",
      url: "https://techflow.kr",
      logo: "https://techflow.kr/logo.png",
      founder: "박규하",
      foundingDate: "2024-01-01"
    }
  },
};