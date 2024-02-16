import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";


@Injectable({ providedIn: 'root' })
export class Authuard implements CanActivate {
    constructor(private auth: AuthService) { }
    canActivate() {
        console.log('auth guard');
        
        if (this.auth.isLoggedIn) {
            console.log('auth guard');
            return true
        }
        console.log('auth guard');
        return false
    }
}