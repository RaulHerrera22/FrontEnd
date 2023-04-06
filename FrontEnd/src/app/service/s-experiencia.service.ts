import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../model/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  expURL = 'http://localhost:8080/expLab/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]> {
<<<<<<< HEAD
<<<<<<< HEAD
    return this.httpClient.get<Experiencia[]>(this.expURL + `lista`);
  }
=======
      return this.httpClient.get<Experiencia[]>(this.expURL + `lista`);
}
>>>>>>> parent of 4c549b5 (avance 04-04)


  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  }

  public save (experiencia : Experiencia) : Observable<any>{
    return this.httpClient.post<any>(this.expURL + `create`, experiencia);
  }

  public update (id : number, experiencia : Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
=======
      return this.httpClient.get<Experiencia[]>(this.expURL + 'lista');
}


  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + 'detail/${id}');
  }

  public save (experiencia : Experiencia) : Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }

  public update (id : number, experiencia : Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + 'update/${id}', experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + 'delete/${id}');
>>>>>>> parent of e4b6156 (componente educacion y exp laboral funcionando correctamente)
  }
}
