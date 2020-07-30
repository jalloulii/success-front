import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../../user/user.module';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private _baseLocalUrl = "http://localhost:5000";

  private _registerUser = this._baseLocalUrl + "/euser/register";
  private _loginUser = this._baseLocalUrl + "/euser/login";
  private _allUserUrl = this._baseLocalUrl + "/euser/all";
  private _deleteUser = this._baseLocalUrl + "/euser/delete";
  private _getOneUser = this._baseLocalUrl + "/euser/one";
  private _updateForm = this._baseLocalUrl + "/euser/update-form";
  constructor(private http: HttpClient) { }
  isLoggedUser() {
    let token = localStorage.getItem("token");
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);

      if (decodedToken.role == "user") {
        console.log(decodedToken.etat);
        return true;
      } else {
        return false;
      }
    } else { return false; }
  }
  isLoggedAdmin() {
    let token = localStorage.getItem("token");
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);

      if (decodedToken.role == "admin") {
        console.log(decodedToken.etat);
        return true;
      } else {
        return false;
      }
    } else { return false; }
  }
  isLoggedProf() {
    let token = localStorage.getItem("token");
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);

      if (decodedToken.role == "prof") {
        console.log(decodedToken.etat);
        return true;
      } else {
        return false;
      }
    } else { return false; }
  }
  isLoggedIn() {
    let token = localStorage.getItem("token");

    if (token) {
      console.log(token)
      return true;

    } else { return false; }
  }



  registerUser(user: User) {
    return this.http.post<any>(this._registerUser, user);
  }
  loginUser(user: User) {
    return this.http.post<any>(this._loginUser, user);
  }
  allUsers() {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));

    return this.http.get<any>(this._allUserUrl, { headers: headers_options });
  }
  deletUser(id) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.delete<any>(this._deleteUser + "/" + id, { headers: headers_options });
  }
  getOneUser(id) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.get<any>(this._getOneUser + "/" + id, { headers: headers_options });
  }
  updateForm(id, user) {
    let headers_options = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
    return this.http.patch<any>(this._updateForm + "/" + id, user, { headers: headers_options });
  }
}