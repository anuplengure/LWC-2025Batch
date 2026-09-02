import { LightningElement } from 'lwc';

export default class Rendering1 extends LightningElement {

    isAdmin = false;

    makeAdmin(){
        this.isAdmin = true;
    }

    makeUser(){
        this.isAdmin = false;
    }
}