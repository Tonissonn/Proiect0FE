import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilizatorService} from "../utilizator.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addGrup = new FormGroup({
    nume: new FormControl(''),
    password: new FormControl(''),
    salar: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private serv: UtilizatorService,
    private router: Router,
  ) {
  }

  homePage(): void {
    this.router.navigateByUrl("");
  }

  submitForm(): void {
    // console.warn(this.addGrup.value.nume);
    this.serv.addUser(this.addGrup.value.nume, this.addGrup.value.password, this.addGrup.value.salar).subscribe((data) => console.log(data));
    this.homePage();
  }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.nume = params['name'];
    // });
  }

}
