import { Component, Input, OnInit } from '@angular/core';
import { Developers } from 'src/models/developers.model';
import { Skill } from 'src/models/skill.model';

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
