Horizontal Situation Indicator
==============================

A [web component](https://www.webcomponents.org/) which displays a self-contained [Horizontal Situation Indicator](https://en.wikipedia.org/wiki/Horizontal_situation_indicator).

![](docs/hsi.png)

For a demo see https://3960.org/webcomponent-hsi/.

Usage
-----

Loading the library prior to use:

```html
<html>
  <head>
    <script type="module" src="horizontal-situation-indicator.js"></script>
  </head>
  <body>
    <horizontal-situation-indicator heading="45.0" heading-select="0.0"></horizontal-situation-indicator>
  </body>
</html>

```

```html
<h4>Simple compass</h4>

<horizontal-situation-indicator heading="45.0" heading-select="0.0"></horizontal-situation-indicator>
```

```html
<h4>HSI with NAV1 tuned to ADF</h4>

<horizontal-situation-indicator heading="45.0" heading-select="0.0"
  nav1-bearing="10.0"></horizontal-situation-indicator>
```


```html
<h4>HSI with NAV2 tuned to VOR</h4>

<horizontal-situation-indicator heading="45.0" heading-select="0.0"
  nav2-course="0.0" nav2-deviation="0.0" nav2-to="-1"></horizontal-situation-indicator>
```

Properties
----------

Properties can be set on initialization via HTML attributes, or select the DOM node via JavaScript and setting the properties of the DOM node.

| Name                   | Type        | Default | Description                |
| ----------------       | ----------- | ------- | -------------------------- |
| `heading`              | `degree`    | `null`  |                            |
| `heading-select`       | `degree`    | `null`  |                            |
| `nav1-course`          | `degree`    | `null`  | Hidden if `null`.          |
| `nav1-deviation`       | `deviation` | `null`  | Only visible when `nav1-course` is set. |
| `nav1-bearing`         | `degree`    | `null`  | This will also set `nav1-to` and `nav1-deviation` accordingly. |
| `nav1-to`              | `switch`    | `null`  | If set to `1` will show the TO-flag, if set to `-1` will show the FROM-flag. |
| `nav2-course`          | `degree`    | `null`  |                            |
| `nav2-deviation`       | `deviation` | `null`  | Only visible when `nav2-course` is set. |
| `nav2-bearing`         | `degree`    | `null`  | This will also set `nav2-to` and `nav2-deviation` accordingly. |
| `nav2-to`              | `switch`    | `null`  | If set to `1` will show the TO-flag, if set to `-1` will show the FROM-flag. |

Special types:

| Type        | Description |
| ----------- | ----------- |
| `degree`    | A float number with 0 ≥ `degree` > 360. `degree` less or greater than this value will be converted to a corresponding value in this range, e.g. `-1.0` will be `359.0`. |
| `deviation` | A float number with `deviation` > 0 showing the the chosen course to be right / above, `deviation` < 0  showing the the chosen course to be left / below. A value of `5.0` will move the marker to the first dot, a value of `10.0` will move the marker to the second dot. Values out of range will be capped to the range. |

Methods
-------

There are no public methods.

Events
------

There are no events.

Styling
-------

```css
horizontal-situation-indicator {
  --background-color: black;
  --nav1-color: magenta;
  --nav2-color: cyan;
}
```

Browser compatibility
---------------------

See [compatibility chart](https://caniuse.com/#search=web%20components):

* Google Chrome 67+
* Mozilla Firefox 63+
* Microsoft Edge 79+
* Opera 64+

Development
-----------

* Run `npm run build` to copy files from `src` directory into main JavaScript file.
* Run `npm run serve` to launch a development web server.

Status
-------

![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/fboes/webcomponent-hsi.svg)
![GitHub](https://img.shields.io/github/license/fboes/webcomponent-hsi.svg)

Legal stuff
-----------

Author: [Frank Boës](https://3960.org)

Copyright & license: See [LICENSE.txt](LICENSE.txt)
