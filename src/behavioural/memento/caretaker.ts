import { ImageEditor } from './image-editor';
import { MementoProtocol } from './memento-protocol';

export class Caretaker {
  private mementos: MementoProtocol[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    const backupSave = this.imageEditor.save();
    console.log(
      `Backup: salvando o estado do ImageEditor ${backupSave.getName()}`,
    );
    this.mementos.push(backupSave);
  }

  undo(): void {
    const memento = this.mementos.pop();

    if (!memento) {
      console.log(`Backup: no mementos`);
      return;
    }

    this.imageEditor.restore(memento);
    console.log(`Backup: ${memento.getName()} foi restaurado com sucesso.`);
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}
