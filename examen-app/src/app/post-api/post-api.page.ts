import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../services/post.service';
import { IPost } from '../interfaces/IPost';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { IonHeader, IonCard, IonCardContent,IonButton, IonToolbar, IonList, IonItem, IonCardHeader, IonTitle, IonContent, IonCardTitle} from "@ionic/angular/standalone";

@Component({
  selector: 'app-post-api',
  templateUrl: '../post-api/post-api.page.html',
  standalone: true,
  styleUrls: ['./post-api.page.scss'],
  imports: [IonItem, IonToolbar, IonHeader, IonButton, IonCard, IonCardContent, IonList, IonCardHeader, IonTitle, IonContent, IonCardTitle
  ]
})
export class PostApiPage implements OnInit {
createPost() {
throw new Error('Method not implemented.');
}
  posts: Observable<IPost[]> | undefined;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts= this.postService.getPosts();
  }
}

