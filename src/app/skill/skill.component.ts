import { Component, Input, OnInit } from '@angular/core';
import { Skills } from 'src/models/skills.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skillDev:any=[];

  constructor() { }

  ngOnInit(): void {
  }

}
