import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable()
export class ApiService {

    constructor(private http: Http) {

        this.http = http;

        // myHeaders.append('X-Auth-Token', 'nsHDt60P0X+kF4ZOZYJTXy8yBUrf8zr7aeeae5EJiyYaAQYFAZa5kEShvW9FUREFmFM=');
        // myHeaders.append('Content-type', 'application/json')

        // opt = new RequestOptions({
        // headers: headers
        // })   

    }

    public getObjects(): Promise<any> {
        //local
        //let headers = new Headers({ 'X-Auth-Token': 'go0Fr7VxFX8aq7ZuGjkkiLXcgS2VIFdHTsO71OtCkUlEg9PerYZ4GAJWb/rEwjnEBXU='  });
        // raypulse
        //let headers = new Headers({ 'X-Auth-Token': 'nsHDt60P0X+kF4ZOZYJTXy8yBUrf8zr7aeeae5EJiyYaAQYFAZa5kEShvW9FUREFmFM=' });
        //let options = new RequestOptions({ headers: headers });
       
        return this.http.get('http://127.0.0.1:8000/api/evenements')
            .toPromise()
            .then(response => response.json())
            .catch(error => console.log('Une erreur est survenue ' + error))


    }
    public getRechercheObjects(search): Promise<any> {

        return this.http.get('http://vps448699.ovh.net/app_dev.php/api/recherche?recherche=' + search)
            .toPromise()
            .then(response => response.json().articles)
            .catch(error => console.log('Une erreur est survenue ' + error))


    }

}