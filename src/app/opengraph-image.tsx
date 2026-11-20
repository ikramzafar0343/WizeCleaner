import { ImageResponse } from "next/og";
import { site } from "@/shared/config/site";

export const alt = `${site.name} — cleaning services in ${site.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #b9dbf6 0%, #d8ebfa 50%, #f2f6f1 100%)",
          color: "#0f3d2e",
          fontSize: 84,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", padding: "10px 28px", borderRadius: 999, background: "#c8f169", fontSize: 32, marginBottom: 36 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", maxWidth: 960 }}>A spotless space, without lifting a finger.</div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 30, color: "#4e6158" }}>
          Cleaning services in {site.city} · Book on WhatsApp
        </div>
      </div>
    ),
    size,
  );
}
