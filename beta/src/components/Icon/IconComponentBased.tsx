/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from 'react';

export const IconComponentBased = React.memo<JSX.IntrinsicElements['svg']>(
  function IconComponentBased({className}) {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}>
        <g clip-path="clip">
          <path
            d="M56.8818 54.3254L51.3747 42.804C51.3247 42.6969 51.2532 42.5969 51.1675 42.5111L13.939 5.27543C12.9604 4.29686 11.3747 4.29686 10.4032 5.27543L4.97467 10.704C4.00324 11.6754 4.00324 13.2683 4.97467 14.2397L42.189 51.4611C42.2747 51.5469 42.3747 51.6183 42.4818 51.6683L54.0247 57.1754C54.3247 57.3183 54.6461 57.3897 54.9532 57.3897C55.5032 57.3897 56.0461 57.1754 56.4604 56.754C57.1104 56.104 57.2747 55.1469 56.8747 54.3111L56.8818 54.3254ZM6.48895 12.7254C6.35324 12.5826 6.35324 12.3611 6.48895 12.2183L11.9175 6.78972C12.0604 6.64686 12.2818 6.64686 12.4247 6.78972L48.8889 43.2611L42.9461 49.1897L6.48895 12.7254ZM54.9532 55.2469L44.7818 50.3897L50.0961 45.0897L54.9532 55.2469L55.9175 54.7826L54.9532 55.2469Z"
            fill="currentColor"
          />
          <path
            d="M28.2404 41.8467L27.2333 40.8395C27.0904 40.6967 26.869 40.6967 26.7261 40.8395L12.4118 55.1538C12.319 55.2467 12.2118 55.261 12.1618 55.261C12.1118 55.261 11.9975 55.2467 11.9118 55.1538L6.4904 49.7395C6.35469 49.6038 6.35469 49.3753 6.4904 49.2324L8.42612 47.2967L10.1261 48.9967C10.269 49.1395 10.4904 49.1395 10.6333 48.9967L11.6404 47.9895C11.7833 47.8467 11.7833 47.6253 11.6404 47.4824L9.9404 45.7824L12.1333 43.5895L15.769 47.2253C15.9118 47.3681 16.1333 47.3681 16.2761 47.2253L17.2833 46.2181C17.4261 46.0753 17.4261 45.8538 17.2833 45.711L13.6475 42.0753L15.8404 39.8824L17.5404 41.5824C17.6833 41.7253 17.9047 41.7253 18.0475 41.5824L19.0547 40.5753C19.1975 40.4324 19.1975 40.211 19.0547 40.0681L17.3547 38.3681L19.5475 36.1753L23.1833 39.811C23.3261 39.9538 23.5475 39.9538 23.6904 39.811L24.6975 38.8038C24.8404 38.661 24.8404 38.4395 24.6975 38.2967L19.7975 33.3967C19.6547 33.2538 19.4333 33.2538 19.2904 33.3967L4.97612 47.711C3.99754 48.6895 3.99754 50.2681 4.97612 51.2467L10.3261 56.5967C10.6975 56.9681 11.169 57.261 11.6904 57.3538C12.5261 57.5038 13.3475 57.2467 13.9261 56.661L28.2404 42.3467C28.3833 42.2038 28.3833 41.9824 28.2404 41.8395V41.8467Z"
            fill="currentColor"
          />
          <path
            d="M56.3629 10.6895L50.9415 5.26811C49.9629 4.28954 48.3844 4.28954 47.4058 5.26811L33.0915 19.5824C32.9487 19.7252 32.9487 19.9467 33.0915 20.0895L37.9915 24.9895C38.1344 25.1324 38.3558 25.1324 38.4987 24.9895L39.5058 23.9824C39.6487 23.8395 39.6487 23.6181 39.5058 23.4752L35.8701 19.8395L38.0629 17.6467L39.7629 19.3467C39.9058 19.4895 40.1272 19.4895 40.2701 19.3467L41.2772 18.3395C41.4201 18.1967 41.4201 17.9753 41.2772 17.8324L39.5772 16.1324L41.7701 13.9395L45.4058 17.5753C45.5487 17.7181 45.7701 17.7181 45.9129 17.5753L46.9201 16.5681C47.0629 16.4253 47.0629 16.2038 46.9201 16.061L43.2844 12.4253L45.4772 10.2324L47.1772 11.9324C47.3201 12.0753 47.5415 12.0753 47.6844 11.9324L48.6915 10.9253C48.8344 10.7824 48.8344 10.561 48.6915 10.4181L46.9915 8.71811L48.9272 6.78239C48.9987 6.71097 49.0915 6.67525 49.1772 6.67525C49.2629 6.67525 49.3629 6.71097 49.4272 6.78239L54.8415 12.2038C54.9344 12.2967 54.9487 12.4038 54.9487 12.4538C54.9487 12.5038 54.9344 12.6181 54.8415 12.7038L40.5272 27.0181C40.3844 27.161 40.3844 27.3824 40.5272 27.5252L41.5344 28.5324C41.6772 28.6752 41.8987 28.6752 42.0415 28.5324L56.2915 14.2824C56.6629 13.911 56.9558 13.4395 57.0487 12.9181C57.1987 12.0824 56.9415 11.261 56.3558 10.6824L56.3629 10.6895Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip">
            <rect
              width="52.8571"
              height="52.8571"
              fill="white"
              transform="translate(4.23828 4.53955)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

IconComponentBased.displayName = 'IconComponentBased';