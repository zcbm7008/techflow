import { content } from '@/lib/content'
import { sectionStyles, gridStyles, iconStyles } from '@/lib/styles'
import { CubeTransparentIcon, ChatBubbleLeftRightIcon, PuzzlePieceIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function FeaturesSection() {
  return (
    <section id="features" className={`${sectionStyles.base} bg-white`}>
      <div className={sectionStyles.container}>
        <div className={sectionStyles.centerText}>
          <h2 className={`${sectionStyles.sectionLabel} text-purple-600`}>{content.features.title}</h2>
          <p className={sectionStyles.title}>
            {content.features.subtitle}
          </p>
          <p className={sectionStyles.subtitle}>
            TechFlow는 AI 기반의 다양한 기능으로 비즈니스 프로세스를 혁신합니다.
          </p>
        </div>

        <div className="mt-10">
          <dl className={gridStyles.responsive2Col}>
            {content.features.items.map((feature, index) => (
              <div key={feature.title} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    {index === 0 && <CubeTransparentIcon className={iconStyles.lg} />}
                    {index === 1 && <ChatBubbleLeftRightIcon className={iconStyles.lg} />}
                    {index === 2 && <PuzzlePieceIcon className={iconStyles.lg} />}
                    {index === 3 && <ChartBarIcon className={iconStyles.lg} />}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}