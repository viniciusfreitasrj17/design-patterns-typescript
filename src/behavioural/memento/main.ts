import { Caretaker } from './caretaker';
import { ImageEditor } from './image-editor';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const caretaker = new Caretaker(imageEditor);

caretaker.backup();
imageEditor.convertFormatTo('gif');
caretaker.backup();
imageEditor.convertFormatTo('jpeg');
caretaker.backup();
imageEditor.convertFormatTo('jpg');

console.log(imageEditor);
caretaker.undo();
console.log(imageEditor);
caretaker.undo();
console.log(imageEditor);
caretaker.undo();
console.log(imageEditor);
caretaker.undo();
console.log(imageEditor);
