import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  readonly theme = signal<'light' | 'dark'>(
    document.documentElement.dataset['theme'] === 'light' ? 'light' : 'dark',
  );

  toggleTheme(): void {
    const next = this.theme() === 'dark' ? 'light' : 'dark';

    this.theme.set(next);
    document.documentElement.dataset['theme'] = next;
    localStorage.setItem('theme', next);
  }
}
