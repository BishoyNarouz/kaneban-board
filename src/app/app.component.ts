import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kaneban-board';
  inProgress = [];
  underTesting = [];
  completed = [];
  cards = [
    {
      id: 1,
      name: 'kaneban board style',
      status: 'inProgress',
      description: 'apply style to kaneban board',
      date: '25/3/2020'
    },
    {
      id: 2,
      name: 'cards array api',
      status: 'inProgress',
      description: 'create getCards api',
      date: '27/3/2020'
    },
    {
      id: 3,
      name: 'display cards',
      status: 'completed',
      description: 'display cards in specific column',
      date: '30/3/2020'
    },
    {
      id: 4,
      name: 'test api',
      status: 'ready-test',
      description: 'display cards in specific column',
      date: '30/3/2020'
    },
    {
      id: 5,
      name: 'tes design',
      status: 'ready-test',
      description: 'display cards in specific column',
      date: '30/3/2020'
    }
  ]

  ngOnInit() {
    this.justifyContent();
  }

  justifyContent() {
    for (let card of this.cards) {
      if (card.status === 'inProgress') {
        this.inProgress.push(card);
      } else if (card.status === 'ready-test') {
        this.underTesting.push(card);
      } else if (card.status === 'completed') {
        this.completed.push(card);
      }
    }
  }

  onDrop(event: CdkDragDrop<object[]>) {
    console.log(event.container)
    console.log(event.previousIndex)
    console.log(event.currentIndex)

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}

