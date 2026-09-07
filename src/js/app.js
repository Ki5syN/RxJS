import { ajax } from 'rxjs/ajax';
import { exhaustMap, catchError } from 'rxjs/operators';
import { interval, of } from 'rxjs'; // Добавили импорт 'of'
import render from './messageWidget';

const stream$ = interval(4000).pipe(
  exhaustMap(() => {    
    return ajax.getJSON('https://rxjs-for-backend.onrender.com/messages/unread').pipe(
      catchError(err => {        
        console.error('Ошибка бэкенда:', err);
        return of({ messages: [] });
      })
    );
  })
);

stream$.subscribe(response => {
  if (response && response.messages) {
    render(response.messages);
  }
})