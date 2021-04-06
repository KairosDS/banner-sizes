import { html, LitElement } from 'lit-element';
import { bannerSizesStyles } from './banner-sizes-style';
import { HTMLChildrenMixin } from './HTMLChildrenMixin';


/**
 * `banner-sizes`
 * BannerSizes
 *
 * @customElement banner-sizes
 * @litElement
 * @demo demo/index.html
 */

export class BannerSizes extends HTMLChildrenMixin(LitElement) {
	static get is() {
    return 'banner-sizes';
  }

  static get properties() {
    return {
      /**
       * Object with the properties to be displayed
       * @property
       * @type {Object}
       */
      bannerData: {
        type: Object,
      },

      /**
       * Size of the banner to be displayed by default is large
       * @property
       * @type {small | medium | large}
       */
      bannerSize: {
        type: String,
        attribute: 'banner-size',
      },
      /**
       * Object data of the banner
       * @property
       * @type {Object}
       */
      dataNow: {
        type: Object,
      },
      /**
       * Animation type to change between banners
       * @property
       * @type {fade&blur | slide-toLeft | slide-toRight}
       */
      animationType: {
        type: String,
        attribute: 'animation-type',
      },
      /**
       * Animation type to change between banners
       * @property
       * @type {Boolean}
       */
      bPlayAnimation: {
        type: Boolean,
        attribute: 'play-animation',
      },
      /**
       * Interval time in seconds to change between banners if animationType is defined
       * @property
       * @type {Number}
       */
      changeInterval: {
        type: Number,
        attribute: 'change-interval',
      },
    };
  }

  static get styles() {
    return [bannerSizesStyles];
  }

  constructor() {
    super();
    this.bannerSize = 'large';
    this.bannerData = [];

    this.dataCounter = 0;
    this.dataNow = {};

    this.changeInterval = 5;
    this.changeTime = this.changeInterval * 1000;
    this.minTime = {};
    this.minTime['fade&blur'] = 7;
    this.minTime['slide-toLeft'] = 4;
    this.minTime['slide-toRight'] = 4;

    this.animations = {};
    this.animations['fade&blur'] = this.fadeAndBlurAnimation.bind(this);
    this.animations['slide-toLeft'] = this.slideToLeft.bind(this);
    this.animations['slide-toRight'] = this.slideToRight.bind(this);
    this.animationType = '';
    this.bPlayAnimation = false;
    this.intervalAnimation = null;

    this.totalWidth = '100vw';

    this.consts = {
      IMGBANNER: 0,
      TEXT1: 1,
      TEXT2: 2,
      TEXT3: 3,
      IMGDESKTOP: 4,
      IMGMOBILE: 5,
      IMGDESKTOPXL: 6,
      BTNTARGET: 7,
      BTNLINK: 8,
      BTNTEXT: 9,
    };

    this.playAnimationEvent = this.playAnimationEvent.bind(this);
    this.stopAnimationEvent = this.stopAnimationEvent.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    const childNodes = this._HTMLChildren();
    this.bnnrData = childNodes;
    this.bannerData = [{
      0: this.bnnrData[0],
      1: this.bnnrData[1],
      2: this.bnnrData[2],
      3: this.bnnrData[3],
      4: this.bnnrData[4],
      5: this.bnnrData[5],
      6: this.bnnrData[6],
      7: this.bnnrData[7],
      8: this.bnnrData[8],
      9: this.bnnrData[9],
    }];
    this.dataNow = this.bannerData[this.dataCounter];
    this.dataNext = this.bannerData[(this.dataCounter + 1) % this.bannerData.length];
    this.changeTime = this.changeInterval * 1000;
    this.totalWidth = `${this.bannerData.length * 100}vw`;

    document.addEventListener('play-animation-banner', this.playAnimationEvent);
    document.addEventListener('stop-animation-banner', this.stopAnimationEvent);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('play-animation-banner', this.playAnimationEvent);
    document.addEventListener('stop-animation-banner', this.stopAnimationEvent);
  }

  fadeAndBlurAnimation() {
    this.shadowRoot.querySelector('#wrapper').classList = ['banner-sizes'];
    this.intervalAnimation = setInterval(() => {
      const banner = this.shadowRoot.querySelectorAll('[id^="bannerLayer"]');
      banner[0].style = 'animation: fadeAndMug 3s linear forwards;';
      setTimeout(() => {
        banner[1].style = 'animation: fadeoffAndDemug 3s linear forwards';
        banner[3].parentNode.insertBefore(banner[0], banner[3].nextSibling);
      }, 3000);
    }, this.changeTime);
  }

