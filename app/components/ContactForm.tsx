'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { content, ContactFormData } from '@/lib/content';
import { formStyles, getFormFieldClasses, getButtonClasses } from '@/lib/styles';
import { contactFormSchema } from '@/lib/validations/contactForm';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // EmailJS 환경 변수 확인
      const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      
      if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
        // EmailJS가 설정된 경우 실제 이메일 전송
        console.log('EmailJS configured, sending email...');
        // TODO: EmailJS 통합 구현
        // const result = await emailjs.send(
        //   emailjsServiceId,
        //   emailjsTemplateId,
        //   {
        //     from_name: data.name,
        //     from_email: data.email,
        //     message: data.message,
        //   },
        //   emailjsPublicKey
        // );
      } else {
        // EmailJS가 설정되지 않은 경우 콘솔에 출력
        console.log('EmailJS not configured, form data:', data);
      }
      
      // 성공 시뮬레이션 (2초 대기)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      reset();
      
      // 3초 후 성공 메시지 제거
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formStyles.container}>
      {/* 이름 필드 */}
      <div className={formStyles.field}>
        <label htmlFor="name" className={formStyles.label}>
          이름
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          placeholder={content.contact.form.placeholders.name}
          className={getFormFieldClasses({ hasError: !!errors.name, isDisabled: isSubmitting })}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className={formStyles.error}>{errors.name.message}</p>
        )}
      </div>

      {/* 이메일 필드 */}
      <div className={formStyles.field}>
        <label htmlFor="email" className={formStyles.label}>
          이메일
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          placeholder={content.contact.form.placeholders.email}
          className={getFormFieldClasses({ hasError: !!errors.email, isDisabled: isSubmitting })}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className={formStyles.error}>{errors.email.message}</p>
        )}
      </div>

      {/* 메시지 필드 */}
      <div className={formStyles.field}>
        <label htmlFor="message" className={formStyles.label}>
          문의 내용
        </label>
        <textarea
          id="message"
          {...register('message')}
          placeholder={content.contact.form.placeholders.message}
          rows={5}
          className={getFormFieldClasses({ hasError: !!errors.message, isDisabled: isSubmitting })}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className={formStyles.error}>{errors.message.message}</p>
        )}
      </div>

      {/* 상태 메시지 */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          {content.contact.form.success}
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.
        </div>
      )}

      {/* 제출 버튼 */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={getButtonClasses({ size: 'lg', variant: 'primary' })}
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {content.contact.form.submitting}
          </span>
        ) : (
          content.contact.form.submitButton
        )}
      </button>
    </form>
  );
}