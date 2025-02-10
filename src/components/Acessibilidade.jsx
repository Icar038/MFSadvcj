import { useEffect } from "react";

const Acessibilidade = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    script.onload = () => {
      if (window.VLibras) {
        new window.VLibras.Widget();
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div vw className="enabled">
        <div vw-access-button className="active"></div>
        <div vw-plugin-wrapper>
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
    </div>
  );
};

export default Acessibilidade;

