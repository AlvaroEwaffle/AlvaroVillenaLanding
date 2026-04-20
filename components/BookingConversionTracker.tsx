'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function BookingConversionTracker() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    const sendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_SEND_TO;
    const params = new URLSearchParams(window.location.search);
    const bookingId = params.get('booking_id') || undefined;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'booking_confirmed',
      booking_id: bookingId,
      value: 80000,
      currency: 'CLP',
    });

    if (sendTo && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: sendTo,
        value: 80000,
        currency: 'CLP',
        transaction_id: bookingId,
      });
    }
  }, []);

  return null;
}
