import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

    // Em caso de querer fechar o dropdown com um click em qualquer parte do documento
    // Substituir o código atual pelo código abaixo

    // @HostBinding('class.open') isOpen = false;
    // @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    //   this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    // }
    // constructor(private elRef: ElementRef) {}
}