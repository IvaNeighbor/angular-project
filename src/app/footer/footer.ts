import { Component } from '@angular/core';
import { RouterLinkActive } from "@angular/router";
import { TopMenu } from "../header/top-menu/top-menu";

@Component({
  selector: 'app-footer',
  imports: [RouterLinkActive, TopMenu],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

}
