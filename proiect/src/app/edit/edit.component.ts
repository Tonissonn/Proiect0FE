import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilizatorService} from "../utilizator.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private userId: number = 0;
  editGrup = new FormGroup({
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
    this.serv.updateUser(this.userId, this.editGrup.value.nume, this.editGrup.value.password, this.editGrup.value.salar).subscribe((data) => console.log(data));
    this.homePage();
  }

  public getOneUser(idUser: number): void {
    console.warn("ia utilizator din lista")
    this.serv.getUser(idUser).subscribe((data) => {
      this.editGrup.patchValue({
        nume: data.nume,
        password: data.password,
        salar: data.salar,
      });
      console.warn(data.nume);
    });
  }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.getOneUser(this.userId);
  }

}
