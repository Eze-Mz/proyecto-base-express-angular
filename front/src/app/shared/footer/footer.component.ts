import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @HostBinding('class.fixed-bottom') get fixed() { return this.isFixed; }
  @Input() isFixed = true;
}
