import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codevisualization';
  beforesort=genRandomArray(10);
  aftersort=bubbleSort(this.beforesort);
}

function genRandomArray(arrLength: number) {
  return [...Array(arrLength)].map(() =>
    Math.floor(Math.random() * (100 * arrLength))
  );
}

function bubbleSort(arr: number[]) {
  const cpyArr = [...arr];
  const { length } = cpyArr;

  const swap = (a: number, b: number): void => {
    cpyArr[a] = cpyArr[a] + cpyArr[b];
    cpyArr[b] = cpyArr[a] - cpyArr[b];
    cpyArr[a] = cpyArr[a] - cpyArr[b];
  };

  for (let x = 0; x < length - 1; x++)
    for (let y = 0; y < length - 1 - x; y++) {
      const [currentIndex, nextIndex] = [y, y + 1];
      if (cpyArr[currentIndex] > cpyArr[nextIndex])
        swap(currentIndex, nextIndex);
    }

  return cpyArr;
}

//console.log(bubbleSort(genRandomArray()));
