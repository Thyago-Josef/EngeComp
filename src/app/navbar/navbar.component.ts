import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuItems = [
    {
      title: 'Home', url: '/home',

    },
    {
      title: 'Artigos',
      links: [
        { label: 'Quimica', url: '/quimica' },
        { label: 'Fisica', url: '/fisica' },
        { label: 'Matematica', url: '/matematica' },
      ],
      isOpen: false
    },
    {
      title: 'Ciência no dia',
      links: [
        { label: 'Link 4', url: '/link4' },
        { label: 'Link 5', url: '/link5' },
        { label: 'Link 6', url: '/link6' },
      ],
      isOpen: false
    },
    {
      title: 'Notícias',
      links: [
        { label: 'Link 4', url: '/link4' },
        { label: 'Link 5', url: '/link5' },
        { label: 'Link 6', url: '/link6' },
      ],
      isOpen: false
    },
    {
      title: 'Contatos',
      links: [
        { label: 'Link 4', url: '/link4' },
        { label: 'Link 5', url: '/link5' },
        { label: 'Link 6', url: '/link6' },
      ],
      isOpen: false
    }
  ];
  toggleMenu(index: number): void {
    this.menuItems[index].isOpen = !this.menuItems[index].isOpen;
  }
}
