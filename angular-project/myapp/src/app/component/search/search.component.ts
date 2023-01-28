import { Component } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';
  constructor(private r: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.r.params.subscribe((params) => {
      if (params['search']) {
        this.searchText = params['search'];
      }
    });
    
  }
  submit(){
    this.router.navigate(["search",this.searchText])
    this.searchText = '';
  }
}
