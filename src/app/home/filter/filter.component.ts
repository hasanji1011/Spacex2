import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProgramsService } from './../../services/programs.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() programsData = new EventEmitter<any>();
  yearArray: any;
  queryParams: any = {};
  filterString: string = '';
  constructor(private programs: ProgramsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.yearArray = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filterString = '';
      if (Object.keys(params).length) {
        Object.keys(params).map(param => {
          this.filterString += `&${param}=` + params[param];
          this.queryParams[param] = params[param];
        })
        this.getData();
      }
      else {
        this.programs.getPrograms().subscribe((res) => {
          this.programsData.emit(res);
        })
      }
    });
  }

  getData() {
    this.programs.getFilterProgram(this.filterString).subscribe(res => {
      this.programsData.emit(res);
    })
  }

  changeEvent($event) {
    let { name, value } = $event.target;
    this.queryParams[name] = value;
    console.log(this.queryParams);
    this.router.navigate(
      [''],
      {
        relativeTo: this.activatedRoute,
        queryParams: this.queryParams,
        queryParamsHandling: 'merge'
      });
  }

}
