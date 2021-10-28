function sumOfArray(arr1, arr2){
               let result =  0;
               for(let i=0;i<arr1.length;i++)
                 {                  
                   if(isNaN(arr1[i])){
                   continue;
                    }
                     result += Number(arr1[i]);
                  }

                for(let j=0;j<arr2.length;j++)
                 {                  
                   if(isNaN(arr2[j])){
                   continue;
                    }
                     result += Number(arr2[j]);
                  }
                return result;
               }
   console.log(sumOfArray([1,2,3,5], [1,2,3,]));
   console.log(sumOfArray([1,2,3], [1,2,3,2]));
 