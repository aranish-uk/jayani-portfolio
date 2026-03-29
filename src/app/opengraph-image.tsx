import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Jayani Gunda — Supply Chain, Data Analytics & Strategy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0c1929",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #1e3a5f 0%, #2d5a8e 50%, #1e3a5f 100%)",
            display: "flex",
          }}
        />

        {/* Initials watermark */}
        <div
          style={{
            position: "absolute",
            right: "60px",
            bottom: "40px",
            fontSize: "280px",
            fontWeight: 800,
            color: "rgba(255,255,255,0.03)",
            lineHeight: 1,
            display: "flex",
          }}
        >
          JG
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "4px",
            textTransform: "uppercase" as const,
            color: "#64748b",
            marginBottom: "24px",
            display: "flex",
          }}
        >
          Supply Chain · Data Analytics · Strategy · Leadership
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            marginBottom: "24px",
            display: "flex",
          }}
        >
          Jayani Gunda
        </div>

        {/* Brand statement */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: 400,
            color: "#94a3b8",
            lineHeight: 1.5,
            maxWidth: "700px",
            display: "flex",
          }}
        >
          Senior at Arizona State University pursuing dual degrees in Business Data Analytics and Supply Chain Management.
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            marginTop: "40px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "32px", fontWeight: 700, color: "#ffffff", display: "flex" }}>
              4.00
            </div>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" as const, color: "#64748b", marginTop: "4px", display: "flex" }}>
              GPA
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "32px", fontWeight: 700, color: "#ffffff", display: "flex" }}>
              B.S. + B.S.
            </div>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" as const, color: "#64748b", marginTop: "4px", display: "flex" }}>
              Dual Majors
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "32px", fontWeight: 700, color: "#ffffff", display: "flex" }}>
              3+
            </div>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" as const, color: "#64748b", marginTop: "4px", display: "flex" }}>
              Internships
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #1e3a5f 0%, #2d5a8e 50%, #1e3a5f 100%)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
