import React, { useEffect } from "react";
// @ts-ignore Types are not available for this package yet
import { WildfireExplorer } from '@dsio/wildfire-explorer';
import '@dsio/wildfire-explorer/dist/wildfire-explorer.css';
import '../../styles/_custom.scss';

export default function Component() {
  useEffect(() => {
    // We're conditionally injecting Google Tag Manager here only for this custom tool page,
    // and this does not interfere with the GTM code on other pages.
    // The GTM script and noscript block are inserted once, scoped to this component.
    // The global GTM setup for the rest of the app should still live in the layout or root template.
    const scriptId = 'gtm-script';
    const noscriptId = 'gtm-noscript';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KHK5WJQ');
      `;
      document.head.appendChild(script);
    }

    if (!document.getElementById(noscriptId)) {
      const noscript = document.createElement('noscript');
      noscript.id = noscriptId;

      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-KHK5WJQ';
      iframe.height = '0';
      iframe.width = '0';
      iframe.style.display = 'none';
      iframe.style.visibility = 'hidden';

      noscript.appendChild(iframe);
      document.body.appendChild(noscript);
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <WildfireExplorer
        mapboxAccessToken={process.env.MAPBOX_TOKEN_FIRE_TOOL_STYLES}
        featuresApiEndpoint={process.env.FEATURES_API_ENDPOINT_PROD}
      />
    </div>
  );
}
