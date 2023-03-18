export class Meal {
    id: number;
    title: string;
    description: string;
    createdDate: Date;
    vouch: number;
    imageUrl: string;
    
    constructor(id: number, title: string, description: string, imageUrl: string, createdDate: Date, vouch: number) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.imageUrl = imageUrl;
      this.createdDate = createdDate;
      this.vouch = vouch;
    }
}