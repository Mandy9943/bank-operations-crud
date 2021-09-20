import txns from "../data";
import { data } from "../types/data.types";

const dataNameForLocalStorage = "operations";

class DataService {
  private operations: data[];
  constructor() {
    const data = localStorage.getItem(dataNameForLocalStorage);
    if (data !== null) {
      this.operations = JSON.parse(data);
    } else {
      this.operations = txns;
    }
    this.updateOperations();
  }
  public getOperations(): data[] {
    const oprationsFromLocalStorage = localStorage.getItem(
      dataNameForLocalStorage
    );
    if (oprationsFromLocalStorage === null) {
      this.operations = [];
    } else {
      this.operations = JSON.parse(oprationsFromLocalStorage);
    }
    return this.operations;
  }

  public addOperation(operation: data): void {
    this.operations.unshift(operation);
    this.updateOperations();
  }

  public deleteOperation(operation: data): void {
    this.operations = this.operations.filter(
      (o) =>
        !(
          o.amount === operation.amount &&
          o.balance === operation.balance &&
          o.date === operation.date &&
          o.description === operation.description &&
          o.type === operation.type
        )
    );
    this.updateOperations();
  }
  public editOperation(operation: data, index: number): void {
    if (index >= 0) {
      this.operations[index] = operation;
    }

    this.updateOperations();
  }

  private updateOperations(): void {
    localStorage.setItem(
      dataNameForLocalStorage,
      JSON.stringify(this.operations)
    );
  }
}

export default DataService;
