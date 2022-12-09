/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from 'react';
import {Logo} from 'components/Logo';
import HomepageCard from 'components/MDX/HomepageCard';
import ButtonLink from 'components/ButtonLink';
import {IconArrowSmall} from '../Icon/IconArrowSmall';
import {IconLearnOnce} from '../Icon/IconLearnOnce';
import {IconComponentBased} from '../Icon/IconComponentBased';
import {IconDeclarative} from '../Icon/IconDeclarative';

function HomepageHero() {
  return (
    <>
      <div className="mt-8 lg:mt-10 mb-0 sm:mt-8 sm:mb-8 lg:mb-6 flex-col sm:flex-row flex grow items-start sm:items-center justify-start max-w-4xl ml-0 2xl:mx-auto">
        <Logo className="text-link dark:text-link-dark w-20 sm:w-36 mr-6 mb-4 sm:mb-0 h-auto" />
        <div className="flex flex-wrap">
          <div>
            <h1 className="text-5xl mr-4 flex wrap font-bold leading-tight text-primary dark:text-primary-dark">
              React
            </h1>
            <p className="text-xl text-primary dark:text-primary-dark leading-relaxed self-center my-1">
              A JavaScript library for building user interfaces
            </p>
            <div className="my-3">
              <ButtonLink
                href={'/learn'}
                className="mr-2"
                type="primary"
                size="lg"
                label="Take the Tutorial">
                Learn React
              </ButtonLink>
              <ButtonLink
                href={'/apis/react'}
                className="mr-2"
                type="secondary"
                size="lg"
                label="Take the Tutorial">
                API
                <IconArrowSmall
                  displayDirection="right"
                  className="block ml-1.5"
                />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-8 sm:my-10 grid grid-cols-1 xl:grid-cols-3 gap-x-8 gap-y-4">
        <div className="flex flex-col justify-center">
          <HomepageCard
            icon={<IconDeclarative className="w-full h-full" />}
            title="Declarative">
            <p>
              React makes it painless to create interactive UIs. Design simple
              views for each state in your application, and React will
              efficiently update and render just the right components when your
              data changes. Declarative views make your code more predictable
              and easier to debug.
            </p>
          </HomepageCard>
        </div>
        <div className="flex flex-col justify-center">
          <HomepageCard
            icon={<IconComponentBased className="w-full h-full" />}
            title="Component-Based">
            <p>
              Build encapsulated components that manage their own state, then
              compose them to make complex UIs. Since component logic is written
              in JavaScript instead of templates, you can easily pass rich data
              through your app and keep state out of the DOM.
            </p>
          </HomepageCard>
        </div>
        <div className="flex flex-col justify-center">
          <HomepageCard
            icon={<IconLearnOnce className="w-full h-full" />}
            title="Learn Once, Write Anywhere">
            <p>
              We don’t make assumptions about the rest of your technology stack,
              so you can develop new features in React without rewriting
              existing code. React can also render on the server using Node and
              power mobile apps using React Native.
            </p>
          </HomepageCard>
        </div>
      </section>
    </>
  );
}
export default HomepageHero;
