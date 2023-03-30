import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`

  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient
  ) {}

  getAll(): Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(this.heroesUrl).pipe(
      tap((heroes) => this.log(`fetched ${heroes.length} heroes`))
    )
  }

  getOne(id: number): Observable<Hero>{
    return this.httpClient.get<Hero>(this.getUrl(id)).pipe(
      tap((hero) => this.log(`fetched ${this.descAttributes(hero)}`))
    )
  }

  create(hero: Hero): Observable<Hero>{
    return this.httpClient.post<Hero>(this.heroesUrl, hero).pipe(
      tap((hero) => this.log(`created ${this.descAttributes(hero)}`))
    )
  }

  update(hero: Hero): Observable<Hero>{
    return this.httpClient.put<Hero>(this.getUrl(hero.id), hero).pipe(
      tap((hero) => this.log(`updated ${this.descAttributes(hero)}`))
    )
  }

  delete(hero: Hero): Observable<any> {
    return this.httpClient.delete<any>(this.getUrl(hero.id)).pipe(
      tap(() => this.log(`deleted ${this.descAttributes(hero)}`))
    )
  }

  private descAttributes(hero: Hero): string {
    return `hero id: ${hero.id} - name: ${hero.name}`
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`)
  }

  private getUrl(id: number): string {
    return `${this.heroesUrl}/${id}`
  }
}
