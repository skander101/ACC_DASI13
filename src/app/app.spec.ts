import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { Conference } from './core/models/conference';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the layout components', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('app-navbar')).toBeTruthy();
    expect(compiled.querySelector('app-home')).toBeTruthy();
    expect(compiled.querySelector('app-conferencelist')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });

  it('feeds favorites once and warns on duplicates', () => {
    const app = TestBed.createComponent(App).componentInstance;
    const conf = { id: 99, titre: 'Test', category: 'Test' } as Conference;

    app.addToFavorites(conf);
    app.addToFavorites(conf);

    expect(app.favorites().filter(item => item.id === conf.id).length).toBe(1);
    expect(app.alertMessage()).toContain('déjà');
  });
});
