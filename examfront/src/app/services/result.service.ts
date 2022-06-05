import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private _http:HttpClient) { }

  public result(){
    return this._http.get(`${baseUrl}/result/`)
  }

  public addResult(result:any){
    return this._http.post(`${baseUrl}/result/`,result);
  }

  public getResultByUserAndQUiz(qid:any, uid:any){
    return this._http.get(`${baseUrl}/result/${qid}/${uid}`);
  }

  public getResultByQuiz(qid:any){
    return this._http.get(`${baseUrl}/result/${qid}`);
  }
}
