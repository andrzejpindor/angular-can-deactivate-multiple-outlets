export interface ProtectUnsavedChanges {
  unsavedChangesSource: string;
  hasUnsavedChanges(): boolean;
}
