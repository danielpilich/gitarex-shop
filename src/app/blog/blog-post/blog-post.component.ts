import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  greyGuitar = {
    name: 'Grey Guitar',
    path: 'assets/blog-post/guitar1.jpg'
  };
  woodenGuitar = {
    name: 'Wooden Guitar',
    path: 'assets/blog-post/guitar2.jpg'
  };
  ukulele = {
    name: 'Ukulele',
    path: 'assets/blog-post/ukulele.jpg'
  };
}
