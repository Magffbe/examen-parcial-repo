import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/IPost';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-firestore',
  templateUrl: './post-firestore.page.html',
  styleUrls: ['./post-firestore.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PostFirestorePage implements OnInit {
  post: Observable<IPost[]> | undefined;

  constructor(@Inject(PostService) private postService: PostService) { }

  ngOnInit() {
    this.post= this.postService.getPosts();
  }
}