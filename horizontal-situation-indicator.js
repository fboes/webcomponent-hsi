const template = document.createElement('template');
template.innerHTML = `
<style>:host {
display: inline-block;
max-width: 100%;
--background-outer-color: black;
--background-color: black;
--foreground-color: white;
--lubber-color: darkorange;
--heading-select-color: cyan;
--nav1-color: magenta;
--nav1-bearing-color: var(--nav1-color);
--nav2-color: cyan;
--nav2-bearing-color: var(--nav2-color);
--stroke-width: 0.5;
}
:host[hidden] {
display: none;
}
svg {
width: 100%; height: auto;
}
* {
fill: var(--foreground-color);
}
circle, #chevron-line {
fill: none;
}
*[stroke] {
stroke-width: var(--stroke-width);
}
#background-outer,
#chevron {
fill: var(--background-outer-color);
}
#background {
fill: var(--background-color);
}
#lubber {
stroke: var(--lubber-color);
}
#heading-select {
fill: var(--heading-select-color);
}
#nav1-label tspan {
fill: var(--nav1-color);
}
#nav1-course-pointer,
#nav1-deviation * {
fill: var(--nav1-color);
stroke: var(--background-color);
}
#nav1-bearing {
fill: var(--nav1-bearing-color);
stroke: var(--background-color);
}
#nav2-label tspan {
fill: var(--nav2-color);
}
#nav2-course-pointer,
#nav2-deviation * {
fill: var(--nav2-color);
stroke: var(--background-color);
}
#nav2-bearing {
fill: var(--nav2-bearing-color);
stroke: var(--background-color);
}</style><svg width="256" height="256" version="1.1" viewBox="0 0 67.732 67.732" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g transform="translate(0 -229.27)">
<g id="baseplate">
<rect id="background-outer" y="229.27" width="67.733" height="67.733" style="paint-order:stroke fill markers"/>
<circle id="background" cx="33.866" cy="263.13" r="29.633" style="paint-order:stroke fill markers"/>
<circle cx="33.866" cy="263.13" r="17.395" fill="none" stroke="#fff" stroke-width=".74999" style="paint-order:stroke fill markers"/>
</g>
</g>
<g>
<g id="heading">
<g stroke="#000">
<path id="nav2-bearing" d="m33.866 5.5562-3.9687 6.3499 2.6458-1.0583v52.122h2.6458v-52.122l2.6458 1.0583zm0 4.7624 0.79374 0.31729v51.805h-1.5875v-51.805z" fill="#0ff" stroke-width=".26458px" style="paint-order:stroke fill markers"/>
<g id="nav2-course" style="paint-order:stroke fill markers">
<g id="nav2-deviation" fill="#0ff" stroke="#000" stroke-width=".26458" style="paint-order:stroke fill markers">
<rect x="33.337" y="17.991" width="1.0583" height="31.75" style="paint-order:stroke fill markers"/>
<path id="nav2-to" d="m31.22 29.633 2.6458-1.0583 2.6458 1.0583-2.6458-5.5562z" style="paint-order:stroke fill markers"/>
</g>
<g fill="none" stroke="#fff" stroke-width=".52916">
<circle cx="48.179" cy="33.866" r="1.1407" style="paint-order:stroke fill markers"/>
<circle cx="41.139" cy="33.866" r="1.1407" style="paint-order:stroke fill markers"/>
<circle cx="26.597" cy="33.866" r="1.1407" style="paint-order:stroke fill markers"/>
<circle cx="19.557" cy="33.866" r="1.1407" style="paint-order:stroke fill markers"/>
</g>
<path id="nav2-course-pointer" d="m33.866 5.5562-3.9687 6.3499 3.4395-1.3229v6.8791h1.0583v-6.8791l3.4395 1.3229zm-0.52916 44.714v11.906h1.0583v-11.906z" fill="#0ff" stroke="#000" stroke-width=".26458" style="paint-order:stroke fill markers"/>
</g>
<path id="nav1-bearing" d="m33.866 5.5562-3.9687 6.3499 2.6458-1.0583v52.122h2.6458v-52.122l2.6458 1.0583zm0 4.7624 0.79374 0.31729v51.805h-1.5875v-51.805z" fill="#f0f" stroke-width=".49999" style="paint-order:stroke fill markers"/>
<g id="nav1-course" style="paint-order:stroke fill markers">
<g id="nav1-deviation" fill="#f0f" stroke="#000" stroke-width=".26458" style="paint-order:stroke fill markers">
<rect x="33.337" y="17.991" width="1.0583" height="31.75" style="paint-order:stroke fill markers"/>
<path id="nav1-to" d="m31.22 29.633 2.6458-1.0583 2.6458 1.0583-2.6458-5.5562z" style="paint-order:stroke fill markers"/>
</g>
<g fill="none" stroke="#fff" stroke-width=".52916">
<circle cx="48.179" cy="33.866" r="1.1407" style="paint-order:stroke fill markers"/>
<circle cx="41.139" cy="33.866" r="1.1407" style="paint-order:stroke fill markers"/>
<circle cx="26.597" cy="33.866" r="1.1407" style="paint-order:stroke fill markers"/>
<circle cx="19.557" cy="33.866" r="1.1407" style="paint-order:stroke fill markers"/>
</g>
<path id="nav1-course-pointer" d="m33.866 5.5562-3.9687 6.3499 3.4395-1.3229v6.8791h1.0583v-6.8791l3.4395 1.3229zm-0.52916 44.714v11.906h1.0583v-11.906z" fill="#f0f" stroke="#000" stroke-width=".26458" style="paint-order:stroke fill markers"/>
</g>
</g>
<path id="heading-select" d="m32.014 1.3229h-1.5875v2.3812h6.8795l-4.26e-4 -2.3812h-1.5875l-1.8521 1.8521z" fill="#0ff"/>
<g id="compass-rose">
<use transform="rotate(-30 33.867 33.866)" width="100%" height="100%" xlink:href="#g1294"/>
<g fill="#000000" font-family="sans-serif" font-size="4.2333px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px">
<text transform="rotate(-90)" x="-33.884247" y="13.858006" style="line-height:1.25" xml:space="preserve"><tspan x="-33.884247" y="13.858006" fill="#ffffff" font-family="Arial" font-size="4.9388px" font-weight="bold" stroke-width=".26458" text-align="center" text-anchor="middle">W</tspan></text>
<text transform="rotate(90)" x="33.849083" y="-53.875324" style="line-height:1.25" xml:space="preserve"><tspan x="33.849083" y="-53.875324" fill="#ffffff" font-family="Arial" font-size="4.9388px" font-weight="bold" stroke-width=".26458" text-align="center" text-anchor="middle">E</tspan></text>
<text transform="rotate(-60)" x="-12.413631" y="26.254101" style="line-height:1.25" xml:space="preserve"><tspan x="-12.413631" y="26.254101" fill="#ffffff" font-family="Arial" font-size="4.9388px" font-weight="bold" stroke-width=".26458" text-align="center" text-anchor="middle">30</tspan></text>
<text transform="rotate(120)" x="12.378468" y="-66.271416" style="line-height:1.25" xml:space="preserve"><tspan x="12.378468" y="-66.271416" fill="#ffffff" font-family="Arial" font-size="4.9388px" font-weight="bold" stroke-width=".26458" text-align="center" text-anchor="middle">12</tspan></text>
<text transform="rotate(-30)" x="12.378449" y="26.254034" style="line-height:1.25" xml:space="preserve"><tspan x="12.378449" y="26.254034" fill="#ffffff" font-family="Arial" font-size="4.9388px" font-weight="bold" stroke-width=".26458" text-align="center" text-anchor="middle">33</tspan></text>
<text transform="rotate(150)" x="-12.413613" y="-66.271355" style="line-height:1.25" xml:space="preserve"><tspan x="-12.413613" y="-66.271355" fill="#ffffff" font-family="Arial" font-size="4.9388px" font-weight="bold" stroke-width=".26458" text-align="center" text-anchor="middle">15</tspan></text>
<text x="33.848873" y="13.857946" style="line-height:1.25" xml:space="preserve"><tspan x="33.848873" y="13.857946" fill="#ffffff" font-family="Arial" font-size="4.9388px" font-weight="bold" stroke-width=".26458" text-align="center" text-anchor="middle">N</tspan></text>
<text transform="scale(-1)" x="-33.884041" y="-53.875267" style="line-height:1.25" xml:space="preserve"><tspan x="-33.884041" y="-53.875267" fill="#ffffff" font-family="Arial" font-size="4.9388px" font-weight="bold" stroke-width=".26458" text-align="center" text-anchor="middle">S</tspan></text>
<text transform="rotate(30)" x="46.244942" y="-7.6125116" style="line-height:1.25" xml:space="preserve"><tspan x="46.244942" y="-7.6125116" fill="#ffffff" font-family="Arial" font-size="4.9388px" font-weight="bold" stroke-width=".26458" text-align="center" text-anchor="middle">3</tspan></text>
<text transform="rotate(210)" x="-46.280106" y="-32.404808" style="line-height:1.25" xml:space="preserve"><tspan x="-46.280106" y="-32.404808" fill="#ffffff" font-family="Arial" font-size="4.9388px" font-weight="bold" stroke-width=".26458" text-align="center" text-anchor="middle">21</tspan></text>
<text transform="rotate(60)" x="46.244957" y="-32.404598" style="line-height:1.25" xml:space="preserve"><tspan x="46.244957" y="-32.404598" fill="#ffffff" font-family="Arial" font-size="4.9388px" font-weight="bold" stroke-width=".26458" text-align="center" text-anchor="middle">6</tspan></text>
<text transform="rotate(240)" x="-46.280121" y="-7.61272" style="line-height:1.25" xml:space="preserve"><tspan x="-46.280121" y="-7.61272" fill="#ffffff" font-family="Arial" font-size="4.9388px" font-weight="bold" stroke-width=".26458" text-align="center" text-anchor="middle">24</tspan></text>
</g>
<g id="g1294">
<path d="m33.866 4.2333v4.2333" fill="none" stroke="#fff" stroke-width=".49999"/>
<path d="m36.449 4.346-0.16142 1.845" fill="none" stroke="#fff" stroke-width=".49999"/>
<path d="m39.012 4.6834-0.55133 3.1267" fill="none" stroke="#fff" stroke-width=".49999"/>
<path d="m44.001 6.0201-1.0859 2.9835" fill="none" stroke="#fff" stroke-width=".49999"/>
<path d="m41.536 5.243-0.47935 1.789" fill="none" stroke="#fff" stroke-width=".49999"/>
<path d="m46.39 7.0096-0.78272 1.6785" fill="none" stroke="#fff" stroke-width=".49999"/>
</g>
<use transform="rotate(30 33.867 33.866)" width="100%" height="100%" xlink:href="#g1294"/>
<use transform="rotate(60 33.867 33.866)" width="100%" height="100%" xlink:href="#g1294"/>
<use transform="rotate(90 33.867 33.866)" width="100%" height="100%" xlink:href="#g1294"/>
<use transform="rotate(120 33.867 33.866)" width="100%" height="100%" xlink:href="#g1294"/>
<use transform="rotate(150 33.867 33.866)" width="100%" height="100%" xlink:href="#g1294"/>
<use transform="rotate(180 33.867 33.866)" width="100%" height="100%" xlink:href="#g1294"/>
<use transform="rotate(210 33.867 33.866)" width="100%" height="100%" xlink:href="#g1294"/>
<use transform="rotate(240 33.867 33.866)" width="100%" height="100%" xlink:href="#g1294"/>
<use transform="rotate(-90 33.867 33.866)" width="100%" height="100%" xlink:href="#g1294"/>
<use transform="rotate(-60 33.867 33.866)" width="100%" height="100%" xlink:href="#g1294"/>
</g>
</g>
</g>
<g>
<g font-family="sans-serif" font-size="4.2333px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px">
<text id="nav1-label" x="1.7363065" y="5.2254548" fill="#000000" style="line-height:1.25" xml:space="preserve"><tspan x="1.7363065" y="5.2254548" fill="#ff00ff" font-family="sans-serif" font-weight="bold" stroke-width=".26458">NAV1</tspan></text>
<text id="nav2-label" x="66.047813" y="5.2676091" fill="#00ffff" style="line-height:1.25" xml:space="preserve"><tspan x="66.047813" y="5.2676091" fill="#00ffff" font-family="sans-serif" font-weight="bold" stroke-width=".26458" text-align="end" text-anchor="end">NAV2</tspan></text>
</g>
<g id="top">
<path id="plane" d="m36.247 38.629v-0.52916l-1.8521-1.5875 0.26458-2.1166 3.4395 1.0583v-1.0583l-3.4395-2.6458v-1.5875l-0.52916-1.5875h-0.26501 8.52e-4 -0.26501l-0.52916 1.5875v1.5875l-3.4395 2.6458v1.0583l3.4395-1.0583 0.26458 2.1166-1.8521 1.5875v0.52916l2.3812-0.52916z" fill="#fff"/>
<path id="path968" d="m65.88 33.866h1.8521" fill="none" stroke="#fff" stroke-width=".49999"/>
<path id="chevron" d="m29.633 0v1.3229h2.3812l1.8521 1.8521 1.8521-1.8521h2.3812v-1.3229z"/>
<path id="lubber" d="m33.866 3.175v5.2916" fill="#f60" stroke="#ff7f2a" stroke-width=".49999"/>
<path id="chevron-line" d="m29.633 1.3229h2.3812l1.8521 1.8521 1.8521-1.8521h2.3812" fill="none" stroke="#fff" stroke-width=".39687"/>
<use id="use970" transform="rotate(-45 33.866 33.866)" width="100%" height="100%" xlink:href="#path968"/>
<use id="use972" transform="rotate(-90 33.866 33.866)" width="100%" height="100%" xlink:href="#use970"/>
<use id="use974" transform="rotate(-45 33.866 33.866)" width="100%" height="100%" xlink:href="#use972"/>
<use id="use976" transform="rotate(-45 33.866 33.866)" width="100%" height="100%" xlink:href="#use974"/>
<use id="use978" transform="rotate(-90 33.866 33.866)" width="100%" height="100%" xlink:href="#use976"/>
<use transform="rotate(45 33.866 33.866)" width="100%" height="100%" xlink:href="#use978"/>
</g>
</g>
</svg>`;

