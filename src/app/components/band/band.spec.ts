import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Band } from './band';

describe('Band', () => {
  let component: Band;
  let fixture: ComponentFixture<Band>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Band],
    }).compileComponents();

    fixture = TestBed.createComponent(Band);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render each member with an image, instrument and bio', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('.member-card')).toHaveLength(5);
    expect(compiled.querySelectorAll('.member-card img')).toHaveLength(5);
    expect(compiled.textContent).toContain('Vocals');
    expect(compiled.textContent).toContain('Schlagzeug');
    expect(compiled.textContent).toContain('MARA KELLER');
    expect(compiled.textContent).toContain('Lead-Gitarre');
    expect(compiled.textContent).toContain('Bass');
    expect(compiled.textContent).toContain('Anisia Mone');
    expect(compiled.textContent).toContain('Manuel Hildbrand');
    expect(compiled.textContent).toContain('Elea Blunschi');
    expect(compiled.textContent).toContain('Lian Blunschi');
  });
});
