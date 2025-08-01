// 스타일 조합을 위한 헬퍼 함수
// false나 undefined는 무시하고, 유효한 클래스만 공백으로 연결합니다
export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// 버튼 스타일 옵션 타입
interface ButtonStyleProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'ghost';
  rounded?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
}

// 버튼 스타일 시스템
export const buttonStyles = {
  // 모든 버튼에 공통으로 적용되는 기본 스타일
  base: 'inline-flex items-center justify-center font-semibold transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2',
  
  // 크기별 패딩과 폰트 크기
  sizes: {
    sm: 'px-3 py-1.5 text-sm',     // 작은 버튼
    md: 'px-6 py-2 text-base',      // 기본 크기
    lg: 'px-8 py-4 text-lg',        // 큰 버튼
    xl: 'px-10 py-5 text-xl'        // 특대 버튼
  },
  
  // 버튼 종류별 색상과 호버 효과
  variants: {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500',
    secondary: 'bg-purple-100 text-purple-700 hover:bg-purple-200 focus:ring-purple-500',
    ghost: 'bg-transparent text-gray-600 hover:text-purple-600 hover:bg-purple-50 focus:ring-purple-500'
  },
  
  // 모서리 둥글기 정도
  rounded: {
    sm: 'rounded-sm',      // 약간 둥근
    md: 'rounded-md',      // 보통
    lg: 'rounded-lg',      // 많이 둥근
    full: 'rounded-full'   // 완전히 둥근
  }
};

// 버튼 클래스를 생성하는 함수
export function getButtonClasses({
  size = 'md',           // 기본값: 중간 크기
  variant = 'primary',   // 기본값: 주요 버튼
  rounded = 'lg',        // 기본값: 많이 둥근 모서리
  className = ''         // 추가 클래스
}: ButtonStyleProps = {}) {
  return cn(
    buttonStyles.base,                    // 기본 스타일
    buttonStyles.sizes[size],             // 선택한 크기
    buttonStyles.variants[variant],       // 선택한 종류
    buttonStyles.rounded[rounded],        // 선택한 둥글기
    className                             // 추가 클래스
  );
}

// 카드 컴포넌트용 스타일
export const cardStyles = {
  base: 'bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow',
  padding: 'p-6',
  icon: 'w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4',
  iconSvg: 'h-6 w-6 text-white',
  title: 'text-xl font-semibold text-gray-900 mb-3',
  description: 'text-gray-600 leading-relaxed'
};

// 섹션 레이아웃용 스타일
export const sectionStyles = {
  base: 'py-12',                              // 상하 패딩
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',        // 중앙 정렬 컨테이너
  centerText: 'lg:text-center',
  title: 'text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl',
  subtitle: 'mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto',
  sectionLabel: 'text-base font-semibold tracking-wide uppercase'
};

// 그리드 레이아웃 스타일
export const gridStyles = {
  responsive2Col: 'space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10',
  responsive3Col: 'mt-10 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3',
  responsive4Col: 'mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4'
};

// 폼 스타일
export const formStyles = {
  input: 'appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500',
  label: 'sr-only', // 화면 리더만 읽을 수 있는 라벨
  group: 'mt-4 sm:flex sm:max-w-md'
};

// 아이콘 스타일 (SVG용)
export const iconStyles = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8'
};

// 6장 추가: 폼 관련 스타일
export const formStyles = {
  // 기본 input 스타일
  input: 'w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors',
  
  // textarea 스타일  
  textarea: 'w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none',
  
  // 라벨 스타일
  label: 'block text-sm font-medium text-gray-700 mb-2',
  
  // 에러 스타일
  error: 'text-red-500 text-sm mt-1',
  
  // 성공 스타일
  success: 'text-green-500 text-sm mt-1',
  
  // 폼 컨테이너
  container: 'space-y-6',
  
  // 필드 래퍼
  field: 'space-y-2'
};

// 폼 상태에 따른 스타일 헬퍼
export function getFormFieldClasses({
  hasError = false,
  isDisabled = false
}: {
  hasError?: boolean;
  isDisabled?: boolean;
} = {}) {
  return cn(
    formStyles.input,
    hasError && 'border-red-300 focus:ring-red-500',
    isDisabled && 'bg-gray-50 cursor-not-allowed opacity-60'
  );
}