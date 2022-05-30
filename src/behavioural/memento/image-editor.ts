import { ConcreteMemento } from './concrete-memento';
import { MementoProtocol } from './memento-protocol';

// Originator
export class ImageEditor {
  constructor(private filePath: string, private fileFormat: string) {}

  convertFormatTo(format: 'png' | 'jpg' | 'jpeg' | 'gif'): void {
    this.fileFormat = format;
    this.filePath = this.filePath.split('.').slice(0, -1).join('');
    this.filePath += '.' + format;
  }

  save(): Readonly<MementoProtocol> {
    const date = new Date();
    return new ConcreteMemento(
      date.toISOString(),
      date,
      this.filePath,
      this.fileFormat,
    );
  }

  restore(memento: MementoProtocol): void {
    const concreteMemento = memento as ConcreteMemento;
    this.filePath = concreteMemento.getFilePath();
    this.fileFormat = concreteMemento.getFileFormat();
  }
}
