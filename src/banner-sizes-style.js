import { css } from 'lit-element';

/* TODO
mobile styles
*/
export const bannerSizesStyles = css`
  :host {
    display: block;
    overflow: hidden;
    --title-color: var(--main-color, #ff7900);
    --light-color: var(--white-color, #ffffff);
    --dark-color: var(--black-color, #000000);
    --background-button-color: var(--secondary-color, #0e3540);
    --background-opacity-s-color: rgba(255, 255, 255, 6e-5);
    --background-opacity-m-color: rgba(255, 255, 255, 0.6);
    --background-opacity-xxs-color: rgba(255, 255, 255, 0);
    --background-opacity-xs-color: rgba(255, 255, 255, 0.0001);
    --section-banner-title-color: #4d4d4e;
    --font-size-title-principal: var(--font-size-xxxl, 6.125rem); /* 98px */
    --font-size-title: var(--font-size-xl, 3rem); /* 48px */
    --font-size-title-mobile: var(--font-size-l, 1.875rem); /* 30px */
    --font-size-button: var(--font-size-m, 1rem); /* 16px */
    --line-height-title-desktop: var(--line-height-xl, 3.125rem); /* 58px */
    --line-height-title-mobile: var(
      --section-heading-line-height,
      2.375rem
    ); /* 38px */
    --line-height-button: var(--line-height-m: 1.125rem); /* 18px */
    --margin-banner-content: var(--out-wrapper-margin-desktop, 135px);
  }

  .banner-sizes {
    position: relative;
    width: 100%;
    height: 745px;
  }

  .banner-sizes__wrapper {
    overflow: hidden;
    width: 100vw;
  }
  .banner-sizes__wrapper-right {
    position: relative;
    left: -100vw;
    width: 200vw;
  }

  .banner-sizes--small {
    height: 385px;
  }

  .banner-sizes--small-join-us {
    height: 201px;
    margin-top: 60px;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 4e-5) 59.4%,
      rgba(0, 0, 0, 0.4) 88.38%,
      rgba(0, 0, 0, 0.4) 129.31%,
      rgba(0, 0, 0, 4e-5) 174.91%
    );
  }

  .banner-sizes--medium {
    height: 650px;
  }
  .banner-sizes--contact {
    background: initial;
    height: 260px;
    margin-top: 60px;
  }

  .banner-sizes--offer {
    height: 201px;
    background: initial;
  }

  .banner-sizes--innovation {
    height: 651px;
    margin-top: 60px;
  }

  .margin {
    margin-left: 100px;
  }

  .banner-sizes--internalTraining {
    height: 256px;
    background: initial;
    margin-top: 60px;
  }

  .banner-sizes__image-desktop,
  .banner-sizes__image-desktop-xl,
  .banner-sizes__button-desktop {
    display: none;
  }
  .banner-sizes__title-principal {
    margin: 0;
    font-family: "Journal";
    font-weight: normal;
    font-size: var(--font-size-title);
    line-height: var(--line-height-title-mobile);
    color: var(--title-color);
    margin-bottom: 12px;
  }
  .banner-sizes__title-secondary {
    margin: 0;
    font-family: "AvenirLTPro-Heavy";
    font-size: var(--font-size-title-mobile);
    line-height: var(--line-height-title-mobile);
    color: var(--section-banner-title-color);
  }
  .banner-sizes__button-mobile-container {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    position: absolute;
    height: 179px;
    bottom: 0;
    background: linear-gradient(
      360deg,
      var(--dark-color) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .banner-sizes__button-mobile {
    width: 167px;
    display: inline-block;
    color: var(--light-color);
    margin: 73px 42px;
    text-decoration: none;
    font-family: "HelveticaNeueBold";
    font-size: var(--font-size-button);
    line-height: var(--line-height-button);
    text-align: center;
    border-radius: 5px;
    text-transform: uppercase;
  }
  .banner-sizes__button-mobile {
    --secondary-color: #ffffff;
  }
  .banner-sizes__content {
    padding: 46px 27px 65px;
    position: absolute;
    top: 30px;
  }

  .banner-sizes--internalTraining .banner-sizes__content {
    padding-top: 0;
    max-width: 181px;
    top: 16px;
  }
  .banner-sizes--small__content {
    top: 40px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .banner-sizes--small-join-us__content {
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
  }

  .banner-sizes--contact__content {
    top: 25px;
    left: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
  }

  .banner-sizes--offer__content {
    padding: 12px 16px 65px;
    top: 0;
    max-width: 156px;
  }
  .banner-sizes--medium__content h2:last-child {
    color: var(--title-color);
  }
  .banner-sizes--small__content h2:last-child {
    margin-left: 100px;
  }

  .banner-sizes--contact__content h2:last-child {
    margin-left: 0;
  }
  .banner-sizes--offer__content h2:first-child {
    color: var(--title-color);
  }
  .banner-sizes--offer__content h2:last-child {
    color: var(--main-text-color);
  }
  .banner-sizes-content-image {
    padding-bottom: 30px;
    max-width: 137px;
  }
  .banner-sizes__image-mobile {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .banner-sizes--about-us {
    height: 260px;
    margin-top: 60px;
    background: initial;
  }

  .banner-sizes--about-us__content {
    padding-top: 35px;
    margin-left: 34px;
    top: 0;
  }

  .banner-sizes--about-us__content h2 {
    color: #ffffffff;
  }

  .banner-sizes--small-join-us__content h2 {
    color: #ffffffff;
   
  }

  .banner-sizes--medium__content .banner-sizes__title-secondary {
    font-size: 45px;
    line-height: 50px;
  }

  .banner-sizes--medium__content .banner-sizes__title-principal {
    font-size: 85px;
    line-height: 50px;
  }

  .banner-sizes--large {
    height: 651px;
    padding-top: 60px;
    clip-path: polygon(0 0%, 100% 0, 100% 96%, 0 100%);
  }

  .banner-sizes--innovation__content {
    top: 0;
    padding-bottom: 92px;
    background: linear-gradient(
      351deg,
      var(--background-opacity-xxs-color) 24.4%,
      var(--light-color) 31.38%,
      var(--light-color) 99%,
      var(--background-opacity-xxs-color) 116.91%
    );
  }

  .banner-sizes--large__content {
    width: 100%;
    background: linear-gradient(
      351deg,
      var(--background-opacity-xxs-color) 15.4%,
      var(--light-color) 28.38%,
      var(--light-color) 99%,
      var(--background-opacity-xxs-color) 116.91%
    );
  }

  .banner-sizes--large .banner-sizes__image-mobile {
    height: initial;
    bottom: 0;
  }

  @media all and (min-width: 768px) {
    .section-header__button-link {
      display: inline-block;
      margin: 38px 0 0;
      width: max-content;
      text-decoration: none;
      color: var(--light-color);
      font-family: "HelveticaNeueBold";
      font-size: var(--font-size-button);
      line-height: var(--line-height-button);
      text-align: center;
      border-radius: 5px;
      background-color: var(--background-button-color);
      text-transform: uppercase;
    }
    .section-header__button-link:focus {
      outline: none;
      border-bottom: 2px solid var(--title-color);
    }
    .banner-sizes {
      background: none;
    }
    .banner-sizes--large {
      height: 552px;
      background: linear-gradient(
        to left,
        var(--background-opacity-s-color) 33.41%,
        var(--background-opacity-m-color) 51.82%,
        var(--background-opacity-m-color) 89.7%,
        var(--background-opacity-xxs-color) 103.46%
      );
      padding-top: 0;
      clip-path: none;
    }

    .banner-sizes--medium {
      height: 345px;
      background: none;
    }
    .banner-sizes--small {
      height: 320px;
      background: linear-gradient(
        to left,
        var(--background-opacity-xxs-color) 42.4%,
        var(--light-color) 59.38%,
        var(--light-color) 92.31%,
        var(--background-opacity-xxs-color) 98.91%
      );
    }
    .banner-sizes--small-join-us {
      height: 260px;
      margin-top: 25px;
      background: linear-gradient(
        to left,
        var(--background-opacity-xxs-color) 71.4%,
        var(--light-color) 70.38%,
        var(--light-color) 75.31%,
        var(--background-opacity-xxs-color) 90.91%
      );
    }
    .banner-sizes--contact {
      margin-top: 0;
    }

    .banner-sizes--offer {
      height: 260px;
    }

    .banner-sizes--internalTraining {
      height: 535px;
      margin-top: 0;
    }
    .banner-sizes--innovation {
      margin-top: 0;
      height: 320px;
      background: linear-gradient(
        to left,
        var(--background-opacity-xxs-color) 41.4%,
        var(--light-color) 89.38%,
        var(--light-color) 74.31%,
        var(--background-opacity-xxs-color) 75.91%
      );
    }
    .banner-sizes__image-desktop {
      object-fit: cover;
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: -1;
      display: block;
      clip-path: polygon(0 0%, 100% 0, 100% 90%, 0 100%);
    }

    .banner-sizes--internalTraining .banner-sizes__image-desktop {
      clip-path: none;
      background-color: #f5f5f5;
    }
    .banner-sizes--contact .banner-sizes__image-desktop {
      clip-path: none;
      background-color: #f2f2f2;
    }

    .banner-sizes--medium .banner-sizes__image-desktop {
      clip-path: none;
    }

    .banner-sizes__button-desktop {
      width: 188px;
    }
    .banner-sizes__image-mobile,
    .banner-sizes__image-desktop-xl,
    .banner-sizes__button-mobile-container {
      display: none;
    }
    .banner-sizes__title-principal {
      margin-bottom: 30px;
      font-size: var(--font-size-title-principal);
      line-height: var(--line-height-title-desktop);
    }
    .banner-sizes__title-secondary {
      font-size: var(--font-size-title);
      line-height: var(--line-height-title-desktop);
    }

    .banner-sizes__content {
      margin-left: 8.333333%;
      top: 70px;
    }
    .banner-sizes--large__content {
      max-width: 607px;
      padding: 46px 40px;
      background: rgba(255, 255, 255, 0.6);
      clip-path: polygon(0 0%, 100% 0, 100% 90%, 0 100%);
    }
    .banner-sizes--medium__content {
      display: flex;
      max-width: 440px;
      flex-direction: row;
      padding: 0;
    }
    .banner-sizes--offer__content {
      top: 0;
      padding-top: 64px;
      padding-left: 0;
      max-width: 745px;
    }

    .banner-sizes--innovation__content {
      padding: 0;
      padding-left: 27px;
      max-width: 450px;
      background: transparent;
    }

    .banner-sizes--small__content {
      width: 35%;
      flex-direction: row;
      align-items: flex-end;
      bottom: auto;
      padding: 0;
    }

    .banner-sizes--small-join-us__content {
      width: 35%;
      flex-direction: row;
      justify-content: flex-start;
      bottom: auto;
      padding: 0 0 0 25px;
    }

    .banner-sizes--contact__content {
      width: 40%;
      flex-direction: row;
      bottom: auto;
      padding: 0;
      justify-content: flex-start;
    }

    .banner-sizes-content-image {
      padding-left: 56px;
      max-width: initial;
    }

    .banner-sizes--small-join-us .banner-sizes__title-principal {
      color: var(--title-color);
    }

    .banner-sizes--small-join-us .banner-sizes__title-secondary {
      color: var(--section-banner-title-color);
    }

    @media all and (min-width: 1024px) {
      .banner-sizes__content {
        margin-left: var(--margin-banner-content);
      }
      .banner-sizes--internalTraining .banner-sizes__content {
        max-width: 330px;
        top: 90px;
      }
    }

    @keyframes fadeAndMug {
      0% {
        opacity: 1;
        filter: blur(1px);
      }
      100% {
        opacity: 0;
        filter: blur(20px);
      }
    }

    @keyframes fadeoffAndDemug {
      0% {
        opacity: 0;
        filter: blur(20px);
      }
      100% {
        opacity: 1;
        filter: blur(1px);
      }
    }

    @keyframes slidetoleft {
      0% {
        position: relative;
        left: 0;
      }
      100% {
        position: relative;
        left: -100vw;
      }
    }
    @keyframes slidetoright {
      0% {
        position: relative;
        left: 0vw;
      }
      100% {
        position: relative;
        left: 100vw;
      }
    }

    .banner-sizes--about-us {
      margin-top: 0;
      background-color: transparent;
    }

    .banner-sizes--about-us__content {
      padding-top: 55px;
      margin-left: 207px;
      top: 0;
    }

    .banner-sizes--about-us__content h2 {
      color: #ffffffff;
    }

    .margin {
      margin-left: 100px;
    }

    .banner-sizes--medium img {
      clip-path: none;
    }

    .banner-sizes--internalTraining img {
      background-color: #f5f5f5;
      clip-path: none;
    }
  }
  @media all and (min-width: 1920px) {
    .banner-sizes__content {
      margin: 0 var(--out-wrapper-margin-desktop-xl);
    }
    .banner-sizes__image-mobile,
    .banner-sizes__image-desktop {
      background-color: #f2f2f2;
    }
    .banner-sizes__image-desktop {
      display:none;
    }

    .banner-sizes--contact .banner-sizes__image-desktop-xl {
      background-color: #f2f2f2;
      clip-path: initial;
    }
    .banner-sizes__image-desktop-xl {
      object-fit: cover;
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: -1;
      display: block;
      clip-path: polygon(0 0%, 100% 0, 100% 90%, 0 100%);
    }

    .banner-sizes--small-join-us {
      background: none;
    }
  }
`;