  slideToLeft() {
    this.shadowRoot.querySelector('#wrapper').classList = ['banner-sizes'];
    this.intervalAnimation = setInterval(() => {
      const banner = this.shadowRoot.querySelectorAll('[id^="bannerLayer"]');
      banner[0].style = 'animation: slidetoleft 1.3s linear forwards';
      banner[1].style = 'animation: slidetoleft 1s linear forwards';
      setTimeout(() => {
        banner[0].style = '';
        banner[1].style = '';
        banner[3].parentNode.insertBefore(banner[0], banner[3].nextSibling);
      }, 1900);
    }, this.changeTime);
  }

  slideToRight() {
    this.shadowRoot.querySelector('#wrapper').classList.add('banner-sizes__wrapper-right');
    let banner = this.shadowRoot.querySelectorAll('[id^="bannerLayer"]');
    banner[0].parentNode.insertBefore(banner[3], banner[0]);
    this.intervalAnimation = setInterval(() => {
      banner = this.shadowRoot.querySelectorAll('[id^="bannerLayer"]');
      banner[0].style = 'z-index:2; animation: slidetoright 1s linear forwards';
      banner[1].style = 'animation: slidetoright 1.3s linear forwards';
      setTimeout(() => {
        banner[0].style = '';
        banner[1].style = '';
        banner[0].parentNode.insertBefore(banner[3], banner[0]);
      }, 1500);
    }, this.changeTime);
  }

  playAnimation() {
    clearInterval(this.intervalAnimation);
    if (this.animationType && this.bPlayAnimation) {
      this.animations[this.animationType]();
    }
  }

  playAnimationEvent(ev) {
    const { id, changeInterval, animationType } = ev.detail;
    if (this.id === id) {
      this.animationType = animationType || this.animationType;
      this.changeInterval = changeInterval || this.changeInterval;
      this.changeInterval = (this.changeInterval < this.minTime[this.animationType])
        ? this.minTime[this.animationType]
        : this.changeInterval;
      this.changeTime = this.changeInterval * 1000;
      this.bPlayAnimation = true;
      this.playAnimation();
    }
  }

  stopAnimationEvent(ev) {
    const { id } = ev.detail;
    if (this.id === id) {
      clearInterval(this.intervalAnimation);
    }
  }

  firstUpdated() {
    if (this.bannerData.length > 1) {
      this.playAnimation();
    }
  }

  getTemplate(data) {
    return html`
    <div class="banner-sizes__content banner-sizes--${this.bannerSize}__content">
      <div>
        ${data[this.consts.TEXT1]
        && html`
          <h2 class="banner-sizes__title-principal">
            ${data[this.consts.TEXT1]}
          </h2>
        `}
        ${data[this.consts.TEXT2]
        && html`
          <h2 class="banner-sizes__title-secondary">
            ${data[this.consts.TEXT2]}
          </h2>
        `}
        ${data[this.consts.TEXT3]
        && html` <h2 class="banner-sizes__title-principal">
          ${data[this.consts.TEXT3]}
        </h2>`}
        ${data[this.consts.BTNTEXT]
        && html`
        <div  class="section-header__button-link banner-sizes__button-desktop">
          <a
            class="link link--raised link--text-large"
            target="${data[this.consts.BTNTARGET]}"
            href="${data[this.consts.BTNLINK]}">
              ${data[this.consts.BTNTEXT]}
          </a>
        </div>
        `}
      </div class="margin">
      ${data[this.consts.IMGBANNER].src
      && html`
        <img
          id="imageBanner"
          class="banner-sizes-content-image"
          src="${data[this.consts.IMGBANNER].src}"
          alt="image great place to work"
        />
      `}
    </div>
    <img
      class="banner-sizes__image-mobile"
      src="${data[this.consts.IMGMOBILE].src}"
      alt="image banner"
    />
    <img
      class="banner-sizes__image-desktop"
      src="${data[this.consts.IMGDESKTOP].src}"
      alt="image banner"
    />

    <img
      class="banner-sizes__image-desktop-xl"
      src="${data[this.consts.IMGDESKTOPXL].src}"

      alt="image banner"
    />
    ${data[this.consts.BTNTEXT]
    && html`
      <div class="banner-sizes__button-mobile-container">
      <div class="banner-sizes__button-mobile">
        <a 
          class="link link--raised link--text-large"
          target="${data[this.consts.BTNTARGET]}"
          theme="outlined"
          href="${data[this.consts.BTNLINK]}">
            ${data[this.consts.BTNTEXT]}
        </a>
        </div>
      </div>
    `}`;
  }

  getTemplateBase(numBanner, data) {
    return html`
    <div id="bannerLayer${numBanner}" class="banner-sizes banner-sizes--${this.bannerSize}" style="animation: fadeoff 0.5s linear">
      ${this.getTemplate(data)}
    </div>
  `;
  }

  getBanners() {
    return this.bannerData.map((banner, index) => this.getTemplateBase(index, banner));
  }

  render() {
    return html`
      <div id="wrapper" class="banner-sizes__wrapper">
        <div style="display:flex; flex-direction:row; width:${this.totalWidth}">
          ${this.getBanners()}
        </div>
      </div>
    `;
  }
}
