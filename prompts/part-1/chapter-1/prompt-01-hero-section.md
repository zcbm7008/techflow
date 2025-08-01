# PART 1-1 - 프롬프트 01: 히어로 섹션 생성

## 입력 프롬프트
```
간단한 히어로 섹션을 만들어줘. 큰 제목, 부제목, CTA 버튼이 포함되어야 해
```

## 예상 출력
```typescript
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* 히어로 섹션 – 메인 타이틀과 설명 */}
      <section className="max-w-6xl mx-auto py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          AI와 함께 성장하는 비즈니스
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          TechFlow는 최신 AI 기술을 활용해 여러분의 비즈니스를
          다음 단계로 도약시킵니다.
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg 
                         text-lg font-semibold hover:bg-blue-700 
                         transition-colors">
          지금 시작하기
        </button>
      </section>
    </main>
  )
}
```

## 설명
Cursor에서 Cmd+K(Ctrl+K)를 사용하여 AI와 대화하며 히어로 섹션을 생성합니다.

## 학습 포인트
- Cursor AI의 기본 사용법
- Cmd+K를 통한 자연어 요청
- AI가 프로젝트 컨텍스트를 이해하는 방식