import {Component, OnInit} from '@angular/core';
import {ListItemsService} from "../../service/listitems.service";



@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss'],
  providers:[ListItemsService],
})
export class GridListComponent implements OnInit{

  // listItems:item[] = [];

  constructor(private service: ListItemsService) {

  }

  ngOnInit() {
    // this.listItems = this.service.getListImes();
  }

}
