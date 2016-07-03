export function debounce(dueTime: number) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target, propertyKey, descriptor);
    };
}