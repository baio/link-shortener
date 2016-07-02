import { EventEmitter } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

export const subjectDebounce = <T>(subject: Subject<T>, dueTime: number, action : (T) => void): void => {

    let sub = subject.debounceTime(dueTime).distinctUntilChanged().subscribe(p => action(p));
    let sub1 = subject.subscribe(null, null, () => {
        sub.unsubscribe();
        sub1.unsubscribe();
    })
}

export function getDebounce<T>(dueTime: number, action : (T) => void) {
  return (obs: Observable<T>) : Observable<T> =>
    obs.debounceTime(dueTime).distinctUntilChanged().do(p => action(p))
};


