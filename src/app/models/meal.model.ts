export class Meal {
    title: string;
    description: string;
    createdDate: Date;
    vouch: number;
    imageUrl: string;
    
    constructor(title: string, description: string, imageUrl: string, createdDate: Date, vouch: number) {
      this.title = title;
      this.description = description;
      this.imageUrl = imageUrl;
      this.createdDate = createdDate;
      this.vouch = vouch;
    }
}