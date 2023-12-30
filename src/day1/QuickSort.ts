function qs(arr:number[], lo:number, hi:number) :void {
    //base cases
    if(lo >= hi) {
        return;
    }
    const pividx = partition(arr, lo, hi);
    qs(arr, lo, pividx-1);
    qs(arr, pividx+1, hi)
}

function partition(arr:number[], lo: number, hi: number):number {
    const pivot= arr[hi];
    let idx = lo-1;
    for(let i = lo ; i<hi ; i++) {
        if (arr[i]<=pivot) {
            idx ++;
            const temp = arr[i];
            arr[i]= arr[idx];
            arr[idx] = temp;
        }
    }
    idx++
    arr[hi]= arr[idx];
    arr[idx]=pivot;
    return idx;

}


export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length-1);

}