import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Songs } from './songs';

describe('Songs', () => {
  let component: Songs;
  let fixture: ComponentFixture<Songs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Songs],
    }).compileComponents();

    fixture = TestBed.createComponent(Songs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render release details and Spotify links', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('.release-card')).toHaveLength(3);
    expect(compiled.querySelectorAll('.release-card img')).toHaveLength(3);
    expect(compiled.textContent).toContain('NO FILTER');
    expect(compiled.textContent).toContain('Unser Debütalbum');
    expect(compiled.querySelectorAll('a[href*="open.spotify.com"]')).toHaveLength(3);
  });
});
