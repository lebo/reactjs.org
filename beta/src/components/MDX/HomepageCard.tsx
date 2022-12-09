/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from 'react';

interface HomepageCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function HomepageCard({title, icon, children}: HomepageCardProps) {
  return (
    <div className="flex flex-col h-full bg-card dark:bg-card-dark shadow-inner justify-between rounded-lg pb-8 p-6 xl:p-8 mt-3">
      <div>
        <div className="w-16 h-16 mb-6 text-link dark:text-link-dark">
          {icon}
        </div>
        <h4 className="text-primary dark:text-primary-dark font-bold text-2xl leading-tight">
          {title}
        </h4>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export default HomepageCard;
