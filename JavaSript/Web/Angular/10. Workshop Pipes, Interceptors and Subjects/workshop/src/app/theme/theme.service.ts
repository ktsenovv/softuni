import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from '../types/theme';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private http: HttpClient) {}

  getTheme(id: string) {
    const { apiUrl } = environment;

    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }

  getThemes() {
    const { apiUrl } = environment;

    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  createTheme(themeName: string, postText: string) {
    return this.http.post<Theme>(`/api/themes`, { themeName, postText });
  }

  getPosts(limit?: number) {
    const { apiUrl } = environment;
    let url = `${apiUrl}/posts`;

    if (limit) {
      url += `?limit=${limit}`;
    }

    return this.http.get<Post[]>(url);
  }
}
