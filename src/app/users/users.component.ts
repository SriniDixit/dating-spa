import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { AppUser } from '../models/entities/app-user';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  userService=inject(UserService);
  users!:AppUser[];
  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe({
      next:(_data)=>{
        this.users=_data;
      },
      error:()=>{
        console.error("Error occured while fetching the user details");
      },
      complete:()=>console.info("Fetched the users")
    })

  }

}
