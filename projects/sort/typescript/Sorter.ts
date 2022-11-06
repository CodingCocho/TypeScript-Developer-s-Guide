export abstract class Sorter
{
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  
  // Bubble Sort 
  // Space Complexity O(1)
  // Time Complexity O(n^2)
  sort = (): void=>
  {
    let swapped: boolean = false;
    do
    {
      swapped = false;
      for(let counter: number = 0; counter < this.length - 1; counter++)
      {
        if(this.compare(counter, counter+1))
        {
          this.swap(counter, counter+1)
          swapped = true;
        }
      }
    } while(swapped)
  }
}

