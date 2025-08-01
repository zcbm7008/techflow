import * as yup from 'yup';
import { ContactFormData } from '@/lib/content';

// 한글/영문만 허용하는 정규식
const nameRegex = /^[가-힣a-zA-Z\s]+$/;

// 일회용 이메일 도메인 차단 리스트
const disposableEmailDomains = [
  'tempmail.com',
  'throwaway.email',
  'guerrillamail.com',
  '10minutemail.com',
  'mailinator.com'
];

// 스팸 키워드 필터링
const spamKeywords = [
  'viagra',
  'casino',
  'lottery',
  'prize',
  'winner'
];

// 유효성 검사 스키마
export const contactFormSchema = yup.object<ContactFormData>({
  name: yup
    .string()
    .required('이름을 입력해주세요')
    .min(2, '이름은 최소 2자 이상이어야 합니다')
    .max(50, '이름은 최대 50자까지 가능합니다')
    .matches(nameRegex, '한글 또는 영문만 입력 가능합니다'),
  
  email: yup
    .string()
    .required('이메일 주소를 입력해주세요')
    .email('유효한 이메일 주소를 입력해주세요')
    .test('not-disposable', '일회용 이메일은 사용할 수 없습니다', (value) => {
      if (!value) return true;
      const domain = value.split('@')[1];
      return !disposableEmailDomains.includes(domain);
    }),
  
  message: yup
    .string()
    .required('문의 내용을 입력해주세요')
    .min(10, '문의 내용은 최소 10자 이상이어야 합니다')
    .max(1000, '문의 내용은 최대 1000자까지 가능합니다')
    .test('no-spam', '부적절한 내용이 포함되어 있습니다', (value) => {
      if (!value) return true;
      const lowerValue = value.toLowerCase();
      return !spamKeywords.some(keyword => lowerValue.includes(keyword));
    })
});

// 타입 추출
export type ContactFormValues = yup.InferType<typeof contactFormSchema>;