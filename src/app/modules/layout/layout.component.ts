import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  imports: [RouterOutlet, SidebarComponent, FooterComponent],
})
export class LayoutComponent {}
