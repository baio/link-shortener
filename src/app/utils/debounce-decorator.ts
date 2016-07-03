import { Subject } from 'rxjs/Subject';

export function debounce(dueTime: number) {

    return function (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) {

        console.log(target, propertyKey, descriptor);

        let method = descriptor.value;
        let targetDestroy = target.ngOnDestroy;

        let subj = new Subject();
        let debounced = subj.debounceTime(dueTime).distinctUntilChanged();

        let sub = debounced.subscribe((val: any) => method.apply(val.that, val.args));

        target.ngOnDestroy = function () {
            sub.unsubscribe();
            if (targetDestroy) {
                targetDestroy();
            }
        }

        descriptor.value = function() {
            subj.next({that: this, args: arguments});
        }
    };
}