class HorizontalSituationIndicator extends HTMLElement {
  static get observedAttributes() {
    return [
      'debug',
      'fix-north',
      'heading',
      'heading-select',
      'nav1-label',
      'nav1-course',
      'nav1-deviation',
      'nav1-bearing',
      'nav1-to',
      'nav2-label',
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

    this._elements = {
      'top': shadowRoot.getElementById('top')
    };
    this._svg = {
      centerX: 67.733/2,
      centerY: 67.733/2
    };

    /* eslint-disable wc/no-constructor-attributes */
    this.constructor.observedAttributes.forEach((attrName) => {
      const matches = this._getStructuredAttributeName(attrName);

      Object.defineProperty(this, attrName, {
        get() {
          if (!this.hasAttribute(attrName)) {
            return null;
          }
          return (matches[2] !== 'label') ? Number(this.getAttribute(attrName)) : this.getAttribute(attrName);
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
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    this._log('Manipulate stuff via attributeChangedCallback', attrName, newValue);

    const matches = this._getStructuredAttributeName(attrName);
    if (attrName === 'fix-north') {
      this._log('Switching mode');
      this._rotateSvgElement(this._elements['top'], 0);
      this._rotateSvgElement(this._elements['heading'], 0);
      this.heading = this.heading;
    }
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
      case 'label':
        el.querySelector('tspan').textContent = this[attrName];
        break;
      case 'deviation':
        let translate = this[attrName];
        if (translate < -90) { translate += 180; translate *= -1; }
        else if (translate > +90) { translate -= 180; translate *= -1; }
        translate = Math.max(-10, Math.min(10, translate));
        el.setAttribute('transform','translate(' + (translate * -1.45) + ' 0)');

        translate = Math.abs(translate);
        if (this[matches[1] + '-bearing'] !== null) {
          if (translate < 10) {
            this._elements[matches[1] + '-bearing'].setAttribute('opacity', translate / 10);
          } else {
            this._elements[matches[1] + '-bearing'].removeAttribute('opacity');
          }
        }
        break;
      case 'to':
        rotate = this[attrName] > 0 ? 0 : 180;
        break;
      case 'heading':
        if (this['fix-north']) {
          this._rotateSvgElement(this._elements['top'], this[attrName]);
        } else {
          rotate = -this[attrName];
        }
        break;
      default:
        rotate = this[attrName];
        break;
    }
    if (rotate !== null) {
      this._rotateSvgElement(el, rotate);
    }
  }

  connectedCallback() {
    ['nav1', 'nav2'].forEach((source) => {
      this._calculateDeviation(source);
    });
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

  _rotateSvgElement(element, degrees) {
    element.setAttribute('transform','rotate(' + [degrees, this._svg.centerX, this._svg.centerY].join(' ') + ')');
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
