import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventEmitter } from "protractor";
import { User } from "../core/models/User";
import { UsersService } from "../core/services/users.service";

@Component({
  selector: "UserAdd",
  templateUrl: "./user-add.component.html",
  styleUrls: ["./user-add.component.scss"],
})
export class UserAddComponent implements OnInit {

  user: User = new User();

  permissions = {
    create: false,
    update: false,
    delete: false,
  };
  constructor(private service: UsersService, private router: Router) {}

  ngOnInit() {}

  private createUser(): void {
    this.user.permissions = [];
    for (let permission in this.permissions) {
      if (this.permissions[permission]) {
        this.user.permissions.push(this.capitalize(permission));
      }
    }
    this.service.createUser(this.user).subscribe((res) => {
      console.log(res)})
      // this.refreshUsers});
  }

  private capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  
}
