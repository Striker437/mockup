export class Product{
    id: number;
    name: string;
    price:number;
    description: string;
    quantity: string;
    imageURL: string;
    category: Category;

}
export class Category{
    id: number;
    type: string;
}