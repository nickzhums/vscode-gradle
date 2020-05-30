import * as vscode from 'vscode';

export abstract class BaseStore implements vscode.Disposable {
  private readonly _onDidChange: vscode.EventEmitter<
    null
  > = new vscode.EventEmitter<null>();
  public readonly onDidChange: vscode.Event<null> = this._onDidChange.event;

  protected fireOnDidChange(): void {
    this._onDidChange.fire(null);
  }

  public dispose(): void {
    this._onDidChange.dispose();
  }
}
