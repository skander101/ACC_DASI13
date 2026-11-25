import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conferencelist } from './conferencelist';

describe('Conferencelist', () => {
  let component: Conferencelist;
  let fixture: ComponentFixture<Conferencelist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conferencelist],
    }).compileComponents();

    fixture = TestBed.createComponent(Conferencelist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits a conference when add to favs is clicked', () => {
    const conf = component.confList[0];
    let emittedId = 0;

    component.favoriteAdded.subscribe(item => (emittedId = item.id));
    component.addToFavorites(conf);

    expect(emittedId).toBe(conf.id);
  });

  it('filters conferences with the ngModel search term', () => {
    component.searchTerm = 'tunis';

    expect(component.filteredConferences.length).toBe(2);
  });
});
