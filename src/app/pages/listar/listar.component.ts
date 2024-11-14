import { Contato } from '../../models/contato';
import { ContatosService } from './../../services/contatos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  constructor(
    private ContatosService: ContatosService
  ){}

  getContatos(): Contato[] {
    return this.ContatosService.recuperarContatos();
  }
}
