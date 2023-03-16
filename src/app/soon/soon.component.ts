import {Component} from '@angular/core';
import {ProtectUnsavedChanges} from "../protect-unsaved-changes";

@Component({
  selector: 'app-soon',
  templateUrl: './soon.component.html',
  styleUrls: ['./soon.component.scss']
})
export class SoonComponent implements ProtectUnsavedChanges {
  unsavedChangesSource = 'soon';

  hasUnsavedChanges(): boolean {
    return false;
  }

}
