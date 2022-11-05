/// <reference types="@types/google.maps" />
import {Company} from './Company';
import {CustomMap} from './CustomMap';
import {User} from './User';

const myCompany = new Company();
const myMap = new CustomMap('map');
const myUser = new User();

myMap.addMarker(myCompany);
myMap.addMarker(myUser);

