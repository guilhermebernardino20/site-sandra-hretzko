import { ImageResponse } from "next/og";

export const alt = "Dra. Sandra Hretzko | Realçar o que já é seu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagem de compartilhamento (WhatsApp, Instagram, Google). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #36111C 0%, #60211E 100%)",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 8, color: "#E6CFA5", textTransform: "uppercase" }}>
          Harmonização orofacial natural
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 108, lineHeight: 1.02, letterSpacing: -2, textTransform: "uppercase" }}>
          <span>Realçar</span>
          <span>
            o que já é <span style={{ color: "#E6CFA5", marginLeft: 24 }}>seu</span>
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 30 }}>
          <span>Dra. Sandra Hretzko</span>
          <span style={{ fontSize: 24, color: "#E6CFA5" }}>Cirurgiã-dentista · Pinhais, PR</span>
        </div>
      </div>
    ),
    size,
  );
}
