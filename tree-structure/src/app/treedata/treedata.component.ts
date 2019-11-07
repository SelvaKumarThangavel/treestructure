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
  public isChildrenAvailable: boolean = null;

  constructor() {
  }

  ngOnInit() {
  }

  click(rowData) {
    for (var k = 0; k < this.parentData.length; k++) {
      var count = 0;
      console.log("k",this.parentData[k])
      for (var s = 0; s < this.parentData[k].children.length; s++) {
        var d = this.parentData[k].children[s]
        if (d.children != undefined) {
          for (var q = 0; q < d.children.length; q++) {
            var t = d.children[q]
            //t = t.children[q]
            if(t.children != undefined){
              for(var m= 0; m < t.children.length; m ++){
                var child = t.children[m].data.name;
                if (child == rowData.name || count > 0) {
                  this.isChildrenAvailable = false
                  count++;
                }
                else {
                  this.isChildrenAvailable = true
                }
              }
            }else{
              var child = t.data.name;
              if (child == rowData.name || count > 0) {
                this.isChildrenAvailable = false
                count++;
              }
              else {
                this.isChildrenAvailable = true
              }
            }
          }
        } else {
          var child = d.data.name;
          if (child == rowData.name || count > 0) {
            this.isChildrenAvailable = false
            count++;
          }
          else {
            this.isChildrenAvailable = true

          }
          /* if(d.name === undefined){
            var child = d.data.name;
            if (child == rowData.name || count > 0) {
              this.isChildrenAvailable = false
              count++;
            }
            else {
              this.isChildrenAvailable = true
  
            }
          }else if(d.data.name === undefined){
            var child = d.data.name;
            if (child == rowData.name || count > 0) {
              this.isChildrenAvailable = false
              count++;
            }
            else {
              this.isChildrenAvailable = true
  
            }
          } */
          
        }
      }
    }
  }

  /* click(rowData) {
    for (var k = 0; k < this.parentData.length; k++) {
      var count = 0;
      for (var s = 0; s < this.parentData[k].children.length; s++) {
        var d = this.parentData[k].children[s]
        if (d.children != undefined) {
          for (var q = 0; q < d.children.length; q++) {
            //console.log(d.children)
            var child = d.children[q].data.name;
            if (child == rowData.name || count > 0) {
              this.isChildrenAvailable = false
              count++;
            }
            else {
              this.isChildrenAvailable = true
            }
          }
        } else {
          var child = d.data.name;
          if (child == rowData.name || count > 0) {
            this.isChildrenAvailable = false
            count++;
          }
          else {
            this.isChildrenAvailable = true

          }
        }
      }
    }
  } */
}
