import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedMenu: string = '';
  showArrowIndicator: boolean = true;
  arrowLeftPosition: string = '0px';
  constructor() { }

  ngOnInit() {
    const intialPosition = document.getElementsByClassName('menu-list')[0].getBoundingClientRect();
    this.arrowLeftPosition = intialPosition + 'px';
  }

  selectNavMenu(e, menuName): void {
    this.showArrowIndicator = false;
    this.selectedMenu = menuName;
    const boundaries = e.target.getBoundingClientRect();
    const leftPos = boundaries.x + (boundaries.width / 2) - 15;
    this.arrowLeftPosition = leftPos + 'px';
  }
}
