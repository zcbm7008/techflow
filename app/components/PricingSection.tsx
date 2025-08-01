import { content } from '@/lib/content'
import { sectionStyles, getButtonClasses, gridStyles } from '@/lib/styles'

export default function PricingSection() {
  return (
    <section id="pricing" className={`bg-gray-50 ${sectionStyles.base}`}>
      <div className={sectionStyles.container}>
        <div className="sm:text-center">
          <h2 className={sectionStyles.title}>
            {content.pricing.title}
          </h2>
          <p className={sectionStyles.subtitle}>
            {content.pricing.subtitle}
          </p>
        </div>

        <div className={gridStyles.responsive3Col}>
          {content.pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg divide-y divide-gray-200 ${
                plan.isPopular
                  ? 'border-2 border-purple-500 transform scale-105 relative'
                  : 'border border-gray-200'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold bg-purple-600 text-white">
                    가장 인기
                  </span>
                </div>
              )}
              <div className="p-6 bg-white rounded-t-lg">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-base font-medium text-gray-500">{plan.period}</span>}
                </p>
                <a
                  href="#"
                  className={`mt-8 block w-full text-center ${getButtonClasses({ 
                    size: 'lg', 
                    variant: plan.isPopular ? 'primary' : 'secondary' 
                  })}`}
                >
                  {plan.buttonText}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6 bg-gray-50 rounded-b-lg">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">포함 사항</h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}