
// Fix: Import React to resolve 'Cannot find namespace React' error
import React from 'react';

export interface DenimFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FadeType {
  name: string;
  location: string;
  description: string;
  imageUrl: string;
}

export interface CareStep {
  step: number;
  title: string;
  description: string;
}
