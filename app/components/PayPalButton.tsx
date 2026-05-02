'use client';

import Script from 'next/script';

export default function PayPalButton() {
  return (
    <>
      <Script
        src="https://www.paypal.com/sdk/js?client-id=BAANqrD0PloJbGtVMyuCEzvoUAw_a7wpFH1dcg-JACJVepqhgv03GC-Py-P7XRMHD-kB8NRGVpf1zWsEEw&components=hosted-buttons&disable-funding=venmo&currency=CAD"
        onLoad={() => {
          (window as any).paypal.HostedButtons({
            hostedButtonId: 'VSHFPWFF2PCMJ',
          }).render('#paypal-container-VSHFPWFF2PCMJ');
        }}
      />
      <div id="paypal-container-VSHFPWFF2PCMJ" style={{ width: '100%', borderRadius: '8px', overflow: 'hidden' }} />
    </>
  );
}
