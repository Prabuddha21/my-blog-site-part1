import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @Input() blog;

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {}

  getRate(rate, id) {
    this.selectedValue = rate;

    this.blogService.blogs.forEach(element => {
      if(element.id == id){
        if(element.rate == rate){
          element.rate = 0;
          this.selectedValue = 0;
        } else {
          element.rate = rate;
        }
      }
    });

    console.log('rate', rate, this.blogService.blogs);
  }

  deletePost(id){
    this.blogService.blogs.forEach(element => {
      if(element.id == id){
        const index = this.blogService.blogs.indexOf(element);
        if(index !== -1){
          this.blogService.blogs.splice(index, 1);
        }
      }
    });
    console.log('check delete', this.blogService.blogs);
  }
}
