import "./styles/global.scss";
import youweLogo from "./typescript.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://youweagency.com" target="_blank">
      <img src="${youweLogo}" class="logo" alt="Vite logo" />
    </a>
  </div>
`;
