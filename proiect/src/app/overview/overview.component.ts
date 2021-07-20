import {Component, OnInit} from '@angular/core';
import {Utilizator} from "../utilizator";
import {UtilizatorService} from "../utilizator.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {MatDialog} from '@angular/material/dialog';
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  public users: Utilizator[] = [];

  constructor(
    private userService: UtilizatorService,
    private router: Router,
    private dialog: MatDialog,
  ) {
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (newUsers: Utilizator[]) => {
        this.users = newUsers;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  goToEdit(userId: any) {
    this.router.navigateByUrl("edit/" + userId);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  deleteAction(userId: number): void {
    this.userService.deleteUser(userId).subscribe((data) => console.log(data),this.getUsers);
    this.users = [];
    this.getUsers();
    //console.log(this.users);
    //console.log(this.users);
  }

  openDialog(userId: number) {
    let dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'true') {
        this.deleteAction(userId);
      }
    })
  }
}
