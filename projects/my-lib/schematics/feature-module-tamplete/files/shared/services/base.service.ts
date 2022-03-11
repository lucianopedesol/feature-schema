import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, take } from 'rxjs/operators';

export class BaseService {
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };

  protected httpOptionsFile = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
    }),
    withCredentials: true
  };

  constructor(
    protected address: string,
    protected httpClient: HttpClient) {
  }

  protected listarAtivosBase<T>(): Observable<T[]> {
    return this.httpClient
      .get<T[]>(
        `${this.address}`,
        this.httpOptions
      )
      .pipe(
        debounceTime(700),
        take(1),
        distinctUntilChanged(),
        catchError(this.handleError)
      );
  }

  protected listarTodosBase<T>(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.address}/all`, this.httpOptions)
      .pipe(
        debounceTime(700),
        take(1),
        distinctUntilChanged(),
        catchError(this.handleError)
      );
  }

  protected customListarTodos<T>(endpoint: string): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.address}/${endpoint}`, this.httpOptions)
      .pipe(
        debounceTime(700),
        take(1),
        distinctUntilChanged(),
        catchError(this.handleError)
      );
  }

  protected listarTodosById<T>(endpoint: string): Observable<T[]> {
    return this.httpClient
      .get<T[]>(
        `${this.address}/${endpoint}`,
        this.httpOptions
      )
      .pipe(
        debounceTime(700),
        take(1),
        distinctUntilChanged(),
        catchError(this.handleError)
      );
  }

  protected deleteBase(id: string): Observable<any> {
    return this.httpClient.delete(
      `${this.address}/${id}`,
      this.httpOptions
    ).pipe(catchError(this.handleError));
  }

  protected customDelete(endpoint: string): Observable<any> {
    return this.httpClient.delete(
      `${this.address}/${endpoint}`,
      this.httpOptions
    ).pipe(catchError(this.handleError));
  }

  protected salvarBase<T>(data: T, additionalEndpoint?: string): Observable<T> {
    return this.httpClient
      .post<T>(
        `${this.address}/${additionalEndpoint ? additionalEndpoint : ''
        }`,
        data,
        this.httpOptions
      )
      .pipe(catchError(this.handleError), take(1));
  }

  protected atualizarBase<T>(id: string, data: T): Observable<T> {
    return this.httpClient
      .put<T>(
        `${this.address}/${id}`,
        data,
        this.httpOptions
      )
      .pipe(catchError(this.handleError), take(1));
  }

  protected obterBase<T>(id: string): Observable<T> {
    return this.httpClient
      .get<T>(`${this.address}/${id}`, this.httpOptions)
      .pipe(take(1), catchError(this.handleError));
  }

  protected customGet<T>(endpoint: string): Observable<T> {
    return this.httpClient
      .get<T>(`${this.address}/${endpoint}`, this.httpOptions)
      .pipe(take(1), catchError(this.handleError));
  }

  protected customGetPaged<T>(endpoint: string): Observable<T> {
    return this.httpClient
      .get<T>(`${this.address}/${endpoint}`, this.httpOptions)
      .pipe(take(1), catchError(this.handleError));
  }

  protected customPost<T>(endpoint: string): Observable<T> {
    return this.httpClient.post<T>(`${this.address}/${endpoint}`, null, this.httpOptions)
      .pipe(take(1), catchError(this.handleError));
  }

  protected customPut(endpoint: string): Observable<any> {
    return this.httpClient.put(`${this.address}/${endpoint}`, null, this.httpOptions)
      .pipe(catchError(this.handleError), take(1));
  }

  protected customAtualizarBase<T>(endpoint: string, id: string, data: T): Observable<T> {
    return this.httpClient
      .put<T>(
        `${this.address}/${endpoint}/${id}`,
        data,
        this.httpOptions
      )
      .pipe(catchError(this.handleError), take(1));
  }

  protected customSalvarBase<T>(endpoint: string, data: T): Observable<T> {
    return this.httpClient
      .post<T>(
        `${this.address}/${endpoint}`,
        data,
        this.httpOptions
      )
      .pipe(catchError(this.handleError), take(1));
  }

  protected download(endpoint: string): Observable<any> {
    return this.httpClient.get(
      `${this.address}/${endpoint}`,
      {
        responseType: 'blob',
        withCredentials: true
      },
    );
  }

  protected anexarArquivo<T>(endpoint: string, anexo: FormData): Observable<any> {
    return this.httpClient.post(
      `${this.address}/${endpoint}`, anexo, this.httpOptionsFile
    )
      .pipe(
        debounceTime(700),
        take(1),
        distinctUntilChanged(),
        catchError(this.handleError)
      );
  }

  protected handleError(err: any): Observable<never> {
    let errorMessage = 'Houve um problema de rede ou conexão com o banco de dados. Favor entrar em contato com a equipe de infraestrutura ou sistemas';
    if (err && err.error && err.error.message && err.error.message.length > 0)
      errorMessage = err.error.message;
    return throwError(errorMessage);
  }
 
}
