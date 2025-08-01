import { content } from '@/lib/content';
import { sectionStyles } from '@/lib/styles';

export default function TestimonialsSection() {
  return (
    <section className={`${sectionStyles.base} bg-purple-50`}>
      <div className={sectionStyles.container}>
        <div className={sectionStyles.centerText}>
          <h2 className={sectionStyles.title}>
            고객들이 직접 증명하는 성과
          </h2>
          <p className={sectionStyles.subtitle}>
            TechFlow를 통해 업무 방식을 혁신한 고객들의 이야기를 들어보세요
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:space-y-0">
            {content.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.content}</p>
                <div className="border-t pt-4">
                  <p className="text-purple-600 font-semibold">{testimonial.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}