import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { AboutComponent } from '../admin/about/about.component';
import { MyProfileComponent } from '../admin/my-profile/my-profile.component';
import { DashboardService } from '../dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent
  ],
  exports:[DashboardComponent, AboutComponent, MyProfileComponent],
  imports: [
    CommonModule
  ],
  providers:[DashboardService]
})
export class AdminModule { }
