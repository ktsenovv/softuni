import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  isLoading: boolean = true;

  constructor(private api: ThemeService) {}

  ngOnInit(): void {
    this.api.getPosts(5).subscribe((posts) => {
      this.posts = posts;

      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    });
  }
}
