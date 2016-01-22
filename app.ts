import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";
import { Inject } from "angular2/core";
import { HTTP_PROVIDERS, Http, Response } from "angular2/http";

@Component({
    selector: 'hello-world',
    template: `
        <h2>Basic Request</h2>
        <button type="button" (click)="makeRequest()">Make request</button>
        <div *ngIf="loading">loading....</div>
        <pre>{{data | json}}</pre>
    `
})
class HelloWorld {
    data: Object;
    loading: boolean;
    
    constructor(@Inject(Http) public http: Http) {
    }
    
    makeRequest(): void {
        this.loading = true;
        
        this.http.request('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
            });
    }
}

/*
@Component({
    selector: 'simple-http',
    template: `
        <h2>Basic Request</h2>
        <button type="button" (click)="makeRequest()">Make request</button>
        <div *ngIf="loading">loading....</div>
        <pre>{{data | json}}</pre>
    `
})
class HTTPComponent {
    data: Object;
    loading: boolean;
    
    constructor(public http: Http) {
    }
    
    makeRequest(): void {
        this.loading = true;
        this.http.request('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe((res: Response) => {
                this.data = res.json();
                this.loading = false;
            });
    }
}
*/

bootstrap(HelloWorld, [ HTTP_PROVIDERS ]);