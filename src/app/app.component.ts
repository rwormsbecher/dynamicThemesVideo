import { Component, OnInit, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  theme = signal<string>('blue-theme');

  constructor() {
    effect(() => {
      document.body.className = this.theme();
    });
  }

  changeTheme(theme: string) {
    this.theme.set(theme);
  }
}
