# TechFlow - AI로 업무를 자동화하고 시간을 되찾으세요

> **"AI와 함께하는 웹 애플리케이션 개발" 책의 실습 프로젝트**  
> 바이브코딩으로 아이디어를 실제 서비스로 만드는 놀라운 여정

## 🚀 프로젝트 소개

TechFlow는 복잡한 업무를 간단한 대화로 자동화하는 AI 솔루션입니다. 이 프로젝트는 "AI와 함께하는 웹 애플리케이션 개발" 책의 PART 1을 통해 단계별로 구축되었습니다.

### 핵심 가치
- **하루 3시간 절약**: 반복 업무 자동화로 얻는 시간
- **월 150만원 비용 절감**: AI 자동화로 인한 인건비 절약
- **40% 생산성 향상**: 핵심 업무 집중 시간 증가

## 📚 개발 여정

### Chapter 3: Readdy로 30분 만에 시작하기
- 기본 랜딩 페이지 구조 생성
- TypeScript + Next.js App Router 기반
- 30분 만에 프로토타입 완성

### Chapter 4: 체계적인 코드 구조로 리팩토링
- `content.ts`: 타입 안전한 콘텐츠 관리 시스템
- `styles.ts`: 재사용 가능한 스타일 시스템
- 335줄 → 체계적인 컴포넌트 구조로 분리

### Chapter 5: AI와 함께 진짜 서비스처럼 만들기
- 창업 스토리와 브랜딩 구축
- @heroicons/react로 전문적인 아이콘
- 고객 후기와 사회적 증거 추가
- Framer Motion 애니메이션

### Chapter 6: AI 페어 프로그래밍으로 기능 구현
- React Hook Form + TypeScript 폼 시스템
- 실제 작동하는 문의 폼 구현
- 다크모드 시스템 준비
- 인터랙티브 UX 요소

### Chapter 7: 배포와 실전 운영
- Vercel 배포 설정
- SEO 최적화 (메타 태그, sitemap)
- 환경 변수 관리
- Google Analytics 준비

### Chapter 8: 성장 여정 돌아보기
- 8장의 놀라운 변화 회고
- 바이브코딩의 진정한 의미
- 앞으로의 성장 방향

## 🛠 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Form**: React Hook Form + Yup
- **Icons**: @heroicons/react
- **Deployment**: Vercel

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/your-username/techflow.git

# 2. 디렉토리 이동
cd techflow

# 3. 의존성 설치
npm install

# 4. 환경 변수 설정
cp .env.local.example .env.local
# .env.local 파일을 열어 필요한 값 입력

# 5. 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📁 프로젝트 구조

```
techflow/
├── app/                    # Next.js App Router
│   ├── components/        # React 컴포넌트
│   ├── page.tsx          # 메인 페이지
│   └── layout.tsx        # 레이아웃 및 메타데이터
├── lib/                   # 유틸리티 및 설정
│   ├── content.ts        # 타입 안전한 콘텐츠
│   ├── styles.ts         # 스타일 시스템
│   ├── types/           # TypeScript 타입
│   └── validations/     # 폼 유효성 검사
├── prompts/              # AI 프롬프트 기록
│   └── part-1/          # 각 챕터별 프롬프트
└── public/              # 정적 파일
```

## 🎯 주요 기능

- ✅ 반응형 디자인 (모바일 최적화)
- ✅ TypeScript 타입 안전성
- ✅ 실제 작동하는 문의 폼
- ✅ SEO 최적화
- ✅ 성능 최적화
- 🔄 다크모드 (준비 중)
- 🔄 EmailJS 통합 (설정 필요)
- 🔄 Google Analytics (설정 필요)

## 🌟 배운 것들

이 프로젝트를 통해 우리는:
- **바이브코딩**: AI에게 "느낌"을 전달하여 개발하는 새로운 패러다임
- **체계적인 구조**: content.ts/styles.ts를 통한 확장 가능한 아키텍처
- **타입 안전성**: TypeScript로 런타임 에러 방지
- **실전 배포**: 아이디어에서 실제 서비스까지의 전체 과정

## 🤝 기여하기

이 프로젝트는 교육 목적으로 만들어졌습니다. 개선 사항이나 제안이 있다면 이슈를 생성하거나 PR을 보내주세요!

## 📝 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 🙏 감사의 말

"AI와 함께하는 웹 애플리케이션 개발" 책을 통해 바이브코딩의 놀라운 세계를 경험할 수 있게 해주신 모든 분들께 감사드립니다.

---

**"느낌"으로 시작해서 "진짜 서비스"로 완성하는 바이브코딩의 마법을 경험하셨나요?**  
이제 여러분도 어떤 아이디어든 세상에 내놓을 수 있습니다! 🚀