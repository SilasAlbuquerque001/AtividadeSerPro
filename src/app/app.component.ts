import { Component } from '@angular/core';
import { ContatosService } from './services/contatos.service';
import { Contato } from './models/contato';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'porto-digital-agenda';
  constructor(
    private contatosService: ContatosService
  ) {}
    getContatos(): Contato[] {
      return this.contatosService.recuperarContatos();
    }
}
