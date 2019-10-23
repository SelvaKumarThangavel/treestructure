import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/components/common/treenode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //occupationList: any[];
  //categoryList: any[];
  public selectedOccupation: any[] = [];
  public selectedOccupationFinal: any[] = [];
  public selectedCategory: any[] = [];
  public selectedCategory1: any[] = [];
  public selectedCategorySubChildren: any[] = [];
  //below block can be enabled for subchildren
  public selectedAge: any[] = [];
  public selectedAge1: any[] = [];
  public selectedHeader: any[] = [];
  public leaf: boolean = false;

  //To show the tree table based on button click
  public show: boolean = false;
  public buttonName: any = 'Show';

  //To communicate/send data to other component
  public selectedData: any[] = [];
  public headerCols: any[] = [];
  public headerCols1: any[] = [];

  selectedItem: any[];

  headerList = [
    { label: 'Name', value: 1, name: 'name' },
    { label: 'Value', value: 2, name: 'value' },
    { label: 'Header 3', value: 3, name: 'header3' },
    { label: 'Header 4', value: 4, name: 'header4' },
    { label: 'Header 5', value: 5, name: 'header5' }
  ];

  headerList1 = [
    { label: 'Name', value: 1, name: 'name' }
  ];

  occupationList = [
    { label: 'Occupation 1', value: 1 },
    { label: 'Occupation 2', value: 2 },
    { label: 'Occupation 3', value: 3 },
    { label: 'Occupation 4', value: 4 }
  ];

  categoryList = [
    { label: 'Category 1', value: 1 },
    { label: 'Category 2', value: 2 },
    { label: 'Category 3', value: 3 }
  ];
  //below block can be enabled for subchildren - starts
  ageList = [
    { label: 'Below 18', value: 1 },
    { label: '18 to 29', value: 2 },
    { label: '30 to 59', value: 3 },
    { label: 'Above 60', value: 4 }
  ];
  //below block can be enabled for subchildren - ends


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  formdata() {

    //to add or remove the column header dynamically in the table
    for (let cols of this.headerList) {
      for (let i = 0; i < this.selectedHeader.length; i++) {
        if (cols.value == this.selectedHeader[i]) {
          this.headerCols.push({ header: cols.label, field: cols.name })
        }
      }
    }
    //console.log(this.headerCols);

    for (let cols1 of this.headerList1) {
      this.headerCols1.push({ header: cols1.label, field: cols1.name })
    }
    //console.log(this.headerCols1);

    if (this.selectedOccupation.length > 0) {
      for (let occ of this.occupationList) {
        for (let i = 0; i < this.selectedOccupation.length; i++) {
          if (occ.value == this.selectedOccupation[i]) {
            this.selectedOccupationFinal.push({ name: occ.label})
          }
        }
      }
    }
    console.log(this.selectedOccupationFinal);

    if (this.selectedOccupation.length > 0 && this.selectedCategory.length > 0 && this.selectedAge.length > 0) {
      for (let catlist of this.categoryList) {
        for (let i = 0; i < this.selectedCategory.length; i++) {
          if (catlist.value == this.selectedCategory[i]) {
            this.selectedCategory1.push({
              name: catlist.label
            })
          }
        }
      }
    }else if(this.selectedOccupation.length > 0 && this.selectedCategory.length > 0){
      for (let catlist of this.categoryList) {
        for (let i = 0; i < this.selectedCategory.length; i++) {
          if (catlist.value == this.selectedCategory[i]) {
            this.selectedCategory1.push({data:{
              name: catlist.label
            }})
          }
        }
      }
    }else{
      for (let catlist of this.categoryList) {
        for (let i = 0; i < this.selectedCategory.length; i++) {
          if (catlist.value == this.selectedCategory[i]) {
            this.selectedCategory1.push({
              name: catlist.label
            })
          }
        }
      }
    }
    //console.log(this.selectedCategory1);
    
    if (this.selectedAge.length > 0) {
      for (let age of this.ageList) {
        for (let i = 0; i < this.selectedAge.length; i++) {
          if (age.value == this.selectedAge[i]) {
            this.selectedAge1.push({ data: { name: age.label } })
          }
        }
      }
    }
    //console.log(this.selectedAge1);

    //forming json by selecting all 3 fields
    if(this.selectedOccupationFinal.length > 0  && this.selectedCategory1.length > 0 && this.selectedAge1.length > 0){
      for (let i = 0; i < this.selectedCategory1.length; i++) {
        this.selectedCategorySubChildren.push({ data: this.selectedCategory1[i], children: this.selectedAge1 })
      }
      for (let m = 0; m < this.selectedOccupationFinal.length; m++) {
        this.selectedData.push({ data: this.selectedOccupationFinal[m], children: this.selectedCategorySubChildren })
      }
    }
    //forming json by selecting 1 and 2 field
    else if(this.selectedOccupationFinal.length > 0  && this.selectedCategory1.length > 0){
      for (let m = 0; m < this.selectedOccupationFinal.length; m++) {
        this.selectedData.push({ data: this.selectedOccupationFinal[m], children: this.selectedCategory1 })
      }
    }
    //forming json by selecting 2 and 3 field
    else if(this.selectedCategory1.length > 0 && this.selectedAge1.length > 0){
      for (let i = 0; i < this.selectedCategory1.length; i++) {
        this.selectedData.push({ data: this.selectedCategory1[i], children: this.selectedAge1 })
      }
    }
    //forming json by selecting 1 and 3 field
    else if(this.selectedOccupationFinal.length > 0 && this.selectedAge1.length > 0){
      for (let m = 0; m < this.selectedOccupationFinal.length; m++) {
        this.selectedData.push({ data: this.selectedOccupationFinal[m], children: this.selectedAge1 })
      }
    }
    console.log(this.selectedData)
  }

  getSelectedData() {

    this.formdata();

    this.show = !this.show;
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
    //this.router.navigate(['/treegrid']);
  }
}
