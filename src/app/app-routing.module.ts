import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodayComponent} from "./today/today.component";
import {DetailsComponent} from "./details/details.component";
import {SoonComponent} from "./soon/soon.component";
import {ProtectUnsavedChanges} from "./protect-unsaved-changes";

const canDeactivate = (component: ProtectUnsavedChanges) => {
  if (component.hasUnsavedChanges()) {
    return confirm(`Discard changes from ${component.unsavedChangesSource}?`);
  }
  return true;
};

const routes: Routes = [{
  path: 'today',
  component: TodayComponent,
  canDeactivate: [canDeactivate],
  children: [{
    path: ':id',
    component: DetailsComponent,
    canDeactivate: [canDeactivate]
  }]
},
  {
    path: 'soon',
    component: SoonComponent,
    canDeactivate: [canDeactivate],
    children: [{
      path: ':id',
      component: DetailsComponent,
      canDeactivate: [canDeactivate]
    }]
  },
  {
    path: '**',
    redirectTo: 'today/666'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
