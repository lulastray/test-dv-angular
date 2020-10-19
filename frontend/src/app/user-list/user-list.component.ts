import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "../core/services/users.service";
import { User } from "../core/models/User";

@Component({
  selector: "UserList",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  title: String = "All users";
  users: User[];

  constructor(private service: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
    console.log("users", this.users);
  }

  private getUsers(): void {
    this.service.getUsers().subscribe(
      (res) =>
        (this.users = res.data.map((user) => {
          return {
            ...user,
            permissions: user.permissions.join(", "),
          };
        }))
    );
  }

  private goToUserDetail(id: number): void {
    this.router.navigate([`/${id}`]);
  }
}
