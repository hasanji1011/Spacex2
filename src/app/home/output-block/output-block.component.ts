import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-block',
  templateUrl: './output-block.component.html',
  styleUrls: ['./output-block.component.scss']
})
export class OutputBlockComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log("Ouput Block:", this.data)
  }

}
