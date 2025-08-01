import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel 배포를 위해 정적 내보내기 제거
  // output: "export",
  images: {
    // Vercel에서 이미지 최적화 사용
    unoptimized: false,
  },
  typescript: {
    // 빌드 시 타입스크립트 에러 무시 (선택사항)
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
