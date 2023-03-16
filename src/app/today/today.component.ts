import { Component } from '@angular/core';
import {ProtectUnsavedChanges} from "../protect-unsaved-changes";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements ProtectUnsavedChanges {
  unsavedChangesSource = 'today';

  hasUnsavedChanges(): boolean {
    return true;
  }

}
