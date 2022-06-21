import { Component, OnInit } from '@angular/core';
import { Developers } from 'src/models/developers.model';
import { Skill } from 'src/models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  skillList: Skill[] = [
    new Skill("Binary",999, "MasterOfDigit"),
  ];
  dev: Developers = new Developers("Turing",
    "Alan",
    42,
    "Male",
    "Alan Mathison Turing, né le 23 juin 1912 à Londres et mort le 7 juin 1954 à Wilmslow, est un mathématicien et cryptologue britannique, auteur de travaux qui fondent scientifiquement l'informatique.",
    this.skillList,
  )

  constructor() { }

  ngOnInit(): void {
    console.log("hello i'm in dev comp",this.dev)
  }
}
