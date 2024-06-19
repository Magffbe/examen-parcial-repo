import { Injectable, Inject } from '@angular/core';
import { Firestore, DocumentSnapshot} from '@angular/fire/firestore'; // Import AngularFirestore instead of Firestore
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPost } from '../interfaces/IPost';
import { Action } from 'rxjs/internal/scheduler/Action';
import { DocumentData } from '@angular/fire/firestore'; // Import DocumentData

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: IPost[] = [];
  AngularFirestore: any;
  data:any;
  id:any;
  

  constructor(@Inject(Firestore) private firestore: any) { } // Use 'any' type for the 'firestore' property

  getPosts(): Observable<IPost[]> {
    return this.firestore.collection('Posts').snapshotChanges().pipe(
      map((actions: Action<DocumentSnapshot<IPost, DocumentData>>[]) => actions.map((a: Action<DocumentSnapshot<IPost, DocumentData>>) => {
        const data = (a as any).payload.doc.data() as IPost;
        const id = (a as any).payload.doc.id;
        return { data };
      }))
    );
  }
}