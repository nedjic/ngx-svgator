import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'svgtr-player',
  template: '',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() src?: string;

  constructor(
    private _http: HttpClient,
    private _elem: ElementRef,
    private _renderer: Renderer2 ) {}

  ngOnInit() {
    if (this.src) {
      this._http.get(this.src, { responseType: 'text' }).subscribe( html => {

        // Check if string match svgator SVG format
        html = html.trim()
        const tagStart = '<svg';
        const tagEnd = '</script></svg>'
        const scriptStart = '<script><![CDATA[';
        const scriptEnd = ']]></script>';

        const sriptStartIndex = html.indexOf(scriptStart) + scriptStart.length;
        const scriptEndIndex = html.indexOf(scriptEnd);

        if ( html.indexOf(tagStart) !== 0 ||
             html.indexOf(tagEnd, html.length - tagEnd.length) < 0 ||
             sriptStartIndex < 0 ||
             scriptEndIndex < 0 ) {
          this._elem.nativeElement.innerHTML = 'Error parsing provided SVG file!';
          console.error('This is not svgator svg file');
          return;
        }

        // Set styles for the component
        const viewBoxStartIndex = html.indexOf('viewBox="');
        const viewBoxEndIndex = html.indexOf('"', viewBoxStartIndex + 'viewBox="'.length);
        const viewBox = html.slice(viewBoxStartIndex + 'viewBox="'.length, viewBoxEndIndex)

        const svgWidth = viewBox.split(' ')[2];
        const svgHeight = viewBox.split(' ')[3];

        this._renderer.setStyle(this._elem.nativeElement, 'display', 'inline-block');
        this._renderer.setStyle(this._elem.nativeElement, 'width', `${svgWidth}px`);
        this._renderer.setStyle(this._elem.nativeElement, 'height', `${svgHeight}px`);

        const scriptCode = html.substring(sriptStartIndex, scriptEndIndex);
        const svg = html.replace(scriptCode, '');

        // Inject svg content into the component
        this._elem.nativeElement.innerHTML = svg;

        // Execute player script
        Function(scriptCode)();
      })
    }
  }
}
