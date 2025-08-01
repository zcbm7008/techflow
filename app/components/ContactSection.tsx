import { content } from '@/lib/content';
import { sectionStyles } from '@/lib/styles';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className={`${sectionStyles.base} bg-gray-50`}>
      <div className={sectionStyles.container}>
        <div className={sectionStyles.centerText}>
          <h2 className={sectionStyles.title}>
            {content.contact.title}
          </h2>
          <p className={sectionStyles.subtitle}>
            {content.contact.subtitle}
          </p>
        </div>

        <div className="mt-10 max-w-xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}