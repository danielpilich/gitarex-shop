import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Banner {
  image: string;
  description: string;
}

@Component({
  selector: 'app-promotional-banners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promotional-banners.component.html',
  styleUrls: ['./promotional-banners.component.css']
})
export class PromotionalBannersComponent implements AfterViewInit {
  banners: Banner[] = [
    { image: 'assets/banner1.webp', description: 'Promocja 1' },
    { image: 'assets/banner2.webp', description: 'Promocja 2' },
    { image: 'assets/banner3.webp', description: 'Promocja 3' },
  ];

  displayedBanners: Banner[] = [];
  currentBanner = 1;
  isTransitioning = false;

  constructor() {
    this.displayedBanners = [
      this.banners[this.banners.length - 1],
      ...this.banners,
      this.banners[0],
      this.banners[1]  // Add the second banner for the transition effect
    ];
  }

  ngAfterViewInit() {
    this.updateBannerPosition();
  }

  prevBanner() {
    if (this.isTransitioning) return;

    this.currentBanner--;
    this.updateBannerPosition();

    if (this.currentBanner === 0) {
      this.isTransitioning = true;
      setTimeout(() => {
        this.currentBanner = this.banners.length;
        this.resetBannerPosition();
      }, 500); // Match the CSS transition duration
    }
  }

  nextBanner() {
    if (this.isTransitioning) return;

    this.currentBanner++;
    this.updateBannerPosition();

    if (this.currentBanner === this.displayedBanners.length - 2) {
      this.isTransitioning = true;
      setTimeout(() => {
        this.currentBanner = 1;  // Quickly switch to the first banner
        this.resetBannerPosition();
        setTimeout(() => {
          this.currentBanner = 1;  // Go to the first banner
          this.updateBannerPosition();
          this.isTransitioning = false;
        }, 50); // Short delay to re-enable the transition
      }, 500); // Match the CSS transition duration
    }
  }

  updateBannerPosition() {
    const bannerContainerElement = document.querySelector('.banner-container') as HTMLElement;

    if (bannerContainerElement) {
      const bannerWidth = bannerContainerElement.querySelector('.banner')?.clientWidth || 0;
      const containerWidth = bannerContainerElement.clientWidth;
      const offset = -this.currentBanner * (bannerWidth + 20) + (containerWidth - bannerWidth) / 2;
      bannerContainerElement.style.transition = 'transform 0.5s ease';
      bannerContainerElement.style.transform = `translateX(${offset}px)`;
    }
  }

  resetBannerPosition() {
    const bannerContainerElement = document.querySelector('.banner-container') as HTMLElement;
    if (bannerContainerElement) {
      const bannerWidth = bannerContainerElement.querySelector('.banner')?.clientWidth || 0;
      const containerWidth = bannerContainerElement.clientWidth;
      const offset = -this.currentBanner * (bannerWidth + 20) + (containerWidth - bannerWidth) / 2;
      bannerContainerElement.style.transition = 'none';
      bannerContainerElement.style.transform = `translateX(${offset}px)`;
      setTimeout(() => {
        bannerContainerElement.style.transition = 'transform 0.5s ease';
      }, 50); // Delay to re-enable the transition
    }
  }
}
