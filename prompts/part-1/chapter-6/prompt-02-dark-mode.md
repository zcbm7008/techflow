# 프롬프트: Context API로 다크모드 시스템 구현

lib/contexts/ThemeContext.tsx를 생성해서 
타입 안전한 다크모드 시스템을 구현해주세요.

요구사항:
1. lib/types/theme.ts의 타입 활용
2. localStorage를 통한 설정 지속성
3. 시스템 테마 감지 및 자동 전환
4. 테마 변경 시 CSS 변수 업데이트
5. 제네릭과 커스텀 훅을 활용한 타입 안전성
6. 서버사이드 렌더링 고려 (Next.js 호환)

useTheme 커스텀 훅도 함께 만들어주세요.