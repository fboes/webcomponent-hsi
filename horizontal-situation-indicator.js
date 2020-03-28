const template = document.createElement('template');
template.innerHTML = `
<style>:host { display: inline-block; background: black; color: white; max-width: 100%; }
:host[hidden] { display: none; }
:host svg { width: 100%; height: auto; }</style><svg width="256" height="256" version="1.1" viewBox="0 0 67.732 67.732" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

class HorizontalSituationIndicator extends HTMLElement {
  static get observedAttributes() {
    return [
      'debug',
      'heading',
      'heading-select',
      'nav1-course',
      'nav1-deviation',
      'nav1-bearing',
      'nav1-to',
      'nav2-course',
      'nav2-deviation',
      'nav2-bearing',
      'nav2-to'
    ];
  }

  constructor() {
    super();
    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(document.importNode(template.content, true));

    const degreeAttributes = [
      'heading',
      'heading-select',
      'nav1-course',
      'nav1-bearing',
      'nav2-course',
      'nav2-bearing'
    ];

    this._elements = {};
    this._svg = {
      centerX: 67.733/2,
      centerY: 67.733/2
    };

    /* eslint-disable wc/no-constructor-attributes */
    this.constructor.observedAttributes.forEach((attrName) => {
      const matches = this._getStructuredAttributeName(attrName);

      Object.defineProperty(this, attrName, {
        get() {
          return (this.hasAttribute(attrName)) ? Number(this.getAttribute(attrName)) : null;
        },
        set(attrValue) {
          if (attrValue !== null && attrValue !== undefined) {
            attrValue = Number(attrValue);
            if (degreeAttributes.indexOf(attrName) > -1) {
              attrValue = this._limitDeg(attrValue);
            }
            this.setAttribute(attrName, attrValue);
            if (matches[2] === 'course' || matches[2] === 'bearing') {
              this._calculateDeviation(matches[1]);
            }
          }
          else {
            this.removeAttribute(attrName);
          }
          this._log('warn', 'Set', attrName, attrValue);
        }
      });

      const element = shadowRoot.getElementById(attrName);
      if (element) {
        this._log('Registering DOM element for ' + attrName, element);
        this._elements[attrName] = element;
        this._elements[attrName].setAttribute('display', 'none');
      }
    });

    ['nav1', 'nav2'].forEach((source) => {
      this._calculateDeviation(source);
    });
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    this._log('Manipulate stuff via attributeChangedCallback', attrName, newValue);

    const matches = this._getStructuredAttributeName(attrName);
    const el = this._elements[attrName];
    if (!el) {
      return;
    }
    if (oldValue === null) {
      el.removeAttribute('display');
    }
    if (newValue === null) {
      el.setAttribute('display', 'none');
      return;
    }

    let rotate = null;
    switch (matches[2]) {
      case 'deviation':
        let translate = this[attrName];
        if (translate < -90) { translate += 180; translate *= -1; }
        else if (translate > +90) { translate -= 180; translate *= -1; }
        translate = Math.max(-10, Math.min(10, translate)) * -1.45;
        el.setAttribute('transform','translate(' + translate + ' 0)');
        break;
      case 'to':
        rotate = this[attrName] > 0 ? 0 : 180;
        break;
      case 'heading':
        rotate = -this[attrName];
        break;
      default:
        rotate = this[attrName];
        break;
    }
    if (rotate !== null) {
      el.setAttribute('transform','rotate(' + [rotate, this._svg.centerX, this._svg.centerY].join(' ') + ')');
    }
  }

  connectedCallback() {
  }

  disconnectedCallback() {
  }

  _getStructuredAttributeName(attrName) {
    return attrName.match(/^(nav\d)-(\S+)/) || [attrName, '', attrName];
  }

  _calculateDeviation(source) {
    if (this[source + '-course'] === null || this[source + '-bearing'] === null) {
      return;
    }

    const deviation = this._limitDeg(this[source + '-course'] - this[source + '-bearing'], -180, 180)
    this[source + '-deviation'] = deviation;
    this[source + '-to'] = (deviation >= -90 && deviation <= 90) ? 1 : -1;
    this._log('Setting derived values', {
      deviation: this[source + '-deviation'],
      to: this[source + '-to']
    });
  }

  _degToRad(deg) {
    return deg * (Math.PI / 180);
  }

  _limitDeg(deg, min = 0, max = 360) {
    while (deg >= max) {
      deg -= 360;
    }
    while (deg < min) {
      deg += 360;
    }
    return deg;
  }

  _log(...theArgs) {
    let method = 'log';
    if (theArgs[0] === 'warn' || theArgs[0] === 'error') {
      method = theArgs.shift();
    }
    if (this.debug) {
      console[method](...theArgs);
    }
  }
};

customElements.define('horizontal-situation-indicator', HorizontalSituationIndicator);