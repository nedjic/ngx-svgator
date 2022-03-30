import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { PlayerComponent } from './components/player/player.component';



@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    PlayerComponent
  ]
})
export class NgxSvgatorModule { }
