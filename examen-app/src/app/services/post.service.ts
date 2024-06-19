import { Injectable, inject } from '@angular/core';
import { Firestore, DocumentSnapshot} from '@angular/fire/firestore'; // Import AngularFirestore instead of Firestore
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { IPost } from '../interfaces/IPost';
import { Action} from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: IPost[] = [];


  constructor(private firestore: Firestore) { } // Use AngularFirestore instead of Firestore

  getPosts(): Observable<IPost[]> {
    return this.firestore.collection<IPost>('Posts', (ref: { orderBy: (arg0: string, arg1: string) => any; }) => ref.orderBy('id', 'desc')).snapshotChanges().pipe(
      map((actions: Action<DocumentSnapshot<IPost>>[]) => actions.map(a => {
        const data = a.doc.data() as IPost;
        const id = a.doc.id;
        return { data };
      }))
    );
  }
}