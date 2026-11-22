import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/Oindrilla_Chatterjee_Resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: "attachment; filename=Oindrilla_Chatterjee_Resume.pdf",
          },
        ],
      },
      {
        source: "/Oindrila_Chatterjee_Resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: "attachment; filename=Oindrila_Chatterjee_Resume.pdf",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
