(function(){
  const measurementId=document.querySelector('meta[name="google-analytics-id"]')?.content.trim();
  if(!/^G-[A-Z0-9]+$/.test(measurementId||''))return;
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};
  window.gtag('consent','default',{analytics_storage:'denied'});
  const loadAnalytics=()=>{
    if(document.querySelector('script[data-google-analytics]'))return;
    const script=document.createElement('script');
    script.async=true;
    script.dataset.googleAnalytics='true';
    script.src=`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.append(script);
    window.gtag('js',new Date());
    window.gtag('config',measurementId,{anonymize_ip:true});
  };
  const saved=localStorage.getItem('iea-analytics-consent');
  if(saved==='granted'){
    window.gtag('consent','update',{analytics_storage:'granted'});
    loadAnalytics();
    return;
  }
  if(saved==='denied')return;
  const banner=document.createElement('aside');
  banner.className='consent-banner';
  banner.setAttribute('aria-label','Analytics preferences');
  banner.innerHTML='<p><strong>Help improve this atlas</strong><br>Allow anonymous analytics to count visits and data downloads. No advertising cookies are used.</p><div><button class="secondary" data-consent="denied">No thanks</button><button class="primary" data-consent="granted">Allow analytics</button></div>';
  document.body.append(banner);
  banner.addEventListener('click',event=>{
    const choice=event.target.closest('[data-consent]')?.dataset.consent;
    if(!choice)return;
    localStorage.setItem('iea-analytics-consent',choice);
    if(choice==='granted'){
      window.gtag('consent','update',{analytics_storage:'granted'});
      loadAnalytics();
    }
    banner.remove();
  });
})();
