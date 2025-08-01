import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel 배포를 위해 정적 내보내기 제거
  // output: "export",
  
  // 이미지 최적화 설정
  images: {
    // Vercel에서 이미지 최적화 사용
    unoptimized: false,
    // 이미지 도메인 허용 (외부 이미지 사용 시)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // TypeScript 설정
  typescript: {
    // 프로덕션에서는 타입 에러 무시 (빌드 안정성)
    ignoreBuildErrors: false,
  },
  
  // ESLint 설정
  eslint: {
    // 프로덕션에서는 ESLint 에러 무시 (빌드 안정성)
    ignoreDuringBuilds: false,
  },
  
  // 실험적 기능 (성능 향상)
  experimental: {
    // 서버 컴포넌트 최적화
    serverComponentsExternalPackages: [],
    // 번들 분석기 활성화 (선택사항)
    // bundlePagesExternals: true,
  },
  
  // 웹팩 설정 최적화
  webpack: (config, { dev, isServer }) => {
    // 프로덕션 빌드 최적화
    if (!dev && !isServer) {
      // 소스맵 최적화
      config.devtool = 'source-map';
      
      // 번들 분석 (선택사항)
      // if (process.env.ANALYZE === 'true') {
      //   const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      //   config.plugins.push(new BundleAnalyzerPlugin());
      // }
    }
    
    return config;
  },
  
  // 압축 설정
  compress: true,
  
  // 파워드 바이 헤더 (성능 향상)
  poweredByHeader: false,
  
  // 리다이렉트 설정 (필요시)
  async redirects() {
    return [];
  },
  
  // 헤더 설정 (보안 및 성능)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
