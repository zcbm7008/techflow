# PART 1-1 - 프롬프트 02: 헤더 컴포넌트 생성

## 입력 프롬프트
```
// 네비게이션 헤더 컴포넌트
```

## 예상 출력
```typescript
// 네비게이션 헤더 컴포넌트
export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">TechFlow</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">
              기능
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">
              가격
            </a>
            <a href="#team" className="text-gray-600 hover:text-gray-900">
              팀
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              문의
            </a>
          </div>
          
          <button className="bg-primary text-white px-4 py-2 rounded-lg 
                           hover:bg-primary/90 transition-colors">
            시작하기
          </button>
        </div>
      </nav>
    </header>
  )
}
```

## 설명
주석을 작성하면 AI가 문맥을 이해하고 적절한 컴포넌트를 자동으로 생성합니다.

## 학습 포인트
- 주석을 활용한 AI 가이드
- 컴포넌트 분리 패턴
- Tab 자동완성 활용