import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
    console.log("hiiii");
  }
  CreateNewRequest(){
    this.router.navigate(['/Graph']);
  }

}
