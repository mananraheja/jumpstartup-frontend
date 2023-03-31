import { ComponentFixture, fakeAsync, TestBed, waitForAsync} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router,ActivatedRoute } from '@angular/router';
import { RESTAPIService } from '.././../restapiservice.service';
import { CompanyComponent } from './company.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('CompanyComponent', () => {
  let component: CompanyComponent;
  let fixture: ComponentFixture<CompanyComponent>;
  let routerMock: any;
  let activatedRouteMock: any;
  let serviceMock: jasmine.SpyObj<RESTAPIService>;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    activatedRouteMock = {
      queryParams: {
        subscribe: jasmine.createSpy('subscribe')
      }
    }


    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientModule],
      declarations: [ CompanyComponent ],
      providers:[CompanyComponent,Router,RESTAPIService,{
        provide: ActivatedRoute,
        useValue: {
          queryParams: of({ id: '123' })
        }
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to query params and set userId', () => {
    const params = { id: '123' };
    activatedRouteMock.queryParams.subscribe.and.callFake((callback: any) => {
      callback(params);
    });
    expect(component.userId).toEqual('123');
  });

  describe('company_profile', () => {
    it('should call service method and set component properties', fakeAsync(() => {
      const responseBody = {
        firstName: 'John',
        lastName: 'Doe',
        phone_number: '1234567890',
        domain: 'IT',
        institution: 'ABC',
        degree: 'B.Tech',
        major: 'Computer Science',
        year_of_completion: 2010,
        work_experience: '10 years',
        company_name: 'XYZ',
        is_registered: true,
        stakeholder: 'John',
        company_size: 'Large',
        funding_status: 'Funded',
        equity_offered: '10%',
        assets: '100,000',
        open_to_negotiations: true,
        profits_in_last_fy: '10,000',
        pitch: 'My pitch'
      };
      const restapiService = TestBed.inject(RESTAPIService);
      const getEntrepreneurUuidSpy = spyOn(restapiService, 'getEntrepreneurUuid');
      
      getEntrepreneurUuidSpy.and.returnValue(of(responseBody));

      component.company_profile();


      expect(restapiService.getEntrepreneurUuid).toHaveBeenCalledWith(component.userId);
      fixture.whenStable().then(() => {
        expect(component.fullName).toEqual('John Doe');
        expect(component.phone_number).toEqual('1234567890');
        expect(component.domain).toEqual('IT');
        expect(component.institution).toEqual('ABC');
        expect(component.degree).toEqual('B.Tech');
        expect(component.major).toEqual('Computer Science');
        expect(component.year_of_completion).toEqual('2010');
        expect(component.work_experience).toEqual('10 years');
        expect(component.company_name).toEqual('XYZ');
        expect(component.is_registered).toEqual('true');
        expect(component.stakeholder).toEqual('John');
        expect(component.company_size).toEqual('Large');
        expect(component.funding_status).toEqual('Funded');
        expect(component.equity_offered).toEqual('10%');
        expect(component.assets).toEqual('100,000');
        expect(component.open_to_negotiations).toEqual('true');
        expect(component.profits_in_last_fy).toEqual('10,000');
        expect(component.pitch).toEqual('My pitch');
      });
    }))
});

});