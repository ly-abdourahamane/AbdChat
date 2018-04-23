import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'comp-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [
    {
      id: 1,
      name: 'Algorithmique',
      path: '/algorithmique',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet,' +
      ' consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum ' +
      'dolor sit amet, consectetur adipisicing elit'
    },
    {
      id: 2,
      name: 'Modelisation Objet',
      path: '/modelisation-objet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet,' +
      ' consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum ' +
      'dolor sit amet, consectetur adipisicing elit'    },
    {
      id: 3,
      name: 'TLC',
      path: 'tlc',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet,' +
      ' consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum ' +
      'dolor sit amet, consectetur adipisicing elit'    },
    {
      id: 4,
      name: 'Mapi',
      path: '/mapi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet,' +
      ' consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum ' +
      'dolor sit amet, consectetur adipisicing elit'    },
    {
      id: 5,
      name: 'Angular',
      path: '/angular',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet,' +
      ' consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum ' +
      'dolor sit amet, consectetur adipisicing elit'    },
    {
      id: 6,
      name: 'Java EE',
      path: '/java-ee',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet,' +
      ' consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum ' +
      'dolor sit amet, consectetur adipisicing elit'    },
    {
      id: 7,
      name: 'Comflex',
      path: '/comflex',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet,' +
      ' consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum ' +
      'dolor sit amet, consectetur adipisicing elit'    },
    {
      id: 8,
      name: 'Prog parallèle',
      path: 'programmation-parallele',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet,' +
      ' consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum ' +
      'dolor sit amet, consectetur adipisicing elit'    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
