import { ImportantDirective } from './important.directive';

xdescribe('ImportantDirective', () => {
  it('should create an instance', () => {
    const directive = new ImportantDirective(null);
    expect(directive).toBeTruthy();
  });
});
