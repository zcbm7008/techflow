export default function TeamSection() {
  const team = [
    {
      name: '김철수',
      role: 'CEO & Co-founder',
      image: 'https://via.placeholder.com/300',
      bio: 'AI 기술 분야 15년 경력의 전문가',
    },
    {
      name: '이영희',
      role: 'CTO & Co-founder',
      image: 'https://via.placeholder.com/300',
      bio: '구글 출신 머신러닝 엔지니어',
    },
    {
      name: '박민수',
      role: 'Head of Product',
      image: 'https://via.placeholder.com/300',
      bio: '사용자 중심 제품 설계 전문가',
    },
    {
      name: '정수진',
      role: 'Head of Engineering',
      image: 'https://via.placeholder.com/300',
      bio: '대규모 시스템 아키텍처 전문가',
    },
  ]

  return (
    <section id="team" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">팀</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            혁신을 이끄는 사람들
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            TechFlow는 AI와 비즈니스 분야의 최고 전문가들이 모여 만들어갑니다.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person) => (
              <div key={person.name} className="text-center">
                <div className="space-y-4">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                    src={person.image}
                    alt={person.name}
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium">
                      <h3 className="text-gray-900">{person.name}</h3>
                      <p className="text-purple-600">{person.role}</p>
                    </div>
                    <p className="text-gray-500">{person.bio}</p>
                    <ul className="flex justify-center space-x-5">
                      <li>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Twitter</span>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}