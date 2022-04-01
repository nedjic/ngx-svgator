# ngx-svgator
Angular component to add svgator.com animated SVG to the Angular application

## Usage

### Step 1
Go to svgator.com,  export the animated SVG with JavaScript as the animation type.

### Step 2
Store downloaded svg file in the application `src/assets` directory 

### Step 3
Install ngx-svgator package from NPM by running `npm install @nedjic/ngx-svgator`

### Step 4
Import `NgxSvgatorModule` into your `app.module.ts`
```ts
import { NgxSvgatorModule } from '@nedjic/ngx-svgator';

@NgModule({
  ...,
  imports: [
    NgxSvgatorModule
  ],
  ...
})
export class AppModule { }
```

### Step 5
Show svgator animated SVG by placing `svgtr-player` tag in your template file and provide path to your SVG file in `src` attribute
```html
...

<svgtr-player src="assets/path-to-your-animated.svg"></svgtr-player>

...

```
