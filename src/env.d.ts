/// <reference path="../.astro/types.d.ts" />

declare module "qrcode" {
  interface ToStringOptions {
    type?: "svg";
    errorCorrectionLevel?: "L" | "M" | "Q" | "H";
    margin?: number;
    color?: { dark?: string; light?: string };
  }

  const QRCode: {
    toString(text: string, options?: ToStringOptions): Promise<string>;
  };

  export default QRCode;
}
