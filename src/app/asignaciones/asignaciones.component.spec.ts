import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignacionesComponent } from './asignaciones.component';
import { AsignacionesService } from './asignaciones.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Asignacion } from './asignaciones.interface';
import { Coductor } from './conductores.interface';
import { Vehiculo } from './vehiculos.interface';
import { Respuesta } from './respuesta.interface';

describe('AsignacionesComponent', () => {
  let component: AsignacionesComponent;
  let fixture: ComponentFixture<AsignacionesComponent>;
  let service: AsignacionesService;
  let modalService: NgbModal;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AsignacionesComponent, // Import the standalone component
        HttpClientTestingModule,
        NgbModalModule,
        FormsModule,
      ],
      providers: [AsignacionesService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionesComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AsignacionesService);
    modalService = TestBed.inject(NgbModal);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ObtenerAsignaciones on ngOnInit', () => {
    spyOn(component, 'ObtenerAsignaciones').and.callThrough();
    component.ngOnInit();
    expect(component.ObtenerAsignaciones).toHaveBeenCalled();
  });

  it('should call RecuperarAsignaciones from AsignacionesService on ObtenerAsignaciones', () => {
    const dummyResponse: Respuesta<Asignacion[]> = {
      data: [],
      message: '',
      code: 200,
    };
    spyOn(service, 'RecuperarAsignaciones').and.returnValue(of(dummyResponse));
    component.ObtenerAsignaciones();
    expect(service.RecuperarAsignaciones).toHaveBeenCalled();
  });

  it('should call ObtenerConductores and ObtenerVehiculos from AsignacionesService on ngOnInit', () => {
    const dummyResponseConductores: Respuesta<Coductor[]> = {
      data: [],
      message: '',
      code: 200,
    };
    const dummyResponseVehiculos: Respuesta<Vehiculo[]> = {
      data: [],
      message: '',
      code: 200,
    };
    spyOn(service, 'ObtenerConductores').and.returnValue(
      of(dummyResponseConductores)
    );
    spyOn(service, 'ObtenerVehiculos').and.returnValue(
      of(dummyResponseVehiculos)
    );
    component.ngOnInit();
    expect(service.ObtenerConductores).toHaveBeenCalled();
    expect(service.ObtenerVehiculos).toHaveBeenCalled();
  });

  it('should call BorrarAsignacion from AsignacionesService on EliminarAsignacion', () => {
    const dummyResponse: Respuesta<string> = {
      data: 'Deleted',
      message: '',
      code: 200,
    };
    spyOn(service, 'BorrarAsignacion').and.returnValue(of(dummyResponse));
    component.EliminarAsignacion(1);
    expect(service.BorrarAsignacion).toHaveBeenCalledWith(1);
  });

  it('should call EditarAsignacion from AsignacionesService on ActualizarAsignacion', () => {
    const dummyResponse: Respuesta<Asignacion> = {
      data: {
        id: 1,
        vehiculo: { id: 1, placa: 'Vehiculo 1' },
        conductor: { id: 1, nombre: 'Conductor 1' },
        ruta: { id: 1, nombre_ruta: 'Ruta 1' },
      },
      message: '',
      code: 200,
    };
    spyOn(service, 'EditarAsignacion').and.returnValue(of(dummyResponse));
    component.ActualizarAsignacion();
    expect(service.EditarAsignacion).toHaveBeenCalled();
  });

  it('should call CrearAsignacion from AsignacionesService on AbrirNuevaAsignacionModal', async () => {
    const dummyResponse: Respuesta<Asignacion> = {
      data: {
        id: 1,
        vehiculo: { id: 1, placa: 'Vehiculo 1' },
        conductor: { id: 1, nombre: 'Conductor 1' },
        ruta: { id: 1, nombre_ruta: 'Ruta 1' },
      },
      message: '',
      code: 200,
    };
    spyOn(service, 'CrearAsignacion').and.returnValue(of(dummyResponse));
    spyOn(modalService, 'open').and.returnValue({
      result: Promise.resolve('resolved'),
    } as any);
    component.AbrirNuevaAsignacionModal({} as any);
    await fixture.whenStable(); // Espera a que las promesas se resuelvan
    expect(service.CrearAsignacion).toHaveBeenCalled();
  });
});
