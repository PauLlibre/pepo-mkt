'use client';

import React from 'react';
import { InlineWidget } from 'react-calendly';

function CalendlyScheduler() {
  return (
    <div className="my-4 sm:my-6 md:my-8 w-full flex justify-center px-4 sm:px-6 md:px-8">
      <div className="h-[500px] sm:h-[600px] md:h-[700px] w-full">
        <InlineWidget
          url="https://calendly.com/your-calendly-url"
          styles={{
            height: '100%', // Use 100% to fill the parent div
            minHeight: '500px',
            width: '100%',
          }}
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '00a2ff',
            textColor: '4d5055',
          }}
          prefill={{
            email: 'test@example.com',
            name: 'John Doe',
          }}
        />
      </div>
    </div>
  );
}

export default CalendlyScheduler;
