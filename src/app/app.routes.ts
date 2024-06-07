import { Routes } from '@angular/router';
import { BodyComponent } from './ini/body/body.component';
import { MenuComponent } from './ini/menu/menu.component';
import { SliderComponent } from './ini/slider/slider.component';
import { FooterComponent } from './ini/footer/footer.component';

export const routes: Routes = [
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'slider',
        component: SliderComponent
    },
    {
        path: 'body',
        component: BodyComponent
    },
    {
        path: 'footer',
        component: FooterComponent
    }
];
