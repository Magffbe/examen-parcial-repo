import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonCardHeader, IonList, IonButton,IonItem, IonCard,IonCardTitle } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/IPost';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-firestore',
  templateUrl: './post-firestore.page.html',
  styleUrls: ['./post-firestore.page.scss'],
  standalone: true,
  imports: [IonCardHeader, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule ,IonCard, IonCardTitle, IonList, IonItem, IonButton]
})
export class PostFirestorePage implements OnInit {
  private post$: Observable<IPost[]> | undefined;

createPost() {
throw new Error('Method not implemented.');
}
  post: Observable<IPost[]> | undefined;

  constructor(@Inject(PostService) private postService: PostService) { }

  ngOnInit() {
    this.post$= this.postService.getPosts();
  }
}