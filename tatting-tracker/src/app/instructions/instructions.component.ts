import { Component, OnInit } from '@angular/core';
import { Instructions } from '../instructions';
@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
	instructions: Instructions = {
		id: 1,
		name: '5 petaled flower',
		steps:'3-2-2--2-2-3.\n3+2-2--2-2-3.\n3+2-2--2-2-3.\n3+2-2--2-2-3.\n3+2-2--2-2+3.\n(join to first picot on first petal)',
		stepList: []
  }
  constructor() { }

  ngOnInit(): void {
  	this.splitSteps();
  }
  splitSteps() {
  	this.instructions.stepList = this.instructions.steps.split(`\n`);
  }

}
