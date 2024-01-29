import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlickCarouselModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

 images : any[] = [
    {
      url:"../../../assets/1687248664396.jpg"
    },
    {
      url:"../../../assets/download.jpg"
    },
    {
      url:"../../../assets/ecommerce-website-development-services-500x500.jpg"
    },
    {
      url:"../../../assets/essential-elements-building-ecommerce-website.jpg"
    }
  ]

  slideConfig = {
    slideToShow: 1,
    slideToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000
  }

  // slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};


  // current = 0;
  // index = 0;

  // onNext(){
  //   if(this.current < this.images.length - 1) {
  //     this.current++;
  //     console.log("current in onNext if : " + this.current)
  //   }
  //   else {
  //     this.current = 0;
  //     console.log("current in onNext else : " + this.current)
  //   }
  //   console.log("index : " + this.index)
  //   this.index++;
  //   // setTimeout(() => {
  //   //   this.onNext();
  //   // }, 1000);
  // }

  // onPrev(){
  //   if(this.current >= 0 && !(this.current < this.images.length - 1)) {
  //     console.log("current in onPrev if : " + this.current)
  //     this.current--;
  //   }
  //   else {
  //     this.current++;
  //     console.log("current in onPrev else : " + this.current)
  //   }
  // }
  

  constructor(private router: Router){

  }
  ngOnInit(): void {
    // this.GetSpecialPost();
    // this.onNext();
  }

  GetImage() {

  }

  routeToRegisterPage(){
    this.router.navigateByUrl('/ecom-poc/register');
  }

  routeToLoginPage(){
    this.router.navigateByUrl('/ecom-poc/login');
  }

  routeToSearchResults(){
    this.router.navigateByUrl('/ecom-poc/search/results');
  }

}