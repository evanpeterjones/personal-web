export class StorageResource {
  public getResource () {
    if (!openRequest) {
      openRequest = indexedDB.open(name, version)
    }

    return this.openRequests
  }

  public save (value) {
    
  };

  public get (index) {

  };
}