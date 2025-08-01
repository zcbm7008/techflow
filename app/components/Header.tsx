import { content } from '@/lib/content'

// 네비게이션 헤더 컴포넌트
export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-purple-600">{content.navigation.brand}</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {content.navigation.menu.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900">
                {item.label}
              </a>
            ))}
          </div>
          
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg 
                           hover:bg-purple-700 transition-colors">
            {content.navigation.ctaButton}
          </button>
        </div>
      </nav>
    </header>
  )
}