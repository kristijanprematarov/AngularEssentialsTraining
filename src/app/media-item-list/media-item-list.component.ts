import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MediaItemService } from '../services/media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  mediaItems;

  constructor(private mediaItemService: MediaItemService) {

  }

  ngOnInit() {
    this.mediaItems = this.mediaItemService.get();
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  }
}
