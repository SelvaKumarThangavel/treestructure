import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from '../common/TreeNode'


@Component({
  selector: 'app-treedata',
  templateUrl: './treedata.component.html',
  styleUrls: ['./treedata.component.css']
})
export class TreedataComponent implements OnInit {

  @Input() public parentData: any[] = [];
  @Input() public cols: any[] = [];
  @Input() public cols1: any[] = [];
  @Input() public leaf: boolean;

  /* public amount: any[] = [];

  amountList = [
    { label: '10000', value: '10000' },
    { label: '45120', value: '45120' },
    { label: '98574', value: '98574' },
    { label: '85000', value: '85000'}
  ]; */

  constructor() {
  }

  ngOnInit() {
  }

  nodeSelect(event){
    console.log(event)
  }

}
