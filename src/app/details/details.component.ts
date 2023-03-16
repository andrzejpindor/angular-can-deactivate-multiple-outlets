import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";
import {ProtectUnsavedChanges} from "../protect-unsaved-changes";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements ProtectUnsavedChanges {

  public unsavedChangesSource = 'details';
  public data$: Observable<unknown>;

  constructor(private route: ActivatedRoute) {
    this.data$ = route.params.pipe(map(p => p['id']));

  }

  public hasUnsavedChanges(): boolean {
    return true;
  }
}
