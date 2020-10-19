import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserDetails } from "../core/models/UserDetails";
import { UsersService } from "../core/services/users.service";

@Component({
  selector: "UserDetailComponent",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"],
})
export class UserDetailComponent implements OnInit {
  title: string = "User detail";
  id: number;
  userDetails: UserDetails;

  constructor(private service: UsersService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params["id"]));
    this.getUser();
  }

  getUser(): void {
    this.service.getOneUser(this.id).subscribe((res) => {
      console.log(res);
      this.userDetails = {
        ...res.data,
        groups: res.data.data.map((group) => {
          return {
            code: group.code,
            groupName: group.groupName.replace("AMZON", "AMAZON"),
            role: group.rol,
            permissions: group.permisions.join(", "),
          };
        }),
      };
      console.log(this.userDetails)
    });
  }
}
