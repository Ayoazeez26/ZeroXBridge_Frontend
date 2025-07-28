'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export const AutoFadeTextWrapper = ({
  children,
  className,
  as: Component = 'p',
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-20% 0px -20% 0px',
    once: true,
  });

  return (
    <Component
      ref={ref}
      className={cn(
        `transition-colors duration-700 ${
          isInView ? 'text-white' : 'text-[#9E9E9E]'
        }`,
        className
      )}
    >
      {children}
    </Component>
  );
};
