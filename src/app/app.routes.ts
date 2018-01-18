import { Routes, Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { TinkeringComponent } from "./tinkering/tinkering.component";

export const ROUTES: Routes = [
	<Route>{ path: "", component: HomeComponent },
	<Route>{ path: "contact", component: ContactComponent },
	<Route>{ path: "tinkering", component: TinkeringComponent }
];
