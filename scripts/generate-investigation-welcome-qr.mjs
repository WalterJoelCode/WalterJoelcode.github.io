import QRCode from "qrcode";

const pageUrl = "https://walterjoelcode.github.io/events/investigaciones/pensamiento-logico-algoritmico/welcome/";
await QRCode.toFile("public/investigaciones/pensamiento-logico-algoritmico/welcome-qr.png", pageUrl, {
  width: 560,
  margin: 2,
  color: { dark: "#17171b", light: "#ffffffff" },
});
