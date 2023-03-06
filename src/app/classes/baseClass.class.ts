export class BaseClass {
  
  public isBusy: boolean = false;
  public hasError: boolean = false;
  public errorMessage: String = '';

  public setLoading(busy: boolean): void {
    this.isBusy = busy;
  }

  public setError(isError: boolean, errorMsg: string): void {
    this.hasError = isError;
    this.errorMessage = errorMsg;
    this.setLoading(false);
  }
}
